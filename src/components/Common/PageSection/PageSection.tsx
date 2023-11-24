import s from './PageSection.module.scss';

import React from 'react';

interface PageSectionProps extends React.PropsWithChildren {
  header: string;
}

const PageSection: React.FC<PageSectionProps> = ({ children, header }) => {
  return (
    <section className={`${s.pageSection} pt-4 pb-4`}>
      <header className="pt-10 pb-5">
        <h2 className="text text_type_main-large">{header}</h2>
      </header>
      {children}
    </section>
  );
};

export default PageSection;
