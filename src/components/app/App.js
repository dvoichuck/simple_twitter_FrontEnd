import {React, useState} from "react";
import './App.css';
import Header from '../app-header/header'
import SearchPanel from "../search-panel/search-panel";
import PostList from "../post-list/post-list";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostAddForm from "../Post-add-form/post-add-form";

function App() {
    const [setState] = useState()
    let inputAddForm = (e) => {
        console.log("huy")
    }

  return (
    <div className="App">
      <Header/>
      <div className="d-flex justify-content-between">
          <SearchPanel/>
          <PostStatusFilter/>
      </div>
      <PostList/>
      <PostAddForm
          value={setState}
          // onChange={}
          onClick={inputAddForm}/>
    </div>
  );
}

export default App;
