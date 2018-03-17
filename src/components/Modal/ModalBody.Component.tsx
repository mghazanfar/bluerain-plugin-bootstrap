import React from 'react';
import { ModalBodyProperties } from '@blueeast/bluerain-ui-interfaces';
import {  ModalBody  } from 'reactstrap';

const ModalBodyComponent: React.StatelessComponent<ModalBodyProperties>=(props:ModalBodyProperties)=> {
  return(
    <ModalBody {...props}>
      {props.children}
    </ModalBody>
  );
}
export default ModalBodyComponent;