import React, { useState } from 'react'
import fixedImg from '../../assets/icons/fixed-email.svg'
import { socialNetworks } from '../../data/data'
import classes from './FixedEmail.module.scss'

const FixedEmail = () => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle(state => !state)
    }
    return (
        <div className={classes.Images} onClick={handleClick} data-aos='fade-up'>
            <div className={classes.ImagesInner}>
                <>
                <div className={classes.Lines}>
                    <div className={toggle ? classes.LineTopTransform : classes.LineTop}></div>
                    <div className={toggle ? classes.LineCenterTransform : classes.LineCenter}></div>
                    <div className={toggle ? classes.LineBottomTransform : classes.LineBottom}></div>
                </div>
                <img src={fixedImg} alt="img"/>
                </>
            </div>
            <ul className={toggle ? classes.SocialNetworksActive : classes.SocialNetworks}>
                {socialNetworks.map((item) => {
                    return (
                        <li className={classes.SocialNetworksItem} key={item.id}>
                            <a href={item.href} target="_blank" rel="noreferrer">
                                <img src={item.img} alt="img"/>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div> 
    )
}

export default FixedEmail

