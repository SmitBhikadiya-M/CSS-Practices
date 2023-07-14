import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

const Footer = () => {

    const context = useContext(ThemeContext);

    return <>
        <footer className={`footer ${context.theme ? 'footer-dark' : ''}`}>
            FOOTER 
        </footer>
    </>
}

export default Footer;