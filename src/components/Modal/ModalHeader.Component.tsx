import React from 'react';
import { ModalHeaderProperties } from '@blueeast/bluerain-ui-interfaces';
import {  ModalHeader  } from 'reactstrap';

export interface MUIModalHeaderProperties extends ModalHeaderProperties{
  toggle :()=>void
}

const  ModalHeaderComponent =(props:MUIModalHeaderProperties)=> {
  return(
    <ModalHeader toggle={props.toggle}>{props.children}</ModalHeader>
  );
}
export default ModalHeaderComponent;