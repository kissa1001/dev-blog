import React from 'react';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Menu from './Menu/Menu';
import ListCategory from './Home/list_by_category';
import PostPage from './Home/post_page';
import NotFound from './NotFound/NotFound';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#58C9B9',
    accent1Color: '#5867c9',
    disabledColor: '#152333',
    secondaryColor: 'rgb(121, 136, 159)'
  }
});

const App = (props) => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Navbar />
        <Menu />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/posts/:postId" component={PostPage} />
          <Route path="/categories/:postCategory" component={ListCategory} />
          <Route path='/about' component={About} />
          <Route path='/notfound' component={NotFound} />
        </Switch>
      </div>
    </MuiThemeProvider>
  )
}

export default App;
