import appsTypes from './apps.types';

export const fetchAppsStart = (projectId) => ({
    type: appsTypes.FETCH_APPS_START,
    payload:projectId
  });
  
  export const setApps = results => ({
    type: appsTypes.SET_APPS,
    payload: results
  });  