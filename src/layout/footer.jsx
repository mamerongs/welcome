import React, { memo } from "react"
import { Col, Container, Row } from 'reactstrap';

function Footer (){
  return <Container style={{height:50, maxWidth:2560, background:"#515E63", textAlign:"center",  color:"#F1ECC3"}}>
    <Row><Col>{'made by mamerongs'}</Col></Row></Container>
}

export default memo(Footer)