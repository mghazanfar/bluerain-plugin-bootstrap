import React from 'react';
import { ModalBodyProperties } from '@blueeast/bluerain-ui-interfaces';
import {  ModalBody  } from 'reactstrap';

const  ModalBodyComponent =(props:ModalBodyProperties)=> {
  return(
    <ModalBody>
      {props.children}
    </ModalBody>
  );
}
export default ModalBodyComponent;