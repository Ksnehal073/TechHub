import { createContext, useContext, useReducer } from "react";
import { reducer } from './reducer'

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const initialState = {
        name: '',
        image: '',
        para:'',
    }

    const updateHomePage = () => {
        return dispatch({
            type: 'UPDATE_HOME',
            payload: {
                name: 'Snehal Karki',
                image: './images/hero.svg',
                para:'Freelancer Developer',
            }
        })
    }
    const updateAboutPage = () => {
        return dispatch({
            type: 'UPDATE_ABOUT',
            payload: {
                name: 'Snehal Karki',
                para: "Coding has always been a part of me, and with my first experiences with HTML and CSS going back to my primary school years, I knew I have to pursue my love for technology and stay active in the tech community.",
                image: '/images/about.svg',
            }
        })
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    return <AppContext.Provider value={{ ...state, updateAboutPage, updateHomePage }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalStyle = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider } 