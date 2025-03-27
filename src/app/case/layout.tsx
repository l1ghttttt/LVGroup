import ThemeSwitcher from "../ThemeSwitcher";

export default function CasesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ThemeSwitcher />
            {children}
        </>
    );
}
