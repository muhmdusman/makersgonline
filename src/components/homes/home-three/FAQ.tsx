"use client"
import CommonFaq from "@/components/common/CommonFaq"
import ConsultingForm from "@/components/forms/ConsultingForm"

const FAQ = () => {
   return (
      <div className="faq-area pd-top-100 pd-bottom-90">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 pe-xl-5 align-self-center">
                  <div className="section-title mb-0">
                     <h5 className="sub-title left-border">Frequently Asked Questions</h5>
                     <h2 className="title">Everything You Need to Know About Our Services</h2>
                     <p className="content">Get answers to common questions about our web development, app development, SEO, and IT solutions. We're here to help you make informed decisions.</p>
                  </div>
                  <div className="accordion mt-4" id="accordionExample">
                     <CommonFaq style={true} />
                  </div>
               </div>

               <div className="col-lg-6 mt-4 mt-lg-0">
                  <ConsultingForm />
               </div>
            </div>
         </div>
      </div>
   )
}

export default FAQ
