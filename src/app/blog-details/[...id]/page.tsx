import BlogDetailsArea from "@/components/blogs/blog-details/BlogDetailsArea";
import Breadcrumb from "@/components/common/Breadcrumb";
import inner_blog_data from "@/data/InnerBlogData";
import Wrapper from "@/layouts/Wrapper";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import { Metadata } from "next";

interface PageProps {
   params: { id: number };
}

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
   const blogs = inner_blog_data;
   const single_blog = blogs.find((item) => Number(item.id) === Number(params.id));

   if (!single_blog) {
      return {
         title: "Blog Post Not Found - Makers Go Online",
      };
   }

   return {
      title: `${single_blog.title} - Blog | Makers Go Online`,
      description: single_blog.desc || "Read this insightful article from Makers Go Online about web development, IT solutions, and digital trends.",
      keywords: "web development blog, IT insights, tech article, Makers Go Online blog",
      openGraph: {
         title: single_blog.title,
         description: single_blog.desc,
         url: `https://makersgoonline.com/blog-details/${params.id}`,
         type: "article",
      },
   };
}

const index = ({ params }: PageProps) => {
   const blogs = inner_blog_data;
   const single_blog = blogs.find((item) => Number(item.id) === Number(params.id));

   return (
      <Wrapper>
         <HeaderOne />
         <Breadcrumb title="Our blog Details" sub_title="Blog Details" />
         <BlogDetailsArea single_blog={single_blog} key={single_blog?.id} />
         <FooterOne />
      </Wrapper>
   )
}

export default index