import Header from './header';
import SideNav from './sideNav';
import Contents from './contents';
import Footer from './footer';
import { Col, Container, Row } from 'reactstrap';

function Layout (){
  return <Container style={{ maxWidth:2560, paddingLeft:10, paddingRight:10,  paddingTop:10, paddingBottom:10, backgroundColor:"#F1ECC3"}}>
    <Row><Col><Header/></Col></Row>
    <Row style={{minHeight:700, marginTop:10, marginBottom:10}}>
      <Col style={{width:"20%", float:"left"}}><SideNav/></Col>
      <Col style={{width:"80%", float:"right"}}><Contents/></Col>
      </Row>
    <Row><Col><Footer/></Col></Row>
      </Container>
}

export default Layout