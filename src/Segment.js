import React from 'react';

import { Row, Col, Card } from 'react-bootstrap';

class Segment extends React.Component {
  render() {
    return(
      <Card>
        <Card.Body>
          <Row>
            <Col>{this.props.name}: R${this.props.segment.hoje} ({this.props.segment.percent_hoje}%)</Col>
          </Row>
          <Row>
            <Col>S: R${this.props.segment.inicio_semana} ({this.props.segment.percent_semana}%)</Col>
            <Col>M: R${this.props.segment.inicio_mes} ({this.props.segment.percent_mes}%)</Col>
          </Row>
          <Row>
            <Col>3M: R${this.props.segment.inicio_tres_meses} ({this.props.segment.percent_tres_meses}%)</Col>
            <Col>6M: R${this.props.segment.inicio_seis_meses} ({this.props.segment.percent_seis_meses}%)</Col>
          </Row>
          <Row>
            <Col>A: R${this.props.segment.inicio_ano} ({this.props.segment.percent_ano}%)</Col>
            <Col>P/PV: R${this.props.segment['P/VP']}</Col>
          </Row>
        </Card.Body>
      </Card>
      );
  }
}

export default Segment;