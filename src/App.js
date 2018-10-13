import React, {Component} from 'react';
import DivisionTable from "./DivisionTable";
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
    const { standings } = this.state;

    return (
      <div className="container">
        <h1>Standings</h1>

        <h3>Regular Season</h3>
        {
          standings.map(leagues => {
            const { divisions, league } = leagues;

            return divisions.map(teams => {
              const { division } = teams;

              return <DivisionTable key={division} league={league} division={division} teams={teams}/>
            });
          })
        }
      </div>
    );
  }
}

export default App;
