# Banco API Test

Projeto de automação de testes para a [Banco API](https://github.com/juliodelimas/banco-api), desenvolvido em **JavaScript** com foco em validar endpoints de uma API Rest.  
O objetivo é fornecer uma suíte de testes automatizados que facilite a validação, garanta a qualidade e gere relatórios detalhados de execução.

---

## 🚀 Stack Utilizada

- [Node.js](https://nodejs.org/)  
- [Mocha](https://mochajs.org/) – Estrutura de testes  
- [Chai](https://www.chaijs.com/) – Asserções  
- [Supertest](https://github.com/ladjs/supertest) – Requisições HTTP para testes  
- [Mochawesome](https://www.npmjs.com/package/mochawesome) – Geração de relatórios em HTML  

---

## 📂 Estrutura de Diretórios

```bash
banco-api-test/
├── test/                 # Casos de teste
│   └── ...               # Arquivos de testes por funcionalidade
├── mochawesome-report/   # Diretório gerado automaticamente com relatórios em HTML
├── .env                  # Arquivo de configuração (não versionado)
├── package.json
└── README.md
```

---

## ⚙️ Arquivo `.env`

O arquivo `.env` deve ser criado na raiz do projeto e conter a seguinte variável:

```env
BASE_URL=http://localhost:3000
```

- `BASE_URL`: URL base da API que será testada (padrão: `http://localhost:3000`).

---

## ▶️ Execução dos Testes

### Instalar dependências
```bash
npm install
```

### Rodar os testes
```bash
npm test
```

### Rodar os testes e gerar relatório com Mochawesome
```bash
npm run test:report
```

Após a execução, o relatório em HTML estará disponível no diretório **`mochawesome-report/`**.

---

## 📑 Documentação das Dependências

- [Mocha](https://mochajs.org/)  
- [Chai](https://www.chaijs.com/)  
- [Supertest](https://github.com/ladjs/supertest)  
- [Mochawesome](https://www.npmjs.com/package/mochawesome)  

---

## 📌 Observações

- Certifique-se de que a [Banco API](https://github.com/juliodelimas/banco-api) esteja em execução antes de rodar os testes.  
- A URL configurada no `.env` deve apontar para a instância da API que será testada.  
