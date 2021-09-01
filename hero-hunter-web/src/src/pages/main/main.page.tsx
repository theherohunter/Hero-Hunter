import React from 'react';

import { Button } from 'antd';
import { useL10n } from '@root/services';
import { FormattedMessage } from 'react-intl';

export const MainPage: React.FC = () => {
  const { dictionary } = useL10n();

  return (
    <div>
      <h2>Main page</h2>
      <Button type="primary">Button</Button>
      <FormattedMessage id={dictionary.navigation.menu.home.id} />
    </div>
  );
};
