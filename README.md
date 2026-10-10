# BR Net - Website do Provedor de Internet

Site completo e responsivo para o provedor de internet BR Net, incluindo página inicial, seção de planos e checkout integrado com Stripe.

## 📋 Características

- ✅ Design moderno e responsivo
- ✅ Página inicial com hero section
- ✅ Seção de planos com 3 opções
- ✅ Sobre a empresa
- ✅ Página de contato
- ✅ Formulário de checkout com Stripe
- ✅ Botão flutuante do WhatsApp
- ✅ Footer com redes sociais
- ✅ Animações e transições suaves

## 🚀 Como Usar

### Instalação Local

1. Clone este repositório:
```bash
git clone https://github.com/fredrezende61/br-net-website.git
```

2. Entre na pasta do projeto:
```bash
cd br-net-website
```

3. Abra o arquivo `index.html` no seu navegador:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

Ou use um servidor local:
```bash
# Python 3
python -m http.server 8000

# Node.js (com http-server instalado)
http-server
```

Depois acesse: `http://localhost:8000`

## 📁 Estrutura de Arquivos

```
br-net-website/
├── index.html          # Página principal
├── checkout.html       # Página de checkout
├── style.css           # Estilos globais
├── script.js           # Scripts JavaScript
└── README.md           # Este arquivo
```

## 🔧 Configuração do Stripe

1. Crie uma conta em [Stripe](https://stripe.com)
2. Copie sua **Publishable Key**
3. Abra o arquivo `checkout.html`
4. Procure pela linha:
```javascript
const stripe = Stripe('pk_test_51234567890abcdefghijklmnopqrstuvwxyz');
```
5. Substitua a chave de teste pela sua chave real

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)

## 🎨 Cores Principais

- Primário: `#0066ff` (Azul)
- Secundário: `#ff6b35` (Laranja)
- Sucesso: `#10b981` (Verde)
- Perigo: `#ef4444` (Vermelho)
- Background: `#f8fafc` (Cinza claro)

## 📝 Conteúdo Personalizável

- **Logo**: Altere em `index.html` e `checkout.html`
- **Planos**: Modifique preços e velocidades em `index.html`
- **Contato**: Atualize telefone, email e WhatsApp
- **Cores**: Edite as variáveis CSS em `style.css`

## 🌐 Hospedagem

Pode ser hospedado em:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Heroku
- Qualquer servidor web

## 📞 Contato e Suporte

- Telefone: (11) 91234-5678
- Email: contato@brnet.com.br
- WhatsApp: Clique no botão flutuante

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para fazer um fork e enviar pull requests.

---

**Desenvolvido com ❤️ para BR Net**