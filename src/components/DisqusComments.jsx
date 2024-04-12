"use client"
import { DiscussionEmbed } from 'disqus-react'
import React from 'react'

export const dynamic = "force-dynamic";

function DisqusComments({post}) {
  const pageUrl = typeof window !== 'undefined'? window.location.href : ""
  const disqusConfig = {
    url: pageUrl,
    identifier: ".app",
    title: "review"
  }
  return (
    <DiscussionEmbed shortname='fibramap' config={disqusConfig} />
  )
}

export default DisqusComments