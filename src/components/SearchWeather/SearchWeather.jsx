import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const SearchWeather = (props) => {
    return (
        <Form onSubmit={props.onSearch} autoComplete="off">
            <Form.Row>
                <Col xs={10}>
                    <Form.Group controlId="formBasicText">
                        <Form.Control type="text"  placeholder="Введите назнавние города" onChange={props.onChange} value={props.searchTitle} />
                    </Form.Group>
                </Col>
                <Col xs={2}>
                    <Button variant="primary" className="btn-block" type="submit">Найти</Button>
                </Col>
            </Form.Row>
        </Form>
    );
}

export default SearchWeather;