import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Label
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';


class ArtViewer extends Component {
    state = {
        modal: false,
    }



    toggle = () => {
        debugger;
        this.setState({
            modal: !this.state.modal,
            // title: this.title
        });
    }


    

   

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={this.toggle}
                >ViewArticle</Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <h1><ModalHeader toggle={this.toggle}> {this.props.title}</ModalHeader></h1>
                    <ModalBody>
                        <h2><Label> {this.props.subtitle}  </Label></h2>
                        <br />
                        <p><Label> {this.props.content}  </Label></p>
                        <br />
                    </ModalBody>
                </Modal>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    item: state.item
});


export default connect(mapStateToProps, { addItem })(ArtViewer);
