/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { getData } from "@/utils/dataFetch";

const DetailBlog = (props) => {
  const [blog] = useState(props.blog);
  return (
    <div className="blog-detail col-xs-12 col-sm-12 col-md-7 col-lg-8 mx-auto">
      <div className="blog-content blog-container">
        <a href="http://localhost:3000/blog" className="back-blog">Back To Blogs</a>
        <h3>{blog.title}</h3>
        <div className="col-xs-12 col-sm-10 col-md-12 col-lg-12">
          <img src={blog.images.url} />
        </div>
        <div className="col-xs-12 col-sm-10 col-md-12 col-lg-12">
          <p>{blog.description}</p>
          <p>{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  console.log(id);

  const res = await getData(`blog/${id}`);
  console.log(res);

  return {
    props: {
      blog: res.blog,
    },
  };
}

export default DetailBlog;
