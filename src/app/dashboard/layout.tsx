export default function DashboardLayout({
    children,
    notifications,
    reports,
    admin,
    user,
    login,
}: Readonly<{
    children: React.ReactNode
    notifications: React.ReactNode
    reports: React.ReactNode
    admin: React.ReactNode
    user: React.ReactNode
    login: React.ReactNode
}>) {
    const isAdmin = false

    const isLogin = false

    return isLogin ? (
        <div className="bg-black h-screen w-full p-10">
            <div>{children}</div>
            {/* Regular Apporach */}
            {/* <div className="grid grid-cols-2 gap-10">
                <div>
                    <Suspense fallback="Notification loading...">
                        <Notification />
                    </Suspense>
                </div>
                <div>
                    <Suspense fallback="Reports loading...">
                        <Reports />
                    </Suspense>
                </div>
            </div> */}

            {/* <div className="grid grid-cols-2 gap-10">
                <div>{notifications}</div>
                <div>{reports}</div>
            </div> */}
            <div className="grid grid-cols-2 gap-10">
                <>{isAdmin ? <div>{admin}</div> : <div>{user}</div>}</>
            </div>
        </div>
    ) : (
        login
    )
}
