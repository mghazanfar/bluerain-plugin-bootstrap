/**
 * Created by M.Ghaznfar on 3/3/18.
 */

import React, { ReactNode } from 'react';
import { ModalHeaderProperties } from '@blueeast/bluerain-ui-interfaces';
import {  ModalHeader  } from 'reactstrap';

export interface MUIModalHeaderProperties extends ModalHeaderProperties{
  
  toggle :()=>void

}
class ModalHeaderComponent extends React.Component<MUIModalHeaderProperties> {
    constructor (props:any) {
      super(props);
      this.props=props;
		}

  render(){

return(

  <ModalHeader toggle={this.props.toggle}>{this.props.children}</ModalHeader>

);
}}
export default ModalHeaderComponent;