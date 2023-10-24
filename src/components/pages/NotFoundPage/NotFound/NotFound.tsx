import React from 'react';
import s from './NotFound.module.scss';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className={s.notFound}>
      <h2 className="text text_type_main-large">404</h2>
      <p className="text text_type_main-medium">
        Страница, которую Вы ищите, была съедена вместе с космобургером. <br />
        Пожалуйста, вернитесь на{' '}
        <Link to="/" className="text-link">
          главную
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
