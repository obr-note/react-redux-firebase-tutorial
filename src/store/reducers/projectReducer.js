const initState = {
  projects: [
    {id: '1', title: 'help me find peach', content: 'baaaaaaaaaa'},
    {id: '2', title: 'waooooooooo', content: 'baaaaaaaaaa'},
    {id: '3', title: 'help peach', content: 'baaaaaaaaaa'},
  ]
}

const projectReducer = (state = initState, action ) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project)
  }
  return state
}

export default projectReducer;