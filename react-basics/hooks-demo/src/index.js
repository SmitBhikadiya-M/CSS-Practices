import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseStateDemo, {
  UseStateDemoAsString,
} from "./components/Hooks/UseStateDemo";
import UseReducerDemo from "./components/Hooks/UseReducerDemo";
import UseEffectDemo from "./components/Hooks/UseEffectDemo";
import UseLayoutEffectDemo from "./components/Hooks/UseLayoutEffectDemo";
import UseMemoDemo from "./components/Hooks/UseMemoDemo";
import UseCallbackDemo from "./components/Hooks/UseCallbackDemo";
import UseRefDemo from "./components/Hooks/UseRefDemo";

const root = ReactDOM.createRoot(document.getElementById("root"));
async function renderApp() {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route path="/useState/output" element={<UseStateDemo />}></Route>
          <Route path="/useReducer/output" element={<UseReducerDemo />}></Route>
          <Route path="/useEffect/output" element={<UseEffectDemo />}></Route>
          <Route
            path="/useLayoutEffect/output"
            element={<UseLayoutEffectDemo />}
          ></Route>
          <Route path="/useMemo/output" element={<UseMemoDemo />}></Route>
          <Route
            path="/useCallback/output"
            element={<UseCallbackDemo />}
          ></Route>
          <Route path="/useRef/output" element={<UseRefDemo />}></Route>
          <Route path="*" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

renderApp();
