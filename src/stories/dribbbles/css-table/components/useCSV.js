import { useState, useEffect } from 'react';
import Papa from 'papaparse';

const STAGE_ORDER = Object.freeze([
  'Applied',
  'Contacted',
  'Phone Interview',
  'Follow-up',
  'On-site Interview',
  'Rejected',
  'Offer Accepted',
]);

const sortByStage = (a, b, asc) => {
  if (a.stage === b.stage) return a.row - b.row;
  const aStageIdx = STAGE_ORDER.indexOf(a.stage);
  const bStageIdx = STAGE_ORDER.indexOf(b.stage);
  if (asc) return aStageIdx - bStageIdx;
  return bStageIdx - aStageIdx;
};

const useCSV = (csv) => {
  const [data, setData] = useState({
    asc: [],
    desc: [],
  });
  const [sortAsc, setSortAsc] = useState(true);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    async function readCSV() {
      console.log('Reading CSV...');
      Papa.parse(csv, {
        download: true,
        header: true,
        complete: function (results) {
          console.log('CSV parsed.', { errors: results.errors });
          const asc = results.data.sort((a, b) => sortByStage(a, b, true));
          const desc = results.data.sort((a, b) => sortByStage(a, b, false));
          setData({
            asc,
            desc,
          });
          setSortedData(asc);
        },
        error: (err) => {
          console.error(err);
        },
      });
    }

    readCSV();
  }, [csv]);

  const onChangeSort = () => {
    if (sortAsc) {
      setSortAsc(false);
      setSortedData(data.desc);
      console.log(data.desc);
    } else {
      setSortAsc(true);
      setSortedData(data.asc);
    }
  };

  return { data: sortedData, sortAsc, onChangeSort };
};

export default useCSV;
