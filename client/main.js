import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import ButtonAppBar from '../imports/ui/App.js';
 
Meteor.startup(() => {
  render(<ButtonAppBar />, document.getElementById('render-target'));
});