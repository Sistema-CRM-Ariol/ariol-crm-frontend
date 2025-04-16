import { FilteredPaginationOptions } from "@/interfaces/filtered-pagination-options.interface";


export interface GetAllItemsFromInventoriesOptions extends FilteredPaginationOptions {
    warehouseId?: string;
}