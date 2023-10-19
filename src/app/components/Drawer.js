import Link from "next/link";
import React, {useContext} from "react";
import { ThemeContext } from '@/app/contexts/ThemeContext'

const Drawer = ({ isOpen, onClose }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const drawerStyle = {
        transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
    }

    return(
    <div
        className={`fixed top-0 left-0 h-full w-64 ${theme === 'dark' ? 'bg-gray-400' : 'bg-white text-black'} p-4`}
        style={drawerStyle}
    >
        <label className="relative inline-flex items-center cursor-pointer">
        <input 
            type="checkbox"
            value=""
            className="sr-only peer"
            onClick={toggleTheme}
            checked={theme === 'dark'}
        ></input>

        <div 
            className={`w-11 h-6 ${theme === 'dark' ? 
            'bg-gray-700 peer-checked:bg-purple-500 ':
            'bg-gray-200 peer-checked:white '} peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600`}>
        </div>

        <span
            className="ml-3 text-sm font-medium"
        >    
            {theme === 'dark' ? 'Tema Escuro' : 'Tema claro'}
        </span>

        </label>

            <button onClick={onClose} type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-black bg-transparent hover:bg-purple-500 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">

                <li>
                    <Link href={"/"}>
                        <div className="font-mono font-semibold text-lg text-black hover:text-purple-500 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                            >
                            <path d="M12.223 11.641l-.223.22-.224-.22a2.224 2.224 0 00-3.125 0 2.13 2.13 0 000 3.07L12 18l3.349-3.289a2.13 2.13 0 000-3.07 2.225 2.225 0 00-3.126 0z" />
                            <path d="M21.707 11.293l-9-9a.999.999 0 00-1.414 0l-9 9A1 1 0 003 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 00.707-1.707zM18.001 20H6v-9.585l6-6 6 6V15l.001 5z" />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
                        </div>
                    </Link>
                </li>
                <li>
                <Link href={"/login"}>
                    <div className="font-mono font-semibold text-lg text-black hover:text-purple-500 flex items-center">
                        <svg className="flex-shrink-0 w-5 h-5 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                        </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Login</span>
                    </div>
                </Link>
                </li>
                <li>
                    <Link href={"/sobre"}>
                        <div className="font-mono font-semibold text-lg text-black hover:text-purple-500 flex items-center">
                        <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                            >
                            <path d="M864 248H728l-32.4-90.8a32.07 32.07 0 00-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z" />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">Sobre</span>
                        </div>
                    </Link>
                </li>
                <li>
                <Link href={"/posts"}>
                    <div className="font-mono font-semibold text-lg text-black hover:text-purple-500 flex items-center">
                    <svg
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        >
                        <path d="M8 4.5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7zm3.5.878c1.482-1.42 4.795 1.392 0 4.622-4.795-3.23-1.482-6.043 0-4.622zM2.5 5a.5.5 0 000 1h3a.5.5 0 000-1h-3zm0 2a.5.5 0 000 1h3a.5.5 0 000-1h-3zm0 2a.5.5 0 000 1h3a.5.5 0 000-1h-3z" />
                        <path
                         fillRule="evenodd"
                         d="M0 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H2z"
                        />
                     </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Posts</span>
                    </div>
                    </Link>
                </li>
                <li>
                <Link href={"/albuns"}>
                    <div className="font-mono font-semibold text-lg text-black hover:text-purple-500 flex items-center">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                        >
                        <path d="M11.024 11.536L10 10l-2 3h9l-3.5-5z" />
                        <path d="M11.006 7.497 A1.503 1.503 0 0 1 9.503 9 A1.503 1.503 0 0 1 8 7.497 A1.503 1.503 0 0 1 11.006 7.497 z" />
                        <path d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2zm0 14H5V5c0-.806.55-.988 1-1h13v12z" />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Álbuns</span>
                    </div>
                </Link>
                </li>
            </ul>
        </div>
    </div>

    )
}
export default Drawer;