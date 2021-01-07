import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';

class App extends React.Component {
    render() {
        return (
            <div className="container">
              <div className="jumbotron">
                  <div class="row justify-content-md-center">
                    <div className="col-md-6">
                        <Router>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                            </div>
                        </Router>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

export { App }; 