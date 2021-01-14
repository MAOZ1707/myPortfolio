import "./App.css";
import Entrance from "./components/entrance/Entrance";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Project from "./components/project/Project";
import Employ from "./components/employ/Employ";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<div className="App">
			<Entrance />
			<About />
			<Skills />
			<Project />
			<Employ />
			<Footer />
		</div>
	);
}

export default App;
