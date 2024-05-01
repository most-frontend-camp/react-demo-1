import AlertButton from './AlertButton';

function App() {
    return (
        <div>
            <AlertButton message="Video is playing!">
            Воспроизводится видео
            </AlertButton>

            <AlertButton message="Video is uploading!">
            Скачивается видео
            </AlertButton>
        </div>
    );
}


export default App;