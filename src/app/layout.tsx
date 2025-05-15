import { ThemeProvider } from 'next-themes';
import { Raleway } from 'next/font/google';
import { Roboto } from 'next/font/google';
import './globals.css';
import Header from "@/widgets/header/Header";
import Footer from "@/widgets/footer/Footer";
import BurgerHeader from "@/widgets/burger-header/Burger-header";
import ThemeSwitcher from "./ThemeSwitcher";
import { Suspense } from 'react';
import Script from 'next/script';
import YandexMetrika from "@/lib/YandexMetrika";
const raleway = Raleway({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export const metadata = {
    title: 'LV Group - команда, которая делает результат!',
    description: 'Отделы продаж, создание сайтов, контекстная реклама, дизайн, SMM.',
    applicationName: 'LV Group',
    authors: [{ name: 'Продвигаем бизнес — от маркетинга до продаж' }],
    creator: 'Boris (bsleonov@gmail.com)',
    publisher: 'LV Group',
    keywords: [
        'маркетинг', 'отделы продаж', 'создание сайтов',
        'контекстная реклама', 'дизайн', 'SMM', 'LV Group'
    ],
    robots: {
        index: true,
        follow: true,
    },
    metadataBase: new URL('https://lv-group.vercel.app'),
    openGraph: {
        title: 'LV Group - команда, которая делает результат!',
        description: 'Отделы продаж, создание сайтов, контекстная реклама, дизайн, SMM.',
        url: 'https://lv-group.vercel.app',
        siteName: 'LV Group',
        images: [
            {
                url: 'https://opengraph.b-cdn.net/production/images/4b778b81-5173-45ae-8a48-cec9a566e529.jpg?token=FI-tZi6fkA4LbV_D4i1GOR8Nbf_JcWFOvff_kB9XfWM&height=1200&width=1200&expires=33281589971',
                width: 1200,
                height: 1200,
                alt: 'LV Group - команда, которая делает результат!',
            },
        ],
        locale: 'ru_RU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'LV Group - команда, которая делает результат!',
        description: 'Отделы продаж, создание сайтов, контекстная реклама, дизайн, SMM.',
        site: '@lvgroup',
        images: [
            'https://opengraph.b-cdn.net/production/images/4b778b81-5173-45ae-8a48-cec9a566e529.jpg?token=FI-tZi6fkA4LbV_D4i1GOR8Nbf_JcWFOvff_kB9XfWM&height=1200&width=1200&expires=33281589971',
        ],
    },
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
            <Script id="metrika-counter" strategy="afterInteractive">
                {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
              ym(101600589, "init", {
                    defer: true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`
                }
            </Script>
            <Suspense fallback={<></>}>
                <YandexMetrika />
            </Suspense>
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
