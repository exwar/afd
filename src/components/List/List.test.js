import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import List from './List.jsx';

describe ('List', function () {
  const items = [];
  const mockedFunction = () => {};

  it('renders without problems', function () {
    const listTestProps = {
      items: items,
      onItemSet: mockedFunction,
      onItemRemove: mockedFunction
    };
    const list = TestUtils.renderIntoDocument(<List
      { ...listTestProps }
    />);

    expect(list).toExist();
  });
});
