import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog'

const Blogs = ({ handleBookmarks, markAsRead }) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])


    return (
        <div className='w-full py-4'>
            {
                blogs.map(blog => <Blog

                    key={blog.id}
                    blog={blog}
                    handleBookmarks={handleBookmarks}
                    markAsRead={markAsRead}

                />)
            }
        </div>
    )
}

export default Blogs