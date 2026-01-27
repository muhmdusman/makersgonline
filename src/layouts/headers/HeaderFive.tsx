"use client"
import Image from "next/image"
import Link from "next/link"
import NavMenu from "./menu/NavMenu";
import UseSticky from "@/hooks/UseSticky"
import { useState } from "react";
import NiceSelect from "@/ui/NiceSelect";

import logo_1 from "@/assets/img/logo-3.webp";
import logo_2 from "@/assets/img/logo.webp";

const HeaderFive = () => {

   const selectHandler = (e: any) => { };

   const [isActive, setIsActive] = useState<boolean>(false);
   const { sticky } = UseSticky();

   const toggleMobileMenu = () => {
      setIsActive(!isActive); // Toggle the isActive state
   };

   return (
      <>
         <nav className={`navbar navbar-area navbar-area-5 navbar-expand-lg ${sticky ? "sticky-active" : ""}`}>
            <div className="container-fluid nav-container">
               <div className="responsive-mobile-menu align-self-start">
                  <button
                     onClick={toggleMobileMenu}
                     className={`menu toggle-btn d-block d-lg-none ${isActive ? "open" : ""}`} 
                     data-target="#Iitechie_main_menu"
                     aria-expanded={isActive}
                     aria-label="Toggle navigation">
                     <span className="icon-left"></span>
                     <span className="icon-right"></span>
                  </button>
               </div>
               <div className="logo align-self-start text-start d-flex align-items-start" style={{ padding: 0, margin: 0 }}>
                  <Link className="d-none d-lg-inline-block" href="/" style={{ padding: 0, margin: 0, lineHeight: 0 }}>
                     <Image src={logo_1} alt="logo" width={96} height={40} style={{ display: 'block' }} />
                  </Link>
                  <Link className="d-lg-none d-inline-block" href="/" style={{ padding: 0, margin: 0, lineHeight: 0 }}>
                     <Image src={logo_2} alt="logo-mobile" width={80} height={35} style={{ display: 'block' }} />
                  </Link>
               </div>

               <div className={`collapse navbar-collapse align-self-start ${isActive ? "sopen" : ""}`} id="Iitechie_main_menu">
                  <ul className="navbar-nav menu-open text-lg-start">
                     <NavMenu />
                  </ul>
               </div>

               <div className="nav-right-part nav-right-part-desktop align-self-center d-none d-lg-inline-flex">
                  <NiceSelect
                     className="single-select"
                     options={[
                        { value: "01", text: "EN" },
                        { value: "02", text: "BN" },
                        { value: "03", text: "RUS" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name="language"
                     placeholder="" />
                  <ul>
                     <li>
                        Call Us +880.523.118
                     </li>
                  </ul>
                  <Link className="it-btn btn-border-white" href="/contact">Discover more</Link>
               </div>
            </div>
         </nav>
      </>
   )
}

export default HeaderFive
