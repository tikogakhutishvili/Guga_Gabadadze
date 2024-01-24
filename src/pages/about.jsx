import React from 'react';
import './styles/about.css'
import './styles/about-res.css'

const About = () => {
    return(
      <div className='main-box'>
          <h1>About</h1>
          <main>
            <div className='first-box grid'>
            <div className='head-info'>
              <div className='info'>
              <h2>Guga Gabadadze</h2>
              <h3>Graphic Designer</h3>
              <h4>BirthDay: <br/> 1998/09/30 </h4>
              </div>
              <img src="./about-imgs/photo.jpeg"  alt="" />
            </div>
            <div className='education grid'>
              <div className='title '>
                <img className='icon' src="./about-imgs/education.png" alt="" />
                <h2>Education</h2>
              </div>
              <div className='gird boxSize'>
                <div className='university'> Bachelor Degree of Design and Architecture </div>
                <img className='diplomas' src="./about-imgs/diploma.jpeg" alt="" />
              </div>
              <div className=' gird boxSize'>
                <div className='university'>Certificate of Achievement GRAPHIC DESIGN Course</div>
                <img className='diplomas' src="./about-imgs/certificate.jpeg" alt="" />
              </div>
            </div>
            </div>
            <div className='second-box'>
            I am Guga Gabadadze, from Georgia, Kutaisi. I've been working as a graphic designer for a long time but only for private clients. now I'm workring for a great advertising company which is number 2 or3 in Georgia. all my life I was working only in photoshop and illustrator, but now I can proudly say, that I create not only illustrations and photo manipulations, also video edits in after effect and 3D renders in Blender. 
       everything that is done in this 3 monts is in my projects. enjoy.
       Thank you. 
            </div>
          </main>
      </div>
        );
}
export default About;