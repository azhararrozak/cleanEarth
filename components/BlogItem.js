/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const BlogItem = ({ blog }) => {
  return (
    <div className="my-3 col-xs-12 col-sm-12 col-md-12 col-lg-10 mx-auto">
      <div className="well blog">
        <Link href={`blog/${blog._id}`} legacyBehavior>
          <div className="row">
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-6">
              <div className="image">
                <img
                  className="card-img-top"
                  src={blog.images.url}
                  alt={blog.images.url}
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-6">
              <div className="blog-details d-flex flex-column justify-content-between">
                <h3 className="text-center">{blog.title}</h3>
                <p>{blog.description}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
