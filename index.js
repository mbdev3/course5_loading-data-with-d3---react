import React, {
  useState,
  useCallback,
  useEffect,
} from 'react';
import ReactDOM from 'react-dom';
import { csv } from 'd3';
import {message} from './message'

const width = window.innerWidth;
const height = window.innerHeight;

const csvUrl =
  'https://gist.githubusercontent.com/mbdev3/056e2a5e2db68374e50b60c3226d0c21/raw/18fdc7dc5051225e80437bbb3452119e56dd6716/CSSNamedcolors.csv';

;
const App = () => {
  const [data, setData] = useState(null);

  // With d3.csv
  useEffect(() => {
    // d3.csv(csvUrl).then((data) => {
    //   console.log('data');
    //   setData(data);
    // });
    csv(csvUrl).then(setData)
  }, []);

  return (
    <pre>
      data is:{' '}
      {data ? message(data) : 'loading...'}
    </pre>
  );
};

const rootElement = document.getElementById(
  'root'
);
ReactDOM.render(<App />, rootElement);
