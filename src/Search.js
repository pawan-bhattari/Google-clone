import React,{useState} from 'react'
import "./Search.css";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import {useStateValue} from './StateProvider';
import {actionsTypes} from './reducer'

function Search({hideButtons =false}) {

const[{},dispatch]=useStateValue();

const [input,setInput]=useState("")
const history =useHistory();


    // const handlechange =(e)=>{

    //     e.preventDefault();
    //     history.push('/search')


    // }
    const handlechange =(e)=>{
        e.preventDefault();

        console.log("hello",input)
        
        dispatch({
            type: actionsTypes.SET_SEARCH_TERM,
            term: input,
          }); 
          history.push ("/search")
    }

    return (
        <div className="search">
            <div className="search_input">
            
            <SearchIcon className="search__inputicon" />
             <input value={input} onChange={(e)=>setInput(e.target.value)} />
             <MicIcon/>

        </div>   
        {!hideButtons ?(  
        <div className="search__buttons">
                 <Button type="submit" onClick={handlechange} variant="outlined" > Google SearchIcon </Button>
                 <Button variant="outlined" > I'm Feeling Lucky </Button>
             </div>  
        ):( 
            <div className="search__buttonshidden">
            <Button type="submit" onClick={handlechange} variant="outlined" > Google SearchIcon </Button>
            <Button variant="outlined" > I'm Feeling Lucky </Button>
        </div>  
             
        )}  
        </div>
    )
}

export default Search
