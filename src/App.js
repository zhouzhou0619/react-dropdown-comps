import Button from './Button';
import { GoBell, GoCloud, GoFileDirectoryFill } from 'react-icons/go';
function App() {
    return (
        <div>
            <div>
                <Button success rounded className="mb-5">
                    <GoBell />
                    Click me!!!
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <GoCloud />
                    Buy now!
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoFileDirectoryFill />
                    See Deal!
                </Button>
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
