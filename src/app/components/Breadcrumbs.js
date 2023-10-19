import React from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import 'tailwindcss/tailwind.css'

const Breadcrumbs = () => {
    const router = useRouter();

    const pathSegments = router.asPath ? router.asPath.split("/").filter((segment) => segment) : [];
    
    return(
        <div className="flex flex-col items-center"> 
            <ul className="flex">
                <li>
                    <Link className='font-mono font-semibold text-lg text-purple-500 hover:text-black' href="/" style={{ fontSize: '20px' }}>
                        Home
                    </Link> &gt;
                </li>

                {pathSegments.map((segment, index) => (
                        <li key={index}> 
                            <Link className="font-mono font-semibold text-lg text-purple-500 hover:text-black"
                                href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
                                {segment} 
                            </Link>
                                {index < pathSegments.length - 1 && ' > '}
                        </li>
                ))}
            </ul>
        </div>

    )
}

export default Breadcrumbs;