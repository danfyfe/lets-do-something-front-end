import React from 'react'

import Header from '../containers/Header.js'
import Calendar from '../components/Calendar.js'
import EventsContainer from '../containers/EventsContainer.js'
import Footer from '../containers/Footer.js'

const ProfilePage = (props) => {
  if (!localStorage.token || localStorage.token === "undefined") {
    props.history.push("/")
  }
  return(
    <>
      <Header/>
      <Calendar/>
      <EventsContainer/>
      <Footer/>
    </>
  )
}

export default ProfilePage