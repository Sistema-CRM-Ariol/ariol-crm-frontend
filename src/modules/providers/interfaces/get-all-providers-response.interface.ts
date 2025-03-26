import { PaginatedResponse } from "@/interfaces/pagination";
import { ProviderSummary } from "./provider-summary.interface";

export type GetAllProvidersResponse = PaginatedResponse<ProviderSummary, "providers">;