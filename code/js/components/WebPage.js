import React from 'react';
import CarsList from '../containers/car-list';
import YachtsList from '../containers/yacht-list';

const WebPage = () => (
<div>
  <h3>Cars:</h3>
  <CarsList />
  <hr />
  <h3>Yachts:</h3>
  <YachtsList />
  <hr />
  <h3>Details:</h3>
</div>
);

export default WebPage;
