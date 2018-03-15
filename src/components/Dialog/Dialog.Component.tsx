/**
 * Created by M.Ghaznfar on 3/3/18.
 */

import React, { ReactNode,Component } from 'react';
import { ModalProperties } from '@blueeast/bluerain-ui-interfaces';
import {  Modal  } from 'reactstrap';


export interface MUIModalProperties extends ModalProperties{
  isOpen?:boolean
  toggle? :()=>void
  className?:object
}
class ModalComponent extends React.Component<MUIModalProperties > {

render(){
  console.log("Modal",this.props.isOpen);
  
   return(
    <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
     {this.props.children}   
 </Modal>
       
      );
    }
	}




export default ModalComponent;