/* eslint-disable import/no-anonymous-default-export */
import connectDB from "@/utils/connectDB";
import Blog from "@/models/blogModel";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getBlog(req, res);
      break;
  }
};

const getBlog = async (req, res) => {
    try {
      const { id } = req.query;
      const blog = await Blog.findById(id);
      if (!blog)
        return res.status(400).json({ err: "Nothing Post Blog" });
  
      res.json({ blog });
    } catch (err) {
      return res.status(500).json({ err: err.message });
    }
  };
