"use client"
import { KeyboardEvent, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Cancel01Icon, Search01Icon } from "hugeicons-react";
import { heroUIStyles } from "@/lib/heroui-styles";

interface Props {
    placeholder: string;
} 

export const InputSearchTable = ({ placeholder }: Props) => {

    const router = useRouter();
    const pathname = usePathname();
    const [searchInput, setSearchInput] = useState('')

    const handleSearch = (e: KeyboardEvent) => {
        
        if (e.key !== 'Enter')
            return;

        if (!searchInput)
            return router.push(pathname);
        router.push(pathname + '?search=' + searchInput);
    }


    return (
        <Input
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            classNames={{ ...heroUIStyles.input, innerWrapper: "!pr-0" }}
            className='max-w-sm w-full'
            radius="md"
            onKeyUp={handleSearch}
            placeholder={placeholder}
            startContent={
                <div className="w-8 h-8 flex items-center justify-center">
                    <Search01Icon size={16} />
                </div>
            }
            endContent={
                searchInput &&
                <Button
                    isIconOnly
                    variant="light"
                    onPress={() => setSearchInput('')}
                    startContent={<Cancel01Icon size={16} />}
                />
            }
        />
    )
}
