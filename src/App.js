function Profile() {
    return (
        <img
            src = "https://i.imgur.com/MK3eW3Am.jpg"
            alt = "Kate Johnson"
            />
    )
}

function App() {
    return (
        <section id="gallery">
            <h1>Знаменитые ученые</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}

export default App;