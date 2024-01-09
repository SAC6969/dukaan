import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <main
                className={`flex-grow flex flex-col ml-64 bg-gray-50 ${inter.className}`}
            >
                {children}
            </main>
        </div>
    );
};

export default Layout;
