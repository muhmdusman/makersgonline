"use client"
import Image from "next/image"
import Link from "next/link"
import NavMenu from "./menu/NavMenu";
import UseSticky from "@/hooks/UseSticky"
import { useState } from "react";
import HeaderSearchbar from "./menu/HeaderSearchbar";
import NiceSelect from "@/ui/NiceSelect";

const HeaderFive = () => {

   const selectHandler = (e: any) => { };

   const [isActive, setIsActive] = useState<boolean>(false);
   const { sticky } = UseSticky();
   const [isSearch, setIsSearch] = useState<boolean>(false);

   const toggleMobileMenu = () => {
      setIsActive(!isActive); // Toggle the isActive state
   };

   return (
      <>
         <nav className={`navbar navbar-area navbar-area-5 navbar-expand-lg ${sticky ? "sticky-active" : ""}`}>
            <div className="container-fluid nav-container">
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
                  <a onClick={() => setIsSearch(true)} style={{ cursor: "pointer" }} className="search-bar-btn">
                     <i className="fa fa-search"></i>
                  </a>
               </div>

               <div className={`collapse navbar-collapse ${isActive ? "sopen" : ""}`} id="Iitechie_main_menu">
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
                     name=""
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

         <HeaderSearchbar isSearch={isSearch} setIsSearch={setIsSearch} />
      </>
   )
}

export default HeaderFive
