export function createUser(name, band) {
  return (dispatch) => {
    dispatch({
      type: 'CREATE_USER',
      user: {name, band},
    });
  }
}