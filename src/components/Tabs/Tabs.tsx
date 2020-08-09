import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Tab, RouteInfo } from '../../interfaces';
import { TabHeader } from '../TabHeader/TabHeader';
import { findParagraph } from '../../utils/findParagraph';

interface Props {
  tabs: Tab[];
  currentTabId: string;
  routeProps: RouteComponentProps<RouteInfo>;
}

export const Tabs: FC<Props> = ({ tabs, currentTabId, routeProps }) => {
  const { tabId } = routeProps.match.params;

  const currentParagraph = tabId
    ? findParagraph(tabs, tabId)
    : findParagraph(tabs, currentTabId);

  return (
    <div>
      {tabs.map(
        tab => (<TabHeader tab={tab} />),
      )}
      <p>{currentParagraph?.content || ''}</p>
    </div>
  );
};
