/**
 * Created by M.Ghaznfar on 3/3/18.
 */

import React, { ReactNode } from 'react';
import { ModalFooterProperties } from '@blueeast/bluerain-ui-interfaces';
import { DialogActions, } from 'material-ui/Dialog';
import {  ModalFooter } from 'reactstrap';

class ModalFooterComponent extends React.Component<ModalFooterProperties> {
    constructor (props:any) {
      super(props);
      this.props=props;
		}
  render(){
      return(
          <ModalFooter>
            {this.props.children}
          </ModalFooter>
      );
}}
export default ModalFooterComponent;