import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResultStart } from './../../redux/Results/results.actions';
import './../ResultCard/style.scss';

// const mapState = state => ({
//   result: state.resultsData.result
// });

const mapState = ({resultsData}) =>({
  result: resultsData.result 
 });

const ResultCard = () => {
  const dispatch = useDispatch();
  const { resultID } = useParams();
  const { result } = useSelector(mapState);
  const {
    testGif, testName, testResult
  } = result;

  useEffect(() => {
    dispatch(
      fetchResultStart(resultID)
    )
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="productCard">
      <div className="hero">
        <img src={testGif} alt={testName}/>
      </div>
      <div className="productDetails">
        <ul>
          <li>
            <h1>
              {testName}
            </h1>
          </li>
          <li>
            <h2>
              {testResult}
            </h2>
          </li>
          </ul>
      </div>
    </div>
  );
}

export default ResultCard;