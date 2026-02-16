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
                     <h5 className="sub-title left-border">Faq</h5>
                     <h2 className="title">Know more about solution</h2>
                     <p className="content">Maecenas tempus, tellus eget condime honcus sem quam semper libero sit amet adipiscingem neque</p>
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
