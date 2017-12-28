/**
 * Created by M.GhazanfarAli on 12/27/17.
 */

import * as React from 'react';
import IButton from '@blueeast/bluerain-ui-interfaces/Components/Button';
import 'bootstrap/dist/css/bootstrap.css';


const Button = (ibutton: IButton) => {
    return (
        <button className="btn-primary">{ibutton.children}</button>);

}

export default Button;