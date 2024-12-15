export const PLANS = [
    {
        name: "Grátis",
        info: "Para a maioria dos indivíduos",
        price: {
            monthly: 0,
            yearly: 0,
        },
        features: [
            { text: "Compartilhe eventos" },
            { text: "Crie até 50 eventos", limit: "100 eventos" },
            { text: "Eventos totalmente personalizáveis" },
            { text: "Rastrear cliques", tooltip: "1 mil cliques/mês" },
            { text: "Apoio comunitário", tooltip: "Obtenha respostas para suas perguntas no discord" },
        ],
        btn: {
            text: "Comece gratuitamente",
            href: "/sign-up?plan=free",
            variant: "default",
        }
    },
    {
        name: "Pro",
        info: "Para pequenas empresas",
        price: {
            monthly: 9,
            yearly: Math.round(9 * 12 * (1 - 0.12)),
        },
        features: [
            { text: "Compartilhe eventos" },
            { text: "Crie até 500 eventos", limit: "500 eventos" },
            { text: "Eventos totalmente personalizáveis" },
            { text: "Rastrear cliques", tooltip: "20 mil cliques/mês" },
            { text: "Exportar dados de clique", tooltip: "Até 1 mil links" },
            { text: "Suporte prioritário", tooltip: "Obtenha suporte por chat 24 horas por dia, 7 dias por semana" },
        ],
        btn: {
            text: "Comece agora",
            href: "/sign-up?plan=pro",
            variant: "purple",
        }
    },
    {
        name: "Negócios",
        info: "Para grandes organizações",
        price: {
            monthly: 49,
            yearly: Math.round(49 * 12 * (1 - 0.12)),
        },
        features: [
            { text: "Compartilhe eventos" },
            { text: "Criação de eventos ilimitados" },
            { text: "Eventos totalmente personalizáveiss" },
            { text: "Rastrear cliques", tooltip: "Cliques ilimitados" },
            { text: "Exportar dados de clique", tooltip: "Cliques ilimitados" },
            { text: "Gerente dedicado", tooltip: "Obtenha suporte prioritário de nossa equipe" },
        ],
        btn: {
            text: "Equipe de contato",
            href: "/",
            variant: "default",
        }
    }
];

export const WORKSPACE_LIMIT = 2;