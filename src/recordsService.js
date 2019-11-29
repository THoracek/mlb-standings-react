import groupBy from 'lodash.groupby';
import sortBy from 'lodash.sortby';
import omit from 'lodash.omit';

const endpoint = 'https://api.mobileqa.mlbinfra.com';

class RecordsService {

  /**
   * Get current MLB Standings, grouped by division, sorted by descending wins.
   *
   * @return (Array)
   */
  getStandings = async () => {
    const records = await this.fetchRecords();

    const recordsGroupedByLeague = RecordsService.groupRecordsByLeague(records);

    return Object.values(recordsGroupedByLeague).map((leagueRecords, i) => {
      const recordsGroupedByDivision = RecordsService.groupRecordsByDivision(leagueRecords);

      return {
        league: Object.keys(recordsGroupedByLeague)[i],
        divisions: Object.values(recordsGroupedByDivision).map((teams, j) => {
          return {
            division: Object.keys(recordsGroupedByDivision)[j],
            teams: RecordsService.sortTeamsByWins(teams.map(team => omit(team, ['division', 'league'])))
          }
        })
      }
    });
  };

  /**
   * Fetch the records from the MLB api
   * Log any errors to the console
   *
   * @return {Array}
   */
  fetchRecords = async () => {
    try {
      const response = await fetch(`${endpoint}/api/interview/v1/records`, {
        mode: 'cors'
      });
      return await response.json();
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * Group a given set of records by the league.
   * The order of grouped values is determined by the order they occur in collection
   *
   * @param {Array} records An array of records objects returned by the MLB API
   *
   * @return {Array}
   */
  static groupRecordsByLeague(records) {
    return groupBy(records, 'league');
  }

  /**
   * Group a given set of records by the division.
   * The order of grouped values is determined by the order they occur in collection
   *
   * @param {Array} records An array of records objects returned by the MLB API
   *
   * @return {Array}
   */
  static groupRecordsByDivision(records) {
    return groupBy(records, 'division');
  }

  /**
   * Sort the teams by wins in descending order
   * This method performs a stable sort, that is, it preserves the original sort order of equal elements
   *
   * @param {Array} teams An array of team objects
   *
   * @return {Array}
   */
  static sortTeamsByWins(teams) {
    return sortBy(teams, team => {
      return -team.wins
    });
  }
}

export default RecordsService;
