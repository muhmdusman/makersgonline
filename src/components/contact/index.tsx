import HeaderOne from "@/layouts/headers/HeaderOne"
import Breadcrumb from "../common/Breadcrumb"
import ContactArea from "./ContactArea"
import ContactMap from "./ContactMap"
import CtaArea from "../common/CtaArea"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderThree from "@/layouts/headers/HeaderThree"

const Contact = () => {
  return (
    <>
      <HeaderThree/>
      <Breadcrumb title="Contact" sub_title="Contact" />
      <ContactArea />
      {/* <ContactMap /> */}
      <CtaArea />
      <FooterOne />
    </>
  )
}

export default Contact
