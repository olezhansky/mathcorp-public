import React from 'react'
import classes from './Feedback.module.scss'
import img from '../../assets/images/feedback/feedback-img.png'
import Form from '../../components/Form/Form'
import { useTranslation } from 'react-i18next'

const Feedback = () => {
    const { t } = useTranslation()
    return (
        <div className={classes.Wrapper}>
           <div className="container">
               <div className={classes.Inner}>
                    <div className={classes.Content}>
                        <p className={classes.Text}  data-aos="zoom-in" data-aos-easing="ease-in-sine">
                            {t('form.text')} <span>{t('form.textBold')}</span> {t('form.text2')}
                        </p>
                        <div className={classes.Images} data-aos="fade-right">
                            <img src={img} alt="img"/>
                        </div>
                    </div>
                    <div className={classes.Form} data-aos="zoom-in-up">
                        <Form />
                    </div>
               </div>
           </div>
        </div>
    )
}

export default Feedback
