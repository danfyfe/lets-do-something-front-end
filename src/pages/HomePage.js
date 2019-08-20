import React from 'react'

import { connect } from 'react-redux'

import API_ENDPOINT from '../ApiEndpoint.js'

import '../css/HomePage.css'

import Loading from '../components/Loading.js'
import Header from '../containers/Header.js'
import Footer from '../containers/Footer.js'
import Calendar from '../components/Calendar.js'

// import UserMessagesContainer from '../containers/UserMessagesContainer.js'

import FixedSideMenu from '../containers/FixedSideMenu.js'
import EventsContainer from '../containers/EventsContainer.js'

class HomePage extends React.Component {

  componentDidMount(){
    this.props.fetching()

    fetch(`${API_ENDPOINT}/profile`, {
      method: 'POST',
      headers: {
        Authorization:  localStorage.getItem("token")
      }
    }).then(resp=>resp.json())
    .then(user => {
      this.props.setCurrentUser(user.user)
    }).then(this.props.fetched())
  }


  render(){
    if (!localStorage.token || localStorage.token === "undefined") {
      this.props.history.push("/")
    }

    // const { id } = this.props.state.currentUser.id
    // console.log(this.props.state.currentUser)

    return(
      <>
      <Header history={this.props.history}/>
      {this.props.state.fetching && this.props.state.currentUser.id ? <Loading/> :
        <>
        <FixedSideMenu/>

        <Calendar/>

        <EventsContainer userId={this.props.state.currentUser.id}/>
        </>
      }

      <Footer/>
      </>
    )

  }
}

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch({type:'SET_CURRENT_USER', user}),
    fetching: () => dispatch({type:'FETCHING'}),
    fetched: () => dispatch({type:'FETCHED'})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(HomePage)