
import { Button } from "./button"


const Header = () => {
    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full h-16 bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
            <nav
                className="relative max-w-7xl w-full mx-auto px-4 flex justify-between sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex items-center justify-between">
                    <a
                        className="flex-none text-xl font-semibold dark:text-white"
                        href="#"
                        aria-label="Brand"
                    >
                        Hava Durumu Sorgulama
                    </a>
                </div>
                <Button className="p-3 ml-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                </Button>

            </nav>
        </header>

    )
}

export default Header