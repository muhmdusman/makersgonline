import Image from "next/image"
import Link from "next/link"

import aboutImg_1 from "@/assets/img/about/4sm.webp"
import aboutImg_2 from "@/assets/img/about/4s.webp"
import aboutImg_3 from "@/assets/img/banner/7.webp"

const About = () => {
   return (
      <div className="about-area pd-bottom-115" id="about">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-md-9 mb-5 mb-lg-0">
                  <div className="about-mask-bg-wrap about-mask-bg-wrap-4">
                     <Image className="shape-image-sm top_image_bounce" src={aboutImg_1} alt="img" />
                     <Image className="shape-image" src={aboutImg_2} alt="img" />
                     <div className="thumb">
                        <Image src={aboutImg_3} alt="img" />
                     </div>
                  </div>
               </div>

               <div className="col-lg-6 align-self-center">
                  <div className="section-title px-lg-5 mb-0">
                     <h5 className="sub-title left-border">About US</h5>
                     <h2 className="title">Your trusted partner for digital transformation and IT excellence.</h2>
                     <p className="content-strong mt-3">We deliver cutting-edge web development, mobile apps, SEO strategies, and ecommerce solutions that drive real business growth.</p>
                     <p className="content">From startups to established enterprises, we help businesses leverage modern technology to scale faster, reach more customers, and achieve their digital goals. Our team combines technical expertise with creative thinking to build solutions that work.</p>
                     <ul className="single-list-inner style-check mt-3">
                        <li><i className="fa fa-check"></i>Expert development team</li>
                        <li><i className="fa fa-check"></i>SEO-optimized solutions</li>
                        <li><i className="fa fa-check"></i>100% client satisfaction</li>
                     </ul>
                     <div className="btn-wrap mt-4">
                        <Link className="it-btn btn-base" href="/contact">Get Started</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
