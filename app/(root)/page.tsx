"use client";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
    const onOpen = useStoreModal(state => state.onOpen);
    const isOpen = useStoreModal(state => state.isOpen);

    useEffect(() => {
        if (!isOpen) {
            onOpen();
        }
    }, [isOpen, onOpen]);

    return (
        <div>
            <div className="p-4">
                Root Page
            </div>
        </div>
    );
}

export default SetupPage;