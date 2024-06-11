import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { getUserInfo } from './helper';

function ProtectedRoutes() {
    const userInfo = React.useMemo(() => getUserInfo(), []);

	return Boolean(userInfo?.data?.userInfo?.firstName) ? (
	    <Outlet />
	) : (
		<Navigate to='/signin' />
	);
}

export default ProtectedRoutes;
