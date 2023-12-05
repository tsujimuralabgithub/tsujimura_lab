import Head from 'next/head'

import { css } from '@linaria/core'
import { useTranslation } from 'next-export-i18n'

import { ArticleContainer } from '@/components/template/ArticleContainer'
import { ExternalLink } from '@/components/typography/ExternalLink'
import { Heading } from '@/components/typography/Heading'
import { textStyle } from '@/components/typography/Text'
import { Title } from '@/components/typography/Title'
import { memberList } from '@/content/members'
import { FontWeight } from '@/styles/StyleToken'

export default function Members() {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>Members｜辻村研究室｜名古屋市立大学芸術工学部</title>
      </Head>

      <ArticleContainer>
        <Title>{t('members.structure.heading')}</Title>
        <section>
          <Heading>{t('members.structure.professor')}</Heading>
          <ExternalLink link="https://nrd.nagoya-cu.ac.jp/profile/en.0597f54a4f5fa058.html">
            辻村 誠一 / Sei-ichi Tsujimura
          </ExternalLink>
        </section>
        <section>
          <Heading>{t('members.structure.students')}</Heading>
          <div>
          {t('members.list').map((item: any, idx: number) => (
              <div key={idx} className={memberRow}>
                <h3 className={memberRole}>{item.head}</h3>
                <ul className={memberListWrap}>
                  {item.data.map((data: any, index: number) => (
                    <li key={index} className={nameWrap}>
                      {data}
                    </li>
                  ))}
                </ul>
              </div>
          ))}
          </div>

        </section>
      </ArticleContainer>
    </>
  )
}

const memberRow = css`
  display: flex;
  align-self: flex-start;
  padding: 0.8rem 0;
  border-color: rgb(33 33 33 / 40%);
  border-style: solid;
  border-width: 0 0 1px;

  &:first-child {
    border-width: 1px 0;
  }

  @media screen and (width <= 720px) {
    flex-direction: column;
  }
`

const memberRole = css`
  width: 30%;
  font-weight: ${FontWeight.bold};
  ${textStyle}

  @media screen and (width <= 720px) {
    width: 100%;
  }
`

const memberListWrap = css`
  display: flex;
  flex-wrap: wrap;
  width: 70%;

  @media screen and (width <= 720px) {
    width: 100%;
  }
`

const nameWrap = css`
  display: inline-flex;
  ${textStyle}

  :not(:last-child) {
    margin-right: 0.5em;

    &::after {
      content: ',';
    }
  }
`
