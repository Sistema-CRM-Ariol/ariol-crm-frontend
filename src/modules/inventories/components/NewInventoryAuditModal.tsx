import { useState } from "react";
import { heroUIStyles } from "@/lib/heroui-styles";

import { ProductsAutocomplete } from "@/modules/products/components/ProductsAutocomplete";
import { WarehouseAutocomplete } from "@/modules/warehouses/components/WarehouseAutocomplete";

import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";
import { useRecordInventoryCount } from "../hooks/useRecordInventoryCount";

export const NewInventoryAuditModal = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [quantity, setQuantity] = useState(0)
    const [productsId, setProductId] = useState<string | undefined>(undefined);
    const [warehouseId, setWarehouseId] = useState<string | undefined>(undefined);
    const { handleSubmit, isPending, isSuccess } = useRecordInventoryCount()
    return (
        <>
            <Button color="primary" onPress={onOpen}>+ Nuevo arqueo de inventario</Button>
            <Modal
                isOpen={isOpen}
                isDismissable={false}
                size="3xl"
                onOpenChange={onOpenChange}
                classNames={heroUIStyles.modal}
            >
                <ModalContent>
                    {(onClose) => (
                        <form>
                            <ModalHeader>
                                <h2>Nuevo arqueo de inventario</h2>
                            </ModalHeader>
                            <ModalBody>
                                <WarehouseAutocomplete onSelect={setWarehouseId} />
                                <ProductsAutocomplete onSelect={setProductId} />
                                <Input
                                    classNames={heroUIStyles.input}
                                    labelPlacement="outside"
                                    variant="bordered"
                                    label="Stock disponible"
                                    type="number"
                                    min="0"
                                    value={quantity.toString()}
                                    onChange={(e) => setQuantity(Number(e.target.value))}
                                    placeholder="Escribe el stock disponible"
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Cerrar
                                </Button>
                                <Button
                                    color="primary"
                                    isDisabled={isPending}
                                    isLoading={isPending}
                                    onPress={() => {
                                        handleSubmit({ productId: productsId!, quantity, warehouseId: warehouseId! })
                                        if( isSuccess )
                                            onClose()
                                    }}
                                >
                                    Guardar
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
