"use client"
import SocialIcon from "@/components/common/SocialIcon"
import team_data from "@/data/TeamData"
import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick"
import { useEffect, useState } from "react"

const sliderSettings = {
   dots: false,
   arrows: false,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
};

const useIsMobile = (breakpoint = 768) => {
   const [isMobile, setIsMobile] = useState(false);
   useEffect(() => {
      const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
      const apply = () => setIsMobile(mq.matches);
      apply();
      mq.addEventListener ? mq.addEventListener("change", apply) : mq.addListener(apply);
      return () => {
         mq.removeEventListener ? mq.removeEventListener("change", apply) : mq.removeListener(apply);
      };
   }, [breakpoint]);
   return isMobile;
};

const Team = ({ style }: any) => {
   const isMobile = useIsMobile(768);
   const items = team_data.filter((item) => item.page === "home_1");

   return (
      <div className={`team-area ${style ? "pd-bottom-90" : "pd-top-100 "}`}id="team">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-md-10">
                  <div className="section-title text-center">
                     <h5 className="sub-title double-line">Expert Team</h5>
                     <h2 className="title">Meet with our  expert</h2>
                     <p className="content">A passionate team of tech experts turning ideas into powerful digital experiences.</p>
                  </div>
               </div>
            </div>

            {isMobile ? (
               <div className="row">
                  <div className="col-12">
                     <Slider {...sliderSettings}>
                        {items.map((item) => (
                           <div key={item.id}>
                              <div className="single-team-inner text-center">
                                 <div className="thumb">
                                    <Image src={item.img} alt="img" />
                                 </div>
                                 <div className="details-wrap">
                                    <div className="details-inner">
                                       <h4><Link href="/team-details">{item.title}</Link></h4>
                                       <p>{item.designation}</p>
                                    </div>
                                 </div>
                                 <div className="hover-details-wrap">
                                    <div className="hover-details-inner">
                                       <h4><a href="team-details.html">{item.title}</a></h4>
                                       <p>{item.designation}</p>
                                       <ul className="social-media mt-3">
                                          <SocialIcon />
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </Slider>
                  </div>
               </div>
            ) : (
               <div className="row">
                  {items.map((item) => (
                     <div key={item.id} className="col-lg-3 col-md-6">
                        <div className="single-team-inner text-center">
                           <div className="thumb">
                              <Image src={item.img} alt="img" />
                           </div>
                           <div className="details-wrap">
                              <div className="details-inner">
                                 <h4><Link href="/team-details">{item.title}</Link></h4>
                                 <p>{item.designation}</p>
                              </div>
                           </div>
                           <div className="hover-details-wrap">
                              <div className="hover-details-inner">
                                 <h4><a href="team-details.html">{item.title}</a></h4>
                                 <p>{item.designation}</p>
                                 <ul className="social-media mt-3">
                                    <SocialIcon />
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            )}
         </div>
      </div>
   );
}

export default Team
