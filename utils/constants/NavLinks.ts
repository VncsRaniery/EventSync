import { HelpCircleIcon, LineChartIcon, Link2Icon, LockIcon, NewspaperIcon, QrCodeIcon } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "Características",
        href: "#",
        menu: [
            {
                title: "Proteção por usuário",
                tagline: "Proteja seus eventos, apenas você tem acesso.",
                href: "#",
                icon: LockIcon,
            },
            {
                title: "Análise Avançada",
                tagline: "Obtenha insights sobre quem está clicando em seus eventos.",
                href: "#",
                icon: LineChartIcon,
            },
        ],
    },
    {
        title: "Preços",
        href: "#",
    },
    {
        title: "Empresa",
        href: "#",
    },
    {
        title: "Recursos",
        href: "#",
        menu: [
            {
                title: "Blog",
                tagline: "Leia artigos sobre as últimas tendências em tecnologia.",
                href: "#",
                icon: NewspaperIcon,
            },
            {
                title: "Ajuda",
                tagline: "Obtenha respostas para suas perguntas.",
                href: "#",
                icon: HelpCircleIcon,
            },
        ]
    },
    {
        title: "Registro de alterações",
        href: "#",
    },
];