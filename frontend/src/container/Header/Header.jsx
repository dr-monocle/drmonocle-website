import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';

import { images } from '../../constants';
import './Header.scss';

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      }
    }
  }

  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: .5 }}
        className='app__header-info'
      >
        <div className="app__header-badge">
          <div className="badge-cmp">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Monocle</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className='p-text'>Developer. Designer.</p>
            <p className='p-text'>Musician. Student. More.</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ filter: ['blur(5px)', 'blur(0px)'] }}
        transition={{ duration: 1.5 }}
        className='app__header-img'
      >
        <img src={images.monocle} alt='profile_bg' />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.figma, images.node, images.react].map((circle, index) => (
          <div className="circle-cmp app__flex" key={'circle_' + index}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, 'home');