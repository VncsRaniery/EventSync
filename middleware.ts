import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Cria um route matcher para a rota da dashboard
const isDashboardRoute = createRouteMatcher(["/dashboard/:path*"]);

export default clerkMiddleware((auth, req) => {
    const { userId } = auth();

    // Se a rota for da dashboard e o usuário não estiver logado, redireciona para login
    if (!userId && isDashboardRoute(req)) {
        return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    // Permite o acesso à home mesmo que o usuário esteja logado

    // Continua normalmente se não atender as condições acima
    return NextResponse.next();
});

export const config = {
    matcher: [
        "/((?!.*\\..*|_next).*)",  // Ignora arquivos estáticos e pastas internas do Next.js
        "/",                       // Protege a home
        "/dashboard/:path*",       // Protege todas as páginas dentro da pasta dashboard
        "/(api|trpc)(.*)"          // Protege APIs e rotas do TRPC, se houver
    ],
};