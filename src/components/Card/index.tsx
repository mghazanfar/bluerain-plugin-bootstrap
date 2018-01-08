import Card from './card/Card.component';
import CardHeader from './card/CardHeader.component';
import CardMedia from './card/CardMedia.component';
import CardBody from './card/CardBody.component';
import CardFooter from './card/CardFooter.component';
export { default } from './card/Card.component';
export { CardHeader, CardMedia, CardBody, CardFooter };

import BR from '@blueeast/bluerain-os';
BR.Components.register('Card', Card);
BR.Components.register('CardHeader', CardHeader);
BR.Components.register('CardMedia', CardMedia);
BR.Components.register('CardBody', CardBody);
BR.Components.register('CardFooter', CardFooter);