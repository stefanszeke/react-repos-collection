import Card from "./Card";
import Card2 from "./Card2";
import Button2 from "./Button2";
import List from "./List";

import "./App.css";

function App() {


  const fruits = [
    { name: 'apple', color: 'red', price: 1.20 },
    { name: 'banana', color: 'yellow', price: 2.58 },
    { name: 'grape', color: 'purple', price: 3.00 },
    { name: 'orange', color: 'orange', price: 1.99 },
    { name: 'watermelon', color: 'green', price: 5.00 }
  ];

  return (
    <div >
    <div className="cards">
      <Card img="./dog.png" title="Title 1" description="Description 1" />
      <Card img="./dog.png" title="Title 2" description="Description 2" />
      <Card2 description="test" img="" title="test" />
      <Card2 />

    </div>
      <Button2 />
      <List items={fruits} category="fruits"/>
      <List  />
    </div>

  );
}

export default App;
