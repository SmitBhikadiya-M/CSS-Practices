import React from "react";
import "./App.css";
import Posts from './components/Posts'
import Header from "./components/Header";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Theme, { theme } from "./components/Theme";
import Post from "./components/Post";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={'/posts'} />} />
        <Route path="/posts" element={<Outlet />}>
          <Route index element={<Posts />}></Route>
          <Route path="/posts/:id" element={<Post />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
