export interface ExpenseSummary {
    id: string;
    code: string;
    client: string;
    status: "COMPLETE" | "PENDING" | "CANCEL" | "QUOTATION";
    currency: string;
    total: number;
    createdAt: string;
    productsQuantity: number;
}