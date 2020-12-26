import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Loader from '../containers/Loader';

const Home = lazy(() => import('../containers/Home'));
const AddTask = lazy(() => import('../containers/AddTask'));
const EditTask = lazy(() => import('../containers/EditTask'));

const App = () => (
  <BrowserRouter>
    <Layout>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addtask" component={AddTask} />
          <Route exact path="/addtask" component={EditTask} />
        </Switch>
      </Suspense>
    </Layout>
  </BrowserRouter>
);

export default App;
