import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

const Main = () => {

    const context = useContext(ThemeContext);

    return <>
        <main className={`main ${context.theme ? 'main-dark' : ''}`}>
            FOOTER 
        </main>
    </>
}

export default Main;