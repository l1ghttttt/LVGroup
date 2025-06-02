"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

export default function ThemeSwitcherLogic() {
    const { setTheme } = useTheme();
    const pathname = usePathname();

    useEffect(() => {
        const userChangedTheme = Cookies.get("user-theme-chosen");

        // Если пользователь НЕ выбирал тему вручную
        if (!userChangedTheme) {
            if (pathname.startsWith("/case/") || pathname.startsWith("/usluga") || pathname.startsWith("/privacy-policy") || pathname.startsWith("/personal-consent")) {
                setTheme("light"); // Включаем светлую тему в /cases
            } else {
                setTheme("dark"); // Включаем тёмную тему на остальных страницах
            }
        }
    }, [pathname, setTheme]);

    return null;
}
