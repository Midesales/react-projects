import React from 'react';
import Data from './data';
import List from './list';


function App() {
  const [people, setPeople] = React.useState(Data);
  return (
   <section className= 'bg-red-200 grid place-items-center  lg:h-screen '>
    <div className='bg-white border rounded-lg p-8 my-10 mx-2 md:w-2/5 lg:w-2/6 '>
      <h1 className= 'text-2xl font-semibold pb-4'>{people.length} Birthdays Today</h1>
      <List people = {people}/>
      <button className= 'bg-red-400 text-white text-center w-full rounded-sm font-bold p-2' onClick = {() => setPeople ([])}>Clear All</button>
    </div>
   </section>
  );
}

export default App;
