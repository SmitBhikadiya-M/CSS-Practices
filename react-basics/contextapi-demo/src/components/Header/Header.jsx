import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/themeContext";

const Header = () => {

    const context = useContext(ThemeContext);

    return <>
        <header className={`header ${context.theme ? 'header-dark' : ''}`}>
            <div className="logo">Header</div>
            <button className="mode" onClick={()=>context.setTheme( !context.theme )}>{context.theme ? 'DARK' : 'LIGHT'}</button> 
        </header>
    </>
}

export default Header;