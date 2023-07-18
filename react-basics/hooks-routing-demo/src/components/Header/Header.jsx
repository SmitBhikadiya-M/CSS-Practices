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
              <NavLink className={({isActive}) => isActive ? 'active': 'none'} to={"/useState"}>
                useState
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? 'active': 'none'} to={"/useEffect"}>
                useEffect
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? 'active': 'none'} to={"/useLayoutEffect"}>
                useLayoutEffect
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? 'active': 'none'} to={"/useReducer"}>
                useReducer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? 'active': 'none'} to={"/useCallback"}>
                useCallback
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? 'active': 'none'} to={"/useMemo"}>
                useMemo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? 'active': 'none'} to={"/useRef"}>
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
