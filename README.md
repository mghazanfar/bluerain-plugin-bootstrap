# Bootstrap BlueRain Plugin

Adds [bootstrap](http://getbootstrap.com) theme Provider to BlueRain.
Components of bootstrap have been developed using a common interface.
[https://blueeast.gitbook.io/bluerain-plugin-bootstrap](https://blueeast.gitbook.io/bluerain-plugin-bootstrap)

## Usage

Run the following command in the plugin directoy:

```shell
yarn add @blueeast/bluerain-plugin-bootstrap
```

## Components

- AppBar [Web](https://reactstrap.github.io/components/navbar/)
- Button [Web](https://reactstrap.github.io/components/buttons/)
- Card   [Web](https://reactstrap.github.io/components/card/)
- CardHeader [Web](https://getbootstrap.com/docs/4.1/components/card/)
- CardBody [Web](https://getbootstrap.com/docs/4.1/components/card/)
- CardMedia [Web](https://getbootstrap.com/docs/4.1/components/card/)
- CardFooter [Web](https://getbootstrap.com/docs/4.1/components/card/)
- Dropdown  [Web](https://reactstrap.github.io/components/dropdowns/)  
- List [Web](https://reactstrap.github.io/components/listgroup/)  
- ListHeader [Web](https://reactstrap.github.io/components/listgroup/)  
- ListItem [Web](https://reactstrap.github.io/components/listgroup/)  
- ListItemAvatar [Web](https://reactstrap.github.io/components/listgroup/)  
- ListItemIcon[Web](https://reactstrap.github.io/components/listgroup/)  
- ListItemRightButton [Web](https://reactstrap.github.io/components/listgroup/)  
- ListItemText [Web](https://reactstrap.github.io/components/listgroup/)  

### Avatar

#### **Props**

| Name       | Default | Type   | Description                           |
| ---------- | ------- | ------ | ------------------------------------- |
| style   |         | object |Get the style object |
| src     |         | string | src for Avatar       |
| children |         | Node |children of Avatar|
| size      |         | number | size of Avatar|

### Divider

#### **props**

| Name       | Default | Type   | Description                           |
| ---------- | ------- | ------ | ------------------------------------- |
| light   |         | boolean | Divider is generated with light color|
| component     |         | ReactNode | component to generate Divider with|
| inset |         | boolean |if true, Divider is generated indented|

### TextInput

#### **Prop**

| Name       | Default | Type   | Description                           |
| ---------- | ------- | ------ | ------------------------------------- |
| type   |         | string | the type of TextInput|
| name     |         | string | The name of TextInput|
| multiple |         | boolean |textInput having multiple lines like TextArea etc ..|
| disabled |         | boolean |if true,Input is disabled|

## Filters

This plugin provides complete flexibility to modify the material ui theme. This is done by providing various filter hooks.

### [Demo](https://BlueEastCode.github.io/bluerain-plugin-bootstrap/)

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### BootstrapPlugin

### **Extends [Plugin](https://blueeast.gitbook.io/bluerain-os/api/api-reference#plugin)**

Bootstrap Plugin

### **Properties**

- `pluginName` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** "BootstrapPlugin"
- `slug` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** "bootstrap"

### **Internationalization**

Components provide support for following languages:

- Urdu (ur)
- English (en)
- Arabic (ar)
- Chinese (zh)