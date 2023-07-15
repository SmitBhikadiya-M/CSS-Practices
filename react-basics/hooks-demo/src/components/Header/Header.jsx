import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="brand">Hooks</div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item active">
              <Link to={"/useState"}>useState</Link>
            </li>
            <li className="nav-item">
              <Link to={"/useEffect"}>useEffect</Link>
            </li>
            <li className="nav-item">
              <Link to={"/useLayoutEffect"}>useLayoutEffect</Link>
            </li>
            <li className="nav-item">
              <Link to={"/useReducer"}>useReducer</Link>
            </li>
            <li className="nav-item">
              <Link to={"/useCallback"}>useCallback</Link>
            </li>
            <li className="nav-item">
              <Link to={"/useMemo"}>useMemo</Link>
            </li>
            <li className="nav-item">
              <Link to={"/useRef"}>useRef</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
