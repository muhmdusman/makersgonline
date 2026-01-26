import Image from "next/image"
import ApproachArea from "./ApproachArea";

import aboutThumb_1 from "@/assets/img/home-cyber/tab/2.webp";
import aboutIcon_1 from "@/assets/img/home-cyber/about/icon-1.webp";
import aboutIcon_2 from "@/assets/img/home-cyber/about/icon-2.webp";

const AboutTwo = () => {
   return (
      <div className="about-area pd-top-120 pd-bottom-120">
         <div className="row justify-content-end p-3 p-lg-0">
            <div className="col-lg-6 px-xl-5 order-lg-last text-lg-end">
               <div className="thumb">
                  <Image src={aboutThumb_1} alt="img" />
               </div>
            </div>
            <div className="col-lg-5 align-self-center order-lg-first">
               <div className="section-title">
                  <h2 className="title mb-4">Premium Development & SEO <br /> Services for Your Success</h2>
                  <p>We deliver cutting-edge web and mobile solutions <br /> that drive real business results and growth.</p>
               </div>
               <div className="single-security-wrap">
                  <div className="thumb">
                     <Image src={aboutIcon_1} alt="img" />
                  </div>
                  <div className="details">
                     <h5>Expert Development Team</h5>
                     <p>Our experienced developers specialize in web development, mobile apps, and custom solutions. We use the latest technologies and frameworks to build scalable, high-performance applications.</p>
                  </div>
               </div>
               <div className="single-security-wrap">
                  <div className="thumb">
                     <Image src={aboutIcon_2} alt="img" />
                  </div>
                  <div className="details">
                     <h5>Proven SEO Strategies</h5>
                     <p>Our SEO experts use data-driven strategies to improve your online visibility, increase organic traffic, and achieve top rankings. We stay updated with algorithm changes and best practices.</p>
                  </div>
               </div>
            </div>
         </div>
         <ApproachArea />
      </div>
   )
}

export default AboutTwo
