import { redirect } from "next/navigation";

import { AppBar } from "@/components/app-bar/AppBar";
import { Sidemenu } from "@/components/side-menu/Sidemenu";
import { validateToken } from "@/modules/auth/actions/validate-token";

export default async function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const isValidToken = await validateToken();

    if (!isValidToken) {
        redirect('/auth/login');
    }

    return (
        <div className="h-screen">
            <AppBar />
                
            <div className="flex">
                <Sidemenu />

                <main className="h-[92vh] overflow-y-scroll w-full">
                    {children}
                </main>
            </div>
        </div>
    );
}