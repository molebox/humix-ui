import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../.';

const App = () => {
  return (
    <div>
      <Button color="purple">Press me</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
