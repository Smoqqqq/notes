import "./css/app.scss";
import NotesContainer from "./NotesContainer";

function App() {
    return (
        <div className="App">
            <SideBar></SideBar>
			<NotesContainer></NotesContainer>
        </div>
    );
}

function SideBar() {
    return <header id="sidebar">
		<nav>
			<h1>Notes</h1>
		</nav>
	</header>;
}

export default App;
