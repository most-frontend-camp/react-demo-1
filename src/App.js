const team = {
    name: 'Real Madrid',
    theme: {
        backgroundColor:'black',
        color: 'white'
    }
}

function App() {

    return (
        <div style={team.theme}>
            <h1>{team.name}'s Todos</h1>
            <img
                className="img-fluid"
                src="https://logowik.com/content/uploads/images/545_realmadridfc.jpg"
                alt="Real Madrid"
            />
            <ul>
                <li>Toni Kroos</li>
                <li>Luka Modric</li>
                <li>Frederick Valverde</li>

            </ul>
        </div>


    );

    /*    const name = 'Real Madrid';

        return (
          <h1>{name}'s team players </h1>
        );*/

    /*    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
        const description = 'Zara';

        return (
            <img
                className="avatar"
                src={avatar}
                alt={description}
            />
        )*/

}

export default App;