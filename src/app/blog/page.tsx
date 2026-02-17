import Blog from "@/components/blogs/blog";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Blog - Web Development Tips & IT Insights | Makers Go Online",
   description: "Read the latest articles on web development, SEO strategies, app deployment, and IT trends from Makers Go Online. Expert insights and industry updates.",
   keywords: "web development blog, IT blog Pakistan, SEO tips, programming tutorials, technology news, digital marketing insights",
   openGraph: {
      title: "Makers Go Online Blog",
      description: "Expert insights on web development, SEO, and IT solutions.",
      url: "https://makersgoonline.com/blog",
      type: "website",
   },
};

const index = () => {
   return (
      <Wrapper>
         <Blog />
      </Wrapper>
   )
}

export default index