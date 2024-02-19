import Head from 'next/head'

import { css } from '@linaria/core'
import { useTranslation } from 'next-export-i18n'

import { ArticleContainer } from '@/components/template/ArticleContainer'
import { Title } from '@/components/typography/Title'

import { Heading } from '@/components/typography/Heading'
import { basePath } from '@/utils/basePath'


export default function ForStudents() {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>For Students｜辻村研究室｜名古屋市立大学芸術工学部</title>
      </Head>

      <ArticleContainer>
        <Title>{t('students.heading')}</Title>
        

        
        <section>
          <Heading>{t('students.content.colorScience.details')}</Heading>
          <div className={imageBlock}>
            <img src={`${basePath}${t("students.content.colorScience.picture")}`} />
          </div>
        
          
        </section>
      </ArticleContainer>
    </>
  )
}

const section = css`
  height: calc(100svh - 12rem - 304px);
`

const imageBlock = css`
  width: 100%;

  img {
    width: 100%;
    aspect-ratio: 3 / 2;
    object-fit: cover;
  }
`
