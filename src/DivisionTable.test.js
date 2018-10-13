import React from 'react';
import ReactDOM from 'react-dom';
import DivisionTable from './DivisionTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DivisionTable/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders with proper props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DivisionTable league="AL" division="West" teams={{
    teams: [{wins: 10, losses: 12, team: "HOU"}, {
      wins: 1,
      losses: 2,
      team: "OAK"
    }]
  }}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

