import { ACTION } from '../actionTypes/actionTypes'

export const setLanguage = (lang) => ({
  type: ACTION.SET_LANGUAGE,
  payload: lang,
})

export const setLanguageFromLocalStorageAction = (
  languageFornLocalStorage
) => ({
  type: ACTION.SET_LANGUAGE,
  payload: languageFornLocalStorage,
})

export const closeModalAction = () => ({
  type: ACTION.CLOSE_MODAL,
})

export const openModalAction = () => ({
  type: ACTION.OPEN_MODAL,
})

export const setRoutePathAction = (routePath) => ({
  type: ACTION.SET_ROUTE_PATH,
  payload: routePath,
})

export const setCurrentRouteFromSessionStorageAction = (
  currentRouteFromSessionStorage
) => ({
  type: ACTION.SET_CURRENT_ROUTE_FROM_SESSION_STORAGE,
  payload: currentRouteFromSessionStorage,
})
export const toggleMobileMenuAction = () => ({
  type: ACTION.TOGGLE_MOBILE_MENU,
})

export const closeMobileMenuAction = () => ({
  type: ACTION.CLOSE_MOBILE_MENU,
})
export const openMobileMenuAction = () => ({
  type: ACTION.OPEN_MOBILE_MENU,
})
