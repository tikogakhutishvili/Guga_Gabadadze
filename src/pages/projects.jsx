import React, { useState } from 'react';
import './styles/projects.css';
import './styles/projects-res.css';

const PhotoDisplay = ({ selectedProject }) => {
    const getGoogleDriveLinks = () => {
        switch (selectedProject) {
            case 'Aftereffect':
                return [];
            case 'Blender':
                return [];
            case 'Illustrator':
                return [
                    'https://drive.usercontent.google.com/download?id=1qIFHshNpI0ADo7xJxl2YI3HV5QNNWLhx',
                    // Add more Google Drive links for Illustrator
                ];
            case 'Adobe Photoshop':
                return [];
            default:
                return [];
        }
    };

    return (
        <div>
            {getGoogleDriveLinks().map((driveLink, index) => (
                <image key={index} driveLink={driveLink} />
            ))}
        </div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projectClickHandler = (projectName) => {
        setSelectedProject(projectName);
    };

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
                    <div className="boxes" onClick={() => projectClickHandler('Adobe Photoshop')}>
                        <img className="apps" src="./icons/photoshop.png" alt="" />
                        <h3 className="names">Adobe Photoshop</h3>
                    </div>
                </div>
                <div className="assets">
                    {selectedProject && <PhotoDisplay selectedProject={selectedProject} />}
                </div>
            </main>
        </div>
    );
};

export default Projects;
