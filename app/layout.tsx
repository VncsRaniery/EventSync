import Providers from "@/components/providers/providers";
import { Toaster } from "@/components/ui/sonner";
import "@/styles/globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scrollbar">
            <body
                className=
                    "min-h-screen bg-background text-foreground antialiased !font-default overflow-x-hidden"
            >
                <Providers>
                    <Toaster richColors theme="dark" position="top-right" />
                    {children}
                </Providers>
            </body>
        </html>
    );
};