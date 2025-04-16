import { useState } from 'react';
// import { UserNavbar } from './UserNavbar';
import { Link, Outlet } from "react-router-dom";
import AdminNavbar from './AdminNavbar';


export const AdminSidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen); // This will toggle the sidebar open/close
    };

    return (
        <>
            <AdminNavbar toggleSidebar={toggleSidebar} /> {/* Pass the toggleSidebar to UserNavbar */}
            <aside

                className={`app-sidebar bg-body-secondary shadow ${isSidebarOpen ? "open" : "d-none"
                    }`}
                data-bs-theme="dark"
            >


                <div className="sidebar-brand" style={{ marginRight: "30px" }}>
                    <Link to="/" className="brand-link">
                        <h4> Budget Buddy</h4>
                    </Link>
                </div>
                <div
                    className=""
                    data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll"
                    tabIndex={-1}
                    style={{
                        marginRight: "-16px",
                        marginBottom: "-16px",
                        marginLeft: 0,
                        top: "-8px",
                        right: "auto",
                        left: "-8px",
                        width: "calc(100% + 16px)",
                        padding: 8,
                    }}
                >
                    <nav className="mt-2">
                        <ul
                            className="nav sidebar-menu flex-column"
                            data-lte-toggle="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            <li className="nav-item menu-open">
                                <Link to="/dashboard" className="nav-link active">
                                    <i className="nav-icon bi bi-speedometer" />
                                    <p>
                                        Dashboard
                                        <i className="nav-arrow bi bi-chevron-right" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/adminincome" className="nav-link">
                                            <i className="nav-icon bi bi-palette" />
                                            <p>View Income</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/adminbudget" className="nav-link">
                                            <i className="nav-icon bi bi-circle" />
                                            <p>View Budget</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/adminexpenes" className="nav-link">
                                            <i className="nav-icon bi bi-circle" />
                                            <p>View Expense</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/admintransaction" className="nav-link active">
                                    <i className="nav-icon bi bi-circle" />
                                    <p>View Transaction</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>


            </aside>
            <main className="app-main">
                <Outlet></Outlet>
            </main>
        </>
    );
};
