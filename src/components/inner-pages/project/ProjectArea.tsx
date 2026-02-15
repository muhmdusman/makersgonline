"use client"
import React, { useState } from "react";
import Image from "next/image";
import inner_project_data from "@/data/InnerProjectData";
import ProjectModal from "./ProjectModal";
import { ProjectDetails } from "@/types/project.types";
import { StaticImageData } from "next/image";

const project_data = inner_project_data.filter((items) => items.page === "project_2");

const ProjectArea = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedProject, setSelectedProject] = useState<{
      title: string;
      thumb: StaticImageData;
      details: ProjectDetails;
   } | null>(null);

   const handleCardClick = (title: string, thumb: StaticImageData, details: ProjectDetails) => {
      setSelectedProject({ title, thumb, details });
      setIsModalOpen(true);
   };

   const closeModal = () => {
      setIsModalOpen(false);
      setSelectedProject(null);
   };

   return (
      <>
         <style jsx>{`
            .project-card-wrapper {
               display: flex;
               height: 100%;
            }
            .single-project-inner.style-two {
               min-height: 280px;
               display: flex;
               flex-direction: column;
               width: 100%;
            }
            .single-project-inner.style-two .thumb {
               flex-shrink: 0;
               height: 280px;
               width: 100%;
               overflow: hidden;
               position: relative;
            }
            .single-project-inner.style-two .thumb img {
               width: 100%;
               height: 100%;
               object-fit: cover;
            }
            .single-project-inner.style-two .details-wrap {
               flex-grow: 1;
               display: flex;
               flex-direction: column;
            }
         `}</style>
         
         <section className="project-area pd-top-115 pd-bottom-90">
            <div className="container">
               <div className="all-item-section">
                  <div className="row justify-content-center">
                     {project_data.map((project) => (
                        <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                           <div className="project-card-wrapper">
                              <div 
                                 className="single-project-inner style-two"
                                 onClick={() => project.thumb && project.title && project.details && handleCardClick(project.title, project.thumb, project.details)}
                                 style={{ cursor: 'pointer' }}
                              >
                                 <div className="thumb">
                                    {project.thumb && <Image src={project.thumb} alt="img" />}
                                 </div>
                                 <div className="details-wrap">
                                    <h3>{project.title}</h3>
                                    <p>{project.desc}</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {selectedProject && (
               <ProjectModal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  title={selectedProject.title}
                  thumb={selectedProject.thumb}
                  details={selectedProject.details}
               />
            )}
         </section>
      </>
   )
}

export default ProjectArea
