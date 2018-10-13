import React from 'react';

import styles from "./DivisionTable.module.css";
import TeamRow from "./TeamRow";

function DivisionTable(props) {
  const { division, league, teams } = props;

  if (!division || !league || !teams) {
    return null;
  }

  return (
    <table className={styles.division}>
      <thead>
      <tr className={styles["division-table-header"]}>
        <th>{league} {division}</th>
        <th><span className={styles["more-information"]} title="Wins">W</span></th>
        <th><span className={styles["more-information"]} title="Losses">L</span></th>
      </tr>
      </thead>
      <tbody className={styles["division-table-body"]}>
      {
        teams.teams.map(team => {
          return <TeamRow key={team.team} team={team}/>
        })
      }
      </tbody>
    </table>
  );
}

export default DivisionTable;
