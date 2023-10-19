import React,{useState} from 'react';
import Appbar from '@/app/components/Appbar';
import Bottom from '@/app/components/Bottom';
import Drawer from '@/app/components/Drawer';
import { useSession } from 'next-auth/react';
import CompleteProfileForm from '@/app/components/CompleteProfileForm'
import 'tailwindcss/tailwind.css'

const CompleteProfile = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState();

    const handleMenuToggle  = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    const {data: session} = useSession();
    
    return(
        <main className='min-h-screen'>
        <Appbar onMenuToggle={handleMenuToggle}></Appbar>
        <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>


        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            {session ? (
            <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Complete seu cadastro!</h1>
            <CompleteProfileForm user={session.user} />
            </div>
            ) : (
            <div className="text-center">
            <h1 className="text-3xl font-bold text-purple-500">Não logado</h1>
            </div>
            )}
        </div>

        <Bottom></Bottom>
        </main>
    );
}
export default CompleteProfile;