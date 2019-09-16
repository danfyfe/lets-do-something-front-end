const getApiEndpoint = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://lets-do-something-api.herokuapp.com/api/v1'
  } else {
    return 'http://localhost:3000/api/v1'
  }
}
// module.exports = getApiEndpoint;
export default getApiEndpoint()