import { useContext, useMemo, useState } from "react";

const themeContext = createContext('light');

function App() {
    const [theme, setTheme] = useState('light');
    const  value = useMemo(() => ({theme, setTheme}), [theme]);

    return <themeContext.Provider>
        <component></component>
    </themeContext.Provider>
}

function ThemeToggle() {
    const {theme, setTheme} = useContext(themeContext);

    //btnn for set theme

}