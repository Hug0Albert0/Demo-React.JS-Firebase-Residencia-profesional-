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
      numCont: '',
      apePat: '',
      apeMat: '',
      nombre: '',
      carrera: '',
      semestre: '',
      studentList: []
    }
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.registerStudent = this.registerStudent.bind(this);
  }
  registerStudent() {
    const {
      numCont,
      apePat,
      apeMat,
      nombre,
      carrera,
      semestre
    } = this.state
   var aux = {numCont, apePat, apeMat, nombre, carrera, semestre};
   this.setState((prevState) =>  {
     return {
      studentList: [
        ...prevState.studentList,
        aux
      ],
      numCont: '',
      apePat: '',
      apeMat: '',
      nombre: '',
      carrera: '',
      semestre: ''
     }
   })
    dbRef.child('usuarios')
         .child('estudiantes')
         .push({numCont,apePat,apeMat,nombre,carrera,semestre});
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Demo de Funcionalidades de Firebase + React.js en Aplicaciones Multiplataforma</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <Button color="danger">Bienvenido</Button> */}
       <Container fluid={true}>
         <Row style={{padding: 10}}>
           <Col xs="4" style={{border:1 , borderStyle:"solid", borderRadius:5}} >
             <fieldset style={{padding: 20}}>
               <legend>
                 Agregar Estudiante
               </legend>
               <Form>
               <FormGroup>
                 <Label>Numero de Control</Label>
                 <Input name="numCont" onChange={this.handleChange} value={this.state.numCont}/>
               </FormGroup>
               <FormGroup>
                 <Label>Apellido Paterno</Label>
                 <Input name="apePat" onChange={this.handleChange} value={this.state.apePat}/>
               </FormGroup>
               <FormGroup>
                 <Label>Apellido Materno</Label>
                 <Input name="apeMat" onChange={this.handleChange} value={this.state.apeMat}/>
               </FormGroup>
               <FormGroup>
                 <Label>Nombre</Label>
                 <Input name="nombre" onChange={this.handleChange} value={this.state.nombre}/>
               </FormGroup>
               <FormGroup>
                 <Label>Carrera</Label>
                 <Input name="carrera" onChange={this.handleChange} value={this.state.carrera}/>
               </FormGroup>
               <FormGroup>
                 <Label>Semestre</Label>
                 <Input name="semestre" onChange={this.handleChange} value={this.state.semestre}/>
               </FormGroup>
               <Button onClick={this.registerStudent} color="success">Registrar</Button>
             </Form>
             </fieldset>
           </Col>
           <Col>
             <h2>Lista de Estudiantes</h2>
             <Nav tabs>
               <NavItem>
                 <NavLink href="#" active>Estudiantes</NavLink>
               </NavItem>
             </Nav>
             <Table striped>
               <thead>
                 <tr>
                   <th>No. Control</th>
                   <th>Apellido Paterno</th>
                   <th>Apellido Materno</th>
                   <th>Nombre</th>
                   <th>Carrera</th>
                   <th>Semestre</th>
                 </tr>
               </thead>
               <tbody>
              {
                this.state.studentList.map( item =>
                {
                  return (
                    <tr key={item.numCont}>
                      <th scope="row">{item.numCont}</th>
                      <td>{item.apePat}</td>
                      <td>{item.apeMat}</td>
                      <td>{item.nombre}</td>
                      <td>{item.carrera}</td>
                      <td>{item.semestre}</td>
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
