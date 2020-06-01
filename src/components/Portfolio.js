import React, { useState } from 'react'

import { motion } from 'framer-motion'

import data from './portfolioData'

const variants = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1,
    }
}



const Portfolio = () => {
    const [slide, setSlide] = useState(0)


    const handleClickLeft = () => {
        if (slide > 0) {
                setSlide(slide - 1)
            } else {
                setSlide(data.length - 1)
            }
    }

    const handleClickRight = () => {
        if (slide < data.length - 1) {
                setSlide(slide + 1)
            } else {
                setSlide(0)
            }
    }

    return (
        <div className='content-container'>
            <motion.div initial='hidden' animate='visible' variants={variants} className='content-card'>
                <div id='portfolio-card-header'>
                    <div className='icon-container'>
                        <i class="fas fa-chevron-left" onClick={() => handleClickLeft()}></i>
                        <p>Prev</p>
                    </div>
                    <div id='portfolio-h1'>
                      <h1>{data[slide].title}</h1>  
                    </div>
                    <div class='icon-container'>
                        <i className="fas fa-chevron-right" onClick={() => handleClickRight()}></i>
                        <p>Next</p>
                    </div>
                    
                </div>
                
                <div className='inner-card-container'>
                    <div id='portfolio-card-top'>
                        <img className='portfolio-image' src={`${data[slide].img}`} />
                        <ul>
                            <li>{data[slide].bullets[0]}</li>
                            <li>{data[slide].bullets[1]}</li>
                            <li>{data[slide].bullets[2]}</li>
                        </ul>
                    </div>
                    <div id='portfolio-card-bottom'>
                        <p>{data[slide].desc}</p>
                        <div id='portfolio-links'>
                            <a href={data[slide].live} target='_blank'><i class="fas fa-desktop"></i>Live</a>
                            <a href={data[slide].code} target='_blank'><i class="fas fa-laptop-code"></i>Code</a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Portfolio
