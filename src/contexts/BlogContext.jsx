import React, { createContext } from "react";
import { UseData } from "../helpers/crud";

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
  return (
    <BlogContext.Provider value={{ UseData }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
