import MenuList from '../components/MenuList'
import { connect } from "react-redux";
import { addItem, removeItem } from '../store/actions'
const mapStateToProps = state => ({state})
const mapDispatchToProps = dispatch => ({
    addItem: item => {
        dispatch(addItem(item))
    },
    removeItem: item => {
        dispatch(removeItem(item))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(MenuList)