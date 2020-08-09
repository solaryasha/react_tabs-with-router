import { Tab } from '../interfaces';

export const findParagraph = (tabs: Tab[], id: string) => tabs.find(tab => tab.id === id);
