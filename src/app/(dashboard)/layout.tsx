"use client"

import AppBar from "@/components/app-bar/AppBar";
import { Sidemenu } from "@/components/side-menu/Sidemenu";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="h-screen">
            <AppBar />

            <div className="flex">
                <Sidemenu />

                <main className="h-[92vh] pb-2 overflow-y-auto w-full">
                    {children}
                </main>
            </div>
        </div>
    );
}