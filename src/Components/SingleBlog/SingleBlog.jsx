import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import blogData from "../../data/blogData";
import './SingleBlog.css'

const SingleBlog = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id.toString() === id);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    
    <div className="blog-detail">
      <h1 className="blog-detail-title">{blog.title}</h1>
      <span className="blog-detail-data">{blog.date} • {blog.readTime}</span>
      <img className="blog-detail-image" src={`/${blog.image}`} alt={blog.title} />
      <p>{blog.description}</p>
      
    </div>
  );
};

export default SingleBlog;
