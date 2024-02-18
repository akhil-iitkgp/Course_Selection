import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Spinner from "./components/Spinner"
import Cards from "./components/Cards"
import { filterData,apiUrl } from "./data";
import { toast } from "react-toastify";

const App = () => {
  const[category, setCategory]=useState(filterData[0].title);
  const[loading,setloading]=useState(true);
  const[courses,setCourses]=useState(null);
  async function fetchData(){
    setloading(true);
    try{
      let response=await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch(error){
      toast.error("Problem in the network");
    }
    setloading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])


  return (
    <div>
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
        loading?(<Spinner/>) : (<Cards courses={courses} category={category}></Cards>) 
      }
    </div>
  </div>
  );
};

export default App;
