"use client"
import Image, { StaticImageData } from "next/image"
import { useState } from "react";

import bannerImg from "@/assets/img/home-cyber/tab/1.webp"
import bannerListImg from "@/assets/img/home-cyber/tab/icon-shild.webp"

const tab_title: string[] = ["Our Mission", "Why Choose Us", "Our Approach"];

interface DataType {
   desc: JSX.Element;
   list: {
      icon: StaticImageData;
      title: string;
   }[];
}[];

const tab_content: DataType[] = [
   {
      desc: (<>We empower businesses through innovative digital solutions. Our mission is to help companies transform their digital presence through cutting-edge web development, mobile applications, and strategic SEO services that drive real results.</>),
      list: [{ icon: bannerListImg, title: "Innovative digital transformation" }, { icon: bannerListImg, title: "Delivering measurable business growth" }],
   },
   {
      desc: (<>With years of combined experience, our expert team brings proven methodology and best practices to every project. We focus on delivering measurable ROI and sustainable growth for your business.</>),
      list: [{ icon: bannerListImg, title: "Expert team with proven track record" }, { icon: bannerListImg, title: "Results-driven approach and methodology" }],
   },
   {
      desc: (<>We follow a comprehensive approach: discovery and strategy, design and development, testing and optimization, and continuous improvement. Your success is our success.</>),
      list: [{ icon: bannerListImg, title: "Comprehensive discovery and planning" }, { icon: bannerListImg, title: "Agile development and continuous optimization" }],
   },
]

const AboutOne = () => {

   // Define state to keep track of the active tab
   const [activeTab, setActiveTab] = useState(0);

   // Handle tab click event
   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };

   return (
      <div className="about-area pd-bottom-120 px-lg-0 px-3">
         <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-12">
               <div className="thumb mb-4 mb-lg-0">
                  <Image src={bannerImg} alt="img" />
               </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-12 align-self-center">
               <div className="section-title px-xl-4 px-lg-3 px-0 mb-0">
                  <h2 className="title mb-3 mb-lg-4">Build Your Digital Success with MakersGoOnline - Your Trusted Development Partner</h2>
               </div>
               <div className="about-tab-5 px-xl-4 px-lg-3 px-0">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                     {tab_title.map((tab, index) => (
                        <li key={index} className="nav-item">
                           <button onClick={() => handleTabClick(index)} className={activeTab === index ? 'nav-link active' : 'nav-link'}>
                              {tab}
                           </button>
                        </li>
                     ))}
                  </ul>

                  <div className="tab-content" id="pills-tabContent">
                     {tab_content.map((item, index) => (
                        <div key={index} className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`} id="pills-home">
                           <p>{item.desc}</p>
                           <ul>
                              {item.list.map((list, index) => (
                                 <li key={index} className="align-self-center">
                                    <div className="icon">
                                       <Image src={list.icon} alt="img" />
                                    </div>
                                    {list.title}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AboutOne
