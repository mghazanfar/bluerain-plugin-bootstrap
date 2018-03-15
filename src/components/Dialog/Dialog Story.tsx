// import React from 'react';
 import ModalComponent from './Dialog.Component';
 import ModalBodyComponent from './DialogBody.Component'
 import  ModalFooterComponent from './DialogFooter.Component'
 import  ModalHeaderComponent from './DialogHeader.Component'
 import Button from '../Button/index'
import React from 'react';
//import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


interface state{
  modal:boolean
}
interface props{}

  
  class ModalExample extends React.Component<props,state> {
    constructor(props) {
      super(props);
      this.state = {
        modal: false
      };
  
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
  
    render() {
      return (
        <div>
          <Button color="danger" onClick={this.toggle}>Press me</Button>
          <ModalComponent isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeaderComponent toggle={this.toggle}>Modal title</ModalHeaderComponent>
            <ModalBodyComponent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBodyComponent>
            <ModalFooterComponent>
              <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooterComponent>
          </ModalComponent>
        </div>
      );
    }
  }
  
  export default ModalExample;