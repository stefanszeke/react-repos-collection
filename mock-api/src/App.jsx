import { useState } from "react";
import Posts from "./Posts";
import { PostsProvider } from "./PostsProvider";
import { UserProvider } from "./UserProvider";
import User from "./User";

function App() {
  return (
    <>
      <UserProvider>
        <PostsProvider>
          <h1>App</h1>
          <Posts />
          <User />
        </PostsProvider>
      </UserProvider>
    </>
  );
}

export default App;
