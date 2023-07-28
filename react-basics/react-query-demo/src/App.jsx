import React from "react";
import "./App.css";
import Posts from './components/Posts'
import Header from "./components/Header";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Post from "./components/Post";
// import { Toaster } from 'react-hot-toast'
import { Container } from "@mui/material";

function App() {

  return (
    <>
      <Header />
      {/* <Toaster /> */}
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Navigate to={'/posts'} />} />
          <Route path="/posts" element={<Outlet />}>
            <Route index element={<Posts />}></Route>
            <Route path="/posts/:id" element={<Post />}></Route>
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
