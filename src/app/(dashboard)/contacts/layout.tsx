import { ContactsHeader } from "@/modules/clients/components/ContactsHeader";

export default function ContactsLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ContactsHeader/>
            { children }
        </>
    );
}