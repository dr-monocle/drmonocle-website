import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const query2 = '*[_type == "skills"]';

    client.fetch(query).then((data) => setExperience(data.sort((a, b) => b.year - a.year)));
    client.fetch(query2).then((data) => setSkills(data));
  }, []);

  return (
    <>
      <h2 className="head-text"><span>Skills</span> & Experience</h2>

      <div className="app__skills-container">
        <motion.div className='app__skills-list'>
          {skills?.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: .5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className='app__flex'>
                <img src={urlFor(skill.icon)} alt={skill.name} style={{ filter: skill.bgColor ? 'brightness(0) invert(1)' : '' }} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg');