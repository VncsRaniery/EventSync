<h1 align="start">
  EventSync - Sistema de Reserva de Eventos
</h1>

<img width="1280" alt="EventSync Thumbnail" src="/public/assets/Banner.png">

## Introdução

**EventSync** é uma plataforma moderna e responsiva para a reserva e gerenciamento de eventos. Este projeto utiliza algumas stacks de tecnologias que garantem desempenho, segurança e uma experiência de usuário intuitiva.

Destaques do projeto: 
- **Estilo elegante e responsivo** com TailwindCSS e UI Shadcn.  
- **Autenticação segura** e fácil de integrar com Clerk.  
- **Checkout de tickets** com integração à API Stripe.  

## Tecnologias utilizadas

- **[Next.js](https://nextjs.org/):** Framework React para SSR, rotas dinâmicas e otimização de desempenho.
- **[TailwindCSS](https://tailwindcss.com/):** CSS utilitário para estilização rápida e responsiva.
- **[Shadcn UI](https://ui.shadcn.dev/):** Conjunto de componentes acessíveis e personalizáveis.
- **[Clerk](https://clerk.dev/):** Gerenciamento de autenticação e usuários de forma simples e segura.
- **[Stripe API](https://stripe.com/docs):** Processamento de pagamentos e gerenciamento de tickets.
- **[Uploadthing](https://uploadthing.com/):** Upload seguro de arquivos.
- **[MongoDB](https://www.mongodb.com/):** Banco de dados escalável e flexível para armazenamento de dados.

## Início rápido

### Pré-requisitos

Certifique-se de ter instalado

- Node.js
- Git
- npm / yarn / pnpm / bun

1. Clonar este repositório:

   ```bash
   git clone https://github.com/VncsRaniery/EventSync
   cd EventSync
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configurar variáveis de ​ambientes:

   ```bash
   # NEXTJS URL
   NEXT_PUBLIC_APP_URL=http://localhost:3000

   # CLERK AUTENTIFICAÇÃO
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   WEBHOOK_SECRET=

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

   # STRIPE KEYS
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
   STRIPE_SECRET_KEY=
   STRIPE_WEBHOOK_SECRET=

   # UPLOADTHING KEYS
   UPLOADTHING_SECRET=
   UPLOADTHING_APP_ID=

   # DATABASE MONGODB URI
   MONGODB_URI=

   ```

4. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Abra seu navegador e navegue até http://localhost:3000 para ver o site em ação.

---
