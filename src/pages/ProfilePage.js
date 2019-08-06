import React from 'react'

import { connect } from 'react-redux'

// import API_ENDPOINT from '../ApiEndpoint.js'

import Header from '../containers/Header.js'
import UserInfoContainer from '../containers/UserInfoContainer.js'
import Footer from '../containers/Footer.js'

class ProfilePage extends React.Component {

  componentDidMount(){

  }

  render(){
    if (!localStorage.token || localStorage.token === "undefined") {
      this.props.history.push("/")
    }
    return(

      <>
      <Header history={this.props.history}/>
      <UserInfoContainer/>
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

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProfilePage)