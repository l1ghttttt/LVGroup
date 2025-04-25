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
    title: 'LV Group',
    description: 'Продвигаем бизнес — от маркетинга до продаж. Сайты, колл-центры, контент, дизайн, стратегия. LV GROUP — команда, которая делает результат.',
    applicationName: 'LV Group',
    authors: { name: 'ABC' },
    keywords: [
        'маркетинг', 'продажи', 'разработка сайтов', 'колл-центр',
        'контент', 'дизайн', 'упаковка бизнеса', 'отдел продаж', 'LV Group'
    ],
    creator: 'LV Group',
    publisher: 'LV Group',
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'LV Group',
        description: 'Сайты, колл-центры, контент, дизайн, стратегия — делаем результат.',
        url: 'https://lvgroup.site', // Укажи свой реальный домен
        siteName: 'LV Group',
        locale: 'ru_RU',
        type: 'website',
        images: [
            {
                url: 'https://lvgroup.site/og-image.jpg', // Укажи свою картинку
                width: 1200,
                height: 630,
                alt: 'LV Group — ваш партнёр по маркетингу и продажам',
            },
        ],
    },
    metadataBase: new URL('https://lvgroup.site'), // обязательно если используешь относительные OG URL
    viewport: 'width=device-width, initial-scale=1',
    category: 'Бизнес',
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
