/* eslint-disable no-param-reassign */
const pieDataTemplate = [
  { x: '1', y: 0 },
  { x: '2', y: 0 },
  { x: '3', y: 0 },
  { x: '4', y: 0 },
  { x: '5', y: 0 },
  { x: '6', y: 0 },
];

const candlestickDataTemplate = [
  { x: 1, open: 0, close: 0, high: 0, low: 0 },
  { x: 2, open: 0, close: 0, high: 0, low: 0 },
  { x: 3, open: 0, close: 0, high: 0, low: 0 },
  { x: 4, open: 0, close: 0, high: 0, low: 0 },
  { x: 5, open: 0, close: 0, high: 0, low: 0 },
  { x: 6, open: 0, close: 0, high: 0, low: 0 },
  { x: 7, open: 0, close: 0, high: 0, low: 0 },
  { x: 8, open: 0, close: 0, high: 0, low: 0 },
];

const lineDataTemplate = [
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
];

const START_LOADING_DATA = 'ChartsState/START_LOADING_DATA';
const DATA_LOADED = 'ChartsState/DATA_LOADED';

function dataLoaded(data) {
  return {
    type: DATA_LOADED,
    data,
  };
}

export function loadChartsData() {
  return (dispatch, getState) => {
    if (getState().charts.data) return;

    // dispatch(startLoadingData());
    const newPieData = pieDataTemplate.map(item => {
      item.y = Math.floor(Math.random() * 90) + 10;
      return item;
    });

    const newCandlestickData = candlestickDataTemplate.map((item, index) => {
      item.x = index + 1;
      item.open = Math.floor(Math.random() * 100) + 1;
      item.close = Math.floor(Math.random() * 100) + 1;
      item.hight = Math.floor(Math.random() * 120) + 1;
      item.low = Math.floor(Math.random() * 120) + 1;
      return item;
    });

    const newLineData = lineDataTemplate.map((item, index) => {
      item.x = index + 1;
      item.y = index + Math.floor(Math.random() * 3) + 1;
      return item;
    });

    const data = {
      pie: newPieData,
      candle: newCandlestickData,
      line: newLineData,
    };
    dispatch(dataLoaded(data));
  };
}

const initialState = {
  data: null,
  isLoading: true,
};

export default function ChartsStateReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING_DATA:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case DATA_LOADED:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.data,
      });
    default:
      return state;
  }
}
