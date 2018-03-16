import React from 'react';
import { ModalFooterProperties } from '@blueeast/bluerain-ui-interfaces';
import {  ModalFooter } from 'reactstrap';

const  ModalFooterComponent =(props:ModalFooterProperties)=> {
    return(
        <ModalFooter>
            {props.children}
        </ModalFooter>
    );
}
export default ModalFooterComponent;