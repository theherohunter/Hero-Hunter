import React from 'react';

import { Button } from 'antd';
import { PageLayout } from '@root/components';

export const MainPage: React.FC = () => {
  return (
    <PageLayout>
      <div>
        <h2>Main page</h2>
        <Button type="primary">Button</Button>
      </div>
    </PageLayout>
  );
};
