import React, { Component } from 'react';
import { Navbar, Glyphicon, Grid, Row, Col }  from 'react-bootstrap';
import Problem from './Problem';
import '../main.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>{this._navBar()}</div>
        <Problem />
        <div>{this._footer()}</div>
      </div>
    );
  }

  _navBar() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href=""><Glyphicon glyph="console" />Code Camp</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
      );
  }

  _footer() {
    return (
      <footer>
        <Grid>
          <Row>
            <Col md={6}>
              <h3>Made with <i className="fa fa-heart" aria-hidden="true"></i> for all geeks in the the world!!!</h3>
              <ul className="list-inline text-center">
                <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook-official fa-5x" aria-hidden="true"></i></a></li>
                <li><a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter fa-5x" aria-hidden="true"></i></a></li>
                <li><a href="https://www.reddit.com/" target="_blank"><i className="fa fa-reddit fa-5x" aria-hidden="true"></i></a></li>
                <li><a href="https://plus.google.com/collections/featured?hl=es" target="_blank"><i className="fa fa-google-plus fa-5x" aria-hidden="true"></i></a></li>
              </ul>

            </Col>
            <Col md={6}>
              <h3>Do you want to help us?</h3>
              <Row>
                <Col xs={6}>
                  <p className="text-center"><i className="fa fa-envelope-o fa-5x" aria-hidden="true"/></p>
                  <p className="text-center">abcdefg@codecamp.com</p>
                </Col>
                <Col xs={6}>
                  <p className="text-center"><i className="fa fa-phone fa-5x" aria-hidden="true"/></p>
                  <p className="text-center">+ 031 - 123 45 67</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </footer>
    );
  }
}

export default App;
