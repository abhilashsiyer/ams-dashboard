import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectsStart } from '../../redux/Projects/projects.actions';
import { changeLoadingStateStart } from '../../redux/Loader/loader.actions';
import './../Projects/style.scss';
import { Link } from "react-router-dom";

const mapState = ({projectsData}) =>({
  projects: projectsData.projects 
 });

const mapUserState = ({user}) =>({
  currentUser: user.currentUser 
 }); 

 const mapLoaderState = ({loadingData}) =>({
  loadS: loadingData.results 
 });

 const mapFetchDoneState = ({projectsData}) =>({
  fetchDoneS: projectsData.fetchDone 
 });

const ProjectsCard = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector(mapState);
  const { currentUser } = useSelector(mapUserState);
  const { loadS } = useSelector(mapLoaderState);
  const { fetchDoneS } = useSelector(mapFetchDoneState);
  const memberId = currentUser.memberId;

  useEffect(() => {

    dispatch(
      fetchProjectsStart(memberId)
    )

    if (fetchDoneS){
      let loaderState = false;
      console.log('** fetch Done')
      dispatch(changeLoadingStateStart(loaderState));
    }
  }, [fetchDoneS]);

  // console.log('** projects', projects);
  // console.log('** currentUser', memberId);
  // console.log('** loadSS', loadS);
  // console.log('** fetchDoneS', fetchDoneS);

  

  if (!Array.isArray(projects)) return null;
  if (fetchDoneS && projects.length < 1) {
    return (
      <div className="projectCard">
        <h3>
          No projects available for the user. Please contact admin to get yourself added to one.
        </h3>
      </div>
    ); 
  }
  return (
    <div className="projectCard">
      <div className="projectDetails">
        <h1>Projects</h1>
        <div className="projectContainer">
        {projects.map((project) => {
          return (
            <Link key={project} to={`/projects/${project}/matrices`}>
              <div key={project} className="projectHolder">
                <span className='projectName'>{project}</span>
              </div>
            </Link>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;