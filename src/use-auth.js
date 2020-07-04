import React, { 
                useContext, 
                createContext, 
} from 'react';
import { useLocalStorage } from './use-localstorage';


const authContext = createContext();

export const ProvideAuth = ({children}) => {
    //console.log("================ In ProvideAuth()");
    const [isLoggedIn, setLoggedIn] = useLocalStorage("isLoggedIn", false);
    //const [isLoggedIn, setLoggedIn] = useState(false);
    const login = (username, password) => {
        if (username === "mark" && password === "mark") {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }

        //console.log(`login() isLoggedIn=${isLoggedIn}`);
        return isLoggedIn;
    }

    const logout = () => {
        setLoggedIn(false);
    }
    
    const auth = {
        isLoggedIn,
        login,
        logout,
    };

    return(
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
} 

export const useAuth = () => {
    return useContext(authContext);
}

