import React from 'react';
import JustifyButton from './JustifyButton';
import FileUploader from './FileUploader';

const DelayItem = ({ delay, onJustify }) => {
  const { id, cours, statut, dateHeure, fichier } = delay;

  const handleJustify = (file) => {
    onJustify(id, file);
  };

  return (
    <tr>
      <td>{cours}</td>
      <td className={statut === 'Justifié' ? 'justified' : ''}>{statut}</td>
      <td>{dateHeure}</td>
      <td>
        {statut === 'Non justifié' ? (
          <div>
            {!fichier ? (
              <FileUploader onFileChange={handleJustify} />
            ) : (
              <div>
                <p>
                  <a href={URL.createObjectURL(fichier)} target="_blank" rel="noopener noreferrer">
                    Voir document
                  </a>
                </p>
              </div>
            )}
          </div>
        ) : (
          <p>Justifié</p>
        )}
      </td>
    </tr>
  );
};

export default DelayItem;
