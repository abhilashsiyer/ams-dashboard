import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppsStart } from '../../redux/Apps/apps.actions';
import { useParams } from 'react-router-dom';
import './../Projects/style.scss';
import { Link } from "react-router-dom";

const mapState = ({appsData}) =>({
  results: appsData.results 
 });

const AppsCard = () => {
  const dispatch = useDispatch();
  const { results } = useSelector(mapState);
  const {projectId} = useParams();


  useEffect(() => {

    dispatch(
      fetchAppsStart(projectId)
    )
  }, []);

  const {apps} = results;
  console.log('** appsData in components',apps)

  // console.log('** projects', projects);
  // console.log('** currentUser', memberId);
  // console.log('** loadSS', loadS);
  // console.log('** fetchDoneS', fetchDoneS);

  

  if (!Array.isArray(apps)) return null;
  if (apps.length < 1) {
    return (
      <div className="projectCard">
        <h3>
          No apps available for the user. Please contact admin to get yourself added to one.
        </h3>
      </div>
    ); 
  }
  return (
    <div className="projectCard">
      <div className="projectDetails">
        <h1>Apps</h1>
        <div className="projectContainer">
        {apps.map((app) => {
          return (
            <Link key={app.historyId} to={`/projects/${projectId}/apps/${app.historyId}/matrices`}>
              <div key={app.historyId} className="projectHolder">
                <span className='projectName'>{app.displayName}</span>
              </div>
            </Link>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default AppsCard;