const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/10">
                <span className="text-xl font-bold">⚖️</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Direito Civil</h3>
                <p className="text-sm opacity-80">Advocacia Especializada</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Soluções jurídicas com excelência e humanização para você e sua família.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Divórcio e Separação</li>
              <li>Guarda de Filhos</li>
              <li>Pensão Alimentícia</li>
              <li>Inventário</li>
              <li>União Estável</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>WhatsApp: (11) 99999-9999</li>
              <li>Email: contato@direitocivil.com.br</li>
              <li>Atendimento 100% Online</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-sm text-center opacity-80">
            © {new Date().getFullYear()} Direito Civil - Advocacia Especializada. Todos os direitos reservados.
          </p>
          <p className="text-xs text-center opacity-60 mt-2">
            Este site tem caráter meramente informativo, conforme o Código de Ética da OAB.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
