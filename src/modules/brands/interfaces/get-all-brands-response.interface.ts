import { PaginatedResponse } from "@/interfaces/pagination";
import { BrandSummary } from "./brand-summary.interface";


export type GetAllBrandsResponse = PaginatedResponse<BrandSummary, 'brands'>
