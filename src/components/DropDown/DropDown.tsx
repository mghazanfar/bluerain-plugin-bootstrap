import React ,{ ReactNode }  from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { IPicker } from '@blueeast/bluerain-ui-interfaces/Components/Picker';

/**
 * The props of IReactstarpDropDown Component
 * @param {boolean} props.disabled disables the selection.
 * @param {boolean} props.dropup dgroup the component.
 * @param {boolean} props.group group the component.
 * @param {boolean} props.isOpen return true if open.
 * @param {boolean} props.nav For Dropdown usage inside a Nav.
 * @param {boolean} props.inNavbar For Dropdown usage inside a Navbar (disables popper)
 * @param {string} props.tag  default: 'div' unless nav=true, then 'li'.
 * @param {function} props.toggle callback function for toggle .
 */
interface IReactstarpDropDown {
    disabled?: boolean,
    dropup?: boolean,
    group?: boolean,
    isOpen?: boolean,
    // For Dropdown usage inside a Nav
    nav?: boolean,
    // For Dropdown usage inside a Navbar (disables popper)
    inNavbar?: boolean,
    tag?: string, // default: 'div' unless nav=true, then 'li'
    toggle?: (e)=>void
}
/**
 * The props of IReactstarpDropDownToggel Component
 * @param {boolean} props.caret for caret the toggle.
 * @param {boolean} props.color color of the component.
 * @param {boolean} props.className for styles.
 * @param {boolean} props.disabled disables the selection.
 * @param {boolean} props.onClick callback function for click.
 * @param {boolean} props.'data-toggle' for data-toggle
 * @param {boolean} props.'aria-haspopup' for aria-haspopup.
 * @param {boolean} props.navFor Dropdown usage inside a Nav.
 * @param {any} props.tag default: 'div' unless nav=true, then 'li'.
 */
interface IReactstarpDropDownToggel {
    caret?: boolean,
    color?: boolean,
    className?: boolean,
    disabled?: boolean,
    onClick?: ()=>void,
    'data-toggle'?: boolean,
    'aria-haspopup'?: boolean,
    // For DropdownToggle usage inside a Nav
    nav?: boolean,
    // Defaults to Button component
    tag?: any
}
/**
 * The props of IReactstarpDropdownMenu Component
 * @param {string} props.tag default: 'div' unless nav=true, then 'li'.
 * @param {Node} props.children children of the component.
 * @param {boolean} props.right aligens right.
 * @param {boolean} props.flip for flip.
 * @param {string} props.className for styles.
 * @param {object} props.cssModule for styles .
 */
interface IReactstarpDropdownMenu {
    tag?: string,
    right?: boolean,
    flip?: boolean, // default: true,
    className?: string,
    cssModule?: object,
}
/**
 * The props of IReactstarpDropdownItem Component
 * @param {Node} props.children children of the component.
 * @param {boolean} props.active checking for active.
 * @param {boolean} props.disabled disables the selection.
 * @param {boolean} props.divider returns divider in items.
 * @param {function |string } props.tag default: 'div' unless nav=true, then 'li'.
 * @param {boolean} props.header For enable header
 * @param {function} props.onClick  For callback function for click.
 * @param {function} props.toggle callback function for toggle .
 * @param {string} props.className for styles.
 * @param {object} props.cssModule for styles .
 */
interface IReactstarpDropdownItem {
    active?: boolean,
    disabled?: boolean,
    divider?: boolean,
    tag?: ()=>void| string,
    header?: boolean,
    onClick?: ()=>void,
    className?: string,
    cssModule?: object,
    toggle?: boolean // default: true
}
const DropDown=(props:IPicker & IReactstarpDropDown)=> {
        return (
            <Dropdown {...props}>{props.children}</Dropdown>
        );
    };
const DropDownItem=(props:IPicker & IReactstarpDropdownItem)=> {
    return (
        <DropdownItem {...props} />
    );
};
const DropDownToggle=(props:IPicker & IReactstarpDropDownToggel)=> {
    return (
        <DropdownToggle {...props} />
    );
};
const DropDownMenu=(props:IPicker & IReactstarpDropdownMenu)=> {
    return (
        <DropdownMenu {...props}>{props.children}</DropdownMenu>
    );
};
export {
    DropDown, DropDownItem, DropDownToggle,DropDownMenu
};