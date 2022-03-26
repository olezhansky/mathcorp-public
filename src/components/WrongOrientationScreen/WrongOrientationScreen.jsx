import React from 'react'
import DeviceIcon from '../../assets/icons/device-icon.svg'
import classes from './WrongOrientationScreen.module.scss'
import { useTranslation } from 'react-i18next'

const WrongOrientationScreen = () => {
  const {t} = useTranslation()

  return (
    <div className={classes.WrongOrientationScreen}>
        <p className={classes.Text}>{t('orientation.text')}</p>
        <img src={DeviceIcon} />
    </div>
  )
}

export default WrongOrientationScreen