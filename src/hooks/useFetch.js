import {useState, useEffect} from 'react'

export const useFetch = (req_api,q) => {

  
    const api_key='904e041cdca9df4290d37929914f0b06'
  
    const url =`https://api.themoviedb.org/3/${req_api}?api_key=${api_key}&query=${q}`

    const [data,setdata] = useState([])
  
     
    useEffect(()=>{ 
      const fetchdata = async ()=>{
      const respones =await fetch(url);
      const d =await respones.json();
      setdata(d.results)
    }
      fetchdata()
    },[url])

     

    
  return {data}
}
