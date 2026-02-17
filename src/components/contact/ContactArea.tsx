
const ContactArea = () => {
   return (
      <div className="team-area info-box-two pd-top-115 pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-md-9">
                  <div className="section-title text-center">
                     <h5 className="sub-title double-line">Contact</h5>
                     <h2 className="title">Get in touch</h2>
                     <p className="content">Have a project in mind? Let’s discuss your goals and build a solution that fits your business.</p>
                  </div>
               </div>
            </div>
            <div className="row justify-content-center">
               <div className="col-lg-4 col-md-6">
                  <div className="single-contact-inner text-center">
                     <div className="icon-box">
                        <i className="icomoon-pin"></i>
                     </div>
                     <div className="details-wrap">
                        <div className="details-inner">
                           <h3>Office Address</h3>
                           <p>NSTP, NUST, H-12, Islamabad</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="single-contact-inner text-center">
                     <div className="icon-box">
                        <i className=" icomoon-email"></i>
                     </div>
                     <div className="details-wrap">
                        <div className="details-inner">
                           <h3>Email Address</h3>
                           <p>makersgonline@gmail.com</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="single-contact-inner text-center">
                     <div className="icon-box">
                        <i className=" icomoon-telephone"></i>
                     </div>
                     <div className="details-wrap">
                        <div className="details-inner">
                           <h3>Phone Number</h3>
                           <p>
                              <a href="tel:+923289566356" style={{ color: 'inherit', textDecoration: 'none' }}>
                                 +92 328 9566356
                              </a>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContactArea
