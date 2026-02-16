"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import project_data from "@/data/ProjectData";

// Custom arrows positioned at the start/end of slider width
const PrevArrow = (props: any) => {
   const { className, onClick } = props;
   return (
      <button
         type="button"
         aria-label="Previous"
         className={`${className || ""} project-arrow prev`}
         onClick={onClick}
      >
         <i className="fa fa-arrow-left" aria-hidden="true" />
      </button>
   );
};

const NextArrow = (props: any) => {
   const { className, onClick } = props;
   return (
      <button
         type="button"
         aria-label="Next"
         className={`${className || ""} project-arrow next`}
         onClick={onClick}
      >
         <i className="fa fa-arrow-right" aria-hidden="true" />
      </button>
   );
};

const settings = {
   dots: false,
   arrows: true,
   infinite: true,
   speed: 500,
   slidesToShow: 3,
   slidesToScroll: 1,
   prevArrow: <PrevArrow />,
   nextArrow: <NextArrow />,
   responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
   ],
};

const Project = () => {
   const items = project_data.filter((item) => item.page === "home_1");

   return (
      <section
         className="project-area bg-cover pd-top-115 pd-bottom-90"
         style={{ backgroundImage: `url(/assets/img/bg/10.webp)` }}
         id="projects"
      >
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-md-9">
                  <div className="section-title style-white text-center">
                     <h5 className="sub-title fs-2">Our projects</h5>
                     <h2 className="title">Introducing Our Projects</h2>
                     <p className="content">
                        Delivering end-to-end projects with a focus on quality, innovation,
                        and long-term value.
                     </p>
                  </div>
               </div>
            </div>

            <div className="row">
               <div className="col-12">
                  <Slider {...settings}>
                     {items.map((item) => (
                        <div key={item.id}>
                           <div className="single-project-inner style-two">
                              <div className="thumb">
                                 <Image src={item.img} alt={item.title} />
                              </div>
                              <div className="details-wrap">
                                 <div className="details-inner">
                                    <h3>{item.title}</h3>
                                    <p>Explore the case study</p>
                                    <Link href="/project">
                                       Project Details <i className="fa fa-arrow-right" aria-hidden="true" />
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </Slider>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Project
