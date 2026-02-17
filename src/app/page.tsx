import HomeThree from "@/components/homes/home-three";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Makers Go Online - Web Development & IT Solutions in Pakistan",
  description: "Transform your business with Makers Go Online. Expert web design, development, SEO, app deployment, and ecommerce solutions. Fast, scalable, and tailored to your needs.",
  keywords: "web development Pakistan, web design, SEO services, app development, ecommerce solutions, IT services Islamabad, digital marketing, Makers Go Online",
  authors: [{ name: "Makers Go Online" }],
  openGraph: {
    title: "Makers Go Online - Web Development & IT Solutions",
    description: "Expert IT solutions including web design, development, SEO, and app deployment services in Pakistan.",
    url: "https://makersgoonline.com",
    siteName: "Makers Go Online",
    type: "website",
    images: [
      {
        url: "/assets/img/banner/1.webp",
        width: 1200,
        height: 630,
        alt: "Makers Go Online - IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Makers Go Online - Web Development & IT Solutions",
    description: "Expert IT solutions including web design, development, SEO, and app deployment services.",
    images: ["/assets/img/banner/1.webp"],
  },
};

const index = () => {
  return (
    <Wrapper>
      <HomeThree />
    </Wrapper>
  )
}

export default index