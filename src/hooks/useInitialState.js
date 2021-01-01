import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const getTasks = (payload) => {
    setState({
      ...state,
      tasks: payload,
    });
  };

  return {
    getTasks,
    state,
  };
};

export default useInitialState;
