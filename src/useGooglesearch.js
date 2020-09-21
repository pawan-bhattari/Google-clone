import React,{useState,useEffect}from 'react'
import API_KEY from './keys'

const CONTEXT_KEY = "fe1ef04d5888817be";

const  useGooglesearch=(term)=> {
    
  const[data,setData]=useState(null);

  useEffect(()=>{

    const fetchData=async(term)=>{

       

        fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)

        .then(response=>response.json())
        .then((result)=>{
            setData(result)
        });
    };

     fetchData(term);
     
  },[term])
  console.log("it is your main data" ,data)
 return{data}

}

export default useGooglesearch;
