import React,{ memo } from "react";
import { Col, Container, Row } from 'reactstrap';

function Contents(){
  return <Container style={{ backgroundColor:"#F1ECC3", color:"#515E63", minHeight:700}}>
    <Row>
      <Col>{'CONTENT'}</Col>
    </Row>
  </Container>
}

export default memo(Contents)