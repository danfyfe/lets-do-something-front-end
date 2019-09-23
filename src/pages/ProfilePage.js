import React from 'react'

import { connect } from 'react-redux'

import API_ENDPOINT from '../ApiEndpoint.js'

import Loading from '../components/Loading.js'
import Header from '../containers/Header.js'
import UserInfoContainer from '../containers/UserInfoContainer.js'
import Footer from '../containers/Footer.js'

const axios = require('axios');

class ProfilePage extends React.Component {

  componentDidMount(){
    axios({
      method: 'POST',
      url: `${API_ENDPOINT}/profile`,
      headers: {
        Authorization:  localStorage.getItem("token")
      }
    })
    .then(resp => {
      this.props.setCurrentUser(resp.data.user)
    }).then(this.props.fetched())
  }


  render(){
    if (!localStorage.token || localStorage.token === "undefined") {
      this.props.history.push("/")
    }

    const { history } = this.props

    const { currentUser, fetched } = this.props.state

    return(
      <>
        <Header user={currentUser} history={history}/>

        { fetched && currentUser.id ?
          <>
          <div className='med-padding d-flex flex-column'>
          <h3 className=''>Your Profile</h3>
          <UserInfoContainer user={currentUser}/>
          </div>
          <Footer/>

          </> : <Loading/>
        }
      </>
    )

  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch({type:'SET_CURRENT_USER', user}),
    fetched: () => dispatch({type:'FETCHED'})
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProfilePage)