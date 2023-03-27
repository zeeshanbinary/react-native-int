import React from 'react';
import Prop from './app/prop/Prop';


function App() {
  let name = "Zeeshan Ansari";
  let age = 24;
  let address = "Bhadohi"
  return (
    <>
      <Prop name={name} age={age} address={address} />
    </>
  );
}



export default App;
