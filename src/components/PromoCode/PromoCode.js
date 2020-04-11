import React, { Component } from 'react';
import {
    Button,
    Collapse,
    Card,
    Form,
    Row,
    Col,
    FormGroup,
    ControLLabel,
    FormControl
    } from 'react-bootstrap';
// add part redux and global estate manager 
    class PromoCodeDiscount extends Component {
        constructor(props){
            super(props);

            this.state = {
                open: false,
                value: ''
            };
        }

        render() {
            return(
                <div>
                    <Button
                    className="promo-code-button"
                    bsStyle="Link"
                    onClick={() => this.setState({open: !this.state.open})}
                    >
                    {this.state.open === false ? `Apply` : `Hide`}
                    promo code
                    {this.state.open === false ? ` + ` : ` - `}
                    </Button>

                    <Collapse in={this.state.open}> 
                        <div>
                            <Card>
                                <Row className="show-grid">
                                    <Col md={12}>
                                        <Form>
                                            <FormGroup controlId="formInLineName">
                                                <ControlLabel>Promo Code</ControlLabel>
                                                <FormControl 
                                                type="text"
                                                Placeholder="Enter promo code"
                                                value={this.props.promoCode}
                                                onChange={this.handleChange}
                                                />
                                            </FormGroup>

                                            <Button
                                                block
                                                bsStyle="success"
                                                className="btn-round"
                                                disabled={this.props.isDisabled}
                                                onClick={this.props.giveDiscount}
                                            >
                                                Apply
                                            </Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    </Collapse>
                </div>
            )
        }
    }

    export default PromoCodeDiscount;