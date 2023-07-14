
import './header.css'

const Header = () => {
    return <>
        <header>
            <div className="brand">Hooks</div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item active">useState</li>
                    <li className="nav-item">useEffect</li>
                    <li className="nav-item">useLayoutEffect</li>
                    <li className="nav-item">useReducer</li>
                    <li className="nav-item">useCallback</li>
                    <li className="nav-item">useMemo</li>
                    <li className="nav-item">useRef</li>
                </ul>
            </nav>
        </header>
    </>
}

export default Header;