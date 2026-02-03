import Link from "next/link"

interface DataType {
   icon: string;
   class_name: string;
   url: string;
}

const social_icon: DataType[] = [
   {
      icon: "fab fa-facebook-f",
      class_name: "facebook",
      url: "https://www.facebook.com/share/17ZTvJtuK8/",
   },
   {
      icon: "fab fa-instagram",
      class_name: "instagram",
      url: "https://www.instagram.com/makersgonline?igsh=dmRtZXIybjY2Ym91",
   },
]

const SocialIcon = () => {
   return (
      <>
         {social_icon.map((icon, i) => (
            <li key={i}>
               <Link className={icon.class_name} href={icon.url} target="_blank" rel="noopener noreferrer">
                  <i className={icon.icon}></i>
               </Link>
            </li>
         ))}
      </>
   )
}

export default SocialIcon
