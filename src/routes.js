import { useRoutes } from "react-router-dom/dist";
import AuthLayout from "./layouts/Auth/AuthLayout";
import Landing from "./layouts/Landing/Landing";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import AdminLogin from "./views/Admin/Auth/AdminLogin";
import ErrorPage from "./components/ErrorBoundary/components/ErrorPage";
import AdminDashboard from './views/Admin/Dashboard'
import AdminLayout from "./layouts/Admin/AdminLayout";
import AddNewBoat from "./views/Admin/Dashboard/components/AddNewBoat";
import Organizations from "./views/Admin/Dashboard/components/Organizations";
import Islands from "./views/Admin/Dashboard/components/Islands";
import Home from "./views/User/Home/Home";
import PublicList from "./views/User/PublicList/PublicList";
import PublicGroups from "./views/User/PublicGroups/PublicGroups";
export default function Router() {
    let element = useRoutes([
        {
        path:'/',
        element : <Landing /> ,
        children:[
            {
                path:'/home',
                element:<Home />
               },
               {
                path:'/public-list',
                element: <PublicList />
               },
               {
                path:'/public-groups',
                element: <PublicGroups />
               },
        ]
       },
      
       {
        path:'auth',
        element: <AuthLayout />, 
        children : [
            { path: 'login', element: <Login />},
            { path: 'register' , element: <SignUp /> }
        ]
       },
       {
        path:'/home',
        element: <Home />,
       },
       {
        path:'/admin-login',
        element: <AdminLogin /> 
       },
       {
        path:'/admin-dashboard',
        element: <AdminDashboard />
       },
       {
        path:'admin',
        element: <AdminLayout />,
        children:[
            {path:'new-boat', element: <AddNewBoat />},
            {path:'organizations', element: <Organizations />},
            {path:'islands', element: <Islands />}
        ]
       },
       {
        path:'*',
        element: <ErrorPage /> 
       }
    ])
    return element
}