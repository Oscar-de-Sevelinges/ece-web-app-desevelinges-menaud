import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <div className={darkMode ? ('bg-gray-800 text-white') : ('bg-white text-black')}>
                <div className="content h-screen">
                    <button className="font-bold absolute" onClick={toggleDarkMode}>
                        {darkMode ? 'Dark Mode' : 'Light Mode'}
                    </button>
                    <Header />
                    {props.children}
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Layout;