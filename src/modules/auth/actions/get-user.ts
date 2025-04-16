"use server"

import { cookies } from "next/headers";
import { User } from "../interfaces/user.interface";

export const getUser = async () => {

    const cookiesStore = await cookies();
    const user = JSON.parse( cookiesStore.get('ARIOL_USER')?.value as string) as User;

    return user;
}