import React, { Component } from 'react';
import logo from './logo-ss-34f2d4dd.png';
import './App.css';
import {
  Navbar, NavbarBrand, Container,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
        <Container>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">
            <img src={logo} alt="logo" height="50" />
          </NavbarBrand>
        </Navbar>
        <hr />
        </Container>
      </div>
    );
  }
}

export default App;
