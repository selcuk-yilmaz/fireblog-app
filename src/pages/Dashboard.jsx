import React from "react";
import { ImgDiv } from "./Dashboard.style";
import BlogCard from "../components/BlogCard";
import { Container, Grid } from "@mui/material";
import { useData } from "../helpers/crud";

const Dashboard = () => {
  const { users } = useData();
  console.log(users);
  return (
    <>
      <ImgDiv>Dashboard</ImgDiv>
      <Container>
        <Grid container justifyContent="center" spacing={4} sx={{ mt: 1 }}>
          {users?.map((user, index) => {
            return (
              <Grid item>
                <BlogCard key={index} user={user} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
