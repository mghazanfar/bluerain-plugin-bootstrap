import React from 'react';
import { ModalFooterProperties } from '@blueeast/bluerain-ui-interfaces';
import {  ModalFooter } from 'reactstrap';

const ModalFooterComponent: React.StatelessComponent<ModalFooterProperties> = (props:ModalFooterProperties)=> {
    return(
        <ModalFooter {...props}>
            {props.children}
        </ModalFooter>
    );
}
export default ModalFooterComponent;