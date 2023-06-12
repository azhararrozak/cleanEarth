import { useState } from "react";
import { getData } from "@/utils/dataFetch";

const DetailBlog = (props) => {
  const [blog] = useState(props.blog);
  return (
    <div>
      <img src={blog.images.url} />
      <h3>{blog.title}</h3>
      <p>{blog.description}</p>
      <p>{blog.content}</p>
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
