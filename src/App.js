import React, { Fragment } from 'react';
import './App.css';
import WithOk from './Conponents/WithOk'
import WithError from './Conponents/WithError'
import WithLoading from './Conponents/WithLoading'

function App() {

  const opts = {
    initialData: [],
  }

  return (
    <Fragment>
      <WithOk url='http://localhost:7070/data' opts={opts} />
      <WithError url='http://localhost:7070/error' opts={opts} />
      <WithLoading url='http://localhost:7070/loading' opts={opts} />
    </Fragment>
  );
}

export default App;
