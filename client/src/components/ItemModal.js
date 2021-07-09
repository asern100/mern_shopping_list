import React, {useState} from "react"
import {Button,Modal,ModalHeader,ModalBody,ModalFooter,Form,FormGroup,Label,Input} from 'reactstrap'
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

const ItemModal = ({addItem}) => {
    
    const [modal, setModal] = useState(false);
    const [name, setName] = useState("")
  
    const toggle = () => setModal(!modal);
  
    
    const handleAdd = () =>{
        
        if(name.length > 2){
            addItem(name)
            toggle()
        }
        else {
            alert("Can't add empty name !")
        }
    }
    
  
    return (
      <div>
        
          <Button color="dark" size="sm" onClick={toggle}>ADD ITEM</Button>
        
        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>New Item</ModalHeader>
          <ModalBody>
            <Form>
                <FormGroup>
                    <Label>Item Name</Label>
                    <Input onChange={(e) => setName(e.target.value)} />
                </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleAdd}>ADD ITEM</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

ItemModal.propTypes = {
    addItem: PropTypes.func.isRequired,     
    item : PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, {addItem})(ItemModal);

