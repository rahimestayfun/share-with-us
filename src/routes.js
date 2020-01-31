import React from "react";
import {Route,Switch} from 'react-router-dom';

//components
import AddStory from './components/AddStory/AddStory';
import AdminLogin from './components/AdminLogin/AdminLogin';
import Home from "./components/Home/Home";
// import DetailedStoryCard from "./components/DetailedStoryCard/DetailedStoryCard";

export default(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/admin" component={AdminLogin}/>
        <Route path="/add" component={AddStory}/>
        {/* <Route path="/stories/:id" component={DetailedStoryCard}/> */}
    </Switch>
);