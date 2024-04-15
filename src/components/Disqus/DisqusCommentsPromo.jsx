"use client"
import { DiscussionEmbed } from 'disqus-react'
import React from 'react'

export const dynamic = "force-dynamic";

function DisqusCommentsPromo({post}) {
  const pageUrl = typeof window !== 'undefined'? window.location.href : ""
  const disqusConfig = {
    url: pageUrl,
    identifier: ".app",
    title: "promo"
  }
  return (
    <DiscussionEmbed shortname='fibramappromo' config={disqusConfig} />
  )
}

export default DisqusCommentsPromo