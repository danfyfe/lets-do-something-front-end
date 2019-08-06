import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import { connect } from 'react-redux'


import '../css/Calendar.css';

const localizer = momentLocalizer(moment)

const MyCalendar = (props) => {
  return(
    <div className='calendar-container'>
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor='start'
        endAccessor='end'
        />
    </div>
  )
}

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyCalendar)