import { redirect } from "next/navigation";
import { validateToken } from "@/modules/auth/actions/validate-token";

export default async function AuthLayout({ children}: { children: React.ReactNode }) {

    const isValidToken = await validateToken();

    if (isValidToken) {
        redirect('/products');
    }

    return (
        <>
            { children }
        </>
    );
}