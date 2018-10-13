import React from 'react';

import styles from "./TeamRow.module.css";

function TeamRow(props) {
  if (!props.team) return null;

  const {team: {wins, losses, team: name}} = props;

  if (!wins || !losses || !name) {
    return null;
  }

  return (
    <tr>
      <td className={styles["team-name"]}>{name}</td>
      <td className={styles["team-wins"]}>{wins}</td>
      <td className={styles["team-losses"]}>{losses}</td>
    </tr>
  );
}

export default TeamRow;
