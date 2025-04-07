
import { Button } from '@heroui/button';
import { Alert02Icon, Delete02Icon } from 'hugeicons-react';
import { Modal, ModalBody, ModalContent, ModalFooter, useDisclosure } from '@heroui/modal'

import { useDeleteCompany } from '../hooks/useDeleteCompany';
import { CompanySummary } from '../interfaces/company-summary.interface';
import { heroUIStyles } from '@/lib/heroui-styles';

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
                size='lg'
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                classNames={heroUIStyles.modal}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody className='flex-row items-center'>
                                <div className='bg-body text-red-700 p-4 rounded-full'>
                                    <Alert02Icon/>
                                </div>
                                <div>
                                    <h3 className='font-semibold text-lg'>Advertencia!</h3>
                                    <p>Esta accion eliminara todos los datos de la empresa <span className='font-semibold'>{company.name}</span></p>
                                </div>
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
