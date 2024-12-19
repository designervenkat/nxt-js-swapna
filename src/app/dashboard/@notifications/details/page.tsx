import Link from 'next/link'

export default function Details() {
    return (
        <div className="flex items-center justify-center gap-4 bg-slate-800 h-96 w-full flex-col">
            <h2 className="text-2xl text-white">Details Page</h2>

            <Link href="/dashboard">Notification</Link>
        </div>
    )
}
