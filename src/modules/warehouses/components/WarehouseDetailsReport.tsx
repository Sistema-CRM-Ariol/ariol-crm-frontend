import React from 'react'
import { Warehouse } from '../interfaces/warehouse.interface'
import { Page, Text, View, Document, Image } from '@react-pdf/renderer';

import { pdfStyles } from '@/lib/pdf-utils'


interface Props {
    warehouse: Warehouse;
    logo: string,
}

export const WarehouseDetailsReport = ({ warehouse, logo }: Props) => {
    return (
        <Document>
            <Page size="A4" style={pdfStyles.page}>
                {/* Título */}
                <View style={pdfStyles.headerPage}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Image
                            src={logo}
                            style={{
                                width: "100%",
                                maxWidth: "100px",
                                margin: 0
                            }}
                        />
                        <View style={{ textAlign: "right" }}>
                            <Text style={pdfStyles.title}>Ariol S.A.</Text>
                            <Text style={pdfStyles.text}>Almacén: {warehouse.name}</Text>
                            <Text style={{ ...pdfStyles.text, textAlign: "right" }}>Calle 1 # 2 - 3</Text>
                            <Text style={pdfStyles.text}>Teléfono: 123456789</Text>
                            <Text style={pdfStyles.text}>Fecha: {new Date().toLocaleDateString()} </Text>
                            <Text style={pdfStyles.title}>Kardex de Items</Text>
                        </View>
                    </View>

                </View>


                {/* Tabla de Items */}
                <View style={pdfStyles.table}>
                    <View
                        style={{
                            padding: 10
                        }}
                    >
                        <Text style={pdfStyles.text}>Almacén: {warehouse.name}</Text>
                        <Text style={pdfStyles.text}>Dirección: {warehouse.address}</Text>
                    </View>
                    {/* Encabezados de la tabla */}
                    <View style={pdfStyles.headerTable}>
                        <Text style={pdfStyles.cellHeader}>Código</Text>
                        <Text style={pdfStyles.cellHeader}>Descripción</Text>
                        <Text style={pdfStyles.cellHeader}>Cantidad</Text>
                        <Text style={pdfStyles.cellHeader}>Precio Unitario</Text>
                    </View>
 
                    {/* Filas de la tabla */}
                    {warehouse.products.map((item) => (
                        <View key={item.id} style={pdfStyles.row}>
                            <Text style={pdfStyles.cell}>{item.serialNumber}</Text>
                            <Text style={pdfStyles.cell}>{item.name}</Text>
                            <Text style={pdfStyles.cell}>{item.quantity}</Text>
                            <Text style={pdfStyles.cell}>{item.priceSale}</Text>
                        </View>
                    ))}
                </View>
                {/* Total de Items */}


                {/* Pie de página */}
                <Text style={pdfStyles.footer}>
                    Este reporte es generado automáticamente. Gracias por utilizar nuestro sistema.
                </Text>
            </Page>
        </Document>
    )
}
