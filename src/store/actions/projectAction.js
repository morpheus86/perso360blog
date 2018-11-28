// export const createProject = (project)=> ({
// type: 'ADD_PROJECT',
// project
// })

export const createProject = (project)=> 
  async (dispatch, getState, {getFirebase, getFirestore}) => {
    try {
      const firestore = await getFirestore();
      await firestore.collection('projects').add({
        ...project,
        authorFirstName: 'Ballo',
        authorLatsname: 'Yae',
        authorId: 12345,
        createAt: new Date()
      })
      dispatch({ type: 'CREATE_PROJECT' })
    } catch (error) {
      dispatch({ type: "CREATE_PROJECT_ERROR" }, error)
    }
  }

