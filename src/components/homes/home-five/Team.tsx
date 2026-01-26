"use client";

import { useState } from "react";
import SocialIcon from "@/components/common/SocialIcon";
import team_data from "@/data/TeamData";
import Image from "next/image";
import Link from "next/link";

const Team = () => {
  const teamMembers = team_data.filter(
    (items) => items.page === "home_1"
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === teamMembers.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? teamMembers.length - 1 : prev - 1
    );
  };

  const item = teamMembers[currentIndex];

  return (
    <div className="team-area half-bg-base-top pd-top-90">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="title">Our Expert Team</h2>
          <p className="content">
            Meet the talented professionals behind MakersGoOnline who deliver exceptional results
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-team-inner style-4 text-center">
              <div className="thumb">
                <Image src={item.img} alt="img" />
              </div>

              <div className="details-wrap">
                <div className="details-inner">
                  <h4>
                    <Link href="/team-details">{item.title}</Link>
                  </h4>
                  <p>{item.designation}</p>

                  <ul className="social-media mt-3">
                    <SocialIcon />
                  </ul>
                </div>
              </div>
            </div>

            {/* 🔘 Controls */}
            <div className="d-flex justify-content-center gap-3 mt-4">
              <button className="btn btn-outline-primary" onClick={prevSlide}>
                Prev
              </button>
              <button className="btn btn-outline-primary" onClick={nextSlide}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
