import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';


class ItemModal extends Component {
    state = {
        modal: false,
        title: '',
        subtitle: '',
        content: '',
        imageUrl: '',
        progressiveness: 3

    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            title: this.state.title,
            subtitle: this.state.subtitle,
            content: this.state.content,
            imageUrl: this.state.imageUrl,
            progressiveness: this.state.progressiveness,
        }

        //Add item via addItem action
        this.props.addItem(newItem);

        //close modal
        this.toggle();
    }

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >Add Item</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item"></Label>
                                <Input
                                    type="text"
                                    name="title"
                                    subtitle="subtitle"
                                    id="item"
                                    placeholder="Add Article Title"
                                    onChange={this.onChange}
                                />
                                 <Input
                                    type="text"
                                    name="subtitle"
                                    id="item"
                                    placeholder="Add Article Subtitle"
                                    onChange={this.onChange}
                                />
                                <Input
                                    type="text"
                                    name="content"
                                    id="item"
                                    placeholder="Add Article Content"
                                    onChange={this.onChange}
                                />
                                <Input
                                    type="text"
                                    name="imageUrl"
                                    id="item"
                                    placeholder="Add image url"
                                    onChange={this.onChange}
                                />
                                <Input
                                    type="number"
                                    name="progressiveness"
                                    id="item"
                                    placeholder="Add Progressive level"
                                    onChange={this.onChange}
                                />
                                <Button color="dark" style={{ marginTop: '2rem' }} block>
                                    Add Item
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    item: state.item
});


export default connect(mapStateToProps, { addItem })(ItemModal);
