import React from 'react';
import ReactDOM from 'react-dom';

//main app
import {Title} from './containers/title';
import {Header} from './containers/header';

class App extends React.Component {
    render() {
        return (
            <div>
                <Title />
                <Header />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));