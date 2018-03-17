import React from 'react';
import { Plugin ,bluerain} from '@blueeast/bluerain-os';
import TextInput from './components/TextInput';
import AppBar from './components/AppBar';
import Button from './components/Button';
import Avatar from './components/Avatar';
import Breadcrumb from './components/Breadcrumb';
import Card , { CardBody, CardHeader, CardMedia, CardFooter} from './components/Card';
import Checkbox from './components/Checkbox';
import Divider from './components/Divider';
import List , { ListItem, ListHeader, ListItemAvatar, ListItemIcon, ListItemText, ListItemRightButton} from './components/List';
import { Modal, ModalBody, ModalFooter, ModalHeader }from './components/Modal'
/**
 * Bootstrap Plugin
 * @property {string} pluginName "BootstrapPlugin"
 * @property {string} slug "bootstrap"
 */
class BootstrapPlugin extends Plugin {

	static pluginName = 'BootstrapPlugin';
	static slug = 'bootstrap';
    static components={
        
        Button,
        Card,
        CardHeader,
        CardMedia,
        CardBody,
        CardFooter,
        Checkbox,
        TextInput,
		Avatar,
        //Modal,
       // ModalHeader,
       // ModalBody,
        // ModalFooter,
        // List,
        ListItem,
        ListHeader,
        ListItemAvatar,
        ListItemIcon,
        ListItemText,
        ListItemRightButton,
        Breadcrumb,
        Divider,
        AppBar
    }

}

export default BootstrapPlugin;
