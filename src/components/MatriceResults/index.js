import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatricesStart } from '../../redux/Matrices/matrices.actions';
import './../MatriceResults/style.scss';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { changeLoadingStateStart } from '../../redux/Loader/loader.actions';

const mapState = ({ matricesData }) => ({
    results: matricesData.results
});

const MatriceResults = () => {
  const dispatch = useDispatch();
  const { results } = useSelector(mapState);
  const {projectId} = useParams();
  const {appId} = useParams();

  useEffect(() => {
    dispatch(
      fetchMatricesStart(projectId)
    )
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {matrices} = results;
  console.log('** matrices in components',matrices)
  console.log('** projectId',projectId)

  const handleSubmit = async (e) => {
    console.log('**handleSubmit from matrices')
    let loaderState = true;
    dispatch(changeLoadingStateStart(loaderState));
  };

  if (!Array.isArray(matrices)) return null;
  if (matrices.length < 1) {
    return (
      <div className="matrices">
        <p>
          No search results.
        </p>
      </div>
    );
  }

  return (
    <div className="matricesCard">

      <div className="matricesDetails">
        <h1>Executions</h1>
      <ul className="executions">

      {matrices.map((matrice) => {
          console.log(matrice)
          const { executionTestMatriceId, userTestMatriceId, clientInfo, project } = matrice;
          if (!executionTestMatriceId || !clientInfo) return null;
            return (
              
              <li className="matricesList" key = {executionTestMatriceId} onClick={handleSubmit}>
                <Link to={`/projects/${projectId}/apps/${appId}/matrices/${executionTestMatriceId}`}>
                  <div className='title'>
                    <div className='executionsContainer'>
                      <span className='initiator'>{clientInfo}</span>
                      <span> {userTestMatriceId}</span>
                    </div>
                    {/* <div className='matriceIdContainer'>
                      <span></span>
                    </div> */}
                  </div>  
                    {/* <a>{clientInfo}{   } {executionTestMatriceId}</a> */}
                </Link>
              </li>
          );
        })}

      </ul>
      </div>
    </div>
  );
};

export default MatriceResults;