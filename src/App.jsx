import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [initialTime, setTime] = useState(0);

  // add only unique bookmarks not allowed duplicate bookmark
  const handleBookmarks = blog => {
    const eligable = bookmarks.find(bookmark => bookmark.id === blog.id);
    if (eligable) {
      window.alert('Already exist in bookmarks.')
    } else {
      setBookmarks([...bookmarks, blog]);
    }
  }

  const markAsRead = (time, id) => {
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
    
    setTime(initialTime + time);
  }

  return (
    <>
      <div className='container mx-auto py-4 px-4'>
        <Header />
        <div className='flex justify-between flex-col md:flex-row lg:flex-row pt-10 px-2 space-x-8'>
          
          <div className='w-full md:w-2/3'>
            <Blogs handleBookmarks={handleBookmarks} markAsRead={markAsRead} />
          </div>

          <div className='w-full md:w-1/3'>
            <div className=' bg-red-500 px-4 py-1 w-full my-4 rounded-lg'>
              <h1 className='bg-white rounded-lg p-4 my-4 text-2xl font-bold text-center'>{initialTime? initialTime: '00'} Mins</h1>
            </div>
            {
              bookmarks.map(bookmark => <Bookmarks bookmark={bookmark} />)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
