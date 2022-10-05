import React from 'react';
import { Button, Container, Stack, Card, Row, Form } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      formValue: '',
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count > 0 ? (this.state.count - 1) : 0,
    });
  }

  reset = () => {
    this.setState({
      count: 0,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let submittedValue = this.state.formValue;

    if (submittedValue >= 0 ) {
      this.setState({
        formValue: '',
        count: submittedValue,
      });
    }
  }

  handleChange = (event) => {
    this.setState({
      formValue: parseInt(event.target.value),
    });
  }

  render() {
    return (  
      <Container>
        <Stack direction="horizontal" gap="2" className="mb-4 mt-4">
          <h2 className="me-auto">Counter App</h2>
          <CountChanger name="Increase" type="primary" onClick={this.increment}></CountChanger>
          <CountChanger name="Decrease" type="secondary" onClick={this.decrement}></CountChanger>
          <CountChanger name="Reset" type="danger" onClick={this.reset}></CountChanger>
        </Stack>


        <Row className="text-center mb-5">
          <Card >
            <Card.Body>
              <h1 style={{fontSize: '100px', userSelect: 'none'}}>{this.state.count}</h1>
            </Card.Body>
          </Card>
        </Row>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formCount">
            <Form.Label>Enter Count Number: </Form.Label>
            <Form.Control 
                type="number"
                placeholder="Enter Count Number"
                value={this.state.formValue}
                onChange={this.handleChange}
              />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

class CountChanger extends React.Component {
  render() {
    return (
        <Button
          variant={this.props.type}
          key={this.props.name}
          onClick={this.props.onClick}
        >
          {this.props.name}
        </Button>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Counter/>
);
