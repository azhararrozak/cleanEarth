/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { getData } from "@/utils/dataFetch";
import Head from "next/head";

const DetailBlog = (props) => {
  const [blog] = useState(props.blog);
  return (
    <div className="blog-detail col-xs-12 col-sm-12 col-md-7 col-lg-8 mx-auto">
      <Head>
        <title>Detail Blog</title>
      </Head>
      <div className="blog-content blog-container">
        <a href="/blog" className="btn btn-success">Back To Blogs</a>
        <h3 className="text-center">{blog.title}</h3>
        <div className="col-xs-12 col-sm-10 col-md-12 col-lg-12">
          <img src={blog.images.url} />
        </div>
        <div className="col-xs-12 col-sm-10 col-md-12 col-lg-12">
          <p className="text-justify">{blog.content}</p>
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
