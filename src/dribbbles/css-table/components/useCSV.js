import { useState, useEffect } from 'react';
import Papa from 'papaparse';

export const STAGE_ORDER = Object.freeze([
  'Applied',
  'Contacted',
  'Phone Interview',
  'Follow-up',
  'On-site Interview',
  'Rejected',
  'Offer Accepted',
]);

const papaOptions = {
  download: true,
  header: true,
  error: (err) => {
    console.error(err);
  },
};

const setUpState = (data) => {
  data.sort((a, b) => Number.parseInt(a.row) - Number.parseInt(b.row));

  const state = {
    stages: {},
    rows: {},
    orderAsc: true,
    stageTitles: [...STAGE_ORDER],
  };

  data.forEach((ele) => {
    const { stage, row } = ele;

    if (state.stages[stage]) {
      state.stages[stage].push(row);
    } else state.stages[stage] = [row];

    state.rows[row] = ele;
  });

  return state;
};

const useCSV = (csv) => {
  const [state, setState] = useState();
  // Sample state = {
  //   rows: {
  //     "1": {...row},
  //   },
  //   orderAsc: true,
  //   stageTitles: [...STAGE_ORDER],
  //   stages: {
  //     ACCEPTED: [1,2,3,4]
  //   },
  // };

  useEffect(() => {
    async function readCSV() {
      console.log('Reading CSV...');
      Papa.parse(csv, {
        ...papaOptions,
        complete: function (results) {
          console.log('CSV parsed.', { errors: results.errors });
          const newState = setUpState(results.data);
          setState(newState);
        },
      });
    }

    readCSV();
  }, [csv]);

  const onChangeSort = () => {
    setState((prevState) => ({
      ...prevState,
      orderAsc: !state.orderAsc,
    }));
  };

  return { state, onChangeSort };
};

export default useCSV;
