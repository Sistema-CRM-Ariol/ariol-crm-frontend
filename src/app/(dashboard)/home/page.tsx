import { Metadata } from 'next';

import { OverviewCardsGroup } from "@/components/overview-card/OverviewCardsGroup";

// import { TopProducts } from "@/modules/products/components/TopProducts";
// import { PaymentsOverview } from "@/modules/expenses/components/payments-overview";
// import { SalesReportDonut } from "@/modules/expenses/components/sales-report-donut";

export default function HomePage() {

    return (
        <>
            <OverviewCardsGroup />

            <section className="pt-8">
                <div className="container grid grid-cols-12 gap-8">
                    <div className="col-span-12">
                        {/* <PaymentsOverview/> */}
                    </div>
                    <div className="col-span-7">
                        {/* <TopProducts /> */}
                    </div>
                    <div className="col-span-5">
                        {/* <SalesReportDonut /> */}
                    </div>
                </div>

            </section>
        </>
    );
}

export const metadata: Metadata = {
    title: "Dashboard - Ariol CRM",
    description: "Dashboard page for admin",
}