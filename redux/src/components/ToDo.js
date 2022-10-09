import { actionCreators } from '../store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function ToDo({ text, deleteToDo, id }) {
    return (
        <li>
            <Link to={`/${id}`}>
                {text}
            </Link>
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