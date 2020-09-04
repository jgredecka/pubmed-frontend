import React from 'react';
import Navbar from './../../Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import HomeView from './../HomeView/HomeView';
import SearchView from './../SearchView/SearchView';
import ArticleListView from './../ArticleListView/ArticleListView';
import BookmarksView from './../BookmarksView/BookmarksView';


const App = () => {
	return (
		<div>
		  <Navbar />
		  <Switch>
		  	<Route path="/" component={HomeView} exact />
		  	<Route path="/browse" component={SearchView} />
		  	<Route path="/bookmarks" component={BookmarksView} />
		  	<Route path="/articles" component={ArticleListView} />
		  </Switch>
		</div>
		)
}


export default App;