import React from 'react';
import './App.css';
import {TestComponent} from '@cogent/test-component';
import {CButton} from '@cogent/ui-elements';

function App() {
  return (
    <div className="App">
      <TestComponent/>
      <CButton name="Hero"/>
      {/*<CBreadcrumb/>*/}
    </div>
  );
}

export default App;
