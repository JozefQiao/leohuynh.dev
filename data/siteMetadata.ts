export let siteMetadata = {
  title: "Fojos - Jozef's coding journey",
  author: "Jozef",
  fullName: "Jozef Qiao",
  headerTitle: "Fojos - Jozef's coding journey",
  footerTitle: "Fojos - Jozef's coding journey",
  description:
    "Jozef's coding journey - work and life stories through the keyboard of an open-minded Software Engineer",
  language: "en-us",
  siteUrl: "",
  siteRepo: "",
  siteLogo: "/static/images/logo.jpg",
  image: "/static/images/logo.jpg",
  socialBanner: "/static/images/logo.jpg",
  email: "jozef.qiao@hotmail.com",
  github: "https://github.com/hta218",
  twitter: "",
  facebook: "",
  youtube: "",
  linkedin: "",
  locale: "en-US",
  analyticsURL: "",
  analytics: {
    plausibleDataDomain: "", // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: "", // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: "", // e.g. UA-000000-2 or G-XXXXXXX
  },
  socialAccounts: {
    github: "",
    twitter: "",
    linkedin: "",
  },
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
  provider: "giscus", // 'giscus' | 'utterances' | 'disqus',
  // https://giscus.app/
  giscusConfig: {
    repo: process.env.GISCUS_REPO,
    repositoryId: process.env.GISCUS_REPOSITORY_ID,
    category: process.env.GISCUS_CATEGORY,
    categoryId: process.env.GISCUS_CATEGORY_ID,
    mapping: "title",
    reactions: "1",
    metadata: "0",
    lightTheme: "light",
    darkTheme: "transparent_dark",
    themeURL: "",
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: process.env.UTTERANCES_REPO,
    issueTerm: "",
    label: "",
    lightTheme: "",
    darkTheme: "",
  },
}
