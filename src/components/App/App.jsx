import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Header from '#components/Header/Header.jsx';
import DatePicker from '#components/DatePicker/DatePicker.jsx';
import List from '#components/List/List.jsx';

class App extends Component {
  constructor() {
    super();

    const itemsStorageState = window.localStorage && localStorage.getItem('afdItemsState');

    this.state = {
      items: itemsStorageState ? JSON.parse(itemsStorageState)['items'] : [],
      currentRange: null
    };
  }

  componentDidUpdate() {
    const { items } = this.state;
    const savedObject = {
      items
    }

    if (window.localStorage) {
      localStorage.setItem('afdItemsState', JSON.stringify(savedObject));
    }
  }

  handleSelect (currentRange) {
    const isoRange = `${currentRange.start.toISOString()}/${currentRange.end.toISOString()}`;

    this.setState({
      currentRange: isoRange
    });
  }

  handleAddingToList () {
    const { items, currentRange } = this.state;
    const newItems = [ ...items, currentRange ];

    this.setState({
      items: newItems
    });
  }

  handleItemSet (item) {
    this.setState({
      currentRange: item
    });
  }

  handleItemRemove (index) {
    const { items } = this.state;

    const newItems = [
      ...items.slice(0, index),
      ...items.slice(index + 1)
    ];

    this.setState({
      items: newItems
    });
  }

  render () {
    const { items, currentRange } = this.state;

    return <Grid>
      <Header />

      <DatePicker
        currentRange={currentRange}
        onSelect={(value) => this.handleSelect(value)}
        onAddToList={() => this.handleAddingToList()}
      />

      <List
        items={items}
        onItemSet={(item) => this.handleItemSet(item)}
        onItemRemove={(item) => this.handleItemRemove(item)}
      />
    </Grid>;
  }
}

export default App;
