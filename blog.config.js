const BLOG = {
  NOTION_PAGE_ID:process.env.NOTION_PAGE_ID || '61390d66f396486a97071dcbad4be5bb',
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, //Pseudo-static paths, when enabled, all article URLs end with.html
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 6, //Update Content Cache Interval in seconds; That is, each page has a purely static period of 5 seconds, during which no matter how many visits are made, the notion data will not be captured; Increasing this value will help save Vercel resources and increase access rates, but it will also delay article updates.
  THEME: process.env.NEXT_PUBLIC_THEME || 'heo', // theme, supports ['next','hexo',"fukasawa','medium','example','matery','gitbook','simple'] @see https://preview.livesteps.com
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // Dark or Light switch theme button
  LANG: process.env.NEXT_PUBLIC_LANG || 'en-US', // e.g 'zh-CN','en-US'  see /lib/lang.js for more.
  SINCE: 2024, // e.g if leave this empty, current year will be used.
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', // ['light', 'dark', 'auto'], // Light Day mode, Dark Night mode, Auto automatic night mode according to time and theme
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // Nightmode-autoswitch hours

 //After version 3.14.1, the welcome message is configured here, separated by commas, to support multiple welcome message typing effects.
  GREETING_WORDS: process.env.NEXT_PUBLIC_GREETING_WORDS || 'Welcome to the Hobbyist's blog',

  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, // Support Menu type, from version 3.12.0 onwards, each theme will gradually support flexible secondary menu configuration, replacing the original Page type, this configuration is an experimental function, disabled by default.

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || '', // Nickname
  BIO: process.env.NEXT_PUBLIC_BIO || 'Blogger and Hobbyist', //Short Bio
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://hobbyists.in', // Website address
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Electronics, Hobbyists references, Links, Bookmarks, Blog', //Keywords
  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@hobbyists.in', // E-mail profile
  CONTACT_WEIBO: process.env.NEXT_PUBLIC_CONTACT_WEIBO || '', //Weibo profile
  CONTACT_TWITTER: process.env.NEXT_PUBLIC_CONTACT_TWITTER || 'https://x.com', // Twitter profile
  CONTACT_GITHUB: process.env.NEXT_PUBLIC_CONTACT_GITHUB || 'https://github.com', //Github profile
  CONTACT_TELEGRAM: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || 'https://t.me', //Telegram profile
  CONTACT_LINKEDIN: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || 'https://linkedin.com', //LinkedIn profile
  CONTACT_INSTAGRAM: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || 'https://instagram.com', //Instagram profile
  CONTACT_BILIBILI: process.env.NEXT_PUBLIC_CONTACT_BILIBILI || 'https://billibilli.com', //BiliBili profile
  CONTACT_YOUTUBE: process.env.NEXT_PUBLIC_CONTACT_YOUTUBE || 'https://www.youtube.com/channel/', //Youtube profile

  NOTION_HOST: process.env.NEXT_PUBLIC_NOTION_HOST || 'https://www.notion.so', //Notion domain, you can choose to use your own domain name as a reverse proxy, if you don't know what a reverse proxy is, don't modify this item

  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // blog favicon Default /public/favicon.ico，supports online images ex: https://img.imesong.com/favicon.png
  // Website fonts
  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-sans', // ['font-serif','font-sans'] There are two options, serif and sans-serif: Reference https://www.jianshu.com/p/55e410bd2115
  FONT_URL: [
    // Font CSS for example https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css
    'https://fonts.googleapis.com/css?family=Bitter&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300&display=swap'
  ],
  FONT_SANS: [
    // Sans-serif font e.g.'LXGW WenKai'
    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans GB"',
    '"Microsoft YaHei"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"Noto Sans SC"',
    'HarmonyOS_Regular',
    '"Helvetica Neue"',
    'Helvetica',
    '"Source Han Sans SC"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"'
  ],
  FONT_SERIF: [
    // Serif fonts example:'LXGW WenKai'
    'Bitter',
    '"Noto Serif SC"',
    'SimSun',
    '"Times New Roman"',
    'Times',
    'serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"'
  ],
  FONT_AWESOME: process.env.NEXT_PUBLIC_FONT_AWESOME_PATH || 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', // font-awesome font icon address; Optional /css/all.min.css ， https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css

  CUSTOM_RIGHT_CLICK_CONTEXT_MENU: process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU || true, //Customize the right-click menu to override the system menu

  // Custom external Java scripts and CSS
  CUSTOM_EXTERNAL_JS: [''],
  CUSTOM_EXTERNAL_CSS: [''],

 //Sidebar layout Inverted or not (left to right, right to left) Supported topics: Hexo Next Medium Fukasawa Example
  LAYOUT_SIDEBAR_REVERSE: false,

  // Plugin showcase your Facebook Fan Page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // Sidebar Facebook Page widget title bar, fill in ''then no title bar e.g FACEBOOK fan group'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page link e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID to enable messenger chats
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '', // Facebook App ID to enable messenger chat Get: https://developers.facebook.com/

  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // Record BEI_AN ICP number

  // PrismJs Code-related
  PRISM_JS_AUTO_LOADER: 'https://npm.elemecdn.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js',
  PRISM_JS_PATH: 'https://npm.elemecdn.com/prismjs@1.29.0/components/',
  PRISM_THEME_PATH: 'https://npm.elemecdn.com/prism-themes/themes/prism-a11y-dark.min.css', //Code Style Themes see https://github.com/PrismJS/prism-themes
  CODE_MAC_BAR: process.env.NEXT_PUBLIC_CODE_MAC_BAR || true, //The top left corner of the code shows the red, yellow, and green icon of your Mac
  CODE_LINE_NUMBERS: process.env.NEXT_PUBLIC_CODE_LINE_NUMBERS || 'true', // Print line number
  CODE_COLLAPSE: process.env.NEXT_PUBLIC_CODE_COLLAPSE || 'false', // Whether to collapse the code box

  // Mermaid Chart CDN
  MERMAID_CDN: process.env.NEXT_PUBLIC_MERMAID_CDN || 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.2.4/mermaid.min.js', // CDN

  BACKGROUND_LIGHT: '#eeeeee', // use hex value, don't forget '#' e.g #fffefc
  BACKGROUND_DARK: '#000000', // use hex value, don't forget '#'
  SUB_PATH: '', // leave this empty unless you want to deploy in a folder

  POST_SHARE_BAR_ENABLE: process.env.NEXT_PUBLIC_POST_SHARE_BAR || 'true', // The article sharing feature will display a sharing bar at the bottom
  POSTS_SHARE_SERVICES: process.env.NEXT_PUBLIC_POST_SHARE_SERVICES || 'link,wechat,qq,weibo,email,facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin', // Shared services, displayed sequentially, separated by commas
  // All supported sharing services: link, WeChat, QQ, Weibo, Email, Facebook, Twitter, Telegram, Messenger, Line, Reddit, WhatsApp, LinkedIn, Vkshare, Okshare, Tumblr, Livejournal, Mailru, viber,workplace,pocket,instapaper,hatena

  POST_URL_PREFIX: process.env.NEXT_PUBLIC_POST_URL_PREFIX || 'article',
  // The default path prefix of OST type articles, for example, the path of the default POST type is /article/[slug]
  // If this configuration is empty, the article will not have a prefix path, using the scenario: If you want the article prefix path to be /post Multi-level is supported
  // Support for WP-like features like WP customizable article link format: https://wordpress.org/documentation/article/customize-permalinks/, currently only %year%/%month%/%day%
  // For example, if you want to change the link to the prefix article + timestamp, you can change it to: 'article/%year%/%month%/%day%'

  POST_LIST_STYLE: process.env.NEXT_PUBLIC_POST_LIST_STYLE || 'page', // ['page','scroll] Article list style: page number pagination, single-page scrolling
  POST_LIST_PREVIEW: process.env.NEXT_PUBLIC_POST_PREVIEW || 'false', //  Whether to load article previews in the list
  POST_PREVIEW_LINES: 12, // Preview the number of blog rows
  POST_RECOMMEND_COUNT: 6, // Number of recommended articles
  POSTS_PER_PAGE: 12, // post counts per page
  POSTS_SORT_BY: process.env.NEXT_PUBLIC_POST_SORT_BY || 'notion', //The sort by 'date' by time and 'notion' is controlled by notion

  PREVIEW_CATEGORY_COUNT: 16, // The maximum number of categories that can be displayed on the homepage, 0 is unlimited
  PREVIEW_TAG_COUNT: 16, // The maximum number of tags that can be displayed on the homepage, 0 is unlimited

  POST_DISABLE_GALLERY_CLICK: process.env.NEXT_PUBLIC_POST_DISABLE_GALLERY_CLICK || false, // The album view is forbidden to be clicked, so it is convenient to insert a link in the album on the friend chain page
  //   ********Dynamic Effects********
  // Mouse click fireworks effect
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || false, // switch
  // Fireworks colors, thanks to https://github.com/Vixcity for submitting colors
  FIREWORKS_COLOR: [
    '255, 20, 97',
    '24, 255, 146',
    '90, 135, 255',
    '251, 243, 140'
  ],

  // Cherry blossom falling effect
  SAKURA: process.env.NEXT_PUBLIC_SAKURA || false, // switch
  // Floating line segment effect
  NEST: process.env.NEXT_PUBLIC_NEST || false, // switch
  // Dynamic ribbon effects
  FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || false, // switch
  // Static ribbon effects
  RIBBON: process.env.NEXT_PUBLIC_RIBBON || false, // switch
  // Starry Sky Rain Effect Night Mode will only take effect
  STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || false, // switch

  //   ********Floating Pendant components********
  // Chatbase
  CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || null, //Whether or not to display the chatbase bot https://www.chatbase.co/
  // Suspension floating pendant
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || true, // Whether to display the pet pendant
  WIDGET_PET_LINK: process.env.NEXT_PUBLIC_WIDGET_PET_LINK || 'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // The address of the pendant model @see https://github.com/xiazeyu/live2d-widget-models
  WIDGET_PET_SWITCH_THEME: process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || true, // Click on the pet pendant to switch to the blog theme

  // Music playback plug-in
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || false, // Whether or not to use a music playback plug-in
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // If you use the player, turn on autoplay and then hide, it will play in a way similar to background music, and cannot be canceled or paused
  MUSIC_PLAYER_AUTO_PLAY: process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // Whether or not to autoplay, but autoplay often doesn't work (mobile devices don't support autoplay)
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // Lyrics display type, optional values: 3 | 1 | 0 (0: disable lrc lyrics, 1: lrc format strings, 3: lrc file url) (provided that the lyrics path is configured, which is invalid for meting)
  MUSIC_PLAYER_CDN_URL: process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL || 'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list', // The default playback mode, order, list, random
  MUSIC_PLAYER_AUDIO_LIST: [
    // A list of sample music. In addition to the following configurations, lyrics can also be configured, see this document for specific configuration items https://aplayer.js.org/#/zh-Hans/
    {
      name: 'Wind',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731419.mp3',
      cover: 'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: 'Grand Cell, the Royal City',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731355.mp3',
      cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    }
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // Whether you want to enable MetingJS and get the playlist from the platform. The custom MUSIC_PLAYER_AUDIO_LIST will be overwritten, more configuration information: https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // Music platform，[netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // Corresponding to the playlist id
  MUSIC_PLAYER_METING_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // Optional values: 3 | 1 | 0 (0: disable lrc lyrics, 1: lrc formatted strings, 3: lrc file url)

  //   ********Pendant components********
  // ----> Comment Interaction Multiple supports can be enabled at the same time: WALINE VALINE GISCUS CUSDIS UTTERRANCES GITALK

  // twikoo
  COMMENT_TWIKOO_ENV_ID: process.env.NEXT_PUBLIC_COMMENT_ENV_ID || '', // TWIKOO backend address: fill in envId in the Tencent Cloud environment; Vercel environment to fill in the domain name, tutorial: https://livesteps.com/article/notionnext-twikoo
  COMMENT_TWIKOO_COUNT_ENABLE: process.env.NEXT_PUBLIC_COMMENT_TWIKOO_COUNT_ENABLE || false, // Whether the blog list shows the number of comments
  COMMENT_TWIKOO_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_TWIKOO_CDN_URL || 'https://cdn.staticfile.org/twikoo/1.6.16/twikoo.all.min.js', //twikoo client CDN

  // utterance
  COMMENT_UTTERRANCES_REPO: process.env.NEXT_PUBLIC_COMMENT_UTTERRANCES_REPO || '', // The name of your repository, e.g. 'livesteps/NotionNext'; For more documentation https://utteranc.es/

  // giscus @see https://giscus.app/
  COMMENT_GISCUS_REPO: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO || '', // The name of your Github repository e.g 'livesteps/NotionNext'
  COMMENT_GISCUS_REPO_ID: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID || '', // Your Github Repo ID e.g (Done giscus can be seen)
  COMMENT_GISCUS_CATEGORY_ID: process.env.NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID || '', // Your Category ID in Github Discussions (Set giscus can be seen)
  COMMENT_GISCUS_MAPPING: process.env.NEXT_PUBLIC_COMMENT_GISCUS_MAPPING || 'pathname', // Which way does your Github Discussions mark your posts, default 'pathname'
  COMMENT_GISCUS_REACTIONS_ENABLED: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED || '1', // Is your Giscus on: The article emoji '1' is on "0" off by default
  COMMENT_GISCUS_EMIT_METADATA: process.env.NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA || '0', //Whether your Giscus extracts Metadata '1' is on '0' Off Closed by default
  COMMENT_GISCUS_INPUT_POSITION: process.env.NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION || 'bottom', // Your Giscus post a message in 'bottom' tail 'top' top, default 'bottom'
  COMMENT_GISCUS_LANG: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LANG || 'zh-CN', // Your Giscus language e.g 'en', 'zh-TW', 'zh-CN', default 'en'
  COMMENT_GISCUS_LOADING: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LOADING || 'lazy', // Whether your Giscus load progressively or not, default 'lazy'
  COMMENT_GISCUS_CROSSORIGIN: process.env.NEXT_PUBLIC_COMMENT_GISCUS_CROSSORIGIN || 'anonymous', // Your Giscus can be cross-domain, default 'anonymous'
  COMMENT_CUSDIS_APP_ID: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_APP_ID || '', // data-app-id 36-digits see https://cusdis.com/
  COMMENT_CUSDIS_HOST: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_HOST || 'https://cusdis.com', // data-host, change this if you're using self-hosted version
  COMMENT_CUSDIS_SCRIPT_SRC: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_SCRIPT_SRC || 'https://cusdis.com/js/cusdis.es.js', // change this if you're using self-hosted version

  // Gitalk Review Plugin for more references https://gitalk.github.io/
  COMMENT_GITALK_REPO: process.env.NEXT_PUBLIC_COMMENT_GITALK_REPO || '', // The name of your Github repository, for example: 'NotionNext'
  COMMENT_GITALK_OWNER: process.env.NEXT_PUBLIC_COMMENT_GITALK_OWNER || '', // Your username e.g Admin
  COMMENT_GITALK_ADMIN: process.env.NEXT_PUBLIC_COMMENT_GITALK_ADMIN || '', // Admin username, usually self e.g 'Admin'
  COMMENT_GITALK_CLIENT_ID: process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_ID || '', // e.g The 20-digit ID is obtained in the background of gitalk
  COMMENT_GITALK_CLIENT_SECRET: process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_SECRET || '', // e.g 40-digit ID, obtained in the gitalk background
  COMMENT_GITALK_DISTRACTION_FREE_MODE: false, // Facebook-like distraction-free mode
  COMMENT_GITALK_JS_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_GITALK_JS_CDN_URL || 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js', // Gitalk client js cdn
  COMMENT_GITALK_CSS_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_GITALK_CSS_CDN_URL || 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css', // Gitalk client css cdn

  COMMENT_GITTER_ROOM: process.env.NEXT_PUBLIC_COMMENT_GITTER_ROOM || '', // Gitter chat room see https://gitter.im/ If not needed, leave it blank
  COMMENT_DAO_VOICE_ID: process.env.NEXT_PUBLIC_COMMENT_DAO_VOICE_ID || '', // DaoVoice http://dashboard.daovoice.io/get-started
  COMMENT_TIDIO_ID: process.env.NEXT_PUBLIC_COMMENT_TIDIO_ID || '', // [tidio_id] -> //code.tidio.co/[tidio_id].js

  COMMENT_VALINE_CDN: process.env.NEXT_PUBLIC_VALINE_CDN || 'https://unpkg.com/valine@1.5.1/dist/Valine.min.js',
  COMMENT_VALINE_APP_ID: process.env.NEXT_PUBLIC_VALINE_ID || '', // Valine @see https://valine.js.org/quickstart.html 或 https://github.com/stonehank/react-valine#%E8%8E%B7%E5%8F%96app-id-%E5%92%8C-app-key
  COMMENT_VALINE_APP_KEY: process.env.NEXT_PUBLIC_VALINE_KEY || '',
  COMMENT_VALINE_SERVER_URLS: process.env.NEXT_PUBLIC_VALINE_SERVER_URLS || '', // This configuration is applicable to domestic custom domain name users, and the overseas version will be automatically detected (no need to manually fill in) @see https://valine.js.org/configuration.html#serverURLs
  COMMENT_VALINE_PLACEHOLDER: process.env.NEXT_PUBLIC_VALINE_PLACEHOLDER || 'Grab_a_sofa~', // It can be used with background management comments https://github.com/DesertsP/Valine-Admin which is convenient for viewing comments, as well as email notifications, spam comment filtering and other functions

  COMMENT_WALINE_SERVER_URL: process.env.NEXT_PUBLIC_WALINE_SERVER_URL || '', // Please configure the full Waline review address for example https://preview-waline.livesteps.com @see https://waline.js.org/guide/get-started.html
  COMMENT_WALINE_RECENT: process.env.NEXT_PUBLIC_WALINE_RECENT || false, // Latest Reviews

  // This commenting system is based on WebMention, details can be found here https://webmention.io
  // It is an open commenting system based on the concept of IndieWeb, and the properties included in the following COMMENT_WEBMENTION need to be configured：
  // ENABLE: Whether it is turned on
  // AUTH: IndieLogin used by Webmention can be linked to your Twitter or Github profile
  // HOSTNAME: The domain bound to Webmention is usually the URL of this site
  // TWITTER_USERNAME: Comments show the information needed for the area
  // TOKEN: Webmention的API token
  COMMENT_WEBMENTION: {
    ENABLE: process.env.NEXT_PUBLIC_WEBMENTION_ENABLE || false,
    AUTH: process.env.NEXT_PUBLIC_WEBMENTION_AUTH || '',
    HOSTNAME: process.env.NEXT_PUBLIC_WEBMENTION_HOSTNAME || '',
    TWITTER_USERNAME: process.env.NEXT_PUBLIC_TWITTER_USERNAME || '',
    TOKEN: process.env.NEXT_PUBLIC_WEBMENTION_TOKEN || ''
  },

  // <---- Comment plugins

  // ----> Site statistics
  ANALYTICS_VERCEL: process.env.NEXT_PUBLIC_ANALYTICS_VERCEL || false, // Vercel's own statistics https://vercel.com/docs/concepts/analytics/quickstart https://github.com/livesteps/NotionNext/issues/897
  ANALYTICS_BUSUANZI_ENABLE: true, // Display the number of website views and visits see http://busuanzi.ibruce.info/
  ANALYTICS_BAIDU_ID: process.env.NEXT_PUBLIC_ANALYTICS_BAIDU_ID || '', // e.g You only need to fill in the ID of Baidu statistics，[baidu_id] -> https://hm.baidu.com/hm.js?[baidu_id]
  ANALYTICS_CNZZ_ID: process.env.NEXT_PUBLIC_ANALYTICS_CNZZ_ID || '', // You only need to fill in the ID of the webmaster's statistics, [cnzz_id] -> https://s9.cnzz.com/z_stat.php?id=[cnzz_id]&web_id=[cnzz_id]
  ANALYTICS_GOOGLE_ID: process.env.NEXT_PUBLIC_ANALYTICS_GOOGLE_ID || 'G-QPWMFF4WGK', // Google Analytics id e.g: G-XXXXXXXXXXXXXXX

  ANALYTICS_ACKEE_TRACKER: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_TRACKER || '', // e.g 'https://ackee.livesteps.net/tracker.js'
  ANALYTICS_ACKEE_DATA_SERVER: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DATA_SERVER || '', // e.g https://ackee.livesteps.net , don't end with a slash
  ANALYTICS_ACKEE_DOMAIN_ID: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DOMAIN_ID || '', // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'

  SEO_GOOGLE_SITE_VERIFICATION: process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  SEO_BAIDU_SITE_VERIFICATION: process.env.NEXT_PUBLIC_SEO_BAIDU_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  // <---- Site statistics

  // Google Ads
  ADSENSE_GOOGLE_ID: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_ID || 'ca-pub-5660349373091698', // Google Ads ID e.g ca-pub-xxxxxxxxxxxxxxxx
  ADSENSE_GOOGLE_TEST: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_TEST || false, // Google Advertising ID Test Mode, which fetches fake test ads for development https://www.livesteps.com/article/local-dev-google-adsense
  ADSENSE_GOOGLE_SLOT_IN_ARTICLE: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_IN_ARTICLE || '7999320695', //Google AdScene> Ads > Ads by Unit > New In-Article Ads Paste the data-ad-slot value in the html code
  ADSENSE_GOOGLE_SLOT_FLOW: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_FLOW || '3523506178', // Google AdScene> Ads > unit-based ads > create new In-feed ads
  ADSENSE_GOOGLE_SLOT_NATIVE: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_NATIVE || '4980048999', // Google AdScene> ads > create new native ads > per unit ads
  ADSENSE_GOOGLE_SLOT_AUTO: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_AUTO || '1529528531', // Google AdScene> Ads> New Display Ads by Unit > (Auto Ads)

  // Configure NotionDb Table fields
  NOTION_PROPERTY_NAME: {
    password: process.env.NEXT_PUBLIC_NOTION_PROPERTY_PASSWORD || 'password',
    type: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || 'type', // article type,
    type_post: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || 'Post', // When the type post type is the same as this value, it is a blog post.
    type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || 'Page', // When the type article type is the same as this value, it is a single page.
    type_notice: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || 'Notice', // When the type article type is the same as this value, it is a single page.
    type_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MENU || 'Menu', // When the type article type is the same as this value, it is a single page.
    type_sub_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU || 'SubMenu', // When the type article type is the same as this value, it is a single page.
    title: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TITLE || 'title', // Title of the article
    status: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS || 'status',
    status_publish: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || 'Published', // When the status value is the same as this, it is published
    status_invisible: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || 'Invisible', // When the status value is the same as this, it is hidden publishing, which can be Chinese, and other page statuses will not be displayed on the blog
    summary: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SUMMARY || 'summary',
    slug: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SLUG || 'slug',
    category: process.env.NEXT_PUBLIC_NOTION_PROPERTY_CATEGORY || 'category',
    date: process.env.NEXT_PUBLIC_NOTION_PROPERTY_DATE || 'date',
    tags: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TAGS || 'tags',
    icon: process.env.NEXT_PUBLIC_NOTION_PROPERTY_ICON || 'icon'
  },

  // RSS feeds
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // Whether to enable RSS feeding
  MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID || null, // Enable mailichimp email subscription customer list ID, please refer to the documentation for details
  MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY || null, // Enable the mailichimp email subscription APIkey

  // Deprecate the configuration
  AVATAR: process.env.NEXT_PUBLIC_AVATAR || '/avatar.svg', // Author avatar, overlaid by ICON in notion. If there is no ICON, the avatar.png in the public directory is used
  TITLE: process.env.NEXT_PUBLIC_TITLE || 'NotionNext Blog', // The site title is overridden by the page title in notion; Do not leave blank here, or the server will not compile
  HOME_BANNER_IMAGE: process.env.NEXT_PUBLIC_HOME_BANNER_IMAGE || '/bg_image.jpg', // The large background image of the homepage will be covered by the cover image in notion, and if there is no cover image, the /public/bg_image.jpg file in the code will be used
  DESCRIPTION: process.env.NEXT_PUBLIC_DESCRIPTION || 'NotionNext Blog', // The page-description overwrites the site-desciption

  // Website image
  IMG_URL_TYPE: process.env.NEXT_PUBLIC_IMG_TYPE || 'Notion', // This configuration is invalid, do not use it; The AMAZON solution is no longer supported, only the Notion solution is supported. ['Notion','AMAZON'] Site image prefix Default Notion:(https://notion.so/images/xx) ， AMAZON(https://s3.us-west-2.amazonaws.com/xxx)
  IMG_SHADOW: process.env.NEXT_PUBLIC_IMG_SHADOW || false, // Whether or not the article image is automatically shaded

  // Development-related
  NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN || '', // Useful if you prefer not to make your database public
  DEBUG: process.env.NEXT_PUBLIC_DEBUG || false, // Whether or not to display a debug button
  ENABLE_CACHE: process.env.ENABLE_CACHE || false, // Enabling caching will cache Notion data in memory, which is usually used in development and debugging, and it is of little significance to officially deploy and enable this feature.
  isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  VERSION: process.env.NEXT_PUBLIC_VERSION // Version number
}

module.exports = BLOG
