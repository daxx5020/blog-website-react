import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Blogs from './components/Blogs'
import CreateBlog from './components/CreateBlog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-dark text-center py-2 shadow-lg'>
      <h1 className='text-white'>React with laravel blog app</h1>
    </div>
    <Routes>
        <Route path='/' element={ <Blogs />} />
        <Route path='/create' element={ <CreateBlog />} />
    </Routes>
      
    </>
  )
}

export default App
