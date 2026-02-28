"use client"
import Image from "next/image"
import Link from "next/link"
import NavMenu from "./menu/NavMenu";
import UseSticky from "@/hooks/UseSticky"
import { useState } from "react";

const HeaderThree = () => {

   const [isActive, setIsActive] = useState<boolean>(false);
   const { sticky } = UseSticky();

   const toggleMobileMenu = () => {
      setIsActive(!isActive); // Toggle the isActive state
   };

   return (
      <>
         <nav className={`navbar navbar-area navbar-expand-lg navbar-area-3 ${sticky ? "sticky-active" : ""}`}>
            <div className="container nav-container">
               <div className="responsive-mobile-menu">
                  <button
                     onClick={toggleMobileMenu}
                     className={`menu toggle-btn d-block d-lg-none ${isActive ? "open" : ""}`} data-target="#Iitechie_main_menu"
                     aria-expanded="false" aria-label="Toggle navigation">
                     <span className="icon-left"></span>
                     <span className="icon-right"></span>
                  </button>
               </div>
               <div className="logo">
                  <Link className="d-none d-lg-inline-block" href="/"><Image src="/assets/img/file.svg" alt="logo" width={140} height={72} style={{ width: '100%', height: 'auto', maxWidth: '140px' }} /></Link>
                  <Link className="d-lg-none d-inline-block" href="/"><Image src="/assets/img/file.svg" alt="logo" width={110} height={56} style={{ width: '100%', height: 'auto', maxWidth: '110px' }} /></Link>
               </div>
               <div className="nav-right-part nav-right-part-mobile">
               
               </div>
               <div className={`collapse navbar-collapse ${isActive ? "sopen" : ""}`} id="Iitechie_main_menu">
                  <ul className="navbar-nav menu-open text-lg-end">
                     <NavMenu />
                  </ul>
               </div>
               <div className="nav-right-part nav-right-part-desktop align-self-center">
               </div>
            </div>
         </nav>

      </>
   )
}

export default HeaderThree
