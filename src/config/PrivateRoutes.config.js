import { intersection } from 'lodash';

// User ROLES
import { ROLES } from "./Roles.config"

// Components
import {
	Module1,
	Module2,
	Module3,
	ModuleN,
	ModuleNChild1,
	ModuleNChild2,
	ModuleNChild3,
} from "../components"

import Dashboard from "../components/private-modules/Dashs/Dashboard"
import MyProfile from "../components/private-modules/My/Profile"

// TODO:
/*
* 1. Make title optional
* 2. Make title multi type support ie: (string, node, react element)
* 3. Add child route support
* */


/*
* Route config object supports all react-router's route component props with some additional props ie: (title, permission, children)
* you can add or remove props from config object it's means it is super customizable and support upto N nesting, child routes must follow the same parent shape,
* it means the config object is same for both there is no additional key for child nor for parent.
* you can find route props from here https://reactrouter.com/web/api/Route let's take a look at some additional props
* 1. permission: permission is an optional prop and it's type is an array of roles, permission is used for allowing certain users/roles
*  	to have access of that route and if you skip/omit the permission or it's an empty array that means every authenticated user/role have access to that route.
* 2. title: title is an optional prop and it's type is a string|node it is used for mapping route link into a navigation
* 3. children: children is also an optional prop and it's type is an array of route config objects, children are used for nested routes
* */

export const PrivateRoutesConfig = [
	{
		component: Module1,
		path: '/module-1',
		title: 'Module - 1',
		exact: true,
	},
	{
		component: Module2,
		path: '/module-2',
		title: 'Module - 2',
	},
	{
		component: Module3,
		path: '/module-3',
		title: 'Module - 3',
	},
	{
		component: ModuleN,
		path: '/module-n',
		title: 'Module - N',
		permission: [
			ROLES.SUPER_ADMIN,
			ROLES.ADMIN,
			ROLES.MANAGER
		],
		children: [
			{
				component: ModuleNChild1,
				path: '/child-1',
				title: 'Child - 1',
			},
			{
				component: ModuleNChild2,
				path: '/child-2',
				title: 'Child - 2',
			},
			{
				component: ModuleNChild3,
				path: '/child-3',
				title: 'Child - 3',
				permission: [
					ROLES.SUPER_ADMIN,
					ROLES.ADMIN
				]
			}
		]
	},
	{
		component: Dashboard,
		path: '/dashboard',
		title: 'Dashboard',
		permission: [
			ROLES.SUPER_ADMIN,
			ROLES.ADMIN,
		],
	},
	{
		component: MyProfile,
		path: '/profile',
		title: 'Profile',
		permission: AllAuthedRoles(),
	},
];

function AllAuthedRoles(ROLES) {
	// returns an array of all roles names. 
	const arr=[];
	for (const key in ROLES) {
		arr.push(ROLES(key));
	}
	return arr;
}

export function getAllowedRoutes() {
	const routes = PrivateRoutesConfig;
	const roles = JSON.parse(localStorage.getItem('roles'));
	if (roles.includes('DEV') || roles.includes('GLOBAL_ADMIN')) return routes;  // pass all back.
	return routes.filter(({ permission }) => {
		if(!permission) return true;
		else if(!isArrayWithLength(permission)) return true;
		else return intersection(permission, roles).length;
	});
}
function isArrayWithLength(arr) {
	return (Array.isArray(arr) && arr.length)
}
