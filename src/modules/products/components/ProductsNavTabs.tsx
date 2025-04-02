"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { heroUIStyles } from "@/lib/heroui-styles"

import { Tab, Tabs } from "@heroui/tabs"
import { GridViewIcon, Layers02Icon, PackageIcon, PackageReceiveIcon } from "hugeicons-react"


export const ProductsNavTabs = () => {
    
    const pathname = usePathname()

    return (
        <Tabs
            color="primary"
            variant="underlined"
            classNames={heroUIStyles.tabs}
            aria-label="Products management options"
            selectedKey={pathname.split('/')[pathname.split('/').length - 1]}
        >

            <Tab
                key="products"
                title={
                    <Link href="/catalog/products">
                        <div className="flex items-center space-x-2">
                            <PackageIcon size={20} />
                            <span>Productos</span>
                        </div>
                    </Link>
                }
            />
            <Tab
                key="categories"
                title={
                    <Link href="/catalog/categories">
                        <div className="flex items-center space-x-2">
                            <Layers02Icon size={20} />
                            <span>Categorias</span>
                        </div>
                    </Link>
                }
            />

            <Tab
                key="brands"
                title={
                    <Link href="/catalog/brands">
                        <div className="flex items-center space-x-2">
                            <GridViewIcon size={20} />
                            <span>Marcas</span>
                        </div>
                    </Link>
                }
            />

            <Tab
                key="providers"
                title={
                    <Link href="/catalog/providers">
                        <div className="flex items-center space-x-2">
                            <PackageReceiveIcon size={20} />
                            <span>Provedores</span>
                        </div>
                    </Link>
                }
            />

        </Tabs>
    )
}
