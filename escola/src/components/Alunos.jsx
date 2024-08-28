import React, {useState} from "react";
import {Form, Col, Row, Button, InputGroup, FormControl} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

export const cpfMask = (value) => {
    console.log('Dentro do CPF');
    
    // Remove all non-digit characters and limit to 11 digits
    value = value.replace(/\D/g, '').slice(0, 11);

    // Apply CPF mask
    value = value
        .replace(/^(\d{3})(\d{1,3})/, '$1.$2')
        .replace(/^(\d{3})\.(\d{3})(\d{1,3})/, '$1.$2.$3')
        .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})/, '$1.$2.$3-$4');

    return value;
};

const Alunos = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cpf, setCpf] = useState('');

    function limpar() {
        setNome('');
        setEndereco('');
    }

    function mensagem() {
        let objetoJson= {}
        objetoJson = {
                        'Nome': nome,
                        'Endereço':endereco,
                        'Cpf':cpf
        }
        console.log(objetoJson)
    }

    return (
        <div>
            <h1>Cadastro de Alunos</h1>
            <div className="Formulário" >
                <Form style={{margin: '5px'}}>
                    <Row>
                        <Col sm={6}>
                            <div className="txtDescricao" >
                                <Form.Label className="text-left" style={{ width: "100%"}}>Nome</Form.Label>
                                <Form.Control 
                                    value={nome}
                                    onChange={e=>setNome(e.target.value)}
                                />
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="txtEndereco" >
                                <Form.Label className="text-left" style={{ width: "100%"}}>Endereço</Form.Label>
                                <Form.Control 
                                    value={endereco}
                                    onChange={e=>setEndereco(e.target.value)}
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={6}>
                            <div className="txtCpf" >
                                <Form.Label className="text-right" style={{ width: "100%"}}>CPF</Form.Label>
                                <Form.Control 
                                    value={cpf}
                                    onChange={e=>setCpf(cpfMask(e.target.value))}
                                />
                            </div>
                        </Col>
                    </Row>
                    
                    <div>
                        <Button onClick={
                            () => limpar()
                        } size="x1"
                        variant="danger">Excluir</Button>

                        <Button onClick={
                            () => mensagem()
                        } size="x1"
                        variant="success">Salvar</Button>

                    </div>

                </Form>
            </div>
        </div>
    )
}

export default Alunos;