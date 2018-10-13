import groupBy from 'lodash.groupby';
import sortBy from 'lodash.sortby';

const endpoint = 'https://api.mobileqa.mlbinfra.com';

class RecordsService {
  getStandings = async () => {
    try {
      const response = await fetch(`${endpoint}/api/interview/v1/records`);
      const records = await response.json();
      const recordsGroupedByLeague = RecordsService.groupRecordsByLeague(records);

      const recordsGroupedByDivision = Object.values(recordsGroupedByLeague).map((leagueRecords, i) => {
        return {
          league: Object.keys(recordsGroupedByLeague)[i],
          divisions: RecordsService.groupRecordsByDivision(leagueRecords)
        }
      });

      return recordsGroupedByDivision.map((league, i) => {

        const divisions = Object.values(league.divisions).map((teams, j) => {
          return {
            division: Object.keys(league.divisions)[j],
            teams: RecordsService.sortTeamsByWins(teams)
          }
        });

        return {
          league: Object.keys(recordsGroupedByLeague)[i],
          divisions: divisions
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  static groupRecordsByLeague(records) {
    return groupBy(records, 'league');
  }

  static groupRecordsByDivision(records) {
    return groupBy(records, 'division');
  }

  static sortTeamsByWins(teams) {
    return sortBy(teams, team => {
      return -team.wins
    });
  }
}

export default RecordsService;
