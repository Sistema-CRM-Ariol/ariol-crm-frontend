import { isAxiosError } from "axios";

export const formatDate = (isoDate: Date): string => {
    // Crear un objeto Date a partir de la fecha ISO
    const date = new Date(isoDate);

    // Definir los nombres de los meses
    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    // Obtener el día, mes y año
    const day = date.getUTCDate();
    const month = date.getUTCMonth(); // Mes en formato 0-11
    const year = date.getUTCFullYear();

    // Formatear la fecha en el formato deseado
    return `${day} de ${months[month]} de ${year}`;
};


export const handleServerActionError = (error: unknown) => {
    if (isAxiosError(error)) {
        const { response } = error;
        console.log(response?.data)
        // VERIFICAR SI LA RESPONSE ES UN ARRAY
        if (response?.data?.message && Array.isArray(response.data.message)) {
            return response.data.message.join(', ');
        }

        if (response?.data?.message) {
            return response.data.message;
        }
    }

    else if (error instanceof Error) {
        return error.message;
    }

    else if (typeof error === 'string') {
        return error;
    }

    else {
        return 'Error desconocido';
    }

}


export function compactFormat(value: number) {
    const formatter = new Intl.NumberFormat("en", {
        notation: "compact",
        compactDisplay: "short",
    });

    return formatter.format(value);
}

export function standardFormat(value: number) {
    return value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

export function createTimeFrameExtractor(
    selectedTimeFrame: string | undefined,
) {
    return (sectionKey: string) => {
        return selectedTimeFrame
            ?.split(",")
            .find((value) => value.includes(sectionKey));
    };
}
