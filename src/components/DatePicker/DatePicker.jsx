import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import DateRangePicker from 'react-daterange-picker';

class DatePicker extends Component {
  render () {
    const { currentRange, onSelect, onAddToList } = this.props;
    const holderStyles = {
      textAlign: 'center',
      marginBottom: '2rem'
    };
    const dateRangePickerProps = {
      firstOfWeek: 1,
      numberOfCalendars: 2,
      selectionType: 'range',
      value: currentRange,
      onSelect
    };

    return <div>
      <Row>
        <Col md={2} xs={0}></Col>
        <Col md={8} xs={12} style={holderStyles}>
          <DateRangePicker
            { ...dateRangePickerProps }
            />
        </Col>
        <Col md={2} xs={0}></Col>
      </Row>
      <Row>
        <Col xs={12} style={holderStyles}>
          <Button
            disabled={!currentRange}
            onClick={() => onAddToList()}
          >
            Add current range to list
          </Button>
        </Col>
      </Row>
    </div>;
  }
}

export default DatePicker;
