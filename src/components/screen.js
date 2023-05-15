export default function Screen({children}) {
    return (<div className="flex items-center justify-center h-screen">
        <div className="w-[800px] h-[480px] shadow bg-slate-200">
            {children}
        </div>
    </div>)
}
