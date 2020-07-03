import { connect } from 'react-redux'
import Details from '../components/Details'


const mapStateToProps = (state) => {
  return {
    odds: state.odds
  }
}

export default connect(mapStateToProps)(Details)