import React from 'react'

const Blog = ({ blog }) => {
  
  const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;

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
        <div className='flex gap-3'>
          <p className='text-red-400 text-base'>{reading_time} min read</p>
          <p>X</p>
        </div>
      </div>

      <div>
        <h1 className='text-4xl font-bold'>{ title }</h1>
      </div>
      <div className='space-x-2'>
        {
          hashtags.map(hashtag => <span>#{hashtag}</span>)
        }
      </div>
    </div>
  )
}

export default Blog