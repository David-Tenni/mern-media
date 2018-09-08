import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Label, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import ArtViewer from './ArtViewer.js';
class ShoppingList extends Component {
    constructor() {
        super();
        this.state = {
            modal: false,
            title: '',
            subtitle: '',
            content: '',
            imageUrl: '',
            progressiveness: 50
        }
      }
    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id => {
        this.props.deleteItem(id);
    }
    onViewArticleClick = id => {
        window.open("article.html/" + id + "/") ;
        
    }
    
    
    // + id
    render() {
        const { items } = this.props.item;
        return (
            
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ _id, title, subtitle, content, imageUrl, progressiveness}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className='remove-btn'
                                        
                                        color="danger"
                                        size="small"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                        >
                                        &times;</Button>
                                        <Label>{title}</Label>
                                    <ArtViewer 
                                    title = {title}
                                    subtitle = {subtitle}
                                    content = {content}
                                    imageUrl = {imageUrl}
                                    />
                                    </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>

            </Container>

        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(
    mapStateToProps, 
    { getItems, deleteItem }
)(ShoppingList);