import { connect } from 'react-redux'
import Odds from '../components/Odds'
import { fetchCandidates } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCandidates: () => dispatch(fetchCandidates())
  }
}

const mapStateToProps = (state) => {
  return {
    odds: state.odds
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Odds)
