import Link from 'next/link'
import React from 'react'

const CtaArea = () => {
   return (
      <div className="call-to-action-area pd-top-120 pd-bottom-120 text-center bg-overlay-base"
         style={{ backgroundImage: `url('/assets/img/bg/5.webp')` }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6 col-md-8">
                  <div className="single-call-to-action-inner style-white">
                     <h5>Have questions? Our team is ready to guide you with the right web and SEO solutions.</h5>
                     <h2>Need to scale your business?</h2>
                     <Link className="it-btn btn-black mt-3" href="/contact">Contact Us</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CtaArea
