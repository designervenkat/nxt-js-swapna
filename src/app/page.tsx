import Image from 'next/image'

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Image
                    className="dark:invert"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
                <h2 className="text-2xl my-4">Intercepting Routes</h2>

                <p>
                    Intercepting routes allows you to load a route from another
                    part of your application within the current layout.
                    <br />
                    <br />
                    This routing paradigm can be useful when you want to display
                    the content of a route without the user switching to a
                    different context.
                </p>
            </main>
        </div>
    )
}
