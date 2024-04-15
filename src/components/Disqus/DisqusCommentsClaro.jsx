"use client"
import { DiscussionEmbed } from 'disqus-react'
import React from 'react'

export const dynamic = "force-dynamic";

function DisqusCommentsClaro({post}) {
  const pageUrl = typeof window !== 'undefined'? window.location.href : ""
  const disqusConfig = {
    url: pageUrl,
    identifier: ".app",
    title: "review/claro"
  }
  return (
    <DiscussionEmbed shortname='fibramapclaro' config={disqusConfig} />
  )
}

export default DisqusCommentsClaro