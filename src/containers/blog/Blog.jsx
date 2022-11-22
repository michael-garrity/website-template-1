import React from 'react'
import {blog01, blog02, blog03, blog04, blog05, blog06 } from './imports'
import { Article } from '../../components'
import './blog.css'

const Blog = () => {
  return (
    <div className="main__blog section__padding" id="blog">
      <div className="main__blog-heading">
        <h1>Quis nostrud exercitation ullamco laboris.</h1>
      </div>
      <div className="main__blog-container">
 
          <Article imgUrl={blog01} date="Oct 28, 2022" title="Lorem Ipsum Dolor"/>
          <Article imgUrl={blog02} date="Oct 26, 2022" title="Consectetur Adipiscing Elit"/>
          <Article imgUrl={blog03} date="Oct 24, 2022" title="Sed do Eiusmod Tempor"/>
          <Article imgUrl={blog04} date="Oct 20, 2022" title="Dolore Magna Aliqua"/>
          <Article imgUrl={blog05} date="Oct 18, 2022" title="Ut Enim ad Minim Veniam"/>
          <Article imgUrl={blog06} date="Oct 14, 2022" title="Commodo Consequat"/>
      
      </div>
    </div>
  )
}

export default Blog