import React from 'react'
import {Skeleton} from '@material-ui/lab';
import classes from './MapLivoberezhna.module.scss'

const MapLivoberezhna = () => {

    return (
        <div className={classes.mapLivoberezhna}>
            <div className={classes.skeleton}>
                <Skeleton animation="wave" height='583px' />
            </div>
            <div className={classes.iframe}>
                <iframe 
                    title="MapLivoberezhna"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.4994426245016!2d30.591886615731337!3d50.45042367947533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cff205015881%3A0x91c52651da810816!2sRaisy%20Okipnoi%20St%2C%204%D0%91%2C%20Kyiv%2C%2002000!5e0!3m2!1sen!2sua!4v1633772707100!5m2!1sen!2sua" 
                    width="100%" 
                    height="350" 
                    allowfullscreen="200" 
                    loading="lazy" 
                />
            </div>
        </div>
    )
}

export default MapLivoberezhna
