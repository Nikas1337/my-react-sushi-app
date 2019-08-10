import { connect } from "react-redux";
import AppHeader from '../components/AppHeader'
import { addItem } from '../store/actions'
const mapStateToProps = state => ({state})
const mapDispatchToProps = dispatch => ({
    addItem: item => {
        dispatch(addItem(item))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)