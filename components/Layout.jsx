import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div className="content h-screen bg-gray-500">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;