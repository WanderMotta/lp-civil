# Etapa 1: build da aplicação com Bun
FROM oven/bun:1 AS builder

# Diretório de trabalho dentro do container
WORKDIR /app

# 1) Copiar o .zip para dentro da imagem
COPY app.zip .

# 2) Descompactar o .zip e remover o arquivo
#    (garante que o código vá para /app com package.json, bun.lockb, etc.)
RUN apt-get update && apt-get install -y unzip \
    && unzip app.zip \
    && rm app.zip \
    && rm -rf /var/lib/apt/lists/*

# 3) Instalar dependências com Bun (comando separado)
RUN bun install

# 4) Build da aplicação (Vite) com Bun (comando separado)
#    Usa o script "build": "vite build" já existente no package.json
RUN bun run build

# Etapa 2: imagem final, apenas arquivos estáticos servidos pelo Nginx
FROM nginx:alpine AS runner

# Limpa qualquer HTML padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia o build gerado (pasta dist) para o diretório servido pelo Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expor porta padrão do Nginx
EXPOSE 80

# Comando padrão do Nginx
CMD ["nginx", "-g", "daemon off;"]
