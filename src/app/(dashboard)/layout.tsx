import { Sidemenu } from "@/components/side-menu/Sidemenu";

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="admin-layout">
            <Sidemenu/>
            <main className="w-full">
                { children }
            </main>
        </div>
    );
}