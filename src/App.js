import Button from './Button';
function App() {
    return (
        <div>
            <div>
                <Button success primary rounded outline>
                    Click me!!!
                </Button>
            </div>
            <div>
                <Button danger outline>
                    Buy now!
                </Button>
            </div>
            <div>
                <Button>See Deal!</Button>
            </div>
            <div>
                <Button>Hide ads</Button>
            </div>
            <div>
                <Button>something!</Button>
            </div>
        </div>
    );
}

export default App;
