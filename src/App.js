import "./App.css";
import React from "react";
import Header from "./components/header/Header.js";
import LeftPane from "./components/leftPane/LeftPane";
import NewsFeed from "./components/newsFeed/NewsFeed";

function App() {
	return (
		<div className='app'>
			<Header />
			<div className='app-body'>
				<LeftPane />
				<NewsFeed />
				{/* LeftPane */}
				{/* CenterPane */}
				{/* RightPane */}
			</div>
		</div>
	);
}

export default App;
