import { PaginatedResponse } from "@/interfaces/pagination";
import { ProductSummary } from "./product-summary.interface";


export type GerAllProductsResponse = PaginatedResponse<ProductSummary, 'products'>
