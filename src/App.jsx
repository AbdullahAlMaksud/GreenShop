import { Button } from '@material-tailwind/react';
import React from 'react';

const App = () => {
  return (
    <div className='flex flex-col justify-center items-center my-10 gap-2'>
      <h2 className='text-3xl text-green-800'>Tailwind Class</h2>
      <Button className='bg-primary'>Material Button</Button>
      <Button className='bg-secondary'>Material Button</Button>
      <Button className='bg-accent'>Material Button</Button>
      <Button className='bg-background'>Material Button</Button>
      <Button className='bg-text'>Material Button</Button>
      <Button className='bg-border'>Material Button</Button>
      <Button className='bg-error'>Material Button</Button>
      <Button className='bg-success'>Material Button</Button>
    </div>
  );
};

export default App;