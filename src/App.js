function App() {
    function handleClick(){
        alert("Salem React!");
    }

    return (
        <button onClick={handleClick}>
            Click Me!
        </button>
    );
}

export default App;