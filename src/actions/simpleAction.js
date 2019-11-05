
//not sure what the simple action does here. I believe this is an action creater.
//it returns an action object
export const simpleAction = () => dispatch => {
     dispatch ({
          type: 'SIMPLE_ACTION',
          payload: 'result_of_simple_action'
     })
}