import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatricesStart } from '../../redux/Matrices/matrices.actions';
import MatriceResult from './MatriceResult';
import './../MatriceResults/style.scss';
import { Link } from "react-router-dom";

const mapState = ({ matricesData }) => ({
    results: matricesData.results
});

const MatriceResults = () => {
  const dispatch = useDispatch();
  const { results } = useSelector(mapState);

  useEffect(() => {
    dispatch(
      fetchMatricesStart()
    )
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {matrices} = results;
  console.log('** matrices in components',matrices)
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
    <div className="matrices">

      <div className="testmatrices">

      <table className="table">
      <thead>
              <tr>
                <th>Initiator</th>
                <th>Matrice</th>
              </tr>
       </thead>       
      <tbody>
      {matrices.map((matrice) => {
          console.log(matrice)
          const { executionTestMatriceId, userTestMatriceId, clientInfo, project } = matrice;
          if (!executionTestMatriceId || !clientInfo) return null;
            return (
              <tr key = {executionTestMatriceId}>
              <td>{clientInfo}</td>
              <Link to={`/matrices/${executionTestMatriceId}`}>
              <td>{executionTestMatriceId}</td>
              </Link>
              </tr>
          );
          
          // return (
          //   <MatriceResult key = {executionTestMatriceId}
          //   {...matrice}
          // />
          // );
        })}
        </tbody>

      </table>
      
      </div>
    </div>
  );
};

export default MatriceResults;