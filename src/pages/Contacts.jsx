import React, { useEffect } from 'react'
import ContactsContainer from '../containers/ContactsContainer/ContactsContainer'

const Contacts = () => {

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
        <div>
          <ContactsContainer />
        </div>
    )
}

export default Contacts
