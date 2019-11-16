import { combineReducers } from 'redux';

export default combineReducers({
     energy       : (state = {}) => state,
     minerals     : (state = {}) => state,
     food         : (state = {}) => state,
     alloys       : (state = {}) => state,
     factories    : (state = {}) => state,
     workers      : (state = {}) => state,
     day          : (state = {}) => state,
     message      : (state = {}) => state,
     board        : (state = {}) => state,
     board_weights: (state = {}) => state,
     info_display : (state = {}) => state
});
