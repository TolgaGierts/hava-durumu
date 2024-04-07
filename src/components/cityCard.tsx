import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




const CityCard = ({ city }) => {



    return (
        <>
            <div className="max-w-xs overflow-hidden rounded-lg shadow-lg border border-2 border-gray-200 hover:transition hover:scale-105 cursor-pointer dark:bg-gray-50 dark:text-gray-800">
                <div className="flex items-end justify-end relative h-32 p-4 dark:bg-gray-500 bg-center bg-cover bg-card-bg">
                    <div className="absolute flex items-center right-0 top-0 bg-slate-200 p-1 text-black rounded-md m-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                </svg>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Secenekler</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Hava durumunu gor</DropdownMenuItem>
                                <DropdownMenuItem>Sehri sil</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                </div>
                <div className="flex justify-between p-4">

                    <div className="flex flex-col flex-1 gap-4">
                        <p className="px-2 py-1 text-sm tracking-widest font-bold text-gray-900 dark:text-gray-800 uppercase dark:bg-gray-100 bg-opacity-75 rounded shadow-lg">{city.city}</p>
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <span className="text-5xl font-semibold">36°</span>
                                <span className="text-lg dark:text-gray-600">/ 28°</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-12 h-12 dark:text-yellow-600 fill-current shrink-0">
                                <path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
                                <rect width="32" height="48" x="240" y="16"></rect>
                                <rect width="32" height="48" x="240" y="448"></rect>
                                <rect width="48" height="32" x="448" y="240"></rect>
                                <rect width="48" height="32" x="16" y="240"></rect>
                                <rect width="32" height="45.255" x="400" y="393.373" transform="rotate(-45 416 416)"></rect>
                                <rect width="32.001" height="45.255" x="80" y="73.373" transform="rotate(-45 96 96)"></rect>
                                <rect width="45.255" height="32" x="73.373" y="400" transform="rotate(-45.001 96.002 416.003)"></rect>
                                <rect width="45.255" height="32.001" x="393.373" y="80" transform="rotate(-45 416 96)"></rect>
                            </svg>
                        </div>
                        <p className="text-sm">Mostly sunny throughout the day.
                            <span>6-10 KPH winds.</span>
                        </p>
                    </div>
                    <div className="text-sm leading-loose">
                        <div className="flex items-center"></div>
                    </div>
                </div>
                <div className="p-4 border-t dark:text-gray-600 dark:border-gray-300">
                    <div className="flex items-center space-x-1">
                        <span className="font-bold flex-1">Su an</span>
                        <span className="text-lg">14°</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <span className="font-bold flex-1">Hissedilen </span>
                        <span className="text-lg">14°</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <span className="font-bold flex-1">Nem</span>
                        <span className="text-lg">14%</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CityCard

