import React,{useContext, useEffect} from "react";
import { ThemeContext } from '@/app/contexts/ThemeContext';
import Link from "next/link";

function Bottom() {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        console.log("Bottom atualizou");
    }, [theme])

    return (
        <div 
            className={`fixed bottom-0 left-0 z-50 w-full h-16 
            ${theme === 'dark' ? 'bg-gray-400' : 'bg-white text-black'}
            border-t border-gray-200`}
        >
        
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
            <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <Link href={"/"}>
                    <svg className="w-5 h-5 mb-2 text-black dark:text-black group-hover:text-purple-500 dark:group-hover:text-purple-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                    </svg>
                </Link>
                <span className="text-sm text-black dark:text-black group-hover:text-purple-500 dark:group-hover:text-purple-500">Home</span>
            </button>
            <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <Link href={"/posts"}>
                    <svg className="w-5 h-5 mb-2 text-black dark:text-black0 group-hover:text-purple-500 dark:group-hover:text-purple-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                    </svg>
                </Link>
                <span className="text-sm text-black dark:text-black group-hover:text-purple-500 dark:group-hover:text-purple-500">Posts</span>
            </button>
            <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover-bg-gray-800 group">
                <Link href={"/login"}>
                    <svg className="w-5 h-5 mb-2 ml-2 text-black dark:text-black group-hover:text-purple-500 dark:group-hover:text-purple-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                <span className="text-sm text-black dark:text-gray-400 group-hover:text-purple-500 dark:group-hover:text-purple-500">Profile</span>
                </Link>
            </button>
        </div>
        </div>
    )
}
export default Bottom;