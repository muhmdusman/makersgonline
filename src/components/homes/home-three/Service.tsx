import service_data from "@/data/ServiceData"
import Image from "next/image"
import Link from "next/link"

import serviceShape_1 from "@/assets/img/shape/3.webp";
import serviceShape_2 from "@/assets/img/shape/4.webp";

const Service = () => {
   return (
      <div className="service-area bg-relative pd-top-115 pd-bottom-90" id="services">
         <Image className="shape-left-top top_image_bounce" src={serviceShape_1} alt="img" />
         <Image className="shape-right-top top_image_bounce" src={serviceShape_2} alt="img" />
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-7">
                  <div className="section-title text-center">
                     <h5 className="sub-title double-line">Our Service</h5>
                     <h2 className="title">We provide Professional Web development and Seo services</h2>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center">
               {service_data.filter((items) => items.page === "home_1").slice(1, 4).map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-service-inner style-2 text-center" style={{ backgroundImage: `url(/assets/img/bg/01.webp)` }}>
                        <div className="icon-box">
                           <i className={item.icon}></i>
                        </div>
                        <div className="details">
                           <h3><Link href={`/service-details/${item.title.replace(/\s+/g, '').toLowerCase()}`}>{item.title}</Link></h3>
                           <p>{item.desc} </p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="row justify-content-center mt-4">
               <div className="col-auto">
                  <Link href="/service" className="btn-get-started">
                     <span>Get Started</span>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Service
