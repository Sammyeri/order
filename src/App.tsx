import React from 'react';
import { Header } from './components/Header';
import {MenuList} from "./components/MenuList";
import {Sidebar} from "./components/Sidebar";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MenuList></MenuList>
      <Sidebar ></Sidebar>
    </div>
  );
}

export default App;
