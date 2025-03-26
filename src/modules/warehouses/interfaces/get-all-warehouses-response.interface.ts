import { PaginatedResponse } from "@/interfaces/pagination";
import { WarehouseSummary } from "./warehouse-summary.interface";

export type GetAllWarehousesResponse = PaginatedResponse<WarehouseSummary, "warehouses">