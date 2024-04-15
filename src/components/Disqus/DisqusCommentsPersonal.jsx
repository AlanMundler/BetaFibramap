"use client"
import { DiscussionEmbed } from 'disqus-react'
import React from 'react'

export const dynamic = "force-dynamic";

function DisqusCommentsPersonal({post}) {
  const pageUrl = typeof window !== 'undefined'? window.location.href : ""
  const disqusConfig = {
    url: pageUrl,
    identifier: ".app",
    title: "review/personal"
  }
  return (
    <DiscussionEmbed shortname='fibramappersonal' config={disqusConfig} />
  )
}

export default DisqusCommentsPersonal