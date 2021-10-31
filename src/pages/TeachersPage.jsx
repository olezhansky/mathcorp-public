import React, { useEffect } from 'react'
import Teachers from '../components/Teachers/Teachers'
import classes from './Pages.module.scss'

const TeachersPage = () => {
    const scrollToTopHandler = () => {
        window.scrollTo({
            top: 0,
        });
      };

    useEffect(() => {
        scrollToTopHandler()
    }, [])
    
    return (
        <div className={classes.TeachersPage}>
            <div className="container">
                <Teachers numSlice={7}/>
            </div>
        </div>
    )
}

export default TeachersPage
