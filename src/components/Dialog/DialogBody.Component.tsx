/**
 * Created by M.Ghaznfar on 3/3/18.
 */

import React, { ReactNode,Component,Children } from 'react';
import { ModalBodyProperties } from '@blueeast/bluerain-ui-interfaces';
import {  ModalBody  } from 'reactstrap';




class ModalBodyComponent extends React.Component<ModalBodyProperties> {
    constructor (props:any) {
      super(props);
      this.props=props;
		}
  render(){
    return(
      <ModalBody>
      {this.props.children}
      </ModalBody>
    );
}}
export default ModalBodyComponent;