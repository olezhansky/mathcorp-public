import React from 'react'
import classes from './Teachers.module.scss'
import Title from '../../components/Title/Title'
import { teachers } from '../../data/data'
import { useTranslation } from 'react-i18next'

const Teachers = ({numSlice}) => {
    const { t } = useTranslation();
    return (
        <>
            <div className={classes.Title}>
                <Title title={t('teachers.title')}/>
            </div>
            <ul className={classes.List}>
                {teachers.slice(0, numSlice).map((teacher) => (
                    <li className={classes.ListItem} data-aos={teacher.aos} data-aos-duration={teacher.duration}>
                        <div className={classes.ListItemWrapper}>
                            <div className={classes.ListItemImg}>
                                <img src={teacher.img} alt="img"/>
                            </div>
                            <p className={classes.ListItemName}>{t(teacher.name)}, {t(teacher.age)}</p>
                            {/* <div className={classes.ListItemStar}>
                                <img src={starIcon} alt="img"/>
                                <img src={starIcon} alt="img"/>
                                <img src={starIcon} alt="img"/>
                                <img src={starIcon} alt="img"/>
                                <img src={starIcon} alt="img"/>
                            </div> */}
                            <p className={classes.ListItemSpecialization}>{t('teachers.specialization')}: <span>{t(teacher.specialization)}</span></p>
                            <p className={classes.ListItemExperience}>{t('teachers.experience')}: <span>{t(teacher.experience)}</span></p>
                            <p className={classes.ListItemEducation}>{t('teachers.education')}: <span>{t(teacher.education)}</span></p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}


export default Teachers