const USER_INFO_LOCAL_STORAGE = 'userInfo';

export function setUserInfo(userInfo: any | {}) {
	localStorage.setItem(USER_INFO_LOCAL_STORAGE, JSON.stringify(userInfo));
}

export function getUserInfo(): any | undefined {
	return JSON.parse(localStorage.getItem(USER_INFO_LOCAL_STORAGE) || '{}');
}
