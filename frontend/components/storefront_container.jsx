import {connect} from 'react-redux';
import { leaveGamePurchasePage } from '../actions/game_actions';
import { refreshUserInfo } from '../actions/session_actions';
import Storefront from './storefront';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    leaveGamePurchasePage: () => dispatch(leaveGamePurchasePage()),
    refreshUserInfo: (currentUserId) => dispatch(refreshUserInfo(currentUserId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Storefront);
