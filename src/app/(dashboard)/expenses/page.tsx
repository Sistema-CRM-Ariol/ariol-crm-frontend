import { Suspense } from 'react';
import { LoadingView } from "@/components/LoadingView";
import { ExpensesHeader } from "@/modules/expenses/components/ExpensesHeader";
import { ExpensesTable } from '@/modules/expenses/components/ExpensesTable';
import { OverviewCardsGroup } from '@/components/overview-card/OverviewCardsGroup';

export default function ExpensesPage() {
    return (
        <>
            <ExpensesHeader />
            
            <OverviewCardsGroup/>

            <Suspense fallback={<LoadingView />}>
                <ExpensesTable />
            </Suspense>
        </>
    );
}