import {
    Box,
    Container,
    createTheme,
    CssBaseline,
    Grid,
    ThemeProvider,
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import Post from "./Post";

export const Banner = () => {
  return (
    <Container maxWidth={false}>
          <main>
            <Post
              image="https://blog.hdwallsource.com/wp-content/uploads/2015/05/beautiful-women-fashion-wallpaper-43119-44149-hd-wallpapers.jpg"
              imageText="Apsikirpkit"
              title="Grožio paslaugos jums"
            />
            <Box sx={{ flexGrow: "inherit" }}>
            </Box>
          </main>
          
        </Container>
  )
};
export default Banner;
