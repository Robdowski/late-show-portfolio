import React from 'react'

import { motion } from 'framer-motion'

const variants = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1,
    }
}

const About = () => {
    return (
        <div className='about-content-container'>
            <motion.div initial='hidden' animate='visible' variants={variants} className="about-content">
            <h1>About</h1>
            <div className='about-paragraph'>
                <p>Laborum ea laborum est esse qui exercitation pariatur. Excepteur anim dolore aliquip duis dolor excepteur velit ut consectetur. Ea exercitation deserunt reprehenderit anim amet consectetur id eu non sunt minim laborum irure. Pariatur ex est exercitation mollit consectetur cillum ipsum tempor eiusmod mollit ex. Laborum ea laborum est esse qui exercitation pariatur. Excepteur anim dolore aliquip duis dolor excepteur velit ut consectetur. Ea exercitation deserunt reprehenderit anim amet consectetur id eu non sunt minim laborum irure. Pariatur ex est exercitation mollit consectetur cillum ipsum tempor eiusmod mollit ex.</p>
                <p>
                Laborum ea laborum est esse qui exercitation pariatur. Excepteur anim dolore aliquip duis dolor excepteur velit ut consectetur. Ea exercitation deserunt reprehenderit anim amet consectetur id eu non sunt minim laborum irure. Pariatur ex est exercitation mollit consectetur cillum ipsum tempor eiusmod mollit ex.
                </p>
            </div>
            </motion.div>
        </div>
    )
}

export default About
