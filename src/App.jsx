import { Button } from '@material-tailwind/react';
import React from 'react';

const App = () => {
  return (
    <div className='flex flex-col justify-center items-center my-10'>
      <h2 className='text-3xl text-green-800'>Tailwind Class</h2>
      <Button>Material Button</Button>
    </div>
  );
};

export default App;