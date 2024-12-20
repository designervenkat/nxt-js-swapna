import Link from 'next/link'

export default function Dashboard() {
    return (
        <div className="h-screen w-full grid place-content-center">
            <h2 className="text-xl">Dashboard Page</h2>
            <Link
                href="/login"
                className="bg-green-200 text-green-700 px-10 py-1 rounded-sm my-10 flex justify-center font-semibold">
                Login
            </Link>
        </div>
    )
}
