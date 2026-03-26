import { createBrowserRouter } from "react-router-dom";
import Login from "./features/Auth/pages/Login";
import Register from "./features/Auth/pages/Register";
import ProtectedRoute from "./global/utils/ProtectedRoute";
import MainLayout from "./layout/Mainlayout";
import DashboardAdmin from "./features/Admin/components/DashboardAdmin";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute>
            <MainLayout />
        </ProtectedRoute>,
        children:[
            {
                index: true,
                element: <DashboardAdmin />
            },
            {
                path: "/user-management",
                element: <div>User Management</div>
            },
            {
                path: "/bin",
                element: <div>Bin Configuration</div>
            },
            {
                path: "/leaderboard",
                element: <div>Leaderboard</div>
            },
            {
                path: "/marketplace",
                element: <div>Marketplace</div>
            },
            {
                path: "/settings",
                element: <div>Settings</div>
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
])