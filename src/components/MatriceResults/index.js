import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMatricesStart } from '../../redux/Matrices/matrices.actions';
import MatriceResult from './MatriceResult';
import './../MatriceResults/style.scss';

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
      <div className="results">
        <p>
          No search results.
        </p>
      </div>
    );
  }

  return (
    <div className="results">

      <h1>
        Browse results
      </h1>
      <div className="testResults">

      {matrices.map((matrice) => {
          console.log(matrice)
          const { executionTestMatriceId, userTestMatriceId, clientInfo, project } = matrice;
          if (!executionTestMatriceId || !clientInfo) return null;
          return(
            <MatriceResult key = {executionTestMatriceId}
            {...matrice}
          />
          )

          // "https://media1.giphy.com/media/MeJgB3yMMwIaHmKD4z/giphy.gif"
          

          // const configResult = {
          //   testGif,
          //   testName,
          //   testResult
          // };

          // return (
          //   <Result {...configResult} />
          // );
        })}
      
      </div>
    </div>
  );
};

export default MatriceResults;