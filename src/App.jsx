import { useState } from "react";
import Editor from "./components/Editor";
import "./App.css";
import "./components/editor.css";

function App() {
	return (
		<div className="App">
			<h1>CodeMirror Editor</h1>
			<Editor />
		</div>
	);
}

export default App;
