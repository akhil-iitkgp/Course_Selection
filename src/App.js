import React, { useState } from "react";
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Spinner from "./components/Spinner"
import Cards from "./components/Cards"
import { filterData } from "./data";

const App = () => {
  const[category, setCategory]=useState(filterData[0].title);
  const[loading,setloading]=useState(true);
  return <div>
    <div>
      <Navbar/>
    </div>
    <div>
      <Filter
      filterData={filterData}
      category={category}
      setCategory={setCategory}/>
    </div>

    <div>
      {
        loading?(<Spinner/>) : (<Cards></Cards>) 
      }
    </div>
  </div>;
};

export default App;
