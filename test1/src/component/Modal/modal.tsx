import React, { useCallback, useEffect, useRef, useState } from "react"
import type { MouseEventHandler } from "react"

import Portal, { createContainer } from './Portal/Portal'

import Styles from "./styles.module.scss"

const MODAL_CONTAINER_ID = "modal-container-id"

type Props = {
    onClose?: () => void
    children: React.ReactNode | React.ReactNode[]
};

export const Modal = (props: Props) => {
    const { onClose, children } = props

    const rootRef = useRef<HTMLDivElement>(null)
    const [isMounted, setMounted] = useState(false)

    useEffect(() => {
        createContainer({ id: MODAL_CONTAINER_ID })
        setMounted(true)
    }, [])

    useEffect(() => {
        const handleWrapperClick = (event: MouseEvent) => {
            const { target } = event

            if (target instanceof Node && rootRef.current === target) {
                onClose?.()
            }
        };
        const handleEscapePress = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose?.()
            }
        };

        window.addEventListener("click", handleWrapperClick)
        window.addEventListener("keydown", handleEscapePress)

        return () => {
            window.removeEventListener("click", handleWrapperClick)
            window.removeEventListener("keydown", handleEscapePress)
        };
    }, [onClose])

    const handleClose: MouseEventHandler<
        HTMLDivElement | HTMLButtonElement
    > = useCallback(() => {
        onClose?.()
    }, [onClose])

    return isMounted ? (
        <Portal id={MODAL_CONTAINER_ID}>
            <div className={Styles.wrap} ref={rootRef} data-testid="wrap">
                <div className={Styles.content}>
                    <button
                        type="button"
                        className={Styles.closeButton}
                        onClick={handleClose}
                        data-testid="modal-close-button"
                    >
                        Х
                    </button>
                    {children}
                </div>
            </div>
        </Portal>
    ) : null
}

