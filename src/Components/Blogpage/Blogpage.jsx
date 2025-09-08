import React from "react";
import BlogCardLeft from "../blogCardRight/blogCardLeft";
import blogData from "../../data/blogData";


const BlogPage = () => {
  return (
    <div className="blog-page-container">
      {blogData.map((blog) => (
        <BlogCardLeft
          key={blog.id}
          title={blog.title}
          description={blog.description}
          date={blog.date}
          readTime={blog.readTime}
          image={blog.image}
        />
      ))}
    </div>
  );
};

export default BlogPage;
