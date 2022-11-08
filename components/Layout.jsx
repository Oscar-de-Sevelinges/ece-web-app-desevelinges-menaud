import Navbar from "./Navbar";
import Footer from "./Footer";
import Title from "./Title";

const Layout = ({ children }) => {
    return (

        <div className="content h-screen bg-gray-500">
            <Title />
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;