import { ACTION } from '../actionTypes/actionTypes';

export const setLanguage = (lang) => ({ type: ACTION.SET_LANGUAGE, payload: lang });

export const setLanguageFromLocalStorageAction = (languageFornLocalStorage) => ({ 
    type: ACTION.SET_LANGUAGE, 
    payload: languageFornLocalStorage
});

export const closeModalAction = () => ({ 
    type: ACTION.CLOSE_MODAL, 
});
export const openModalAction = () => ({ 
    type: ACTION.OPEN_MODAL, 
});

export const closeModalConfirmAction = () => ({ 
    type: ACTION.CLOSE_MODAL_CONFIRM, 
});
export const openModalConfirmAction = () => ({ 
    type: ACTION.OPEN_MODAL_CONFIRM, 
});

export const setUserNameAction = (name) => ({ 
    type: ACTION.SET_USER_NAME, 
    payload: name
});
export const setRoutePathAction = (routePath) => ({ 
    type: ACTION.SET_ROUTE_PATH, 
    payload: routePath
});
export const setCurrentRouteFromSessionStorageAction = (currentRouteFromSessionStorage) => ({ 
    type: ACTION.SET_CURRENT_ROUTE_FROM_SESSION_STORAGE, 
    payload: currentRouteFromSessionStorage
});

