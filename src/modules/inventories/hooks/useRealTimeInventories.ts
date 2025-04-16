// hooks/useRealTimeInventories.ts
"use client"

import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { InventoryItem } from "../interfaces/inventory-item.interface";


export function useRealTimeInventories(initialData: InventoryItem[]) {
    const [inventories, setInventories] = useState<InventoryItem[]>(initialData);

    useEffect(() => {
        // Conexión al namespace "/inventories". Ajusta la URL según tu entorno.
        const socket: Socket = io(process.env.NEXT_PUBLIC_SOCKET_URL, {
            transports: ["websocket"],
        });

        // Escuchar el evento de creación
        socket.on("inventoryCreated", (response: {message: string, inventory: InventoryItem}) => {
            setInventories((prev) => [response.inventory, ...prev]);
        });
        // Escuchar el evento de actualización
        socket.on("inventoryUpdated", ({ inventory }: {message: string, inventory: InventoryItem}) => {
            console.log(inventory)
            setInventories((prev) => prev.map((item) => (item.id === inventory.id ? inventory : item)));
        });
        // Escuchar el evento de eliminación
        socket.on("inventoryDeleted", (data: InventoryItem) => {
            setInventories((prev) => prev.filter((item) => item.id !== data.id));
        });

        // Limpieza de la conexión al desmontarse el componente
        return () => {
            socket.disconnect();
        };
    }, []);

    return { inventories };
}
