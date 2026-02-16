"use client";
import Image, { StaticImageData } from "next/image";

interface ProjectDetails {
   title: string;
   description: string;
   type: string;
   langages: string;
   platform: string;
   country: string;
   url: string;
}

interface ProjectModalProps {
   isOpen: boolean;
   onClose: () => void;
   title: string;
   thumb: StaticImageData | string;
   details: ProjectDetails;
}

const ProjectModal = ({ isOpen, onClose, title, thumb, details }: ProjectModalProps) => {
   if (!isOpen) return null;

   return (
      <>
         <style jsx>{`
            .modal-overlay {
               position: fixed;
               top: 0;
               left: 0;
               right: 0;
               bottom: 0;
               background-color: rgba(0, 0, 0, 0.75);
               display: flex;
               align-items: center;
               justify-content: center;
               z-index: 10000;
               padding: 20px;
               overflow-y: auto;
            }
            .modal-content {
               background: white;
               border-radius: 12px;
               max-width: 700px;
               width: 100%;
               max-height: 90vh;
               overflow-y: auto;
               position: relative;
               box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            }
            .modal-header {
               position: relative;
               height: 300px;
               border-radius: 12px 12px 0 0;
               overflow: hidden;
            }
            .modal-header img {
               width: 100%;
               height: 100%;
               object-fit: cover;
            }
            .close-button {
               position: absolute;
               top: 15px;
               right: 15px;
               background: rgba(255, 255, 255, 0.95);
               border: none;
               width: 40px;
               height: 40px;
               border-radius: 50%;
               font-size: 24px;
               cursor: pointer;
               display: flex;
               align-items: center;
               justify-content: center;
               color: #333;
               transition: all 0.3s ease;
               z-index: 10;
               box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            }
            .close-button:hover {
               background: white;
               transform: rotate(90deg);
            }
            .modal-body {
               padding: 35px;
            }
            .modal-title {
               font-size: 28px;
               font-weight: 700;
               color: #151423;
               margin-bottom: 25px;
               font-family: var(--heading-font);
            }
            .detail-item {
               margin-bottom: 20px;
               padding-bottom: 20px;
               border-bottom: 1px solid #f0f0f0;
            }
            .detail-item:last-child {
               border-bottom: none;
               margin-bottom: 0;
               padding-bottom: 0;
            }
            .detail-label {
               font-size: 14px;
               font-weight: 600;
               color: var(--main-color);
               text-transform: uppercase;
               letter-spacing: 0.5px;
               margin-bottom: 8px;
               display: block;
            }
            .detail-value {
               font-size: 16px;
               color: #616161;
               line-height: 1.6;
            }
            .languages-list {
               display: flex;
               flex-wrap: wrap;
               gap: 8px;
            }
            .language-tag {
               background: #f5f7fa;
               padding: 6px 14px;
               border-radius: 20px;
               font-size: 14px;
               color: #333;
               font-weight: 500;
            }
            .live-url-link {
               color: var(--main-color);
               text-decoration: none;
               word-break: break-all;
               transition: all 0.3s ease;
               display: inline-flex;
               align-items: center;
               gap: 8px;
            }
            .live-url-link:hover {
               color: var(--main-color2);
            }
            .live-url-link i {
               font-size: 14px;
            }
            @media (max-width: 768px) {
               .modal-content {
                  margin: 20px;
               }
               .modal-header {
                  height: 220px;
               }
               .modal-body {
                  padding: 25px 20px;
               }
               .modal-title {
                  font-size: 24px;
               }
            }
         `}</style>
         
         <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
               <div className="modal-header">
                  <Image src={thumb} alt={title} fill style={{ objectFit: 'cover' }} />
                  <button className="close-button" onClick={onClose}>×</button>
               </div>
               <div className="modal-body">
                  <h2 className="modal-title">{details.title}</h2>
                  <p style={{ marginBottom: '20px', color: '#666', lineHeight: '1.6' }}>{details.description}</p>
                  
                  <div className="detail-item">
                     <span className="detail-label">Type</span>
                     <div className="detail-value">{details.type}</div>
                  </div>
                  
                  <div className="detail-item">
                     <span className="detail-label">Technologies</span>
                     <div className="detail-value">{details.langages}</div>
                  </div>
                  
                  <div className="detail-item">
                     <span className="detail-label">Platform</span>
                     <div className="detail-value">{details.platform}</div>
                  </div>
                  
                  <div className="detail-item">
                     <span className="detail-label">Country</span>
                     <div className="detail-value">{details.country}</div>
                  </div>
                  
                  <div className="detail-item">
                     <span className="detail-label">Live URL</span>
                     <a 
                        href={`https://${details.url}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="live-url-link detail-value"
                     >
                        {details.url}
                        <i className="fas fa-external-link-alt"></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ProjectModal;
