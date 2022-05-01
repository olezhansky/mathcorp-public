import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import { useMediaQuery } from '@material-ui/core'
import i18n from './i18n'
import Footer from './containers/Footer/Footer'
import Header from './containers/Header/Header'
import Modal from './components/Modals/ModalForm/ModalForm'
import Routes from './routes/Routes'
import { isMobile, useMobileOrientation } from 'react-device-detect'
import {
  setCurrentRouteFromSessionStorageAction,
  setLanguageFromLocalStorageAction,
} from './store/actions/settingsActions'
import FixedEmail from './components/FixedEmail/FixedEmail'
import WrongOrientationScreen from './components/WrongOrientationScreen/WrongOrientationScreen'
import AOS from 'aos'
import 'aos/dist/aos.css'


function App() {
  const dispatch = useDispatch()
  const { language, modal, mobileMenu } = useSelector(
    (state) => state.settingsReducer
  )
  const { isLandscape } = useMobileOrientation()
  const isHeightSmall = useMediaQuery('(max-height:600px)')
  const mobileMatch = useMediaQuery((theme) => theme.breakpoints.down('sm'))

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
    AOS.refresh()
  }, [])

  // =============Lang==============================
  useEffect(() => {
    const savedLang = localStorage.getItem('lang')
    i18n.changeLanguage(savedLang || language)
  }, [language])

  useEffect(() => {
    const languageFromLocalStorage = localStorage.getItem('lang')
    if (languageFornLocalStorage) {
      dispatch(setLanguageFromLocalStorageAction(languageFromLocalStorage))
    }
  }, [dispatch])

  // =============Current route from session storage==============================
  useEffect(() => {
    const currentRouteFromSessionStorage =
      sessionStorage.getItem('currentRoute')
    if (currentRouteFromSessionStorage) {
      dispatch(
        setCurrentRouteFromSessionStorageAction(currentRouteFromSessionStorage)
      )
    }
  }, [dispatch])

  useEffect(() => {
    if ((modal && mobileMatch) || (mobileMenu && mobileMatch)) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [modal, mobileMenu, mobileMatch])

  return (
    <div className="App">
      <I18nextProvider i18n={i18n}>
        {isMobile && isLandscape && isHeightSmall ? (
          <WrongOrientationScreen />
        ) : (
          <>
            <FixedEmail />
            <Modal />
            <Header />
            <Routes />
            <Footer />
          </>
        )}
      </I18nextProvider>
    </div>
  )
}

export default App
