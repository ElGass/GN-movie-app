import './App.css';
import Nav from './Component/Navbar/NavBar';
import MovieList from './Component/Movielist/MovieList';
import React,{useState} from 'react'
function App() {
  const [search,setSearch] =  useState("");
  const handlesearch=(val)=>{
    setSearch(val);
    }
  return (
    <div >
      <Nav handlesearch={handlesearch}/>
      <MovieList search={search}/>
      

    </div>
  );
}

export default App;
