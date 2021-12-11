import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Justify } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form'
export const CoinbaseHome = () => {
    return (
        <>
            <Container style={{ maxWidth: '100%' }}>
                <Row style={{ backgroundColor: 'blue', color: 'white', textAlign: 'center' }}><p>Sign up and get $5 in Bitcoin -></p></Row>
                <Row style={{ marginTop: '5px' }}>
                    <Col md={4}>
                        <h1 style={{ color: 'blue' }}>coinbase</h1>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }} >
                        <Col md={{ span: 6, offset: 6 }}>
                            <Button >Get started</Button><span>                    <Justify />
                            </span>
                        </Col>
                    </Col>
                </Row>
                <Row style={{ border: '1px solid', borderColor: '#F0F8FF' }}></Row>
                <br />
                <br />
                <Row>
                    <Col md={8}>
                        <Image style={{ height: '90%', width: '90%' }} src="https://images.ctfassets.net/c5bd0wqjc7v0/2g3pe30Me5gzr3kbsmxKrZ/d272836a3fa4ecd4955002fdb799a968/freeMoney.png?fm=webp&q=100&w=1180"></Image>
                    </Col>
                    <Col md={4}>
                        <div style={{ marginLeft: '-50px' }}>
                            <br />
                            <br />
                            <br />
                            <h1>
                                The future of money is here
                            </h1>
                            <p>
                                Over 68 million people and businesses trust us to buy, sell, and manage crypto.
                            </p>
                            <br />
                            <br />
                            <Row>
                                <Col md={8}>
                                    <Form.Control size={'lg'} type="text" placeholder="satoshi@nakamoto.com" />
                                </Col>
                                <Col>
                                    <Button style={{ padding: '12px' }}>
                                        Sign up
                                    </Button>
                                </Col>

                            </Row>

                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    )
}
