import React, { useState } from 'react'
import Title from '../../components/Title/Title'
import locationImg from '../../assets/images/contacts/location.png'
import emailImg from '../../assets/images/contacts/email.png'
import phoneImg from '../../assets/images/contacts/phone.png'
import facebookImg from '../../assets/images/footer/facebook.png'
import instagramImg from '../../assets/images/footer/instagram.png'
import classes from './ContactsContainer.module.scss'
import MapLivoberezhna from '../../components/Maps/MapLivoberezhna/MapLivoberezhna'
import MapLukianivska from '../../components/Maps/MapLukianivska/MapLukianivska'
import { useTranslation } from 'react-i18next'

const ContactsContainer = () => {

    const { t } = useTranslation()

    const [state, setState] = useState('livoberezhna')

    const handleClick = (str) => {
        setState(str)
    }

    return (
        <div className={classes.Wrapper}>
            <div className={classes.Inner}>
                <div className={classes.Title}>
                    <Title title={t('contacts.title')}/>
                </div>
                <div className={classes.Content}>
                    <div className={classes.ContactInfo}>
                        <div 
                            className={classes.ContactInfoItem} 
                            onClick={() => handleClick('lukianivska')}
                            data-aos="fade-right"
                            data-aos-duration="500"
                        >
                            <img src={locationImg} alt="img"/>
                            <p 
                                className={state === 'lukianivska' ? classes.ContactInfoItemNameActive : classes.ContactInfoItemName}
                            >
                                {t('contacts.street1')}
                            </p>
                        </div>
                        <div 
                            className={classes.ContactInfoItem} 
                            onClick={() => handleClick('livoberezhna')}
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <img src={locationImg} alt="img"/>
                            <p 
                                className={state === 'livoberezhna' ? classes.ContactInfoItemNameActive : classes.ContactInfoItemName}
                            >
                                {t('contacts.street2')}
                            </p>
                        </div>
                        <div 
                            className={classes.ContactInfoItem}
                            data-aos="fade-right"
                            data-aos-duration="1500"
                        >
                            <img src={emailImg} alt="img"/>
                            <a href="mailto: mathcorp.lv@gmail.com">mathcorp.lv@gmail.com</a>
                        </div>
                        <div 
                            className={classes.ContactInfoItem}
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            <img src={phoneImg} alt="img"/>
                            <a href="tel: +38(063)-972-51-07">+38(063)-972-51-07</a>
                        </div>
                        <div className={classes.SocialNetworks} data-aos="fade-right" data-aos-duration="2000">
                            <a  
                                rel="noreferrer"
                                href="https://m.facebook.com/pg/math.corporation.kyiv/reviews/?ref=page_internal&mt_nav=0" 
                                target="_blank" className={classes.Facebook}
                            >
                                <img src={facebookImg} alt="img"/>
                            </a>
                            <a 
                                rel="noreferrer"
                                href="https://www.instagram.com/math.corporation/?utm_medium=copy_link" 
                                target="_blank"  className={classes.SocialNetwork}>
                                <img src={instagramImg} alt="img"/>
                            </a>
                        </div>
                    </div>
                    <div className={classes.Maps}>
                        {state === 'livoberezhna' && <MapLivoberezhna />}  
                        {state === 'lukianivska' && <MapLukianivska />}  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactsContainer
