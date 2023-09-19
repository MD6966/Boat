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
import SingleOrganization from "./views/Admin/Dashboard/components/SingleOrg/SingleOrganization";
import { useSelector } from "react-redux";
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import ManageBoats from "./views/Admin/Dashboard/components/ManageBoats";
import ManageOrganization from "./views/Admin/Dashboard/components/ManageOrganization";
import MainPage from "./layouts/MainPage";
import Organization from "./layouts/Organization";
import OrganizationDefault from "./views/Organization/OrganizationDefault";
export default function Router() {
    const isAuthenticated = useSelector((state)=> state.admin.isAuthenticated)
    // console.log(isAuthenticated, "ADMIN");
    const isAuthenticatedUser = useSelector((state)=> state.admin.isAuthenticatedUser)
    // console.log(isAuthenticatedUser, "USER");
    const isAuthenticatedOrg = useSelector((state)=> state.admin.isAuthenticatedOrg)
    // console.log(isAuthenticatedOrg, "ORG");

    let element = useRoutes([
        {
            path:'/',
            element: <MainPage />
        },
        {element: <ProtectedRoutes isLogged={isAuthenticatedUser}/>, 
        children:[
            {
                path:'user',
                element : <Landing /> ,
                children:[
                    {
                        path:'home',
                        element:<Home />
                       },
                       {
                        path:'public-list',
                        element: <PublicList />
                       },
                       {
                        path:'public-groups',
                        element: <PublicGroups />
                       },
        
                ]
               },
        ]
    },
    {
        element: <ProtectedRoutes isLogged={isAuthenticatedOrg}/>,
        children:[
            {path:'Organization', element:<Organization />,
            children:[
                {path:'main', element: <OrganizationDefault />}
            ]
            
        }
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
        path:'/login',
        element: <AdminLogin /> 
       },
       {
        path:'/admin-dashboard',
        element: <AdminDashboard />
       },
       {
        element: <ProtectedRoutes isLogged={isAuthenticated} />,
        children:[
            {
                path:'admin',
                element: <AdminLayout />,
                children:[
                    {path:'manage-boats', element: <ManageBoats />},
                    {path:'manage-org', element: <ManageOrganization />},
                    {path:'new-boat', element: <AddNewBoat />},
                    {path:'organizations', element: <Organizations />},
                    {path:'single-organization/:id', element: <SingleOrganization />},
                    {path:'islands', element: <Islands />}
                ]
               },
        ] 
       },
      
       {
        path:'*',
        element: <ErrorPage /> 
       }
    ])
    return element
}