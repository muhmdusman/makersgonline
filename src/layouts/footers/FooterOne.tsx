import SocialIcon from "@/components/common/SocialIcon"
import footer_data from "@/data/FooterData"
import Link from "next/link"

const FooterOne = () => {
   return (
      <footer className="footer-area bg-black bg-cover" style={{ backgroundImage: `url('/assets/img/bg/2.webp')` }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-md-6">
                  <div className="widget widget_about">
                     <h4 className="widget-title">About company</h4>
                     <div className="details">
                        <p>Address</p>
                        <p>NSTP, Nust, H-12, Islamabad.</p>
                        <ul className="social-media">
                           <SocialIcon />
                        </ul>
                     </div>
                  </div>
               </div>

               {footer_data.map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-6">
                     <div className="widget widget_nav_menu">
                        <h4 className="widget-title">{item.title}</h4>
                        <ul>
                           {item.nav_links.map((menu, i) => (
                              <li key={i}><Link href={menu.link}>{menu.title}</Link></li>
                           ))}
                        </ul>
                     </div>
                  </div>
               ))}

               <div className="col-lg-3 col-md-6">
                  <div className="widget widget_contact">
                     <h4 className="widget-title" style={{ color: '#fff' }}>Get In Touch</h4>
                     <div className="contact-info-list">
                        <div className="contact-info-item" style={{ marginBottom: '20px' }}>
                           <p className="label" style={{ color: '#fff', marginBottom: '10px' }}>Call Us</p>
                           <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <i className="fa fa-phone" style={{ color: '#4a9eff', fontSize: '18px' }}></i>
                              <a href="tel:+923437523096" className="contact-link" style={{ color: '#4a9eff', fontWeight: '500' }}>+92 343 7523096</a>
                           </div>
                        </div>
                        <div className="contact-info-item">
                           <p className="label" style={{ color: '#fff', marginBottom: '10px' }}>Email Us</p>
                           <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <i className="fa fa-envelope" style={{ color: '#4a9eff', fontSize: '18px' }}></i>
                              <a href="mailto:makersgonline@gmail.com" className="contact-link" style={{ color: '#fff' }}>makersgonline@gmail.com</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
         <div className="footer-bottom text-center">
            <div className="container">
               <div className="row">
                  <div className="col-md-12 align-self-center">
                     <p>© 2026. All Rights Reserved</p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
