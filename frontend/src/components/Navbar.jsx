import { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut, Menu, Search } from "lucide-react";
// import { useAuthStore } from "../store/authUser";
// import { useContentStore } from "../store/content";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // const { user, logout } = useAuthStore();

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    // const { setContentType } = useContentStore();

    return (
        <header className=' max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20 text-white'>
            <div className='flex items-center gap-10'>
                <Link to='/'>
                    <img src='/netflix-logo.png' alt='Netflix Logo' className='w-32 sm:w-40 transition-transform duration-300 hover:scale-105' />
                </Link>

                {/* desktop navbar items */}
                <div className='hidden sm:flex gap-4 items-center'>
                    <Link to='/' className='hover:underline hover:text-red-600 transition-colors duration-200'>
                        Movies
                    </Link>
                    <Link to='/' className='hover:underline hover:text-red-600 transition-colors duration-200'>
                        Tv Shows
                    </Link>
                    <Link to='/history' className='hover:underline hover:text-red-600 transition-colors duration-200'>
                        Search History
                    </Link>
                </div>
            </div>

            <div className='flex gap-4 items-center'>
                <Link to={"/search"} className='hover:text-red-600 transition-colors duration-200'>
                    <Search className='size-6 cursor-pointer' />
                </Link>
                <img src="avatar2.png" alt='Avatar' className='h-8 rounded-full  cursor-pointer' />
                <Link to={'/'}>
                <LogOut className='size-6 cursor-pointer hover:text-red-600 transition-colors duration-200' />
                </Link>
                <div className='sm:hidden'>
                    <Menu className='size-6 cursor-pointer hover:text-red-600 transition-colors duration-200' onClick={toggleMobileMenu} />
                </div>
            </div>

            {/* mobile navbar items */}
            {isMobileMenuOpen && (
                <div className='w-full sm:hidden mt-4 z-50 bg-gray-800 border rounded border-gray-700'>
                    <Link to={"/"} className='block hover:underline text-white hover:text-red-600 p-2 transition-colors duration-200' onClick={toggleMobileMenu}>
                        Movies
                    </Link>
                    <Link to={"/"} className='block hover:underline text-white hover:text-red-600 p-2 transition-colors duration-200' onClick={toggleMobileMenu}>
                        Tv Shows
                    </Link>
                    <Link to={"/history"} className='block hover:underline text-white hover:text-red-600 p-2 transition-colors duration-200' onClick={toggleMobileMenu}>
                        Search History
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;
