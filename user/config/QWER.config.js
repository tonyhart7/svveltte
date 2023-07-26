export const UserConfig = {
  DefaultDesktopShowTagFilter: false,
  DefaultCoverStyle: 'IN',
  DefaultTagName: 'tags',
  DefaultPostLanguage: 'English',
  PostLanguageTagName: 'Language',
  SeriesTagName: 'Series',
  YearTagName: 'Year',

  BannerImage: {
    width: 768,
    height: 320,
    format: ['avif'],
  },

  ExtraResolutions: {
    1280: {
      width: 1280,
      format: ['avif'],
      minWidth: '1024px',
    },
    800: {
      width: 800,
      format: ['avif'],
      minWidth: '360px',
    },
  },

  // For original image without reszing
  // ExtraFormats: ['avif'],

  PreserveFilesInRoutes: [
    'src/routes/+error.svelte',
    'src/routes/+layout.svelte',
    'src/routes/+page.svelte',
    'src/routes/atom.xml/+server.ts',
    'src/routes/feed.json/+server.ts',
    'src/routes/manifest.webmanifest/+server.ts',
    'src/routes/sitemap.xml/+server.ts',
    'src/routes/robots.txt/+server.ts',
  ],

  RoutingRules: {
    PostsYearMonthDate: false,
  },

  languageConfig: {
    bash: 'bash',
    diff: 'diff',
    cmake: 'cmake',
    css: 'css',
    csharp: 'csharp',
    c: 'c',
    cpp: 'cpp',
    clike: 'clike',
    env: 'bash',
    elixir: 'elixir',
    erlang: 'erlang',
    go: 'go',
    html: 'markup',
    js: 'javascript',
    java: 'java',
    lua: 'lua',
    md: 'markdown',
    matlab: 'matlab',
    makefile: 'makefile',
    powershell: 'powershell',
    py: 'python',
    python: 'python',
    ts: 'typescript',
    ruby: 'ruby',
    rust: 'rust',
    svelte: 'svelte',
    sh: 'bash',
    shell: 'bash',
    sass: 'sass',
    scss: 'scss',
    solidity: 'solidity',
    sql: 'sql',
    swift: 'swift',
    wasm: 'wasm',
    yaml: 'yaml',
    '': '',
  },
};

export const CoreConfig = {
  StaticFolder: 'static',
  BuildFolder: 'build',
  UserPublicFolder: 'user/public',
  UserBlogsFolder: 'user/blogs',
  UserAssetsFolder: 'user/assets',
  RouteFolder: 'src/routes',
  TemplateFolder: 'src/lib/template',
  GeneratedFolder: 'src/generated',
  AssetsFolder: 'src/generated/assets',
  PostsJsonPath: 'src/generated/posts.json',
  TagsJsonPath: 'src/generated/tags.json',
  AssetsJsonPath: 'src/generated/assets.json',
  AssetsStorePath: 'src/generated/assets.ts',
  AssetStoreTemplatePath: '_assets.ts',
  DefaultLayout: '_article.svelte',
  PrefixGeneratedFileTemplate: /^<!-- auto-generated by QWER -->$/,
  DefaultLayoutTemplateStr_Content: /<!-- :QWER CONTENT: -->/,
  DefaultLayoutTemplateStr_Imports: /\/\*<!-- :QWER IMPORTS: -->\*\//,
};

export const ImageConfig = {
  SupportedVideoFormat: ['webm', 'mp4'],
  SupportedImageFormat: ['avif', 'png', 'jpg', 'jpeg', 'heif', 'heic', 'tiff', 'gif', 'webp'],

  OriginalImageFolder: '$generated/assets',
  AssetTypePath: 'src/generated/asset.d.ts',
  AssetTypeTemplatePath: '_asset.d.ts',

  PrefixImageTypeTemplate: /\/\*<!-- :QWER ImageResolutions: -->\*\//,
  AssetTemplateStr_Import: /\/\*<!-- :QWER IMPORTS: -->\*\//,
  AssetTemplateStr_MapData: /\/\*<!-- :QWER MAPDATA: -->\*\//,
};
