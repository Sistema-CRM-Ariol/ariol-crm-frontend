import { Sidemenu } from "@/components/side-menu/Sidemenu";
import { validateToken } from "@/modules/auth/actions/validate-token";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    // const isValidToken = await validateToken();

    // if( !isValidToken ){
    //     redirect('/auth/login');
    // }

    return (
        <div className="admin-layout">
            <Sidemenu/>
            <main className="w-full h-screen overflow-y-auto pb-10">
                { children }
            </main>
        </div>
    );
}