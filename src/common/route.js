import React from "react";
import Home from "../pages/Home";
import Reservation from "../pages/Reservation";
import About from "../pages/About";
import Team from "../pages/Team";
import Blog from "../pages/Blog";
import Gallery from "../pages/Gallery";
import Sitemap from "../pages/Sitemap";
import NotFound from "../pages/NotFound";
import GridPost from "../components/blog/GridPost";
import SinglePost from "../components/blog/SinglePost";

export const routes = [
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/reservation",
    element: <Reservation/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/team",
    element: <Team/>
  },
  {
    path: "/news",
    element: <Blog/>,
    children: [
      { index: true, element: <GridPost/> },
      { path: "/news/:id", element: <SinglePost/> }
    ]
  },
  {
    path: "/gallery",
    element: <Gallery/>
  },
  {
    path: "/sitemap",
    element: <Sitemap/>
  },
  {
    path: "*",
    element: <NotFound/>
  }
]
