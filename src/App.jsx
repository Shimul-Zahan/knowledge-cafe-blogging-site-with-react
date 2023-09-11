import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <div className='container mx-auto py-4 px-4'>
        <Header />
        <div className='flex justify-between flex-col md:flex-row lg:flex-row pt-4 px-2'>
          <Blogs />
          <Bookmarks />
        </div>
      </div>
    </>
  )
}

export default App
