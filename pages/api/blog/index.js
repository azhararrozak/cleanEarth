/* eslint-disable import/no-anonymous-default-export */
import connectDB from "@/utils/connectDB";
import Blog from "@/models/blogModel";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getBlogs(req, res);
      break;
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.json({
      status: "success",
      result: blogs.length,
      blogs,
    });

  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};