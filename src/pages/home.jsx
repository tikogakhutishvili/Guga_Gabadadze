import React, { useEffect, useState } from 'react';
import './styles/home.css';
import './styles/home-res.css';

const Home = () => {
  const Popup = () => {
    const [rightCommVisible, setRightCommVisible] = useState(false);
    const [leftCommVisible, setLeftCommVisible] = useState(false);

    useEffect(() => {
      const rightCommTimeout = setTimeout(() => {
        setRightCommVisible(true);

        const leftCommTimeout = setTimeout(() => {
          setLeftCommVisible(true);
        }, 3000);

        return () => clearTimeout(leftCommTimeout);
      }, 3000);

      return () => clearTimeout(rightCommTimeout);
    }, []);
    useEffect(() => {
        const resetTimeout = setTimeout(() => {
          setRightCommVisible(false);
          setLeftCommVisible(false);
        }, 5000);
  
        return () => clearTimeout(resetTimeout);
      }, [rightCommVisible, leftCommVisible]);
  
    return (
      <div>
        {rightCommVisible && (
          <div className="right-comm">
            Hello, Welcome to my Website. I hope you'll enjoy with my Projects.
          </div>
        )}
        {leftCommVisible && (
          <div className="left-comm">
            Okay, Let's see what you've got!
          </div>
        )}
      </div>
    );
  };

  return (
    <div className='main'>
      <Popup />
    </div>
  );
};

export default Home;
