import React from 'react'
import { useTranslation } from 'react-i18next';
import classes from './About.module.scss';
import aboutImg from '../../assets/images/about/about.png'
import MyButton from '../../components/UI/Button/MyButton';


const About = () => {
    const { t } = useTranslation();
  
    return (
        <div className={classes.Wrapper}>
            <div className="container">
                <div className={classes.Inner}>
                    <div className={classes.Content} data-aos="fade-right">
                        <h1 className={classes.Title} >{t('about.title')}</h1>
                        <p className={classes.Text}>{t('about.text')}</p>
                        <p className={classes.Subtext}>{t('about.subtext')}</p>
                        <div className={classes.Button}  >
                            <MyButton variant="contained">{t('general.button')}</MyButton>
                        </div>
                    </div>
                    <div className={classes.Images} data-aos="zoom-in" data-aos-duration="2000">
                        <img src={aboutImg} alt="about"/>
                    </div>
                    <div className={classes.ButtonMobile}>
                        <MyButton variant="contained">{t('general.button')}</MyButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
