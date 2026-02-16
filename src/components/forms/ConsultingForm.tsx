"use client"

const ConsultingForm = () => {
   return (
      <form onSubmit={(e) => e.preventDefault()} className="contact-form-wrap" id="contact-form">
         <div className="consulting-contact-form mx-lg-4">
            <h3 className="mb-3">Free consulting </h3>
            <div className="single-input-inner style-bg">
               <input name="name" type="text" placeholder="Full Name" />
            </div>
            <div className="single-input-inner style-bg">
               <input name="email" type="text" placeholder="Email Address" />
            </div>
            <div className="single-input-inner style-bg">
               <textarea name="message" placeholder="Message"></textarea>
            </div>
            <div className="btn-wrap pb-3">
               <button type="submit" className="it-btn btn-base">Submit Now </button>
            </div>
         </div>
         <p className="form-messege mb-0 mt-20 text-center"></p>
      </form>
   )
}

export default ConsultingForm
