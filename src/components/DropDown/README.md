# DropDown

## Universal Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| children | ReactNode | | children of the component |

## DropDown Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| dropup | boolean |  |Dgropus the childes  |
| group | object | | Gropus the childes |
| isOpen | boolean | | Retuen true if dropdown is in opened. |
| nav | boolean | | For Dropdown usage inside a Nav |
| inNavbar | boolean | | For Dropdown usage inside a Navbar (disables popper) |
| tag | string | | default: 'div' unless nav=true, then 'li'. |
| disabled | boolean | | disables the dropdown |
| toggle | function | | callback function for toggle. |

## DropDownToggel Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| caret | boolean |  |for caret the toggle component  |
| color | boolean | | Gropus the childes |
| className | boolean | | className for styles. |
| nav | boolean | | For Dropdown usage inside a Nav |
| data-toggle | boolean | | for data-toggle |
| tag | any | | default: 'div' unless nav=true, then 'li'. |
| disabled | boolean | | disables the dropdown |
| onClick | function | | callback function for toggle. |
| aria-haspopup | boolean | | for aria-haspopup |

## DropdownMenu Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| tag | any | | default: 'div' unless nav=true, then 'li'. |
| right |boolean  | | for aligens right |
| flip | boolean | | for flip use |
| className | string | | implements a specific class  |
| cssModule | object | | cssModule for styles  |

## DropDownItems Props

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| active | boolean |  |returns true if active  |
| divider | boolean | | for divider between the items |
| header | boolean | |  For enable header. |
| tag | string | | default: 'div' unless nav=true, then 'li'. |
| onClick | function | | callback function for toggle. |
| disabled | boolean | | disables the dropdown |
| toggle | function | | callback function for toggle. |
| className | string | | implements a specific class  |
| cssModule | object | | cssModule for styles  |

## How to use

```JavaScript
import React from 'react';
import { withBluerain } from "@blueeast/bluerain-os";

const DropDown = (props) => {
    const BR = props.bluerain;
    const {DropDown} = BR.Components.get('DropDown');
    const {DropDownToggle} = BR.Components.get('DropDownToggle');
    const {DropDownMenu} = BR.Components.get('DropDownMenu');
    const {DropDownItem} = BR.Components.get('DropDownItem');
    return (
         <DropDown isOpen={true}>
             <DropDownToggle>
                Dropdown
             </DropDownToggle>
                 <DropDownMenu>
                     <DropDownItem>
                         Action
                     </DropDownItem>
                 </DropDownMenu>
         </DropDown>
    )
};
export default withBluerain(DropDown);
```