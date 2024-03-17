import { useState } from 'react'
import Posts from './Posts'
import { PostsProvider } from './PostsProvider'


function App() {


  return (
    <>
    <PostsProvider>
      <h1>App</h1>
      <Posts />
    </PostsProvider>
    </>
  )
}

export default App
