import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import Modal from './components/Modals/ModalForm/ModalForm'
import ModalConfirm from './components/Modals/ModalConfirm/ModalConfirm'
import Routes from "./routes/Routes";
import { 
  setCurrentRouteFromSessionStorageAction, 
  setLanguageFromLocalStorageAction, 
} from "./store/actions/settingsActions";
import FixedEmail from "./components/FixedEmail/FixedEmail";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const dispatch = useDispatch();
  const language  = useSelector((state) => state.settingsReducer.language)

  useEffect(() => {
    AOS.init({
        duration : 1000,
        once: true,
    });
    AOS.refresh();
    
  }, []);
  
  // =============Lang==============================
  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    i18n.changeLanguage(savedLang || language);
  }, [language]);

  useEffect(() => {
    const languageFornLocalStorage = localStorage.getItem('lang')
    if (languageFornLocalStorage) {
      dispatch(setLanguageFromLocalStorageAction(languageFornLocalStorage))
    }
  }, [dispatch])

 // =============Current route from session storage==============================
 useEffect(() => {
  const currentRouteFromSessionStorage = sessionStorage.getItem('currentRoute')
  if (currentRouteFromSessionStorage) {
    dispatch(setCurrentRouteFromSessionStorageAction(currentRouteFromSessionStorage))
  }
}, [dispatch])
  return (
    <div className="App">
       <I18nextProvider i18n={i18n}>
        <FixedEmail />
        <Modal />
        <ModalConfirm />
        <Header />
        <Routes />
        <Footer />
      </I18nextProvider>
    </div>
  );
}

export default App;
