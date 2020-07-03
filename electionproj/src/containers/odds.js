import { connect } from 'react-redux'
// import Odds from '../components/odds'

const mapStateToProps = (state) => {
  return {
    odds: state.odds
  }
}

export default connect(mapStateToProps)