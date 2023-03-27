import * as React from 'react';
import './style.css';

export default function App() {
  const [counter, setCouter] = React.useState(0);


  return (
    <div>
      <p>{React.useId()}</p>
      <h1>Hello StackBlitz! {counter}</h1>
      <button
        onClick={() => {
          setCouter(counter+1);
        }}
      >
        add
      </button>
    
      <One count={counter} />
      <Two count={counter} />
    </div>
  );
}

const One = React.memo(({ count }) => {
  return <h1>render when count is odd {count}</h1>;
},renderWhenNumberIsOdd);

const Two = React.memo(({ count }) => {
  return <h1>render when count is even {count}</h1>;
},renderWhenNumberIsEven);

function renderWhenNumberIsOdd (old,newProp){ 
  const isRender = newProp.count % 2 == 0; 
  return isRender 
}
function renderWhenNumberIsEven(old,newProp){
  const isRender = newProp.count % 2 == 1;
  return isRender;
}