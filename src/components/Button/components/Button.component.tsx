/**
 * Created by M.GhazanfarAli on 12/27/17.
 */

import * as React from 'react';
import IButton from '@blueeast/bluerain-ui-interfaces/Components/Button';
import 'bootstrap/dist/css/bootstrap.css';


const Button = (iButton: IButton) => {
    return (
        <button type="button" className="btn btn-primary">{iButton.children}</button>);

}

export default Button;