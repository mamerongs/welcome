import React,{ memo } from "react";
import { Col, Container, Row } from 'reactstrap';

function Nav(){
  return <Container style={{backgroundColor:"#C9D8B6", color:"#57837b", textAlign:"left", fontSize:20, fontWeight:"bold", minHeight:700}}>
    <Row>
      <Col style={{paddingTop:10, paddingBottom:10, paddingLeft:10}}>{'HOME'}</Col>
    </Row><Row>
      <Col style={{paddingTop:10, paddingBottom:10, paddingLeft:10}}>{'About Me'}</Col>
    </Row><Row>
      <Col style={{paddingTop:10, paddingBottom:10, paddingLeft:10}}>{'Skills'}</Col>
    </Row><Row>
      <Col style={{paddingTop:10, paddingBottom:10, paddingLeft:10}}>{'Projects'}</Col>
    </Row><Row>
      <Col style={{paddingTop:10, paddingBottom:10, paddingLeft:10}}>{'Contect Me'}</Col>
    </Row>
  </Container>
}

export default memo(Nav)