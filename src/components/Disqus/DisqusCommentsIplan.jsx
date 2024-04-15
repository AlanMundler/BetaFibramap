"use client"
import { DiscussionEmbed } from 'disqus-react'
import React from 'react'

export const dynamic = "force-dynamic";

function DisqusCommentsIplan({post}) {
  const pageUrl = typeof window !== 'undefined'? window.location.href : ""
  const disqusConfig = {
    url: pageUrl,
    identifier: ".app",
    title: "review/iplan"
  }
  return (
    <DiscussionEmbed shortname='fibramapiplan' config={disqusConfig} />
  )
}

export default DisqusCommentsIplan