import React from 'react';
import { MangaReader } from './MangaReader';
import { PageSettingContainer } from './PageSetting/Container';

const App: React.FC = () => {
  return (
    <PageSettingContainer>
      <MangaReader />
    </PageSettingContainer>
  );
};

export default App;
