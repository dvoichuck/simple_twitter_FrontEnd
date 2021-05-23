import React from "react";
import './App.css';
import Header from '../app-header/header'
import SearchPanel from "../search-panel/search-panel";
import PostList from "../post-list/post-list";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostAddForm from "../Post-add-form/post-add-form";
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="d-flex justify-content-between">
          <SearchPanel/>
          <PostStatusFilter/>
      </div>
      <PostList/>
      <PostAddForm/>
    </div>
  );
}

export default App;
