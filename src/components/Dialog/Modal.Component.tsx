import React, { ReactNode } from 'react';
import { ModalProperties } from '@blueeast/bluerain-ui-interfaces';
import {  Modal  } from 'reactstrap';

export interface MUIModalProperties extends ModalProperties{
  isOpen?:boolean
  toggle? :()=>void
  className?:object,
  children:ReactNode
}
const ModalComponent =(props:MUIModalProperties)=>{

   return(
    <Modal isOpen={props.isOpen} toggle={props.toggle} className={props.className}>
     {props.children}   
    </Modal>
       
      );
    }
	
export default ModalComponent;