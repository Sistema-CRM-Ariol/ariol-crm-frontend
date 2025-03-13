import { Metadata } from "next";
import { ResetPasswordForm } from '../../../modules/auth/components/ResetPasswordForm';

export default function ResetPasswordPage() {
    return (
        <section className="auth">
            <ResetPasswordForm/>
        </section>
    );
}

export const metadata: Metadata = {
    title: "Recupera tu contraseña - Ariol CRM"
}