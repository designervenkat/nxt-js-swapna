'use client'

export default function ModalLogin({
    isOpen,
    onClose,
}: {
    isOpen: Boolean
    onClose: () => void
}) {
    if (!isOpen) return null
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg text-center flex flex-col">
                <h2 className="text-black py-4 px-8">
                    Please login to continue using Intercepting Routes
                </h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded px-3 py-2 mb-4"></input>

                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    )
}
