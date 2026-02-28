import Image from "next/image"
import Link from "next/link"

const HeaderTopTwo = () => {
   return (
      <div className="navbar-top style-2">
         <div className="container">
            <div className="row">
               <div className="col-lg-3 d-lg-inline-block d-none">
                  <div className="logo">
                     <Link href="/"><Image src="/assets/img/file.svg" alt="logo" width={140} height={72} style={{ width: '100%', height: 'auto', maxWidth: '140px' }} /></Link>
                  </div>
               </div>
               <div className="col-lg-3 col-md-5 align-self-center">
                  <div className="media">
                     <div className="media-left">
                        <i className="far fa-clock"></i>
                     </div>
                     <div className="media-body">
                        <h6>Office time</h6>
                        <p>Opening Hour 9:00am - 10:00pm</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-5 align-self-center">
                  <div className="media">
                     <div className="media-left">
                        <i className="far fa-envelope"></i>
                     </div>
                     <div className="media-body">
                        <h6>Office time</h6>
                        <p>Opening Hour 9:00am - 10:00pm</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 d-lg-block d-none align-self-center">
                  <div className="social-media-light text-md-end text-center">
                     <Link href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></Link>
                     <Link href="#"><i className="fab fa-twitter" aria-hidden="true"></i></Link>
                     <Link href="#"><i className="fab fa-instagram" aria-hidden="true"></i></Link>
                     <Link href="#"><i className="fab fa-pinterest" aria-hidden="true"></i></Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderTopTwo
