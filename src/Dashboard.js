import React from 'react';
import Segment from './Segment.js';

import { Row, Col, Card } from 'react-bootstrap';


class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    let data = require('./' + props.file);

    this.state = {
      filter: 'percent_hoje',
      data: data,
      keys: Object.keys(data),
      listItems: []
    };

    this.sortData = this.sortData.bind(this);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }

  sortData(column){
    let data = this.state.data;
    this.state.keys.sort(function(a, b) {
      return data[b][column] - data[a][column];
    });
    let listItems = this.state.keys.map((key) =>
      <Col md={6} key={key}>
        <Segment name={key} segment={this.state.data[key]} />
      </Col>
    );
    this.setState({listItems: listItems});
  }

  handleChangeFilter(event) {
    this.setState({filter: event.target.value});
    this.sortData(event.target.value);
  }

  componentDidMount(){
    this.sortData(this.state.filter);
  }

  render() {
    return(
      <div>
        <Row>
          <Col>
            <Segment name={this.props.indicator} segment={this.state.data[this.props.indicator]} />
          </Col>
          <Col>
            <Card>
              <Card.Body>
              <h2>Filtro</h2>
                <select value={this.state.filter} onChange={this.handleChangeFilter}>
                  <option value="percent_hoje">Dia</option>
                  <option value="percent_semana">Semana</option>
                  <option value="percent_mes">1 Mês</option>
                  <option value="percent_tres_meses">3 Mêses</option>
                  <option value="percent_seis_meses">6 Mêses</option>
                  <option value="percent_ano">Ano</option>
                </select>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>{this.state.listItems}</Row>
      </div>
    );
  }
}

export default Dashboard;