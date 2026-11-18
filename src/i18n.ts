export const locales = ['ja', 'zh', 'en', 'ko'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ja';
// Keep the public translation entry point compatible with existing page components.
export { pages, quickFacts, timeline, highlights, foodSpots, faqs } from './i18n/content';
export const getUi = (locale: Locale) => ui[locale];

export const localeMeta: Record<
  Locale,
  { htmlLang: string; ogLocale: string; hreflang: string; label: string; short: string }
> = {
  ja: { htmlLang: 'ja', ogLocale: 'ja_JP', hreflang: 'ja', label: '日本語', short: 'JA' },
  zh: { htmlLang: 'zh-Hant', ogLocale: 'zh_Hant', hreflang: 'zh-Hant', label: '繁體中文', short: 'ZH' },
  en: { htmlLang: 'en', ogLocale: 'en_US', hreflang: 'en', label: 'English', short: 'EN' },
  ko: { htmlLang: 'ko', ogLocale: 'ko_KR', hreflang: 'ko', label: '한국어', short: 'KO' },
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** Map a ja-equivalent path (e.g. "/access/" or "/") to a localized path. */
export function localizedPath(jaPath: string, locale: Locale): string {
  if (locale === defaultLocale) return jaPath;
  if (jaPath === '/') return `/${locale}/`;
  return `/${locale}${jaPath}`;
}

/** Strip a leading "/zh" | "/en" | "/ko" prefix. */
export function toJaPath(pathname: string): string {
  const match = pathname.match(/^\/(zh|en|ko)(\/.*)?$/);
  if (!match) return pathname;
  const rest = match[2] ?? '/';
  return rest === '' ? '/' : rest;
}

/** Build hreflang alternate links for a ja-equivalent path. */
export function getHreflangAlternates(jaPath: string, siteUrl: string): Array<{ hreflang: string; href: string }> {
  const base = siteUrl.replace(/\/$/, '');
  const alternates = locales.map((loc) => ({
    hreflang: localeMeta[loc].hreflang,
    href: `${base}${localizedPath(jaPath, loc)}`,
  }));
  alternates.push({ hreflang: 'x-default', href: `${base}${localizedPath(jaPath, defaultLocale)}` });
  return alternates;
}

type UiStrings = {
  nav: { about: string; guide: string; access: string; food: string; faq: string; ticket: string; aikoku: string };
  skipToContent: string;
  accessCta: string;
  menuOpen: string;
  menuClose: string;
  unofficial: string;
  footerTagline: string;
  footerNavTitle: string;
  footerInfoTitle: string;
  footerLocation: string;
  footerPhotos: string;
  footerCredits: string;
  footerPrivacy: string;
  footerViewAccess: string;
  footerDisclaimer: string;
  copyAddress: string;
  copyDone: string;
  copyFail: string;
  langSwitchLabel: string;
  backToTop: string;
  lastUpdated: string;
  sourceLabel: string;
  ratingLabel: string;
};

export const ui: Record<Locale, UiStrings> = {
  ja: {
    nav: { about: '幸福駅の物語', guide: '見どころ', access: 'アクセス', food: '周辺グルメ', faq: 'よくある質問', ticket: '記念切符', aikoku: '愛国から幸福へ' },
    skipToContent: '本文へ移動',
    accessCta: '旅のアクセス',
    menuOpen: 'メニューを開く',
    menuClose: 'メニューを閉じる',
    unofficial: 'KofukuEki.com は幸福駅の非公式観光ガイドです。',
    footerTagline: '愛の国から、幸福へ。帯広・十勝を旅するための静かな案内所。',
    footerNavTitle: '旅の案内',
    footerInfoTitle: 'このサイト',
    footerLocation: '所在地',
    footerPhotos: '写真で見る',
    footerCredits: '写真・出典',
    footerPrivacy: 'プライバシー',
    footerViewAccess: 'アクセスを確認',
    footerDisclaimer:
      '当サイトは幸福駅の非公式観光ガイドです。現地運営者、帯広市、交通事業者とは関係ありません。営業時間・交通情報は変更される場合があります。訪問前に最新情報をご確認ください。',
    copyAddress: '住所をコピー',
    copyDone: '住所をコピーしました。',
    copyFail: 'コピーできませんでした。住所を選択してコピーしてください。',
    langSwitchLabel: '言語',
    backToTop: 'ページの先頭へ',
    lastUpdated: '最終確認',
    sourceLabel: '情報源',
    ratingLabel: 'Google マップの評価',
  },
  zh: {
    nav: { about: '幸福車站故事', guide: '看點', access: '交通方式', food: '周邊美食', faq: '常見問題', ticket: '紀念車票', aikoku: '從愛國到幸福' },
    skipToContent: '前往主要內容',
    accessCta: '前往交通資訊',
    menuOpen: '開啟選單',
    menuClose: '關閉選單',
    unofficial: 'KofukuEki.com 是幸福車站的非官方旅遊指南。',
    footerTagline: '從愛的國度，前往幸福。帶廣・十勝之旅的靜謐指南。',
    footerNavTitle: '網站導覽',
    footerInfoTitle: '關於本站',
    footerLocation: '所在地',
    footerPhotos: '照片欣賞',
    footerCredits: '照片・出處',
    footerPrivacy: '隱私權',
    footerViewAccess: '查看交通方式',
    footerDisclaimer:
      '本網站為幸福車站的非官方旅遊指南，與當地營運方、帶廣市及交通業者無關。營業時間與交通資訊可能變動，請於出發前確認最新資訊。',
    copyAddress: '複製地址',
    copyDone: '地址已複製。',
    copyFail: '無法複製。請選取地址後手動複製。',
    langSwitchLabel: '語言',
    backToTop: '回到頁首',
    lastUpdated: '最後確認',
    sourceLabel: '資料來源',
    ratingLabel: 'Google 地圖評分',
  },
  en: {
    nav: { about: 'The Kofuku Story', guide: 'Highlights', access: 'Access', food: 'Local Food', faq: 'FAQ', ticket: 'Commemorative tickets', aikoku: 'Aikoku to Kofuku' },
    skipToContent: 'Skip to content',
    accessCta: 'Plan your access',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    unofficial: 'KofukuEki.com is an unofficial visitor guide for Kofuku Station.',
    footerTagline: 'From the Land of Love, to Happiness. A quiet guide for traveling Obihiro and Tokachi.',
    footerNavTitle: 'Explore',
    footerInfoTitle: 'About this site',
    footerLocation: 'Location',
    footerPhotos: 'Photo gallery',
    footerCredits: 'Credits & sources',
    footerPrivacy: 'Privacy',
    footerViewAccess: 'Check access',
    footerDisclaimer:
      'KofukuEki.com is an unofficial visitor guide for Kofuku Station and is not affiliated with the local operator, the City of Obihiro, or any transport operator. Hours and transit info may change; please verify before visiting.',
    copyAddress: 'Copy address',
    copyDone: 'Address copied.',
    copyFail: 'Could not copy. Please select and copy the address manually.',
    langSwitchLabel: 'Language',
    backToTop: 'Back to top',
    lastUpdated: 'Last checked',
    sourceLabel: 'Sources',
    ratingLabel: 'Google Maps rating',
  },
  ko: {
    nav: { about: '행복역 이야기', guide: '둘러보기', access: '교통편', food: '주변 맛집', faq: '자주 묻는 질문', ticket: '기념 승차권', aikoku: '아이쿠에서 행복으로' },
    skipToContent: '본문으로 이동',
    accessCta: '교통 안내',
    menuOpen: '메뉴 열기',
    menuClose: '메뉴 닫기',
    unofficial: 'KofukuEki.com은 행복역의 비공식 관광 가이드입니다.',
    footerTagline: '사랑의 나라에서, 행복으로. 오비히로・도카치 여행을 위한 조용한 안내서.',
    footerNavTitle: '둘러보기',
    footerInfoTitle: '사이트 정보',
    footerLocation: '위치',
    footerPhotos: '사진 갤러리',
    footerCredits: '출처・크레딧',
    footerPrivacy: '개인정보',
    footerViewAccess: '교통편 보기',
    footerDisclaimer:
      'KofukuEki.com은 행복역의 비공식 관광 가이드이며 현지 운영자, 오비히로시, 교통 사업자와는 무관합니다. 운영 시간과 교통 정보는 변경될 수 있으니 방문 전 최신 정보를 확인하세요.',
    copyAddress: '주소 복사',
    copyDone: '주소가 복사되었습니다.',
    copyFail: '복사할 수 없습니다. 주소를 선택해 직접 복사해 주세요.',
    langSwitchLabel: '언어',
    backToTop: '맨 위로',
    lastUpdated: '최종 확인',
    sourceLabel: '참고 자료',
    ratingLabel: 'Google 지도 평점',
  },
};
