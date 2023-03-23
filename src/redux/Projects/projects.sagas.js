import projectTypes from './projects.types';
import { handleFetchProjects } from './projects.helpers';
import { setProjects, setProjectsDone } from './projects.actions';
import { takeLatest, put, all, call } from 'redux-saga/effects';


export function* fetchProjects({payload}) {
    try {
      const projects = yield handleFetchProjects(payload);
      yield put(
        setProjects(projects)
      );
      let fetchDone = true;
      yield put(
        setProjectsDone(fetchDone)
      );
    } catch (err) {
      console.log(err);
    }
  }
  
  export function* onFetchProjectsStart() {
    yield takeLatest(projectTypes.FETCH_PROJECTS_START, fetchProjects);
  } 

  export default function* ProjectsSagas() {
    yield all([
      call(onFetchProjectsStart),
    ])
  }

