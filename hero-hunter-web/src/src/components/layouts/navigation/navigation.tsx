import './navigation.less';

import React from 'react';

import { Button } from 'antd';
import { useL10n } from '@root/services';
import { FormattedMessage } from 'react-intl';

export const Navigation: React.FC = () => {
  const { dictionary } = useL10n();

  return (
    <div className="navigation">
      <div>Logo</div>
      <nav>
        <li>
          <FormattedMessage id={dictionary.navigation.menu.jobs.id} />
        </li>
        <li>
          <FormattedMessage id={dictionary.navigation.menu.companies.id} />
        </li>
        <li>
          <FormattedMessage id={dictionary.navigation.menu.candidates.id} />
        </li>
      </nav>
      <div>
        <Button type="primary">
          <FormattedMessage id={dictionary.navigation.buttons.login.id} />
        </Button>
        <Button type="default">
          <FormattedMessage id={dictionary.navigation.buttons.registration.id} />
        </Button>
      </div>
    </div>
  );
};
