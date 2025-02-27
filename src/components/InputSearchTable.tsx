"use client"
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Search01Icon } from "hugeicons-react";
import { heroUiClassNames } from "@/lib/heroui-classnames";

interface Props {
    placeholder: string;
} 

export const InputSearchTable = ({ placeholder }: Props) => {

    const router = useRouter();
    const pathname = usePathname();
    const [searchInput, setSearchInput] = useState('')

    const handleSearch = () => {
        if (!searchInput)
            return router.push(pathname);
        router.push(pathname + '?search=' + searchInput);
    }


    return (
        <Input
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            classNames={{ ...heroUiClassNames.input, innerWrapper: "!pr-0" }}
            className='max-w-sm w-full'
            radius="md"
            placeholder={placeholder}
            endContent={
                <Button
                    isIconOnly
                    variant="light"
                    onPress={handleSearch}
                    startContent={<Search01Icon size={16} />}
                />
            }
        />
    )
}
