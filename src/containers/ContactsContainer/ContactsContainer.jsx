import React, { useState } from 'react'
import Title from '../../components/Title/Title'
import locationImg from '../../assets/images/contacts/location.png'
import emailImg from '../../assets/images/contacts/email.png'
import phoneImg from '../../assets/images/contacts/phone.png'
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
                    </div>
                    <div 
                        className={classes.Maps} 
                        data-aos="zoom-in-up"  
                        data-aos-duration="2000"
                    >
                        {state === 'livoberezhna' && <MapLivoberezhna />}  
                        {state === 'lukianivska' && <MapLukianivska />}  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactsContainer
