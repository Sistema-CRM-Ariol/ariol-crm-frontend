import { pdfStyles } from '@/lib/pdf-utils'
import { Page, Text, View, Document, Image } from '@react-pdf/renderer';
import { ClientSummary } from '../interfaces/client-summary.interface';
import { formatDate } from '@/lib/helpers';

interface Props {
    clients: ClientSummary[];
}

export const ClientsReportPdf = ({ clients }: Props) => {
    return (
        <Document>
            <Page size="A4" style={pdfStyles.page}>
                {/* Título */}
                <View style={pdfStyles.headerPage}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Image
                            src="https://scontent.flpb1-2.fna.fbcdn.net/v/t39.30808-6/382239087_789414473187739_5894656722717322118_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=cGh6ZGLf4yoQ7kNvgGHUArc&_nc_oc=Adjm5jcvXJ5ZakN9Udchs2QocXL54pH2jkFuhKFhQGfhYsWwjH5QoApHQM6L2P56UWyT0y45EiP_xWNshvKN37sV&_nc_zt=23&_nc_ht=scontent.flpb1-2.fna&_nc_gid=AmqcgssMH7XzkueKrbFfwe5&oh=00_AYCwBxigh-BcXqFdbQfcVFlbRU0Zeh2rqvb8XqEdLi45CA&oe=67BD4890"
                            style={{
                                width: "100%",
                                maxWidth: "100px",
                                margin: 0
                            }}
                        />
                        <View style={{ textAlign: "right" }}>
                            <Text style={pdfStyles.title}>Ariol S.A.</Text>
                            <Text style={{...pdfStyles.text, textAlign: "right"}}>Calle 1 # 2 - 3</Text>
                            <Text style={pdfStyles.text}>Teléfono: 123456789</Text>
                        </View>
                    </View>

                </View>

                {/* Tabla de Órdenes */}
                <View style={pdfStyles.table}>
                    <View 
                        style={{
                            padding: 10
                        }}
                    >
                        <Text style={pdfStyles.title}>Reporte General de Clientes</Text>
                        <Text style={pdfStyles.text}>Fecha: { formatDate( new Date()) }</Text>
                    </View>
                    {/* Encabezados de la tabla */}
                    <View style={pdfStyles.headerTable}>
                        <Text style={pdfStyles.cellHeader}>NIT/CI</Text>
                        <Text style={pdfStyles.cellHeader}>Nombre</Text>
                        <Text style={pdfStyles.cellHeader}>Cargo</Text>
                        <Text style={pdfStyles.cellHeader}>Telefono 1</Text>
                        <Text style={pdfStyles.cellHeader}>Telefono 2</Text>
                        <Text style={pdfStyles.cellHeader}>Correo 1</Text>
                        <Text style={pdfStyles.cellHeader}>Correo 2</Text>
                    </View>

                    {/* Filas de la tabla */}
                    {clients.map((client) => (
                        <View key={client.id} style={pdfStyles.row}>
                            <Text style={pdfStyles.cell}>{client.nit}</Text>
                            <Text style={pdfStyles.cell}>{client.name}</Text>
                            <Text style={pdfStyles.cell}>{client.position}</Text>
                            <Text style={pdfStyles.cell}>{client.phones[0] ?? 'No se asigno'}</Text>
                            <Text style={pdfStyles.cell}>{client.phones[1] ?? 'No se asigno'}</Text>
                            <Text style={pdfStyles.cell}>{client.emails[0] ?? 'No se asigno'}</Text>
                            <Text style={pdfStyles.cell}>{client.emails[1]}</Text>
                        </View>
                    ))}
                </View>

                {/* Pie de página */}
                <Text style={pdfStyles.footer}>
                    Este reporte es generado automáticamente. Gracias por utilizar nuestro sistema.
                </Text>
            </Page>
        </Document>
    )
}
