'use client'

import Head from 'next/head'
import { useRouter } from 'next/router'

import { css } from '@linaria/core'
import { useTranslation } from 'next-export-i18n'

import { ArticleContainer } from '@/components/template/ArticleContainer'
import { Heading } from '@/components/typography/Heading'
import { basePath } from '@/utils/basePath'

export default function NewsDetailPage() {
  const router = useRouter()
  const { t } = useTranslation()
  const id = router.query.id as string

  if (!id) return <p>読み込み中...</p>
  const newsListRaw = t('newsDetail', { returnObjects: true })
  const newsList = Array.isArray(newsListRaw) ? newsListRaw : []
  const news = newsList.find((item: any) => String(item.id) === String(id))

  if (!news) return <p>記事が見つかりません。</p>

  return (
    <>
      <Head>
        <title>{news.title}｜辻村研究室｜名古屋市立大学芸術工学部</title>
      </Head>

      <ArticleContainer>
        <section>
          <Heading>{t(news.title)}</Heading>
          <div className={imageBlock}>
            <img src={`${basePath}${news.picture}`} alt={news.title} />
          </div>

          <div className={contentWrapper}>
            <p  className={contentText}>{news.content}</p>
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

const contentWrapper = css`
  padding:50px 0;
`

const contentText = css`
  font-size:18px;
  line-height:1.5;
`