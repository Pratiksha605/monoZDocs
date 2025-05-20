import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useAlternatePageUtils} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import {useLocation} from '@docusaurus/router';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import IconLanguage from '@theme/Icon/Language';
import type {LinkLikeNavbarItemProps} from '@theme/NavbarItem';
import type {Props} from '@theme/NavbarItem/LocaleDropdownNavbarItem';
import { useHistory } from 'react-router-dom';

import styles from './styles.module.css';

export default function LocaleDropdownNavbarItem({
  mobile,
  dropdownItemsBefore,
  dropdownItemsAfter,
  queryString = '',
  ...props
}: Props): JSX.Element {
  const {
    i18n: {currentLocale, locales, localeConfigs},
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  const {search, hash} = useLocation();
  const location = useLocation();
  const history = useHistory();
  const { pathname } = location;
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    const baseURL = 'https://docs.monoz.io';
    let newPath = pathname;
    if (lang === 'en') {
      newPath = pathname.startsWith('/ja') ? pathname.replace('/ja', '') : pathname;
    } else if (lang === 'ja') {
      newPath = pathname.startsWith('/ja') ? pathname : `/ja${pathname}`;
    }
    history.push(newPath);
    setIsOpen(false);

    // Append search and hash if available
    const fullURL = `${newPath}${search}${hash}${queryString}`;
    window.location.href = fullURL;
  };

  const localeItems = locales.map((locale): LinkLikeNavbarItemProps => {
    return {
      label: localeConfigs[locale]!.label,
      lang: localeConfigs[locale]!.htmlLang,
      autoAddBaseUrl: false,
      onClick: () => {
        handleLanguageChange(localeConfigs[locale]!.htmlLang);
      },
      className:
        locale === currentLocale
          ? mobile
            ? 'menu__link--active'
            : 'dropdown__link--active'
          : '',
    };
  });

  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];

  const dropdownLabel = mobile
    ? translate({
        message: 'Languages',
        id: 'theme.navbar.mobileLanguageDropdown.label',
        description: 'The label for the mobile language switcher dropdown',
      })
    : localeConfigs[currentLocale]!.label;

  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={
        <>
          <IconLanguage className={styles.iconLanguage} />
          {dropdownLabel}
        </>
      }
      items={items}
    />
  );
}
