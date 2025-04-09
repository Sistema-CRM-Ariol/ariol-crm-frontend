import { AppBar } from "@/components/app-bar/AppBar";
import { Sidemenu } from "@/components/side-menu/Sidemenu";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="h-screen">
            <AppBar />
                
            <div className="flex">
                <Sidemenu />

                <main className="h-[94vh] overflow-y-auto w-full">
                    {children}
                </main>
            </div>
        </div>
    );
}