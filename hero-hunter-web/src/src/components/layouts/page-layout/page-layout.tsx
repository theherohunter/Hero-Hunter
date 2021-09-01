import './page-layout.less';

import classNames from 'classnames';
import React from 'react';

export interface PageLayoutProps {
  className?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ className, children }) => {
  return <div className={classNames('page-layout', className)}>{children}</div>;
};
