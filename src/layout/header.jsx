import React,{ memo } from "react";
import { Col, Container, Row } from 'reactstrap';

function Header(){
  return <Container style={{height:150, maxWidth:2560,backgroundColor:"#5F7A61", color:"#C9D8B6", textAlign:"center", fontSize:80, fontWeight:"bolder"}}>
    <Row>
      <Col>{'M A M E R O N G S'}</Col>
    </Row>
  </Container>
}

export default memo(Header)