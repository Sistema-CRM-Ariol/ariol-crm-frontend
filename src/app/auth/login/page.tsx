import { Metadata } from "next";
import { LoginForm } from "@/modules/auth/components/LoginForm";

export default function LoginPage() {
    return (
        <section className="auth">
            <LoginForm/>
        </section>

    );
}



export const metadata: Metadata = {
    title: "Inicio de Sesión - Ariol CRM"
}