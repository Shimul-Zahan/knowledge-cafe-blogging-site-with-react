import React from 'react'

const Bookmarks = ({bookmark}) => {
  return (
    <div className='w-full bg-red-500 rounded-lg text-xl font-medium'>
      <div className=' bg-red-500 px-4 py-1 w-full'>
        <h1 className='bg-white rounded-lg p-4 my-4'>{bookmark.title}</h1>
      </div>
    </div>
  )
}

export default Bookmarks