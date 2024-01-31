import React, { useState } from 'react';
import './styles/projects.css';
import './styles/projects-res.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isFontBigger, setIsFontBigger] = useState(false);

    const projectClickHandler = (projectName) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
        if (selectedProject && isFontBigger) {
            setIsFontBigger(false);
        }

        setSelectedProject(projectName);
        setIsFontBigger(true);
    };

    const projectPhotos = {
        Aftereffect: [],
        Blender: [
            "https://lh3.googleusercontent.com/d/1fXucrvQ9EnwKX9w8x6IIQ4Ark7KmA59w",
            "https://lh3.googleusercontent.com/d/1DPywWqYuAWnjS8HruAQr1RYwdm7owxv5",
            "https://lh3.googleusercontent.com/d/1OYaZIu6tWFVn7SaJLGkUo5tRQnBUXgmy",
            "https://lh3.googleusercontent.com/d/1icFYaLTDUwocY71ZLYgEKBr6YNHUGzor",
            "https://lh3.googleusercontent.com/d/1g-EbB2M8frCgrunRGTxjmP1kU0_nuYaB",
            "https://lh3.googleusercontent.com/d/1qZN4dCEVa_msGDTysdNczMHl5pd6XziZ"

        ],
        Illustrator: [
            "https://lh3.googleusercontent.com/d/1qIFHshNpI0ADo7xJxl2YI3HV5QNNWLhx",
            "https://lh3.googleusercontent.com/d/1_OEkQ1dqkA2CIBRWK_pGT4n-FlZyZkAs",
            "https://lh3.googleusercontent.com/d/1dPN7ZZM925iUDrfSHhgGuqHY2zPxI0Uf",
            "https://lh3.googleusercontent.com/d/1Q43Smh4CSGIPgc46KspPPA_x3b2xTxKa",
            "https://lh3.googleusercontent.com/d/1IfND_qtDyK7R__u1TvL2VZGIDK5cybn4",
            "https://lh3.googleusercontent.com/d/1B3SV3D7HHoLV5iJX4h-p-8gf--f1mT8Q",
            "https://lh3.googleusercontent.com/d/1XH8b5GuGAxKU-LqRxMbfe4bjAulp7rJ0",
            "https://lh3.googleusercontent.com/d/1sKl73wiknxrP71NxOUzkb7keLFPw_zRG",
            "https://lh3.googleusercontent.com/d/1Ok2or5uTNeHX-lBRoVX9XBAwohEokBWI",
            "https://lh3.googleusercontent.com/d/1llFYHKQPvRTSfT7IRscKp6A4fkLIPh98",
            "https://lh3.googleusercontent.com/d/1lVYsd-_dRrC4p3DXdohdWTxQvnr5Dv0w",
            "https://lh3.googleusercontent.com/d/1nPIpYUYhayTQitorUjpkCd4gwXGVG3S4",
            "https://lh3.googleusercontent.com/d/1dk-hDmDpxVaSzUeO2-GEJfpr7aEuncvu",
            "https://lh3.googleusercontent.com/d/1v6h7Xi8QvSzgcPKlsZwgGeadsDdL5wV9",
            "https://lh3.googleusercontent.com/d/1bnGGIAaKV4E9BR6rTYF922UO-jzP885Z",
            "https://lh3.googleusercontent.com/d/1ty0KiwvK6mf2n0iWZD7tFLKatk-B2Apn"

        ],
        AdobePhotoshop: [
            "https://lh3.googleusercontent.com/d/1T1jMpHfdrJfHtPcdcmg_iv07GxRtjzTJ",
            "https://lh3.googleusercontent.com/d/1vE8GYnEqrYxEpcrBUUY8-t080lJOw0Xe",
            "https://lh3.googleusercontent.com/d/1yDyifl1Ib_BbfHw7hwZHiXRBFYCRPUkY",
            "https://lh3.googleusercontent.com/d/1H0KFaUJ3XKVC7eO_rWaC0SKpUflil0wP",
            "https://lh3.googleusercontent.com/d/1A4JJigoBhJAGJaoAaJuH8pA_hMqyxeLU",
            "https://lh3.googleusercontent.com/d/1qmAytRqd0ITBf635azHApx3H87f06WMe",
            "https://lh3.googleusercontent.com/d/1KYwEWKG5Jpah32c22q6mHy02MwQ5U2EL",
            "https://lh3.googleusercontent.com/d/1yC8yvA2cJHZx3uaOqn2HBmXBUcLny6Mw"
        ],
    };

    const projectVideos = {
        Aftereffect: [
            
            "https://drive.google.com/file/d/19g5n9TC1ru9KXYrGz1UeJRGgh7NOv8Ky/preview",
            "https://drive.google.com/file/d/1wH_30jdRMuPnRyJLr1bwT-ipgZoRXX26/preview",
            "https://drive.google.com/file/d/1q7UUBKOg547M-aHTj6RoyP7gUTw81iGn/preview",
            "https://drive.google.com/file/d/1khomvRE_4lLLOe1hvl_xgC2akB67TkyQ/preview"
        ],
        Blender: [
            "https://drive.google.com/file/d/11BclUI56Bx0-8ZlhEJ__b1ZivCig6DRb/preview",
            "https://drive.google.com/file/d/1km-qOePfYIab_2hCLSgoiuwgebk8PGjq/preview",
            "https://drive.google.com/file/d/1Z8CMERqiaGDTkwy-awIV-O_x3Qkqv06D/preview",
            "https://drive.google.com/file/d/1PLJAFTNAG60btONXOfMNOlWApdjpdpD6/preview",
            "https://drive.google.com/file/d/1DPywWqYuAWnjS8HruAQr1RYwdm7owxv5/preview",
            "https://drive.google.com/file/d/1ZWeMxlKalC1KfX3GH-5uzf--5y7mWlds/preview",
            "https://drive.google.com/file/d/1gBZ0SaoDDIMVjXxOaJPxCGVaWCiQjqg6/preview",
            "https://drive.google.com/file/d/12H910jNjVAZ9Xfn90sq20O86oi8iRpPQ/preview"

        ],
        Illustrator: [],
        AdobePhotoshop: [],
    };

    const projectMedia = selectedProject ? (
        <>
            {projectPhotos[selectedProject] && projectPhotos[selectedProject].map((photoUrl, index) => (
                <img
                key={index}
                className='proj-photos'
                src={photoUrl}
                alt={`Project ${selectedProject} - Photo ${index + 1}`}
                />
                ))}
           {projectVideos[selectedProject] && projectVideos[selectedProject].map((videoUrl, index) => (
               <iframe
               allowFullScreen
               className='proj-videos'
               key={index}
               src={videoUrl}
               controls
               type='mp4'
               title={`Project ${selectedProject} - Video ${index + 1}`}
                />           
               
               
               ))}

               </>
    ) : null;

    return (
        <div>
            <h1>Projects</h1>
            <main className="proj-main">
                <div className="project-names">
                    <div className="boxes" onClick={() => projectClickHandler('Aftereffect')}>
                        <img className={`apps ${selectedProject === 'Aftereffect' && isFontBigger ? 'bigger-logo' : ''}`} src="./icons/aftereffect.png" alt="" />
                        <h5 className={`names ${selectedProject === 'Aftereffect' && isFontBigger ? 'bigger-font' : ''}`}>Aftereffect</h5>
                    </div>
                    <div className="boxes" onClick={() => projectClickHandler('Blender')}>
                        <img className={`apps ${selectedProject === 'Blender' && isFontBigger ? 'bigger-logo' : ''}`} src="./icons/blender.png" alt="" />
                        <h5 className={`names ${selectedProject === 'Blender' && isFontBigger ? 'bigger-font' : ''}`}>Blender</h5>
                    </div>
                    <div className="boxes" onClick={() => projectClickHandler('Illustrator')}>
                        <img className={`apps ${selectedProject === 'Illustrator' && isFontBigger ? 'bigger-logo' : ''}`} src="./icons/illustrator.png" alt="" />
                        <h5 className={`names ${selectedProject === 'Illustrator' && isFontBigger ? 'bigger-font' : ''}`}>Illustrator</h5>
                    </div>
                    <div className="boxes" onClick={() => projectClickHandler('AdobePhotoshop')}>
                        <img className={`apps ${selectedProject === 'AdobePhotoshop' && isFontBigger ? 'bigger-logo' : ''}`} src="./icons/photoshop.png" alt="" />
                        <h5 className={`names ${selectedProject === 'AdobePhotoshop' && isFontBigger ? 'bigger-font' : ''}`}>Adobe Photoshop</h5>
                    </div>
                </div>
                <div className="assets">
                    {projectMedia}
                </div>
            </main>
        </div>
    );
};

export default Projects;
