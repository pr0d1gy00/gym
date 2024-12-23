import { createBrowserRouter } from "react-router-dom";
import ContainerApp from "../shared/container/components/ContainerApp";
import LoginForm from "../features/login/components/LoginForm";
import RegisterForm from "../features/register/components/RegisterForm";
import Forum from "../features/forum/components/Forum";

export const router = createBrowserRouter([

	{
		element:<ContainerApp/>,
		children:[
			{path:'/login',element:<LoginForm/>},
			{path:'/register',element:<RegisterForm/>},
			{path:'/forum',element:<Forum/>}
		]
	}
])