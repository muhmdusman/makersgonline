import BlogDetails from "@/components/blogs/blog-details";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Blog Details - Read Our Latest Articles | Makers Go Online",
   description: "Detailed insights on web development, IT solutions, and digital trends from Makers Go Online experts.",
   keywords: "blog post, web development article, IT insights, tech blog",
};

const index = () => {
   return (
      <Wrapper>
         <BlogDetails />
      </Wrapper>
   )
}

export default index