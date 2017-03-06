import React, { Component } from 'react';
import axios from 'axios';
import { Jumbotron, Collapse, Table, Grid, Row, Col, Radio, ControlLabel, FormGroup, FormControl, Button, Label, Well } from 'react-bootstrap';
import '../main.css';

const ROOT_URL = "http://localhost:5000/";

class Problem extends Component {

  constructor() {
    super();

    this.state = {
      problems: [],
      getProblem: false,
      id_problem: null
    };
  }

  componentWillMount() { // load before render
    axios.get( ROOT_URL + "problems" )
      .then( response => this.setState({ problems: response.data }) )
      .catch( (error) => console.log( error ) );
  }

  render() {

    if( this.state.getProblem ) { // show problem seleted
      let problem = this.state.problems[ this.state.id_problem ];
      return (
        <Grid>
          <Row>
            <Col xs={12}>
              <h2 className="text-center">{problem.name}</h2>
              { problem.statement.map( paragraph => <p>{paragraph}</p> ) }
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h3 className="text-name">Input</h3>
              <p>{problem.input}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h3 className="text-name">Output</h3>
              <p>{problem.output}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h3 className="text-name">Constraints</h3>
              { Object.keys(problem.constraints).map( item =>
                <dl className="dl-horizontal">
                  <dt>{item}</dt>
                  <dd>{problem.constraints[item]}</dd>
                </dl>
              ) }
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h3>Sample Input</h3>
                { problem.sampleInput.map( item => <pre>{ item } </pre> ) }
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h3>Sample Input</h3>
              <pre>
              { problem.sampleOutput.map( (item,index) => {
                return ( <span key={index}>{item}<br/></span> )
              } ) }
              </pre>

            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Button className="pull-right" bsSize="large" bsStyle="primary" onClick={ ()=> this.setState({ open: !this.state.open })}>
                Labels
              </Button>
              <Collapse in={this.state.open}>
                <div>
                  <Well>
                    { Object.keys(problem.tags).map( item =>
                      <a href={problem.tags[item]}> <Label bsStyle="info">{item}</Label> &nbsp; </a>
                    ) }
                  </Well>
                </div>
              </Collapse>

            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h3 className="text-center">Submit your Code</h3>

              <form method="post">

                <FormGroup bsSize="large" controlId="formControlsTextarea">
                  <ControlLabel>Insert you code here.</ControlLabel>
                  <FormControl rows="10" componentClass="textarea"/>
                </FormGroup>

                <p>Select language:</p>
                <FormGroup>
                  <Radio inline>
                    C++
                  </Radio>
                  {' '}
                  <Radio inline>
                    Java
                  </Radio>
                  {' '}
                  <Radio inline>
                    Python
                  </Radio>
                  {' '}
                </FormGroup>

                <div className="text-center">
                  <Button bsStyle="primary" bsSize="large" type="submit">Submit</Button>
                </div>
              </form>

            </Col>
          </Row>
        </Grid>
      );
    }

    else // show all problems

      return (
      <div>
        <Grid>
          <Jumbotron>
            <Grid>
              <h1 className="text-center">Problems</h1>
            </Grid>
          </Jumbotron>
          <Row>
            <Col xs={12}>
              <Table striped bordered condensed hover>
                <thead>
                <tr className="active">
                  <th>Type</th>
                  <th>Name</th>
                  <th>Made</th>
                </tr>
                </thead>
                <tbody>
                { this.state.problems.map( (problem, index) =>
                  <tr key={index}>
                    <td>{problem.type}</td>
                    <td><a onClick={this._getDateProblem.bind(this, index)} >{problem.name}</a></td>
                    <td className={ problem.made ? "success" : "danger" }></td>
                  </tr>
                ) }
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
      </div>
      )
  }

  _getDateProblem( index )
  {
    this.setState({ getProblem: !this.state.getProblem });
    this.setState({ id_problem: index });

  }

}

export default Problem;
