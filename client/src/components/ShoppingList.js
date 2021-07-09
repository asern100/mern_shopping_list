import React, { useState, useEffect } from 'react'
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import ItemModal from './ItemModal';

function ShoppingList({getItems, deleteItem, item}) {
    
    
    useEffect(() => {
        getItems()
    }, [getItems] )

    
    
    const onDeleteItem = id => {
        deleteItem(id)
    }

    const { items } = item;

    return (
        <Container>
        <ItemModal />
        <br />
    <ListGroup>
    <TransitionGroup className="shopping-list">
        {items.map(({_id, name})=>(
            <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>

                    <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    
                    onClick={() => onDeleteItem(_id)}
                    >
                    &times;
                    </Button>
                        {name}
                </ListGroupItem>
            </CSSTransition>
        ))}
    </TransitionGroup>
    </ListGroup>
        </Container>

    )
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,  
    deleteItem: PropTypes.func.isRequired,  
    item : PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingList);

