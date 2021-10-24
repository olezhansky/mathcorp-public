import React, { useEffect } from 'react'
import Teachers from '../components/Teachers/Teachers'
import classes from './Pages.module.scss'

const TeachersPage = () => {
    const scrollToTopHandler = () => {
        window.scrollTo({
        //   behavior: 'smooth',
            top: 0,
        });
      };

    useEffect(() => {
        scrollToTopHandler()
    }, [])
    
    return (
        <div className={classes.TeachersPage}>
            <Teachers numSlice={7}/>
        </div>
    )
}

export default TeachersPage
