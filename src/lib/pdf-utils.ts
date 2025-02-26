import path from "path";
import { Font, StyleSheet } from "@react-pdf/renderer";
import { table } from "console";

// Obtener ruta absoluta (adaptar según tu estructura de carpetas)
const gilroyRegular = path.join(process.cwd(), "src/assets/fonts/gilroy/Gilroy-Regular.ttf");
const gilroySemiBold = path.join(process.cwd(), "src/assets/fonts/gilroy/Gilroy-SemiBold.ttf");


Font.register({
    family: "Gilroy",
    fonts: [
        { src: gilroyRegular, fontWeight: 400 }, // Regular
        { src: gilroySemiBold, fontWeight: 600 },     // Bold
    ],
});


const grayColor = "#c1c1c1"

export const pdfStyles = StyleSheet.create({
    section: {
        marginBottom: 20,
    },
    page: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        fontSize: 12,
        fontFamily: "Gilroy", // Aplicar fuente globalmente
    },
    headerPage: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    title: {
        fontSize: 18,
        fontWeight: 600, // Usar 700 para bold
        textAlign: "left"
    },
    header: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    text: {
        fontSize: 8,
    },


    table: {
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#e1e1e1',
        borderRadius: 3,
        marginBottom: 20,

    },
    headerTable: {
        flexDirection: "row",
        borderTop: 1,
        borderBottom: 1,
        borderColor: grayColor
        
    },

    // table: {
    //     width: '100%',
    //     borderStyle: 'solid',
    //     marginBottom: 20,
    //     borderRadius: 2,
    // },
    // headerTable: {
    //     overflow: "hidden",
    //     flexDirection: 'row',
    //     alignItems: "center",
    //     borderBottomWidth: 1,
    //     borderBottomColor: '#000',
    //     borderTopRightRadius: 5,
    //     borderTopLeftRadius: 5,
    // },
    row: {
        flexDirection: 'row',
    },

    cellHeader: {
        flex: 1,
        fontSize: 8,
        fontWeight: 700, // Bold para headers
        textAlign: "left",
        padding: 3,
        color: "#fff",
        backgroundColor: "#3a65f7",
        borderBottom: 1,
        borderColor: grayColor,
    },
    cell: {
        flex: 1,
        borderBottom: 1,
        borderBottomColor: grayColor,
        padding: 3,
        fontSize: 6,
        textAlign: "left",
        color: "#000",
    },
    // cellHeader: {
    //     flex: 1,
    //     fontSize: 8,
    //     fontWeight: 700, // Bold para headers
    //     textAlign: "left",
    //     padding: 3,
    //     color: "#fff",
    //     backgroundColor: "#3a65f7",
    // },
    // cell: {
    //     flex: 1,
    //     fontSize: 6,
    //     textAlign: 'left',
    //     padding: 2,
    //     borderWidth: 1,
    // },
    footer: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 10,
    },
})
