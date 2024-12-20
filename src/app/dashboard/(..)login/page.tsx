'use client'
import ModalLogin from '@/components/ModalLogin'
import { useState } from 'react'

export default function Login() {
    const [isModalOpen, setIsModalOpen] = useState(true)

    const closeModal = () => {
        setIsModalOpen(false)
    }
    return (
        <div className="h-screen w-full grid place-content-center">
            <ModalLogin isOpen={isModalOpen} onClose={() => closeModal} />
        </div>
    )
}
