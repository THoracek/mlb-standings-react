import React, {Component} from 'react';
import DivisionContainer from "./DivisionContainer";
import RecordsService from "./recordsService";

class App extends Component {
  constructor() {
    super();

    this.state = {
      standings: []
    }
  }

  async componentDidMount() {
    const standings = await new RecordsService().getStandings();

    this.setState({
      standings
    });
  }

  render() {
    const {standings} = this.state;

    return (
      <div className="App">

        <div className="container">
          <h1>Standings</h1>

          <h3>Regular Season</h3>
          {
            standings.map(league => {
              return league.divisions.map(teams => {
                return <DivisionContainer league={league.league} division={teams.division} teams={teams}/>
              });
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
