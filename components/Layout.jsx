import Navbar from "./Navbar";
import Footer from "./Footer";

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