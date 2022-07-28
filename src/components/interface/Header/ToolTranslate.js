import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../foundation/icon/index';

import '@gouvfr/dsfr/dist/component/translate/translate.css';

import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const ToolTranslate = ({
  children, currentLang, className, descCurrentLang, title, ...remainingProps
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      role="navigation"
      className={classNames(className, 'fr-translate fr-nav')}
      {...dataAttributes.getAll(remainingProps)}
    >
      <div className="fr-nav__item">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="fr-btn fr-btn--tertiary"
          aria-controls="translate-516"
          aria-expanded={!!isOpen}
          title={title}
        >
          <Icon
            name="ri-translate-2"
            size="1x"
          >
            {currentLang}
            <span className="fr-hidden-lg">{descCurrentLang}</span>
          </Icon>
        </button>
        <div className={`fr-translate__menu fr-menu ${isOpen ? 'fr-collapse--expanded' : 'fr-collapse'}`} id="translate-516">
          <ul className="fr-menu__list">
            {children}
          </ul>
        </div>
      </div>
    </nav>
  );
};
ToolTranslate.defaultProps = {
  __TYPE: 'ToolTranslate',
  className: '',
  title: 'Sélectionner une langue',
};

ToolTranslate.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('ToolTranslate'),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  currentLang: PropTypes.string.isRequired,
  descCurrentLang: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default ToolTranslate;