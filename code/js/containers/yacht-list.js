import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class YachtsList extends Component {
  render () {
    return (
      <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ol>
    );
  }
}


export default YachtsList;
