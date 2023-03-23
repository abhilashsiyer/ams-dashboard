import projectTypes from './projects.types';

const INITIAL_STATE = {
  projects: [],
  fetchDone:false,
};

const projectsReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case projectTypes.SET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      }
      case projectTypes.SET_PROJECTS_DONE:
      return {
        ...state,
        fetchDone: action.payload
      }
    default:
      return state;
  }
};

export default projectsReducer;