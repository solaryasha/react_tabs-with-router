import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../../interfaces';

interface Props {
  tab: Tab;
}

export const TabHeader: FC<Props> = ({ tab }) => {
  const { title, id } = tab;

  return (
    <Link to={`/tabs/${id}`}>
      <button type="button">
        {title}
      </button>
    </Link>
  );
};
