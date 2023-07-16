import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="brand">Hooks</div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink activeClassName="active" to={"/useState"}>
                useState
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName={"active"} to={"/useEffect"}>
                useEffect
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName={"active"} to={"/useLayoutEffect"}>
                useLayoutEffect
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName={"active"} to={"/useReducer"}>
                useReducer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName={"active"} to={"/useCallback"}>
                useCallback
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName={"active"} to={"/useMemo"}>
                useMemo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName={"active"} to={"/useRef"}>
                useRef
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
