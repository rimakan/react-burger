import React from 'react';
import { Link } from 'react-router-dom';
import s from './FormFooterItem.module.scss';

interface FormFooterItemProps {
  label: string;
  linkLabel: string;
  link: string;
}

const FormFooterItem: React.FC<FormFooterItemProps> = ({ label, link, linkLabel }) => {
  return (
    <>
      <p className={`${s.formFooterItem} text text_type_main-default text_color_inactive`}>
        {label} <Link to={link}>{linkLabel}</Link>
      </p>
    </>
  );
};

export default FormFooterItem;
