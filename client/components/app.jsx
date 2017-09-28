import React from 'react';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#059ECE',
    accent1Color: 'rgb(99, 201, 87)',
    disabledColor: 'rgb(33, 33, 33)',
    secondaryColor: 'rgb(121, 136, 159)'
  }
});

const App = (props) => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        Hello World
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/notfound' component={NotFound} />
        </Switch>
      </div>
    </MuiThemeProvider>
  )
}

export default App;
