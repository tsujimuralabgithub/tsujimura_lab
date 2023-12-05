import Head from 'next/head'
import Link from 'next/link'

import { css } from '@linaria/core'
import { useTranslation } from 'next-export-i18n'

import { ArticleContainer } from '@/components/template/ArticleContainer'
import { MovieContainer } from '@/components/template/MovieContainer'
import { Heading } from '@/components/typography/Heading'
import { SubHeading } from '@/components/typography/SubHeading'
import { Text, textStyle } from '@/components/typography/Text'
import { Title } from '@/components/typography/Title'
import { basePath } from '@/utils/basePath'

type EquipmentType = {
  name: string
  detail: string
  image: string
}

export default function Research() {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t('laboratory.title')}</title>
      </Head>

      <ArticleContainer>
        <section>
          <Title>{t('laboratory.structure.labInfo')}</Title>
          <Text>{t('laboratory.outline')}</Text>
        </section>

        <section>
          <Heading>{t('laboratory.structure.research')}</Heading>
          <SubHeading>{t('laboratory.section.research.subheading')}</SubHeading>
          {t('laboratory.section.research.content').map(
            (item: string, idx: number) => (
              <Text key={idx}>{item}</Text>
            )
          )}
        </section>

        <section>
          <Heading>{t('laboratory.structure.studentResearch')}</Heading>
          <SubHeading>
            {t('laboratory.section.studentResearch.subheading')}
          </SubHeading>
          <ul className={list}>
            {t('laboratory.section.studentResearch.content').map(
              (item: string, idx: number) => (
                <li key={idx} className={listItem}>
                  {item}
                </li>
              )
            )}
          </ul>
        </section>

        <section>
          <Heading>{t('laboratory.structure.recentActivities')}</Heading>
          <SubHeading>{t('laboratory.section.recentActivities.jetsonNano.heading')}</SubHeading>
          <Text>{t('laboratory.section.recentActivities.jetsonNano.outline')}</Text>
          <ul className={list}>
            {t('laboratory.section.recentActivities.jetsonNano.links').map(
              (item: string, idx: number) => (
                <li key={idx} className={listItem}>
                  <Link href={item}>
                    {item}
                </Link>
                </li>
              )
            )}
          </ul>
          
          <Text>{t('laboratory.section.recentActivities.jetsonNano.collision')}</Text>
          <MovieContainer>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/aDBKKTeagzs?si=aueiZdGx-3JRjHgP'
              title='【Jetbot】Collision Avoidance 01'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            />
          </MovieContainer>
          <MovieContainer>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/Znr3cE1m4aA?si=tEKluqX6s32-rSaL'
              title='【Jetbot】Road Following'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            />
          </MovieContainer>
          <MovieContainer>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/Yxtqz4ZRMU0?si=oM9rKisxLCdrqxHn'
              title='YouTube video player 【Jetbot】コース走行'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            />
          </MovieContainer>
        </section>

        <section>
          <Heading>{t('laboratory.structure.equipments')}</Heading>
          <ul className={equipmentList}>
            {t('laboratory.section.equipments').map(
              (item: EquipmentType, idx: number) => (
                <li key={idx} className={itemBlock}>
                  <div>
                    <SubHeading>{item.name}</SubHeading>
                    <Text>{item.detail}</Text>
                  </div>
                  <div className={imageBlock}>
                    <img src={`${basePath}${item.image}`} alt={item.name} />
                  </div>
                </li>
              )
            )}
          </ul>
        </section>
      </ArticleContainer>
    </>
  )
}

const list = css`
  margin: 20px 0;
`

const listItem = css`
  position: relative;
  padding-inline-start: 20px;
  ${textStyle}

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '・';
  }
`

const equipmentList = css`
  display: flex;
  flex-direction: column;
  gap: 48px;
`

const itemBlock = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 20px;
  align-items: center;

  @media screen and (width <= 750px) {
    grid-template-columns: 1fr;
  }
`

const imageBlock = css`
  width: 100%;

  img {
    width: 100%;
    aspect-ratio: 3 / 2;
    object-fit: cover;
  }
`
