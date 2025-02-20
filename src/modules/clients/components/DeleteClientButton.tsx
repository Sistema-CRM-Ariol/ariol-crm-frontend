"use client"
import { useDeleteClient } from '../hooks/useDeleteClient'
import { ClientSummary } from '../interfaces/client-summary.interface'

import { Button } from '@heroui/button'
import { Delete02Icon } from 'hugeicons-react'
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@heroui/modal'

interface Props {
    client: ClientSummary
}

export const DeleteClientButton = ({ client }: Props) => {

    const { handleDelete, isPending } = useDeleteClient(client.id);

    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <>
            <Button
                size='sm'
                isIconOnly
                onPress={onOpen}
                startContent={<Delete02Icon size={18} />}
                color='danger'
                radius='lg'
                variant='light'
            />

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>
                                <h2>Esta acción eliminara al cliente</h2>
                            </ModalHeader>
                            <ModalBody>
                                <p>
                                    ¿Esta seguro de eliminar el cliente <span className='font-semibold'>{client.name}</span>?<br />
                                    <span className='text-red-400 font-medium'>Todos sus datos se perderan definitivamente</span>
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancelar
                                </Button>
                                <Button isLoading={isPending} isDisabled={isPending} color="primary" onPress={handleDelete}>
                                    Eliminar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
