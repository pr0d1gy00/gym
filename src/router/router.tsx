import { createBrowserRouter } from "react-router-dom";
import ContainerApp from "../shared/container/components/ContainerApp";
import LoginForm from "../features/login/components/LoginForm";
import RegisterForm from "../features/register/components/RegisterForm";

export const router = createBrowserRouter([

	{
		element:<ContainerApp/>,
		children:[
			{path:'/',element:<LoginForm/>},
			{path:'routines',element:<RegisterForm/>}
		]
	}
])