import React from 'react'
import facebookImg from '../../assets/images/footer/facebook.png'
import instagramImg from '../../assets/images/footer/instagram.png'
import classes from './Footer.module.scss'
import Logo from '../../components/Logo/Logo'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()
    return (
        <div className={classes.Wrapper}>
            <div className="container">
                <div className={classes.Logo}   
                    data-aos="fade-right"
                    data-aos-duration="500"
                >
                    <Logo />
                </div>
                <p className={classes.Text}
                    data-aos="fade-right"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1000"
                >{t('footer.text')}</p>
                <div className={classes.SocialNetworks}
                     data-aos="fade-right"
                     data-aos-duration="1500"
                >
                    <a 
                        rel="noreferrer"
                        href="https://m.facebook.com/pg/math.corporation.kyiv/reviews/?ref=page_internal&mt_nav=0" 
                        target="_blank" 
                        className={classes.SocialNetworksImg}
                    >
                        <img src={facebookImg} alt="img"/>
                    </a>
                    <a 
                        rel="noreferrer"
                        href="https://www.instagram.com/math.corporation/?utm_medium=copy_link" 
                        target="_blank" 
                        className={classes.SocialNetworksImg}
                    >
                        <img src={instagramImg} alt="img"/>
                    </a>
                </div>
                <p className={classes.Text}
                     data-aos="fade-right"

                     data-aos-duration="1500"
                >{t('footer.subText')}</p>
                <div className={classes.Copyright}
                     data-aos="fade-right"
                     data-aos-duration="2000"
                >
                    <p> &#169;Copyright 2021. {t('footer.copyright')}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
