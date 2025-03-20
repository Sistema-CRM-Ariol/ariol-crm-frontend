"use client";
import { Button } from '@heroui/button';
import { Tooltip } from '@heroui/tooltip';
import { Cancel01Icon, Tick01Icon } from 'hugeicons-react';

interface ChangeStatusButtonProps {
    isActive: boolean;
    onChangeStatus: (newStatus: boolean) => void;
    tooltipLabels?: {
        activate: string;
        deactivate: string;
    };
    isPending?: boolean;
}

export const ChangeStatusButton = ({ isActive, onChangeStatus, tooltipLabels = { activate: "Activar", deactivate: "Desactivar" }, isPending = false }: ChangeStatusButtonProps) => {
    return isActive ? (
        <Tooltip className="text-white" content={tooltipLabels.deactivate} placement="top-start" color="danger" showArrow>
            <Button
                onPress={() => onChangeStatus(false)}
                isIconOnly
                size="sm"
                color="danger"
                variant="light"
                isLoading={isPending}
                isDisabled={isPending}
                startContent={<Cancel01Icon size={18} />}
            />
        </Tooltip>
    ) : (
        <Tooltip className="text-white" content={tooltipLabels.activate} placement="top-start" color="success" showArrow>
            <Button
                onPress={() => onChangeStatus(true)}
                isIconOnly
                size="sm"
                color="success"
                variant="light"
                isLoading={isPending}
                isDisabled={isPending}
                startContent={<Tick01Icon size={18} />}
            />
        </Tooltip>
    );
};
