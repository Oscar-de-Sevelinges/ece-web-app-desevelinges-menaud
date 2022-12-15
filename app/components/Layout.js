import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div className="content h-screen bg-gray-500">
            <Header />
            {children}
        </div>
    );
}

export default Layout;