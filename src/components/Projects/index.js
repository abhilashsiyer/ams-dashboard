import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectsStart } from '../../redux/Projects/projects.actions';
import './../Projects/style.scss';
import { Link } from "react-router-dom";

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
        <div className="container">
        {projects.map((project) => {
          return (
            <Link key={project} to={`/projects/${project}/matrices`}>
              <div key={project} className="projectHolder">
                <h2>{project}</h2>
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