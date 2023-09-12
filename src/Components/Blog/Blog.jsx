import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = ({ blog, handleBookmarks, markAsRead }) => {
  
  const { cover, title, author_img, author, posted_date, reading_time, hashtags, id } = blog;

  return (
    <div className='pr-8 mb-16 space-y-6'>
      <div className='w-full'>
        <img src={cover} alt="blogs-image" className='w-full rounded-lg' />
      </div>

      <div className='flex justify-between ic'>
        <div className='flex items-center gap-4'>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-24 rounded-full">
              <img src={author_img} />
            </div>
          </label>
          <div>
            <h1 className='text-xl font-bold'>{author}</h1>
            <p className='text-base font-medium'>{posted_date}</p>
          </div>
        </div>
        <div className='flex gap-3 items-center'>
          <p className='text-red-400 text-base underline'>{reading_time} min read</p>
          <FontAwesomeIcon onClick={ () => handleBookmarks(blog)} icon={faBookmark} className='h-8 cursor-pointer' />
        </div>
      </div>

      <div>
        <h1 className='text-4xl font-bold'>{ title }</h1>
      </div>
      <div className='space-x-2'>
        {
          hashtags.map((hashtag, index) => <span key={index}>#{hashtag}</span>)
        }
      </div>
      <div className='text-blue-500 font-bold'>
        <a onClick={() => markAsRead(reading_time, id)} className='underline cursor-pointer'>Mark as read</a>
      </div>
    </div>
  )
}

export default Blog