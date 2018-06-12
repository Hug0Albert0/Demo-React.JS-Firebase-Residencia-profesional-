import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dbRef from './firebase';
import {
  Button,
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Form,
  Nav,
  NavItem,
  NavLink,
  Table
} from 'reactstrap';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      date: this.generateDate(),
      title: '',
      body: '',      
      adList: []
    }
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.registerStudent = this.registerStudent.bind(this);
    this.generateDate = this.generateDate.bind(this);
  }
  registerStudent() {
    const {
      date,
      title,
      body    
    } = this.state
   // var aux = {numCont, apePat, apeMat, nombre, carrera, semestre};
   this.setState((prevState) =>  {
     return {
      //   ...prevState.studentList,
      //   aux
      // ],   
      title: '',
      body: ''   
     }
   })
    dbRef.child('avisos')        
         .push({date,title,body});
  }

  componentDidMount () {
  dbRef.child('avisos')        
       .on('value',(snapshot) => {
       let data =snapshot.val();
       if (data!=null) {
       let arrSnap = Object.values(data);
       this.setState({adList:arrSnap});
      } else {
      	this.setState({adList: []});
      }

   });
 }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  generateDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    } 

    if(mm<10) {
        mm = '0'+mm
    } 

    today = dd + '/' + mm + '/' + yyyy;

    return today;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Avisos ITVH</h1>
          <h3>En contacto contigo</h3>
        </header>        
       <Container fluid={true}>
         <Row style={{padding: 30}}>
           <Col lg="4" style={{paddingBottom:20}}>
             <fieldset style={{padding:20,border:1 , borderStyle:"solid", borderRadius:5, display:'flex'}}>
               <Label style={{fontSize:25}}>
                 Nuevo Aviso
               </Label>
               <Form>
               <FormGroup>
                 <Label className="labelForm">Titulo del Aviso</Label>
                 <Input name="title" type='text' onChange={this.handleChange} value={this.state.title} required/>
               </FormGroup>
               <FormGroup>
                 <Label>Cuerpo del Aviso</Label>
                 <Input type='textarea' name="body" onChange={this.handleChange} value={this.state.body} required style={{height:200}}/>
               </FormGroup>
               <div style={{width:'100%',display:'flex', justifyContent:'flex-end'}}>
                  <Button onClick={this.registerStudent} color="success">Enviar</Button>
               </div>      
              
             </Form>
             </fieldset>
           </Col>
           <Col>
             <h2 style={{textAlign:'center'}}>Actividad reciente</h2>
             <Nav tabs>
               <NavItem>
                 <NavLink href="#" active>Avisos</NavLink>
               </NavItem>
             </Nav>
             <Table striped>
               <thead>
                 <tr style={{textAlign:'center'}}>
                   <th>Fecha</th>
                   <th>Titulo</th>
                   <th>Cuerpo</th>
                   <th>Opciones</th>                                     
                 </tr>
               </thead>
               <tbody>
              {
                this.state.adList.map( item =>
                {
                  return (
                    <tr key={1}>
                      <th scope="row">{this.generateDate()}</th>          
                      <td>{item.title}</td>
                      <td style={{textAlign:'justify'}}>{item.body}</td>
                      <td style={{textAlign:'center'}}><a>Eliminar</a></td>            
                    </tr>
                  )
                })

              }
               </tbody>
             </Table>
           </Col>
         </Row>
       </Container>
      </div>
    );
  }
}

export default App;
