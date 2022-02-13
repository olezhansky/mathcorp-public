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
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <p className={classes.Text}>{t('footer.text')}</p>
                <div className={classes.SocialNetworks}>
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
                <div className={classes.Offer}>
                    <a 
                        rel="noreferrer" 
                        href="https://drive.google.com/file/d/1hnoICUL7TXP8mKD8IGIGYJ3vKFlQT6fs/view?usp=sharing" 
                        target="_blank"
                    >
                        {t('footer.offer')}
                    </a>
                </div>
                <p className={classes.SubText}>{t('footer.subText')}</p>
                <div className={classes.Copyright}>
                    <p> &#169;Copyright 2021. {t('footer.copyright')}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
