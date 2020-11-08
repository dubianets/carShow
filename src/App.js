import React, {useState} from 'react';
import Expensive from "./Expensive";
import CarYear from "./CarYear";
import CarMake from "./CarMake";
import CarModel from "./CarModel";
import ListItem from "./ListItem";
import List from "./List";
import Mix from "./Mix";


function App() {

    const byers = [
        {firstName: 'Josh', secondName: 'Bill', addres: 309809},
        {firstName: 'Vdf', secondName: 'FIll', addres: 34345},
        {firstName: 'Modsf', secondName: 'MARY', addres: 43589384},
        {firstName: 'LOfdf', secondName: 'Bdsfd', addres: 13435},
        {firstName: 'Mike', secondName: 'Billy', addres: 1345},
        {firstName: 'Viki', secondName: 'Bon', addres: 134535},
    ]

  let cars = [
  {make: "BMW", model: "M5", year: 2019, price: 60000 },
  {make: "Audi", model: "s5", year: 2020, price: 62000 },
  {make: "M-B", model: "AMG55", year: 2018, price: 57000 },
  {make: "Porsche", model: "911", year: 2021, price: 160000 }, ]


    const [counter, setCounter] = useState(0);

    const plusCounter = () => {

        setCounter(counter + 1);

    }

    const minusCounter = () => {

        setCounter(0);
    }

    const [counterModel, setCounterModel] = useState(0);

    const plusCounterModel = () => {
        setCounterModel(counterModel + 1);
    }

    const [counterList, setCounterList] = useState([0, 0, 0, 0, 0]);

    //console.log(a);


    const plusSetCounterList = () => {

        setCounterList(counterList.map(el => el + 1 ));

    }
    const refreshSetCounterList = () => {

        setCounterList(counterList.map(el => el = 0));

    }






  return (
     <div>

       <div>

        <Expensive cars={cars} deletAll={plusCounter} minusCounter={minusCounter} counter={counter}/>

     </div>

       <div>

         <CarYear year={cars} />

       </div>

         <div>

             <CarMake make={cars} plusSetCounterList={plusSetCounterList} refreshSetCounterList={refreshSetCounterList} counterList={counterList} />

         </div>

         <div>

             <CarModel model={cars} counterModelPlus={plusCounterModel} counterModel={counterModel}/>

         </div>

         <div>

             {cars.map(el => <ListItem key={el.model} el={el}/>)}

         </div>

         <div>

             {byers.map(el => <List key={el.firstName} el={el}/>)}

         </div>

         <div>

             {cars.map(el => <Mix key={el.make} el={el}/>)}
             {byers.map(el => <Mix key={el.addres} el={el}/>)}

         </div>


</div>


  );
}

export default App;
