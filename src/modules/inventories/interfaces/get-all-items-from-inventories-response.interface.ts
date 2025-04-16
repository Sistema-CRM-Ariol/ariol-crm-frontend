import { PaginatedResponse } from "@/interfaces/pagination";
import { InventoryItem } from "./inventory-item.interface";



export type GetAllItemsFromInventoriesResponse = PaginatedResponse<InventoryItem, "inventory">;