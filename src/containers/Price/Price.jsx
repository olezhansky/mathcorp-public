import React from 'react'
import Title from '../../components/Title/Title'
import classes from './Price.module.scss'
import priceImg1 from '../../assets/images/price/price-img1.webp'
import priceImg2 from '../../assets/images/price/price-img2.webp'
import MyButton from '../../components/UI/Button/MyButton'
import { useTranslation } from 'react-i18next'

const Price = () => {
    const { t } = useTranslation();
    return (
        <div className={classes.Wrapper}>
            <div className="container">
                <div className={classes.Inner}>
                    <div className={classes.Title}>
                        <Title title={t('price.title')}/>
                    </div>
                    <p className={classes.Text} data-aos="fade-right">{t('price.text')}</p>
                    <div className={classes.Content}>
                        <div className={`${classes.ContentItem} ${classes.ContentItemBefore}`} data-aos="fade-right">
                            <img src={priceImg1} alt="img"/>  
                            <p className={classes.ContentItemText}>{t('price.contentItemText1')}</p>  
                            <p className={classes.ContentItemSubtext}>{t('price.contentItemSubtext')}</p>   
                            <div className={classes.ContentItemButton}>
                                <MyButton variant="contained">{t('price.button')}</MyButton>      
                            </div>  
                        </div>
                        <div className={classes.ContentItem} data-aos="fade-left">
                            <img src={priceImg2} alt="img"/>  
                            <p className={classes.ContentItemText}>{t('price.contentItemText2')}</p>  
                            <p className={classes.ContentItemSubtext}>{t('price.contentItemSubtext')}</p>   
                            <div className={classes.ContentItemButton}>
                                <MyButton variant="contained">{t('price.button')}</MyButton>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price
