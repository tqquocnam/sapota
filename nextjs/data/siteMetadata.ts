export let siteMetadata = {
  title: "Sapota",
  author: "Nam Tran",
  fullName: "Sapota",
  headerTitle: "Sapota",
  footerTitle: "Sapota",
  description: "Sapota",
  language: "en-us",
  siteUrl: "https://sapota.vercel.app/",
  siteRepo: "https://github.com/tqquocnam/sapota",
  siteLogo: "/static/images/logo.jpg",
  image: "/static/images/logo.jpg",
  socialBanner: "/static/images/logo.jpg",
  email: "tquocnam@gmail.com",
  github: "https://github.com/tqquocnam/sapota",
  // twitter: "https://twitter.com/hta218_",
  // facebook: "https://facebook.com/hta218",
  // youtube: "https://www.youtube.com/@hta218_",
  // linkedin: "https://www.linkedin.com/in/hta218/",
  locale: "en-VN",
  // analyticsURL: "https://analytics.leohuynh.dev/share/jkwRskv0/leohuynh.dev",
  // analytics: {
  //   plausibleDataDomain: "", // e.g. tailwind-nextjs-starter-blog.vercel.app
  //   simpleAnalytics: false, // true or false
  //   umamiWebsiteId: "2df62ae5-7f13-455b-8e54-c15b96ff2b8b", // e.g. 123e4567-e89b-12d3-a456-426614174000
  //   googleAnalyticsId: "", // e.g. UA-000000-2 or G-XXXXXXX
  // },
  // socialAccounts: {
  //   github: "hta218",
  //   twitter: "hta218_",
  //   linkedin: "hta218",
  // },
};

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
    repo: "", // process.env.GISCUS_REPO
    repositoryId: "", // process.env.GISCUS_REPOSITORY_ID
    category: "", // process.env.GISCUS_CATEGORY
    categoryId: "", // process.env.GISCUS_CATEGORY_ID
    mapping: "title",
    reactions: "1",
    metadata: "0",
    lightTheme: "light",
    darkTheme: "transparent_dark",
    themeURL: "",
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: "", // process.env.UTTERANCES_REPO
    issueTerm: "",
    label: "",
    lightTheme: "",
    darkTheme: "",
  },
  // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  disqus: {
    shortname: "", // process.env.DISQUS_SHORTNAME
  },
};
