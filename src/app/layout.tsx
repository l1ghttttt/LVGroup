import { ThemeProvider } from 'next-themes';
import { Raleway } from 'next/font/google';
import { Roboto } from 'next/font/google';
import './globals.css';
import Header from "@/widgets/header/Header";
import Footer from "@/widgets/footer/Footer";
import BurgerHeader from "@/widgets/burger-header/Burger-header";
import ThemeSwitcher from "./ThemeSwitcher";

const raleway = Raleway({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export const metadata = {
    title: 'LVGroup',
    description: 'LVGroup - лучшая маркетинговая компания',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={`${raleway.className} ${roboto.className} antialiased`} // Применяем шрифты
            >
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                <ThemeSwitcher/>
                <Header />
                <BurgerHeader />
                <main className={`flex flex-col items-center`}>
                    {children}
                </main>
                <Footer />
            </ThemeProvider>
            </body>
            </html>
        </>
    );
}
