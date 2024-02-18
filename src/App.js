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
    <div className="min-h-screen flex flex-col bg-orange-400">
    <div>
      <Navbar/>
    </div>
    <div bg-orange-800>
    <div>
      <Filter
      filterData={filterData}
      category={category}
      setCategory={setCategory}/>
    </div>
    </div>

    <div className="flex flex-wrap justify-center max-w-[1200px] mx-auto min-h-[50vh] items-center">
      {
        loading?(<Spinner/>) : (<Cards courses={courses} category={category}></Cards>) 
      }
    </div>
  </div>
  );
};

export default App;
