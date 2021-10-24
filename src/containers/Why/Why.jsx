import React from 'react'
import Title from '../../components/Title/Title'
import classes from './Why.module.scss'
import { whyData } from '../../data/data';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@material-ui/core';

const Why = () => {
    const { t } = useTranslation();
    const tabletMatch = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const mobileMatch = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    return (
        <div className={classes.Wrapper}>
            <div className="container">
                <div className={classes.Inner}>
                    <div className={classes.Title}>
                        <Title title="Чому саме ми?"/>
                    </div>
                    <ul className={classes.List}>
                        {whyData.map((item) => {
                            if (tabletMatch) {
                                return (
                                    <li 
                                        key={item.id} 
                                        className={classes.Item} 
                                        data-aos={item.aos}
                                    >
                                        <img src={item.img} alt="img"/>
                                        <p>{t(item.title)}</p>
                                    </li>
                                )
                            } else if ( mobileMatch && !tabletMatch) {
                                return (
                                    <li 
                                        key={item.id} 
                                        className={classes.Item} 
                                        data-aos={item.aosMobile} 
                                        data-aos-duration={item.durationMobile}
                                    >
                                        <img src={item.img} alt="img"/>
                                        <p>{t(item.title)}</p>
                                    </li>
                                ) 
                            }
                            return null
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Why
