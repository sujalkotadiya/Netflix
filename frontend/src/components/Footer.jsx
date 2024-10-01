import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="max-w-6xl mx-auto px-4">
                <p className="text-center mb-6 text-sm md:text-base">
                    Questions? Call{" "}
                    <Link href="tel:000-800-919-1694" className="hover:underline">
                        000-800-919-1694
                    </Link>
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-center md:text-left">
                    <div>
                        <Link href="#" className="hover:underline">
                            FAQ
                        </Link>
                    </div>
                    <div>
                        <Link href="#" className="hover:underline">
                            Help Centre
                        </Link>
                    </div>
                    <div>
                        <Link href="#" className="hover:underline">
                            Account
                        </Link>
                    </div>
                    <div>
                        <Link href="#" className="hover:underline">
                            Media Centre
                        </Link>
                    </div>
                    <div>
                        <Link href="#" className="hover:underline">
                            Investor Relations
                        </Link>
                    </div>
                    <div>
                        <Link href="#" className="hover:underline">
                            Jobs
                        </Link>
                    </div>
                    <div>
                        <Link href="#" className="hover:underline">
                            Ways to Watch
                        </Link>
                    </div>
                    <div>
                        <Link href="#" className="hover:underline">
                            Terms of Use
                        </Link>
                    </div>
                    <div>
                        <Link href="#" className="hover:underline">
                            Privacy
                        </Link>
                    </div>
                    <div>
                        <Link href="#" className="hover:underline">
                            Cookie Preferences
                        </Link>
                    </div>
                    <div>
                        <Link href="#" className="hover:underline">
                            Corporate Information
                        </Link>
                    </div>
                    <div>
                        <Link href="#" className="hover:underline">
                            Contact Us
                        </Link>
                    </div>
                    <div>
                        <Link href="#" className="hover:underline">
                            Speed Test
                        </Link>
                    </div>
                    <div>
                        <Link href="#" className="hover:underline">
                            Legal Notices
                        </Link>
                    </div>
                    <div>
                        <Link href="#" className="hover:underline">
                            Only on Netflix
                        </Link>
                    </div>
                </div>



                <p className="text-start text-gray-500 mt-6 text-md">Netflix India</p>
            </div>
        </footer>
    );
};

export default Footer;
