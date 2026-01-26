"use client";

const WhatsAppButton = () => {
    const whatsappNumber = "923168100200";
    const whatsappMessage = "Hello! I'm interested in your services.";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
    )}`;

    return (
        <>
            <style jsx>{`
                .whatsappButton {
                    position: fixed;
                    bottom: 30px;
                    right: 7.3vw;
                    width: 70px;
                    height: 70px;
                    background-color: #25D366;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                }
                .whatsappButton svg {
                    width: 38px;
                    height: 38px;
                }
                @media (max-width: 768px) {
                    .whatsappButton {
                        width: 56px;
                        height: 56px;
                        bottom: 20px;
                        right: 20px;
                    }
                    .whatsappButton svg {
                        width: 30px;
                        height: 30px;
                    }
                }
                @media (max-width: 480px) {
                    .whatsappButton {
                        width: 50px;
                        height: 50px;
                        bottom: 16px;
                        right: 16px;
                    }
                    .whatsappButton svg {
                        width: 26px;
                        height: 26px;
                    }
                }
            `}</style>
            <a
                className="whatsappButton"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="white"
                >
                <path d="M20.52 3.48C18.25 1.25 15.27 0 12 0 5.38 0 .05 5.33.05 11.95c0 2.02.53 4.02 1.54 5.85L.05 24l6.35-2.01C8.1 23.33 10.02 24 12 24c6.62 0 11.95-5.33 11.95-11.95 0-3.27-1.25-6.25-3.43-8.57zM12 21.8c-1.75 0-3.45-.46-4.97-1.33l-.36-.21-3.71 1.18 1.2-3.66-.24-.37c-1.04-1.6-1.59-3.43-1.59-5.3 0-5.54 4.51-10.05 10.05-10.05 2.68 0 5.2 1.05 7.1 2.95 1.9 1.9 2.95 4.42 2.95 7.1 0 5.54-4.51 10.05-10.05 10.05zm5.5-7.5c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.025-.52-.075-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35z" />
            </svg>
        </a>
        </>
    );
};

export default WhatsAppButton;
