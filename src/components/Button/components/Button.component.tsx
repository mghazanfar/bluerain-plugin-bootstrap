/**
 * Created by M.GhazanfarAli on 12/27/17.
 */
import * as React from 'react';
// import IButton from '@blueeast/bluerain-ui-interfaces/Components/Button';

export interface IButtonProps {
    name?: string;
    children?: string;
}

export class Button extends React.Component<IButtonProps, {}> {
    render() {
        return <div><h1>Hello {this.props.children}</h1></div>;
    }
}
