
import { Button } from '@heroui/button';
import { Delete02Icon } from 'hugeicons-react';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@heroui/modal'

import { useDeleteCompany } from '../hooks/useDeleteCompany';
import { CompanySummary } from '../interfaces/company-summary.interface';
import { heroUiClassNames } from '@/lib/heroui-classnames';

interface Props {
    company: CompanySummary;
}


export const DeleteCompanyModal = ({ company }: Props) => {

    const { handleDelete, isPending } = useDeleteCompany(company.id);

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button
                size='sm'
                isIconOnly
                radius='lg'
                color='danger'
                variant='light'
                onPress={onOpen}
                startContent={<Delete02Icon size={18} />}
            />

            <Modal
                shadow='none'
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                classNames={heroUiClassNames.modal}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>
                                <h2>Esta acción eliminara al cliente</h2>
                            </ModalHeader>
                            <ModalBody>
                                <p>
                                    ¿Esta seguro de eliminar la empresa <span className='font-semibold'>{company.name}</span>?<br />
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
