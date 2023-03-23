import projectTypes from './projects.types';

  export const fetchProjectsStart = memberId => ({
    type: projectTypes.FETCH_PROJECTS_START,
    payload:memberId
  });
  
  export const setProjects = projects => ({
    type: projectTypes.SET_PROJECTS,
    payload: projects
  });
  
  export const setProjectsDone = fetchDone => ({
    type: projectTypes.SET_PROJECTS_DONE,
    payload: fetchDone
  }); 