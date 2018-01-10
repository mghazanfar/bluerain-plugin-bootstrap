import React from 'react';
import { create } from 'react-test-renderer';
import Card, { CardBody, CardMedia, CardHeader, CardFooter} from '../src/components/Card';
import Button from '../src/components/Button';

test('when raised is true', () => {
    const CardComponent = create(
        <Card style={{width:300}} raised>
        <CardMedia top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" />
        <CardBody>
          <h2>Card Title</h2>
          <p>This is a wider card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.</p>
          <p>
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </CardBody>
    </Card>
    ).toJSON();
    expect(CardComponent.props.raised).toEqual(true);
    expect(CardComponent).toMatchSnapshot();
});
test('when style is passed an object', () => {
    const CardComponent = create(
        <Card style={{width:300}} raised>
        <CardHeader title="Header"/>
        <CardBody>
          <h3>Special Title Treatment</h3>
          <p>With supporting text below as a natural lead-in to additional content.</p>
          <Button color="success" >Go somewhere</Button>
        </CardBody>
        <CardFooter>Footer</CardFooter>
        </Card>
    ).toJSON();
    expect(CardComponent.props.style).toEqual({width:300});
    expect(CardComponent).toMatchSnapshot();
});