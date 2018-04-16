import React from 'react';
import ReactDOM from 'react-dom';

import { RaisedButton } from 'material-ui';
import { MuiThemeProvider } from 'material-ui';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <RaisedButton primary={true} label="Test" />
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));