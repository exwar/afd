import React, { Component } from 'react';
import { Glyphicon, Row, Col, ListGroup, ListGroupItem, ButtonGroup, Button } from 'react-bootstrap';

const ListItem = ({ item, onItemSet, onItemRemove }) => {
  const itemStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  const title = <span>
    { item.start.format('LL') }
    &nbsp;-&nbsp;
    { item.end.format('LL') }
  </span>

  const buttons = <ButtonGroup>
    <Button bsSize="small" bsStyle="primary" onClick={() => onItemSet()}>
      <Glyphicon glyph="calendar" />
    </Button>
    <Button bsSize="small" bsStyle="danger" onClick={() => onItemRemove()}>
      <Glyphicon glyph="remove" />
    </Button>
  </ButtonGroup>

  return <ListGroupItem style={itemStyles}>
    { title }
    { buttons }
  </ListGroupItem>;
}

class List extends Component {
  render () {
    const { items, onItemSet, onItemRemove } = this.props;

    return <Row>
      <Col md={3} xs={0}></Col>
      <Col md={6} xs={12}>
        <ListGroup>
          {
            items.map((item, index) => <ListItem
            item={item}
            key={index}
            onItemSet={() => onItemSet(item)}
            onItemRemove={() => onItemRemove(index)} />)
          }
        </ListGroup>
      </Col>
      <Col md={3} xs={0}></Col>
    </Row>;
  }
}

export default List;
