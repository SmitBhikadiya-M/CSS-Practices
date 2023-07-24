import React from "react";
import "./App.css";
import { useQuery, useMutation } from "@tanstack/react-query";

const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

function wait(duration) {
  return new Promise((res) => setTimeout(res, duration, "resolve"));
}

function App() {
  useQuery({
    queryKey: ["posts"],
    queryFn: wait(1000).then(() => [...POSTS]),
  });

  return <div>Hello</div>;
}

export default App;
