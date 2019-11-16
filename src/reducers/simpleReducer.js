
export default (state = {},action) => {
     switch (action.type) {
          case 'DAILY':
               return {...state}
          default:
               return state
     }
}