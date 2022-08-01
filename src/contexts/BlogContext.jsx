import React, { createContext, useState } from "react";
import { useData, createBlog } from "../helpers/crud";
const initialValues = {
  imageUrl: "",
  title: "",
  date: "",
  content: "",
  email: "",
};

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
  const [info, setInfo] = useState(initialValues);
  // createBlog(info);
  // setInfo(initialValues);

  return (
    <BlogContext.Provider value={{ useData }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
