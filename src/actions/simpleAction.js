
//not sure what the simple action does here. I believe this is an action creater.
//it returns an action object
export const daily = () => dispatch => {
     dispatch ({
          type   : 'DAILY',
          payload : 1,
     })
}
export const buildFactory = () => dispatch => {
     dispatch ({
          type   : 'BUILD_FACTORY',
          payload: 'result_of_simple_action'
     })
}
export const SellFactory = () => dispatch => {
     dispatch ({
          type   : 'SELL_FACTORY',
          payload: 'result_of_simple_action'
     })
}
export const BuyFood = () => dispatch => {
     dispatch ({
          type   : 'BUY_FOOD',
          payload: 'result_of_simple_action'
     })
}
export const rdcf = () => dispatch => {
     dispatch ({
          type   : 'RDCF',
          payload: 'result_of_simple_action'
     })
}
export const rdcw = () => dispatch => {
     dispatch ({
          type   : 'RDCW',
          payload: 'result_of_simple_action'
     })
}
export const HireWorker = () => dispatch => {
     dispatch ({
          type   : 'HIRE_WORKER',
          payload: 'result_of_simple_action'
     })
}
export const HideDiv = () => dispatch => {
     dispatch ({
          type   : 'HIDE_DIV',
          payload: 'result_of_simple_action'
     })
}
export const TerminateWorker = () => dispatch => {
     dispatch ({
          type   : 'TERMINATE_WORKER',
          payload: 'result_of_simple_action'
     })
}
export const Render_Square = () => dispatch => {
     dispatch ({
          type   : 'RENDER_SQUARE',
          payload: 'result_of_simple_action'
     })
}