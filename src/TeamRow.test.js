import React from 'react';
import ReactDOM from 'react-dom';
import TeamRow from './TeamRow';

it('renders without crashing', () => {
  const tbody = document.createElement('tbody');
  ReactDOM.render(<TeamRow/>, tbody);
  ReactDOM.unmountComponentAtNode(tbody);
});

it('renders with proper props', () => {
  const tbody = document.createElement('tbody');
  ReactDOM.render(<TeamRow team={{wins: 10, losses: 12, team: "HOU"}}/>, tbody);
  ReactDOM.unmountComponentAtNode(tbody);
});
