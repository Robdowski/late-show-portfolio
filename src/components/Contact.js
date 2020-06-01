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

const Contact = () => {
    return (
        <div className='content-container'>

<motion.div initial='hidden' animate='visible' variants={variants} className='content-card'>
            <h1>Contact Me</h1>
            <form
                action="https://formcarry.com/s/A1fDSooRTOQ"
                method="POST"
                accept-charset="UTF-8"
            >
                <div className="form-name">
                    <label htmlFor="name">
                        Name:{" "}
                    </label>
                    <input type="text" name="name" />
                </div>
                <div className="form-email">
                    <label htmlFor="email">
                        Email:{" "}
                    </label>
                    <input type="text" name="email" />
                </div>
                <div className="form-message">
                    <label htmlFor="message">
                        Message:{" "}
                    </label>
                    <textarea type="message" name="message" />
                </div>
                <button type='submit'>Submit</button>
            </form>
            </motion.div>
        </div>
    )
}

export default Contact
