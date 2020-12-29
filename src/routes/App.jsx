import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "../styles/globalStyle.css"

import useInitialState from '../hooks/useInitialState';
import AppContext from '../context/AppContext';

import Layout from '../components/Layout';
import Loader from '../containers/Loader';

const Home = lazy(() => import('../containers/Home'));
const NotFound = lazy(() => import('../containers/NotFound'));

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Suspense
            fallback={<div className="loader__container"><Loader /></div>}
          >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
