import { Navbar } from "./_components/navbar";
import Header from "./_components/header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (

        <div className="h-full bg-slate-100">
            <Header />
            <main className="main">
                {children}
            </main>
            <Navbar />
        </div>

    );
}
export default DashboardLayout;