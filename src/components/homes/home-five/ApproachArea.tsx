import Image, { StaticImageData } from "next/image";

import approachThumb_1 from "@/assets/img/home-cyber/tab/3.webp";
import approachIcon_1 from "@/assets/img/home-cyber/about/icon-3.webp";
import approachIcon_2 from "@/assets/img/home-cyber/about/icon-4.webp";
import approachIcon_3 from "@/assets/img/home-cyber/about/icon-5.webp";

interface DataType {
  id: number;
  icon: StaticImageData;
  title: string;
  desc: string;
  class_name?: string;
}

const approach_data: DataType[] = [
  {
    id: 1,
    class_name: "",
    icon: approachIcon_1,
    title: "Discovery & Planning",
    desc:
      "We start by understanding your business goals, target audience, and market positioning. Our team conducts thorough research and planning to create a strategic roadmap.",
  },
  {
    id: 2,
    class_name: "",
    icon: approachIcon_2,
    title: "Design & Development",
    desc:
      "Our expert designers and developers create beautiful, functional solutions tailored to your brand. We use latest technologies and best practices for optimal results.",
  },
  {
    id: 3,
    icon: approachIcon_3,
    title: "Testing & Optimization",
    desc:
      "Rigorous testing ensures quality and performance. We continuously optimize for speed, usability, and search engine visibility to maximize your ROI.",
  },
];

const ApproachArea = () => {
  return (
    <div className="row pd-top-110">
      {/* LEFT IMAGE */}
      <div className="col-lg-6 col-md-6 px-md-3 align-self-center">
        <div className="thumb mb-4 mb-lg-0 text-center text-lg-start">
          <Image src={approachThumb_1} alt="img" width={700} height={500} className="img-fluid" />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="col-lg-6 col-md-6 align-self-center">
        <div className="section-title text-center text-lg-start">
          <h2 className="title mb-4">Our Development Process</h2>
          <p>
            We follow a comprehensive, client-focused approach to deliver
            exceptional digital solutions and measurable business results.
          </p>
        </div>

        {approach_data.map((item) => (
          <div
            key={item.id}
            className="single-security-wrap-2 text-center text-lg-start d-flex flex-column flex-lg-row align-items-center mb-4"
          >
            {/* ICON */}
            <div className="thumb me-lg-3">
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
                className="mx-auto d-lg-inline-block"
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* TEXT */}
            <div className="details mt-2 mt-lg-0">
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApproachArea;

