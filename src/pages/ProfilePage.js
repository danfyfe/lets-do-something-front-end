import React from 'react'

import { connect } from 'react-redux'

import API_ENDPOINT from '../ApiEndpoint.js'

import Loading from '../components/Loading.js'
import Header from '../containers/Header.js'
import UserInfoContainer from '../containers/UserInfoContainer.js'
import Footer from '../containers/Footer.js'

class ProfilePage extends React.Component {

    componentDidMount(){
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