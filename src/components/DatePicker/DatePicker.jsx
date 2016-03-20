import React, { Component, PropTypes } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import DateRangePicker from 'react-daterange-picker';
import moment from 'moment';

class DatePicker extends Component {
  static propTypes = {
    currentRange: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    onAddToList: PropTypes.func.isRequired
  }

  render () {
    const { currentRange, onSelect, onAddToList } = this.props;
    const holderStyles = {
      textAlign: 'center',
      marginBottom: '2rem'
    };

    const dpRange = currentRange ? moment.range(currentRange) : null;
    
    const dateRangePickerProps = {
      firstOfWeek: 1,
      numberOfCalendars: 2,
      selectionType: 'range',
      value: dpRange,
      onSelect
    };

    return <div>
      <Row>
        <Col md={1} xs={0}></Col>
        <Col md={10} xs={12} style={holderStyles}>
          <DateRangePicker
            { ...dateRangePickerProps }
            />
        </Col>
        <Col md={1} xs={0}></Col>
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
