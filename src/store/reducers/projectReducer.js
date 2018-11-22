const initialState = {
  projects: [
    {id: 1, title: 'VOILA', content: 'blabllllllll'},
    {id: 2, title: 'there you are', content: 'bla, bla. bla'},
    {id: 3, title: 'ALmost there', content: 'here we go gaou'}
  ]
}


const projectReducer = (state=initialState, action) => {
switch(action.type) {
  case 'CREATE_PROJECT':
  console.log('created project', action.project)
}
// defau/lt:
return state
}

export default projectReducer;