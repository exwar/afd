import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import DatePicker from './DatePicker.jsx';

import moment from 'moment';

describe ('DatePicker', function () {
  const currentRange = null;
  const mockedFunction = () => {  };

  it('renders without problems', function () {
    const datePicker = TestUtils.renderIntoDocument(<DatePicker
      currentRange={currentRange}
      onSelect={mockedFunction}
      onAddToList={mockedFunction}
    />);

    expect(datePicker).toExist();
  });
});
