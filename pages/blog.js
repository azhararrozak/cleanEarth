/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head"
import { useState } from "react"
import BlogItem from "@/components/BlogItem"
import { getData } from "@/utils/dataFetch"


const blog = (props) => {

  const [blogs, setBlogs] = useState(props.blogs)

  return (
    <div className="blogs">
      <Head>
        <title>Blog Page</title>
      </Head>
      {
        blogs.length === 0 
        ? 
          <h2>Nothing Blog</h2> 
        :
          blogs.map(blog => (
            <BlogItem key={blog._id} blog={blog}/>
          ))
      }
    </div>
  )
}

export async function getServerSideProps() {
  
  const res = await getData("blog");
  console.log(res);

  return {
    props: {
      blogs: res.blogs,
      result: res.result,
    },
  };
}

export default blog
