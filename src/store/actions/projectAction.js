// export const createProject = (project)=> ({
// type: 'ADD_PROJECT',
// project
// })

export const createProject = (project)=> {
  return (dispatch, getState)=> {
    dispatch({ type: 'CREATE_PROJECT', project})
  }
}
