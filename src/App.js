import { getImageUrl} from './util.js';

function Avatar({ person, size}) {
    // доступные пропсы отсюда
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}

function App() {
    return (
        <div>
            <Avatar
                size={100}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }}
            />
            <Avatar
                size={80}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }}
            />
            <Avatar
                size={50}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }}
            />
        </div>
    );
}

export default App;