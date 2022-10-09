import { actionCreators } from '../store';
import { connect } from 'react-redux';

function ToDo({ text, deleteToDo }) {
    return (
        <li>
            {text}
            <button onClick={deleteToDo}>
                DELETE
            </button>
        </li>
    )
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        deleteToDo: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    };
}

export default connect(null, mapDispatchToProps)(ToDo);