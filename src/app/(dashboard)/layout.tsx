import { Sidemenu } from "@/components/side-menu/Sidemenu";

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Sidemenu/>
            <main>
                { children }
            </main>
        </>
    );
}