// src/app/api/report/route.ts
import { NextResponse } from 'next/server';
import { renderToStream } from '@react-pdf/renderer';
import { ClientsReportPdf } from '@/modules/clients/components/ClientsReportPdf';
import { getAllClients } from '@/modules/clients/actions/get-all-clients';

export async function GET() {
    try {
        const clientsData = await getAllClients({ page: 1, limit: 100 });

        const stream = await renderToStream(<ClientsReportPdf clients={clientsData.clients} />);
    
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