// import React from 'react'
//
// import { connect } from 'react-redux'
//
// import API_ENDPOINT from '../ApiEndpoint.js'
//
// import Header from '../containers/Header.js'
// import Calendar from '../components/Calendar.js'
// import Footer from '../containers/Footer.js'
//
// class HomePage extends React.Component {
//
//   componentDidMount(){
//     fetch(`${API_ENDPOINT}/profile`, {
//       method: 'POST',
//       headers: {
//         Authorization:  localStorage.getItem("token")
//       }
//     }).then(resp=>resp.json())
//     .then(user => {
//       this.props.setCurrentUser(user.user)
//     })
//   }
//
//   render(){
//     if (!localStorage.token || localStorage.token === "undefined") {
//       this.props.history.push("/")
//     }
//     return(
//
//       <>
//       <Header history={this.props.history}/>
//       <Calendar/>
//       <Footer/>
//       </>
//     )
//
//   }
// }
//
// const mapStateToProps = state => {
//   return { state }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     setCurrentUser: user => dispatch({type:'SET_CURRENT_USER', user})
//   }
// }
//
//
// export default connect(mapStateToProps,mapDispatchToProps)(HomePage)