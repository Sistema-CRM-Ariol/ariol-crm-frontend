// src/app/api/report/route.ts
import { NextResponse } from 'next/server';
import { renderToStream } from '@react-pdf/renderer';
import { ClientsReportPdf } from '@/modules/clients/components/ClientsReportPdf';
import { getAllClients } from '@/modules/clients/actions/get-all-clients';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const clientsData = await getAllClients({ page: 1, limit: 100 });

        // 1. Lee la imagen del disco
        const filePath = path.join(process.cwd(), 'public', 'images', 'ariol-logo.jpg');
        const buffer = fs.readFileSync(filePath);
        const logoBase64 = `data:image/jpeg;base64,${buffer.toString('base64')}`;

        const stream = await renderToStream(
            <ClientsReportPdf 
                logo={logoBase64}
                clients={clientsData.clients}
            />
        );


        const headers = new Headers();
        headers.set('Content-Type', 'application/pdf');
        // Access-Control-Allow-Origin.".
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Content-Disposition', 'inline; filename="reporte-ventas.pdf"');

        return new NextResponse(stream as unknown as ReadableStream, { headers });

    } catch (error) {
        console.log(error)
    }
}