import React, { FC } from 'react';
import { Tab } from '../../interfaces';

interface Props {
  tabs: Tab[];
  currentTabId: string;
}

export const Tabs: FC<Props> = ({ tabs, currentTabId }) => {
  return (
    <div>
      {tabs.map(
        tab => (<Tab content={tab} />),
      )}
    </div>
  );
};
