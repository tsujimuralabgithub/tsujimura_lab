'use client'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { css } from '@linaria/core'
import { useTranslation, LanguageSwitcher } from 'next-export-i18n'

import { Color, FontFamily, FontWeight } from '@/styles/StyleToken'

type Props = { path: string }

export const NavList = ({ path }: Props) => {
  const { t } = useTranslation()
  const router = useRouter()
  const [id, setId] = useState<string | null>(null)

  // URLからidを取得
  useEffect(() => {
    if (router.query.id) {
      setId(String(router.query.id))
    } else {
      const match = router.asPath.match(/\/news\/(\d+)/)
      if (match) setId(match[1])
    }
  }, [router.query.id, router.asPath])

  const queryWithLang = (lang: string) => ({ ...router.query, lang })

  return (
    <ol className={list}>
      <li className={`${listItem} ${path === '/' && isCurrent}`}>
        <Link href={{ pathname: '/', query: queryWithLang('ja') }}>
          {t('navbar.top')}
        </Link>
      </li>
      <li className={`${listItem} ${path === '/laboratory' && isCurrent}`}>
        <Link href={{ pathname: '/laboratory', query: queryWithLang('ja') }}>
          {t('navbar.labInfo')}
        </Link>
      </li>
      <li className={`${listItem} ${path === '/members' && isCurrent}`}>
        <Link href={{ pathname: '/members', query: queryWithLang('ja') }}>
          {t('navbar.members')}
        </Link>
      </li>
      <li className={`${listItem} ${path === '/publications' && isCurrent}`}>
        <Link href={{ pathname: '/publications', query: queryWithLang('ja') }}>
          {t('navbar.publications')}
        </Link>
      </li>
      <li className={`${listItem} ${path === '/students' && isCurrent}`}>
        <Link href={{ pathname: '/students', query: queryWithLang('ja') }}>
          {t('navbar.forStudents')}
        </Link>
      </li>
      <li className={listItem}>
        <LanguageSwitcher
          lang='ja'
          href={
            id
              ? { pathname: `/news/${id}`, query: queryWithLang('ja') }
              : { pathname: router.pathname, query: queryWithLang('ja') }
          }
        >
          日本語
        </LanguageSwitcher>
        {' | '}
        <LanguageSwitcher
          lang='en'
          href={
            id
              ? { pathname: `/news/${id}`, query: queryWithLang('en') }
              : { pathname: router.pathname, query: queryWithLang('en') }
          }
        >
          EN
        </LanguageSwitcher>
        {' | '}
        <LanguageSwitcher
          lang='ro'
          href={
            id
              ? { pathname: `/news/${id}`, query: queryWithLang('ro') }
              : { pathname: router.pathname, query: queryWithLang('ro') }
          }
        >
          ro
        </LanguageSwitcher>
      </li>
    </ol>
  )
}

const textStyle = {
  fontFamily: FontFamily.nunito_sans,
  fontSize: '1.1rem',
  fontWeight: FontWeight.bold,
  lineHeight: '1.75rem',
  letterSpacing: '0.05rem'
}

const list = css`
  display: flex;
  gap: 24px;

  @media screen and (max-width: 830px) {
    flex-direction: column;
    align-items: center;
  }
`

const listItem = css`
  a {
    position: relative;
    ${textStyle};

    &::after {
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      content: '';
      background: ${Color.main_black};
      transition: all 0.3s;
      transform: scale(0, 1);
      transform-origin: center top;
    }

    &:hover::after {
      transform: scale(1, 1);
    }
  }

  span {
    ${textStyle};
    cursor: pointer;

    &[data-is-current='false'] {
      color: ${Color.main_grey};
    }
  }
`

const isCurrent = css`
  a::after {
    transform: scale(1, 1);
  }
`
