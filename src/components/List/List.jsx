import React, { Component, PropTypes } from 'react';
import { Glyphicon, Row, Col, ListGroup, ListGroupItem, ButtonGroup, Button } from 'react-bootstrap';

const ListItem = ({ item, onItemSet, onItemRemove }) => {
  const itemStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const title = <span>
    { item.start.format('LL') }
    &nbsp;-&nbsp;
    { item.end.format('LL') }
  </span>;

  const buttons = <ButtonGroup>
    <Button bsSize="small" bsStyle="primary" title="Set this range on calendar" onClick={() => onItemSet()}>
      <Glyphicon glyph="calendar" />
    </Button>
    <Button bsSize="small" bsStyle="danger" title="Remove this range from list" onClick={() => onItemRemove()}>
      <Glyphicon glyph="remove" />
    </Button>
  </ButtonGroup>;

  return <ListGroupItem style={itemStyles}>
    { title }
    { buttons }
  </ListGroupItem>;
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onItemSet: PropTypes.func.isRequired,
  onItemRemove: PropTypes.func.isRequired
};

class List extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    onItemSet: PropTypes.func.isRequired,
    onItemRemove: PropTypes.func.isRequired
  }

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
