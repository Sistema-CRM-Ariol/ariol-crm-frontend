import { NextResponse } from 'next/server';
import { renderToStream } from '@react-pdf/renderer';
import fs from 'fs';
import path from 'path';
import { getWarehouseDetails } from '@/modules/warehouses/actions/get-warehouse-details';
import { WarehouseDetailsReport } from '@/modules/warehouses/components/WarehouseDetailsReport';

export async function GET(request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params // 'a', 'b', or 'c'

    try {
        const { warehouse } = await getWarehouseDetails(id);

        // 1. Lee la imagen del disco
        const filePath = path.join(process.cwd(), 'public', 'images', 'ariol-logo.jpg');
        const buffer = fs.readFileSync(filePath);
        const logoBase64 = `data:image/jpeg;base64,${buffer.toString('base64')}`;

        const stream = await renderToStream(
            <WarehouseDetailsReport
                logo={logoBase64}
                warehouse={warehouse}
            />
        );


        const headers = new Headers();
        headers.set('Content-Type', 'application/pdf');
        // Access-Control-Allow-Origin.".
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Content-Disposition', 'inline; filename="reporte-almacen.pdf"');

        return new NextResponse(stream as unknown as ReadableStream, { headers });

    } catch (error) {
        console.log(error)
    }
}