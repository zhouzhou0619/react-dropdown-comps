import Button from './Button';
function App() {
    return (
        <div>
            <div>
                <Button success rounded outline>
                    Click me!!!
                </Button>
            </div>
            <div>
                <Button danger outline>
                    Buy now!
                </Button>
            </div>
            <div>
                <Button warning>See Deal!</Button>
            </div>
            <div>
                <Button secondary outline>
                    Hide ads
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    something!
                </Button>
            </div>
        </div>
    );
}

export default App;
