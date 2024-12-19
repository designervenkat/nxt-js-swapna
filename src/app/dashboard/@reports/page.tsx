export default async function Reports() {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return (
        <div className="flex items-center justify-center gap-4 bg-slate-800 h-96 w-full">
            <h2 className="text-2xl text-white">Reports</h2>
        </div>
    )
}
