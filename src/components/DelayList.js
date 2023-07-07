import React from 'react';
import DelayItem from './DelayItem';

const DelayList = ({ delays, onJustify }) => {
  return (
    <table className="table-absences">
      <thead>
        <tr>
          <th>Cours</th>
          <th>Statut</th>
          <th>Date et Heure</th>
          <th>Justification</th>
        </tr>
      </thead>
      <tbody>
        {delays.map((delay) => (
          <DelayItem key={delay.id} delay={delay} onJustify={onJustify} />
        ))}
      </tbody>
    </table>
  );
};

export default DelayList;
