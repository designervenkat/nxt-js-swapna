import Link from 'next/link'

export default async function Notifications() {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    return (
        <div className="flex items-center justify-center gap-4 w-full h-full bg-slate-800 flex-1 flex-col">
            <h2 className="text-2xl text-white">Notifications</h2>

            <Link href="/dashboard/details">Read more</Link>
        </div>
    )
}
