import { createBrowserRouter } from "react-router-dom";
import Login from "./features/Auth/pages/Login";
import Register from "./features/Auth/pages/Register";
import ProtectedRoute from "./global/utils/ProtectedRoute";
import MainLayout from "./layout/Mainlayout";
import DashboardAdmin from "./features/Admin/Pages/DashboardAdmin";
import UserManagement from "./features/Admin/Pages/UserManagement";
import LeaderBoard from "./features/Admin/Pages/LeaderBoard";
import BinPages from "./features/Admin/Pages/BinPages";
import Marketplace from "./features/Admin/Pages/Marketplace";
import UserDetails from "./features/Admin/Pages/UserDetails";

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
                element: <UserManagement />
            },
            {
                path: "/user-management/:id",
                element: <UserDetails />
            },
            {
                path: "/bin",
                element: <BinPages />
            },
            {
                path: "/leaderboard",
                element: <LeaderBoard />
            },
            {
                path: "/marketplace",
                element: <Marketplace />
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