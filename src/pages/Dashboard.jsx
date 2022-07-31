import React from "react";
import { HeaderText, HomeImg, ImgDiv, flexDiv } from "./Dashboard.style";
import BlogCard from "../components/BlogCard";

import { Container, Grid } from "@mui/material";


const Dashboard = () => {
  return (
    <>
      <ImgDiv>Dashboard</ImgDiv>
      <Container>
   <Grid container justifyContent="center" spacing={4} sx={{ mt: 1 }}>     
      {[1,2,3,4,5,6].map((index) => {
        return (
          <Grid item>
            <BlogCard key={index} />
          </Grid>
        );
      })}
      </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
