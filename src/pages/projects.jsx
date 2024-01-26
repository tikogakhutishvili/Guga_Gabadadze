import React, { useState } from 'react';
import './styles/projects.css';
import './styles/projects-res.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projectClickHandler = (projectName) => {
        setSelectedProject(projectName);
    };

    const projectPhotos = {
        Aftereffect: [
        ],
        Blender: [],
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

        ],
        AdobePhotoshop: [],
    };

    const projectVideos = {
        Aftereffect: [
            "",
        ],
        Blender: [],
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
                <video key={index} className='proj-videos' controls>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ))}
        </>
    ) : null;

    return (
        <div>
            <h1>Projects</h1>
            <main className="proj-main">
                <div className="project-names">
                    <div className="boxes" onClick={() => projectClickHandler('Aftereffect')}>
                        <img className="apps" src="./icons/aftereffect.png" alt="" />
                        <h3 className="names">Aftereffect</h3>
                    </div>
                    <div className="boxes" onClick={() => projectClickHandler('Blender')}>
                        <img className="apps" src="./icons/blender.png" alt="" />
                        <h3 className="names">Blender</h3>
                    </div>
                    <div className="boxes" onClick={() => projectClickHandler('Illustrator')}>
                        <img className="apps" src="./icons/illustrator.png" alt="" />
                        <h3 className="names">Illustrator</h3>
                    </div>
                    <div className="boxes" onClick={() => projectClickHandler('AdobePhotoshop')}>
                        <img className="apps" src="./icons/photoshop.png" alt="" />
                        <h3 className="names">Adobe Photoshop</h3>
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
