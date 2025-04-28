import { TitlePage } from "@/components/TitlePage";
import { DispatchForm } from "@/modules/expenses/components/DispatchForm";
import { DispatchSummary } from "@/modules/expenses/components/DispatchSummary";

export default function NewExpensePage() {
    return (
        <>

            <header className="pt-8">
                <div className="container">
                    <TitlePage
                        title="Registrar nueva salida"
                        subtitle="Registra una nueva salida de productos o servicios."
                    />
                </div>
            </header>

            <section className="pt-8">
                <div className="container grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div className="col-span-1 md:col-span-3">
                        <DispatchForm />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <DispatchSummary />
                    </div>
                </div>
            </section>
        </>
    );
}