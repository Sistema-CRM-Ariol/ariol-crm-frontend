import { PaginatedResponse } from "@/interfaces/pagination";
import { Category } from "./category.interface";


export type GerAllCategoriesResponse = PaginatedResponse<Category, 'categories'>
