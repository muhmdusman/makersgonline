import Image from "next/image";
import service_data from "@/data/ServiceData";

// Default fallback images
import defaultDetailImage from "@/assets/img/service/service-single.webp";
import defaultDetailImage2 from "@/assets/img/service/01.webp";

// Default fallback benefits
const defaultBenefits = [
   {
      icon: "icomoon-gear",
      title: "Flexible Solutions",
      desc: "Maecenas tempus, tellus eget condime honcus sem quam semper",
   },
   {
      icon: "icomoon-time",
      title: "24/7 Unlimited Support",
      desc: "Maecenas tempus, tellus eget condime honcus sem quam semper",
   },
   {
      icon: "icomoon-team",
      title: "Expert Team",
      desc: "Maecenas tempus, tellus eget condime honcus sem quam semper",
   },
   {
      icon: "icomoon-profile",
      title: "Quality Assurance",
      desc: "Maecenas tempus, tellus eget condime honcus sem quam semper",
   },
];

interface ServiceDetailsAreaProps {
   service?: string;
}

const ServiceDetailsArea = ({ service }: ServiceDetailsAreaProps) => {
   // Find the service from service_data based on the service parameter
   const currentService = service_data.find(
      (item) => item.title.replace(/\s+/g, '').toLowerCase() === service
   );

   // Use found service or fallback to default
   const serviceTitle = currentService?.title || "It management";
   const serviceDesc = currentService?.desc || "Professional IT services tailored to your business needs.";
   const serviceDetailDesc = currentService?.detailDescription || "We provide comprehensive solutions designed to help your business thrive in the digital age.";
   
   // Use service-specific images or fallback to defaults
   const mainImage = currentService?.detailImage || defaultDetailImage;
   const secondaryImage = currentService?.detailImage2 || defaultDetailImage2;
   
   // Use service-specific key benefits or fallback to defaults
   const keyBenefits = currentService?.keyBenefits || defaultBenefits;

   return (
      <div className="project-area pd-top-120 mb-4">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="blog-details-page-content">
                     <div className="single-blog-inner">
                        <div className="thumb">
                           <Image src={mainImage} alt={serviceTitle} />
                        </div>
                        <div className="details">
                           <h2>{serviceTitle}</h2>
                           <p>{serviceDesc}</p>
                           <p>{serviceDetailDesc}</p>
                           <h4 className="pt-4 mb-4">Key benefits</h4>
                           
                           <div className="row">
                              <div className="col-md-6">
                                 {keyBenefits.slice(0, 2).map((item, index) => (
                                    <div key={index} className="media single-choose-inner">
                                       <div className="media-left">
                                          <div className="icon">
                                             <i className={item.icon}></i>
                                          </div>
                                       </div>
                                       <div className="media-body">
                                          <h4>{item.title}</h4>
                                          <p>{item.desc}</p>
                                       </div>
                                    </div>
                                 ))}
                              </div>
                              <div className="col-md-6">
                                 {keyBenefits.slice(2, 4).map((item, index) => (
                                    <div key={index} className="media single-choose-inner">
                                       <div className="media-left">
                                          <div className="icon">
                                             <i className={item.icon}></i>
                                          </div>
                                       </div>
                                       <div className="media-body">
                                          <h4>{item.title}</h4>
                                          <p>{item.desc}</p>
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                           
                           <div className="row mt-5">
                              <div className="col-12 text-center">
                                 <div className="thumb image-hover-animate border-radius-5">
                                    <Image src={secondaryImage} alt={serviceTitle} />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ServiceDetailsArea
