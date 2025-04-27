"use client"

import dynamic from 'next/dynamic';
import { Sidemenu } from "@/components/side-menu/Sidemenu";

const AppBar = dynamic(() => import('@/components/app-bar/AppBar'), {
    ssr: false, // Importante: desactiva el Server Side Rendering para este componente
    loading: () => <div className="h-16 bg-gray-100 w-full" /> // Opcional: placeholder mientras carga
});

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

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