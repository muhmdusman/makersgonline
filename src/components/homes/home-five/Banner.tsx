import Image from "next/image"
import Link from "next/link"

import bannerImg from "@/assets/img/banner/11.webp"

const Banner = () => {
   return (
      <div className="banner-area banner-area-5">
         <div className="bg-cover" style={{ backgroundImage: `url(/assets/img/home-cyber/banner-bg.webp)` }}>
            <div className="container-fluid custom-container">
               <div className="row">
                  <div className="col-lg-5 col-md-8 align-self-center ms-lg-auto order-lg-last">
                     <div className="thumb top_image_bounce mb-5 mb-lg-0">
                        <Image src={bannerImg} alt="img" />
                     </div>
                  </div>
                  <div className="col-lg-5 col-md-10 order-lg-first">
                     <div className="banner-inner style-white">
                        <h5>Transform Your Digital Presence</h5>
                        <h1 className="title s-animate-2">
                           Web Development, App Development & SEO Solutions
                        </h1>
                        <div className="btn-wrap s-animate-4">
                           <Link className="it-btn btn-white me-4" href="/service">Our Services</Link>
                           <Link className="it-btn btn-border-white" href="/contact">Get Started</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Banner
