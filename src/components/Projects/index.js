import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectsStart } from '../../redux/Projects/projects.actions';
import './../ResultCard/style.scss';

const mapState = ({projectsData}) =>({
  projects: projectsData.projects 
 });

const mapUserState = ({user}) =>({
  currentUser: user.currentUser 
 }); 

const ProjectsCard = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector(mapState);
  const { currentUser } = useSelector(mapUserState);
  const memberId = currentUser.memberId;
  // const projectsToDisplay = projects.member[0].project ;

  useEffect(() => {
    dispatch(
      fetchProjectsStart(memberId)
    )
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('** projects', projects);
  console.log('** currentUser', memberId);

  if (!Array.isArray(projects)) return null;
  if (projects.length < 1) {
    return (
      <div className="results">
        <h3>
          No projects available for the user. Please contact admin to get yourself added to one.
        </h3>
      </div>
    );
  }
  return (
    <div className="prjectCard">
      <div className="projectDetails">
        <ul>
          <li>
            <h1>Projects List</h1>
          </li>
          <li>
            {projects.map((project) => {
              return <h3 key = {project}>{project}</h3>;
            })}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectsCard;