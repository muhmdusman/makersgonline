"use client"
import SocialIcon from "@/components/common/SocialIcon"
import team_data from "@/data/TeamData"
import Image from "next/image"
import Slider from "react-slick"

// Custom arrow components
const PrevArrow = (props: any) => {
   const { className, onClick } = props;
   return (
      <button
         type="button"
         aria-label="Previous"
         className={`${className || ""} team-arrow prev`}
         onClick={onClick}
         style={{
            position: 'absolute',
            left: '-60px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: '2px solid var(--main-color)',
            background: '#fff',
            color: 'var(--main-color)',
            fontSize: '18px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
         }}
         onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--main-color)';
            e.currentTarget.style.color = '#fff';
         }}
         onMouseLeave={(e) => {
            e.currentTarget.style.background = '#fff';
            e.currentTarget.style.color = 'var(--main-color)';
         }}
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
         className={`${className || ""} team-arrow next`}
         onClick={onClick}
         style={{
            position: 'absolute',
            right: '-60px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: '2px solid var(--main-color)',
            background: '#fff',
            color: 'var(--main-color)',
            fontSize: '18px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
         }}
         onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--main-color)';
            e.currentTarget.style.color = '#fff';
         }}
         onMouseLeave={(e) => {
            e.currentTarget.style.background = '#fff';
            e.currentTarget.style.color = 'var(--main-color)';
         }}
      >
         <i className="fa fa-arrow-right" aria-hidden="true" />
      </button>
   );
};

const sliderSettings = {
   dots: false,
   arrows: true,
   infinite: true,
   speed: 500,
   slidesToShow: 4,
   slidesToScroll: 1,
   prevArrow: <PrevArrow />,
   nextArrow: <NextArrow />,
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 3,
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 2,
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 1,
            arrows: false,
         }
      }
   ]
};

const Team = ({ style }: any) => {
   const items = team_data.filter((item) => item.page === "home_1");

   return (
      <div className={`team-area ${style ? "pd-bottom-90" : "pd-top-100 "}`}id="team">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-md-10">
                  <div className="section-title text-center">
                     <h5 className="sub-title double-line">Expert Team</h5>
                     <h2 className="title">Meet Our Talented Team of Professionals</h2>
                     <p className="content">A passionate team of developers, designers, and digital strategists dedicated to transforming your vision into reality.</p>
                  </div>
               </div>
            </div>

            <div className="row">
               <div className="col-12" style={{ position: 'relative', padding: '0 60px' }}>
                  <Slider {...sliderSettings}>
                     {items.map((item) => (
                        <div key={item.id} style={{ padding: '0 8px' }}>
                           <div className="single-team-inner text-center" style={{
                              height: '380px',
                              display: 'flex',
                              flexDirection: 'column',
                              width: '100%'
                           }}>
                              <div className="thumb" style={{
                                 width: '100%',
                                 height: '260px',
                                 overflow: 'hidden',
                                 position: 'relative',
                                 flex: 'none'
                              }}>
                                 <Image 
                                    src={item.img} 
                                    alt="img" 
                                    style={{
                                       width: '100%',
                                       height: '100%',
                                       objectFit: 'cover'
                                    }}
                                 />
                              </div>
                              <div className="details-wrap" style={{
                                 flex: '1',
                                 display: 'flex',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 padding: '20px 10px'
                              }}>
                                 <div className="details-inner" style={{
                                    width: '100%'
                                 }}>
                                    <h4 style={{
                                       overflow: 'hidden',
                                       textOverflow: 'ellipsis',
                                       whiteSpace: 'nowrap',
                                       marginBottom: '5px',
                                       fontSize: '18px'
                                    }}>
                                       {item.title}
                                    </h4>
                                    <p style={{
                                       overflow: 'hidden',
                                       textOverflow: 'ellipsis',
                                       whiteSpace: 'nowrap',
                                       margin: 0,
                                       fontSize: '14px'
                                    }}>{item.designation}</p>
                                 </div>
                              </div>
                              <div className="hover-details-wrap">
                                 <div className="hover-details-inner">
                                    <h4>{item.title}</h4>
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
         </div>
      </div>
   );
}

export default Team
