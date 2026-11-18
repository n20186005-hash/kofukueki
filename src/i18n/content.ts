import type { Locale } from '../i18n';

export interface QuickFact { label: string; value: string; note: string; }
export interface TimelineItem { year: string; era: string; title: string; body: string; }
export interface Highlight { number: string; title: string; text: string; image: string; imageSmall: string; alt: string; }
export interface FoodSpot { name: string; area: string; travel: string; type: string; description: string; note: string; }
export interface Faq { q: string; a: string; }

export const quickFacts: Record<Locale, QuickFact[]> = {
  ja: [
    { label: '見学', value: '無料', note: '屋外中心・定休日なし' },
    { label: '滞在目安', value: '40–60分', note: '写真・駅舎・車両を巡る場合' },
    { label: '空港から', value: '車で約10分', note: 'とかち帯広空港' },
    { label: '駐車場', value: '36台', note: '大型バス5台分を含む' },
  ],
  zh: [
    { label: '参觀', value: '免費', note: '以戶外為主・無固定休園日' },
    { label: '建議停留', value: '40–60分', note: '遊覽車站設施與車廂時' },
    { label: '距機場', value: '車程約10分', note: '帶廣機場' },
    { label: '停車場', value: '36格', note: '含5格大型遊覽車位' },
  ],
  en: [
    { label: 'Admission', value: 'Free', note: 'Mostly outdoors · no closed days' },
    { label: 'Stay', value: '40–60 min', note: 'For the station, cars & photos' },
    { label: 'From airport', value: '~10 min by car', note: 'Tokachi Obihiro Airport' },
    { label: 'Parking', value: '36 spaces', note: 'Incl. 5 bus spaces' },
  ],
  ko: [
    { label: '관람', value: '무료', note: '야외 중심 · 정기 휴무 없음' },
    { label: '체류', value: '40–60분', note: '역사·차량·사진 포함' },
    { label: '공항에서', value: '차로 약 10분', note: '도카치 오비히로 공항' },
    { label: '주차', value: '36면', note: '대형 버스 5면 포함' },
  ],
};

export const timeline: Record<Locale, TimelineItem[]> = {
  ja: [
    { year: '1956', era: '昭和31年', title: '幸福駅が開設', body: '旧国鉄広尾線の小さな駅として開設。周囲の「幸福」という地名は、アイヌ語に由来する地名の意訳から生まれたと伝えられています。' },
    { year: '1973', era: '昭和48年', title: '「愛の国から幸福へ」が全国へ', body: 'NHK「新日本紀行」で紹介されたことをきっかけに、愛国駅から幸福駅ゆきの記念切符が大きな話題となりました。' },
    { year: '1987', era: '昭和62年', title: '広尾線の廃止', body: '広尾線の廃線とともに駅としての役目を終えましたが、駅名と物語は多くの人の記憶に残りました。' },
    { year: '2013', era: '平成25年', title: '「古くて新しい」幸福駅へ', body: '老朽化した駅舎を、往時の面影を大切にしながら建て替え。交通公園・ふれあい広場として再整備されました。' },
    { year: '現在', era: 'TODAY', title: '願いが集まり続ける場所', body: '板張りのホーム、ディーゼルカー、願いの札に包まれた駅舎が残り、年間20万人以上が訪れる帯広の代表的な観光地です。' },
  ],
  zh: [
    { year: '1956', era: '昭和31年', title: '幸福車站設站', body: '作為舊國鐵廣尾線的小車站設立。周邊「幸福」這個地名，相傳源自愛努語地名的意譯。' },
    { year: '1973', era: '昭和48年', title: '「從愛的國度前往幸福」傳遍全國', body: '經 NHK《新日本紀行》介紹後，從愛國車站開往幸福車站的紀念車票成為熱門話題。' },
    { year: '1987', era: '昭和62年', title: '廣尾線停駛', body: '隨著廣尾線廢線，車站結束其運輸使命，但站名與故事仍留存在許多人的記憶中。' },
    { year: '2013', era: '平成25年', title: '成為「既舊且新」的幸福車站', body: '在保留昔日風貌的前提下重建老舊站房，整修為交通公園與交流廣場。' },
    { year: '現在', era: 'TODAY', title: '願望不斷聚集的地方', body: '木造月台、柴油列車，以及被許願卡片包圍的站房留存至今，是每年超過 20 萬人造訪的帶廣代表性景點。' },
  ],
  en: [
    { year: '1956', era: 'Showa 31', title: 'Kofuku Station opens', body: 'Opened as a small station on the former JNR Hiroo Line. The surrounding place name "Kofuku" is said to come from a translation of an Ainu place name.' },
    { year: '1973', era: 'Showa 48', title: '"From the Land of Love, to Happiness" goes national', body: 'After being featured on the NHK program "Shin Nihon Kikou", commemorative tickets from Aikoku to Kofuku Station became a nationwide sensation.' },
    { year: '1987', era: 'Showa 62', title: 'The Hiroo Line closes', body: 'With the line’s closure, the station ended its role in rail service, but its name and story lived on in many people’s memories.' },
    { year: '2013', era: 'Heisei 25', title: 'A "old yet new" Kofuku Station', body: 'The aged station building was rebuilt while preserving its original atmosphere, reborn as a railway park and community plaza.' },
    { year: 'Now', era: 'TODAY', title: 'A place where wishes keep gathering', body: 'The wooden platform, diesel cars, and a station building wrapped in wish cards remain, drawing over 200,000 visitors a year to Obihiro.' },
  ],
  ko: [
    { year: '1956', era: '쇼와 31년', title: '행복역 개업', body: '구 국철 히로오 선의 작은 역으로 개업했습니다. 주변의 「행복」이라는 지명은 아이누어 지명을 의역해 생겼다고 전해집니다.' },
    { year: '1973', era: '쇼와 48년', title: '「사랑의 나라에서 행복으로」 전국으로', body: 'NHK 《신일본기행》에서 소개된 것을 계기로, 아이쿠 역에서 행복역 행 기념 승차권이 큰 화제가 되었습니다.' },
    { year: '1987', era: '쇼와 62년', title: '히로오 선 폐선', body: '히로오 선이 폐선되면서 역으로서의 임무를 마쳤지만, 역 이름과 이야기는 많은 사람의 기억에 남았습니다.' },
    { year: '2013', era: '헤이세이 25년', title: '「옛것이면서 새로운」 행복역으로', body: '노후된 역사를 옛 모습을 소중히 하며 재건하여 교통 공원·교류 광장으로 정비되었습니다.' },
    { year: '현재', era: 'TODAY', title: '소망이 모여드는 장소', body: '목조 승강장, 디젤 카, 소망 카드로 둘러싸인 역사가 남아 연간 20만 명 이상이 찾는 오비히로의 대표 관광지입니다.' },
  ],
};

export const highlights: Record<Locale, Highlight[]> = {
  ja: [
    { number: '01', title: '願いで彩られた駅舎', text: '木造の駅舎を覆うのは、旅人が残した無数のメッセージ。静かな建物の内側に入ると、淡い桃色の紙片が天井まで連なります。', image: '/images/interior-960.webp', imageSmall: '/images/interior-480.webp', alt: 'ピンク色の願い札で天井と壁が覆われた幸福駅の内部' },
    { number: '02', title: '板張りのホームとキハ22', text: '旧広尾線を思わせるホームのそばには、朱色のディーゼルカーが保存されています。鉄道の記憶を感じる、幸福駅らしい風景です。', image: '/images/train-1440.webp', imageSmall: '/images/train-640.webp', alt: '幸福駅に保存されている朱色のキハ22形ディーゼルカー' },
    { number: '03', title: '幸福の鐘', text: '駅舎へ続く小径に立つ「幸福の鐘」。旅の節目や大切な人との記念に、ゆっくりと音を響かせてみてください。', image: '/images/bell-1440.webp', imageSmall: '/images/bell-640.webp', alt: '幸福駅の入口に設置された木枠の幸福の鐘' },
  ],
  zh: [
    { number: '01', title: '被願望妝點的站房', text: '覆蓋木造站房的，是旅人留下的無數留言。走進寧靜的建築內部，淡粉色的紙片一路綿延到天花板。', image: '/images/interior-960.webp', imageSmall: '/images/interior-480.webp', alt: '內部天花板與牆壁被粉色許願卡覆蓋的幸福車站' },
    { number: '02', title: '木造月台與 KiHa 22', text: '在彷彿舊廣尾線的月台旁，保存著朱紅色的柴油列車。這是洋溢著幸福車站風情的鐵道風景。', image: '/images/train-1440.webp', imageSmall: '/images/train-640.webp', alt: '幸福車站保存的朱紅色 KiHa 22 形柴油列車' },
    { number: '03', title: '幸福之鐘', text: '立於通往站房小徑上的「幸福之鐘」。在旅途中或與重要之人的紀念時刻，敲響它聽聽悠揚的聲音吧。', image: '/images/bell-1440.webp', imageSmall: '/images/bell-640.webp', alt: '設於幸福車站入口的木框幸福之鐘' },
  ],
  en: [
    { number: '01', title: 'A station house painted with wishes', text: 'Covering the wooden station house are countless messages left by travelers. Step inside the quiet building and pale-pink papers stretch all the way to the ceiling.', image: '/images/interior-960.webp', imageSmall: '/images/interior-480.webp', alt: 'Inside Kofuku Station, ceiling and walls covered with pink wish tags' },
    { number: '02', title: 'The wooden platform and KiHa 22', text: 'Beside a platform that recalls the old Hiroo Line, a vermilion diesel car is preserved. It is a scene full of Kofuku Station’s railway memory.', image: '/images/train-1440.webp', imageSmall: '/images/train-640.webp', alt: 'The vermilion KiHa 22 diesel car preserved at Kofuku Station' },
    { number: '03', title: 'The Bell of Happiness', text: 'The "Bell of Happiness" stands along the path to the station house. Let its sound ring out at a turning point of your trip or to mark a moment with someone special.', image: '/images/bell-1440.webp', imageSmall: '/images/bell-640.webp', alt: 'The wooden-frame Bell of Happiness at the entrance to Kofuku Station' },
  ],
  ko: [
    { number: '01', title: '소망으로 장식된 역사', text: '목조 역사를 덮고 있는 것은 여행객들이 남긴 수많은 메시지입니다. 조용한 건물 안으로 들어서면 연분홍 종이가 천장까지 이어집니다.', image: '/images/interior-960.webp', imageSmall: '/images/interior-480.webp', alt: '분홍색 소망 카드로 천장과 벽이 덮인 행복역 내부' },
    { number: '02', title: '목조 승강장과 키하 22', text: '옛 히로오 선을 떠올리게 하는 승강장 옆에 주황색 디젤 카가 보존되어 있습니다. 행복역다운 철도의 기억이 느껴지는 풍경입니다.', image: '/images/train-1440.webp', imageSmall: '/images/train-640.webp', alt: '행복역에 보존된 주황색 키하 22형 디젤 카' },
    { number: '03', title: '행복의 종', text: '역사로 이어지는 작은 길에 세워진 「행복의 종」. 여행의 변곡점이나 소중한 이와의 기념으로 천천히 울려보세요.', image: '/images/bell-1440.webp', imageSmall: '/images/bell-640.webp', alt: '행복역 입구에 설치된 목조 행복의 종' },
  ],
};

export const foodSpots: Record<Locale, FoodSpot[]> = {
  ja: [
    { name: 'KOFUKU BASE', area: '幸福駅構内', travel: '徒歩0分', type: '軽食・甘味・お土産', description: '駅を見学したあとに立ち寄りやすい構内の休憩拠点。ソフトクリームや軽食、幸福駅らしい記念品を探す場所として便利です。', note: '季節や曜日により営業状況が変わります。現地掲示をご確認ください。' },
    { name: 'ファームレストラン野島さんち', area: '中札内方面', travel: '車で約15分前後', type: '農家レストラン', description: '自家製野菜を生かした家庭料理を楽しめる農家レストラン。幸福駅を午前に訪れ、十勝らしい昼食へつなぐ旅程に向いています。', note: '昼営業が中心です。定休日・臨時休業を事前にご確認ください。' },
    { name: '道の駅なかさつない', area: '中札内村', travel: '車で約20分前後', type: '地場食材・軽食・物産', description: '中札内田舎どり、乳製品、野菜、軽食などをまとめて楽しめる立ち寄り先。複数人で好みが分かれるときにも選びやすい場所です。', note: '店舗ごとに営業期間・時間が異なります。' },
    { name: 'とかち帯広空港', area: '空港ターミナル', travel: '車で約10分', type: '豚丼・カレー・軽食', description: '到着直後や出発前に食事を済ませたいときの現実的な選択肢。フライトと幸福駅を短時間で組み合わせる旅行者に便利です。', note: '航空便の運航状況により営業時間が変わる場合があります。' },
  ],
  zh: [
    { name: 'KOFUKU BASE', area: '幸福車站站區內', travel: '步行0分', type: '輕食・甜點・伴手禮', description: '參觀車站後順路可達的站內休息站。適合享用霜淇淋、輕食，挑選幸福車站風格的紀念品。', note: '營業狀況會因季節或星期而異，請參考現場公告。' },
    { name: '農家餐廳 野島家', area: '中札內方向', travel: '車程約15分', type: '農家餐廳', description: '可享用自種蔬菜家常菜的農家餐廳。適合上午造訪幸福車站後，接續十勝風格的午餐行程。', note: '以午餐時段為主，請事先確認公休日與臨時休業。' },
    { name: '中札內道之驛', area: '中札內村', travel: '車程約20分', type: '在地食材・輕食・特產', description: '可一次享用到中札內地雞、乳製品、蔬菜與輕食的據點。多人喜好不同時也便於選擇。', note: '各店營業期間與時間不同。' },
    { name: '帶廣機場', area: '機場航廈', travel: '車程約10分', type: '豬排飯・咖哩・輕食', description: '抵達後或出發前想先用餐時的實惠選擇。方便將航班與幸福車站短時間串聯的旅客。', note: '營業時間可能因航班運航狀況而變動。' },
  ],
  en: [
    { name: 'KOFUKU BASE', area: 'On the station grounds', travel: '0 min walk', type: 'Snacks · sweets · souvenirs', description: 'A rest stop right on the station grounds, easy to visit after touring the station. Good for soft serve, light meals, and Kofuku-themed souvenirs.', note: 'Opening status varies by season and day; please check on-site notices.' },
    { name: 'Farm Restaurant Nojima-sanchi', area: 'Toward Nakasatsunai', travel: '~15 min by car', type: 'Farm restaurant', description: 'A farm restaurant serving home-style dishes with homegrown vegetables. Fits a trip that visits Kofuku in the morning and continues to a Tokachi lunch.', note: 'Mostly lunch hours; please check closed days and temporary closures in advance.' },
    { name: 'Road Station Nakasatsunai', area: 'Nakasatsunai Village', travel: '~20 min by car', type: 'Local food · snacks · products', description: 'A stop where you can enjoy Nakasatsunai chicken, dairy, vegetables, and snacks together. Easy to choose when traveling with varied tastes.', note: 'Each shop has different seasons and hours.' },
    { name: 'Tokachi Obihiro Airport', area: 'Airport terminal', travel: '~10 min by car', type: 'Pork bowl · curry · snacks', description: 'A practical choice when you want a meal right after arrival or before departure. Convenient for travelers combining a flight with Kofuku Station.', note: 'Hours may shift with flight operations.' },
  ],
  ko: [
    { name: 'KOFUKU BASE', area: '행복역 구내', travel: '도보 0분', type: '간식 · 디저트 · 기념품', description: '역을 둘러본 뒤 들르기 쉬운 구내 휴게 공간입니다. 소프트크림과 간식, 행복역풍 기념품을 찾기에 좋습니다.', note: '영업 상황은 계절과 요일에 따라 바뀝니다. 현장 안내를 확인하세요.' },
    { name: '농가 레스토랑 노지마 산치', area: '나카사츠나이 방면', travel: '차로 약 15분', type: '농가 레스토랑', description: '직접 기른 채소를 살린 가정식 레스토랑. 오전에 행복역을 방문한 뒤 도카치풍 점심으로 이어지는 일정에 알맞습니다.', note: '점심 위주 영업입니다. 휴무일·임시 휴업을 미리 확인하세요.' },
    { name: '나카사츠나이 도로 휴게소', area: '나카사츠나이 촌', travel: '차로 약 20분', type: '지역 식재료 · 간식 · 특산품', description: '나카사츠나이 지닭·유제품·채소·간식을 한곳에서 즐길 수 있는 거점. 여러 명의 기호가 갈릴 때도 고르기 좋습니다.', note: '매장마다 영업 기간과 시간이 다릅니다.' },
    { name: '도카치 오비히로 공항', area: '공항 터미널', travel: '차로 약 10분', type: '돈가스 덮밥 · 카레 · 간식', description: '도착 직후나 출발 전에 식사하고 싶을 때 실용적인 선택. 항공편과 행복역을 짧게 연결하는 여행자에게 편리합니다.', note: '항공편 운항 상황에 따라 영업 시간이 바뀔 수 있습니다.' },
  ],
};

export const faqs: Record<Locale, Faq[]> = {
  ja: [
    { q: '幸福駅の見学に料金はかかりますか？', a: '駅舎、ホーム、保存車両などの見学は無料です。売店での買い物や一部の体験は別途料金が必要になる場合があります。' },
    { q: '見学できる時間は決まっていますか？', a: '屋外の観光エリアには基本的に固定の開場時間はありません。ただし、売店や休憩施設の営業時間は季節・曜日・天候などで変わります。明るい時間帯の訪問がおすすめです。' },
    { q: '滞在時間はどれくらい必要ですか？', a: '駅舎、願い札、ホーム、保存車両、幸福の鐘を一通り巡るなら40〜60分が目安です。幸福神社まで歩く場合や、写真をじっくり撮る場合は90分ほど見ておくと安心です。' },
    { q: 'とかち帯広空港から近いですか？', a: '空港から自動車・タクシーで約10分です。到着日の最初の立ち寄り先、または出発前の最後の観光地として組み込みやすい場所です。' },
    { q: '車がなくても行けますか？', a: '帯広駅バスターミナルから十勝バス60番・広尾線を利用し、「幸福」停留所から徒歩約5分です。便数が限られるため、往路と復路を同時に確認してください。' },
    { q: '駐車場はありますか？', a: '無料駐車場があり、普通車と大型バスを合わせて36台分と案内されています。繁忙期は時間に余裕を持って訪れてください。' },
    { q: '冬でも訪問できますか？', a: '冬も訪問できますが、積雪・凍結・吹雪に注意が必要です。防寒靴と手袋を用意し、日没前の移動をおすすめします。売店は冬季に営業時間が短くなる傾向があります。' },
    { q: '愛国駅と一緒に回れますか？', a: '自動車なら幸福駅から愛国駅まで約15分です。「愛の国から幸福へ」の物語をたどる半日コースとして相性のよい組み合わせです。' },
    { q: '幸福駅は当時の駅舎がそのまま残っていますか？', a: '開設当初の駅舎は老朽化のため、2013年に往時の雰囲気を継承する形で建て替えられました。ホームや保存車両とともに、旧広尾線の記憶を伝える観光地として整備されています。' },
    { q: 'このサイトは幸福駅の公式サイトですか？', a: 'いいえ。KofukuEki.comは、公開されている行政・観光・交通情報を整理した非公式の旅行ガイドです。現地運営者、帯広市、交通事業者とは関係ありません。' },
    { q: '売店はいつ開いていますか？', a: '屋外の見学エリアは基本的にいつでも訪問できますが、売店や軽食の営業時間は季節で異なります。夏期の目安は9:00–17:30、冬期の目安は9:30–15:00です。天候や曜日で変わるため、現地の掲示を優先してください。' },
    { q: '記念切符はどこで買えますか？', a: '幸福駅と愛国駅の各駅前売店で記念切符を販売しています。帯広市に公式の通販サイトはないため、現地の売店でのお求めになります。詳しくは「記念切符」のページをご覧ください。' },
    { q: '幸福駅は今も列車の駅として営業していますか？', a: 'いいえ。幸福駅は1987年の広尾線廃止とともに鉄道駅としての営業を終えました。現在は駅舎やホーム、保存車両を残す観光・見学スポットとして整備されています。' },
  ],
  zh: [
    { q: '參觀幸福車站需要付費嗎？', a: '參觀站房、月台、保存車輛等區域免費。在商店購物或部分體驗可能另需付費。' },
    { q: '有固定的參觀時間嗎？', a: '戶外觀光區基本上沒有固定的開放時間。但商店與休息設施的營業時間會因季節、星期、天候而異，建議在白天時段前往。' },
    { q: '建議停留多久？', a: '若走完站房、許願卡、月台、保存車輛與幸福之鐘，約需 40–60 分鐘。若步行至幸福神社或認真拍照，預留約 90 分鐘較安心。' },
    { q: '距離帶廣機場近嗎？', a: '從機場開車或搭計程車約 10 分鐘。很適合作為抵達當天第一個順路景點，或出發前最後一個觀光地。' },
    { q: '沒有自駕也能前往嗎？', a: '從帶廣站巴士總站搭乘十勝巴士 60 號（廣尾線），在「幸福」站牌下車後步行約 5 分鐘。班次有限，請同時確認去程與回程時刻。' },
    { q: '有停車場嗎？', a: '設有免費停車場，一般汽車與大型遊覽車合計約 36 格。旺季請預留充裕時間前往。' },
    { q: '冬季也能參觀嗎？', a: '冬季可參觀，但需注意積雪、結冰與暴風雪。請準備防寒鞋與手套，並建議在日落前移動。商店冬季營業時間往往較短。' },
    { q: '能與愛國車站一起遊覽嗎？', a: '開車的話從幸福車站到愛國車站約 15 分鐘。很適合作為追溯「從愛的國度前往幸福」故事的半日行程。' },
    { q: '幸福車站保留的是當年的原站房嗎？', a: '最初的站房因老舊，於 2013 年以承襲昔日風貌的形式重建。與月台、保存車輛一同整修為傳承舊廣尾線記憶的觀光地。' },
    { q: '本網站是幸福車站的官方網站嗎？', a: '不是。KofukuEki.com 是整理公開行政、觀光與交通資訊的非官方旅遊指南，與當地營運方、帶廣市及交通業者無關。' },
    { q: '商店什麼時候營業？', a: '戶外參觀區基本上任何時候都能前往，但商店與輕食的營業時間會隨季節變動。夏季約 9:00–17:30、冬季約 9:30–15:00。會因天候與星期而異，請以現場公告為準。' },
    { q: '紀念車票在哪裡購買？', a: '幸福車站與愛國車站的站前商店皆有販售。帶廣市沒有官方購物網站，請於現場商店購買。詳見「紀念車票」頁面。' },
    { q: '幸福車站現在仍有列車營運嗎？', a: '沒有。幸福車站隨著 1987 年廣尾線停駛，已結束鐵道車站營運。目前整建為保留站房、月台與保存車輛的觀光・參觀景點。' },
  ],
  en: [
    { q: 'Is there a fee to visit Kofuku Station?', a: 'Viewing the station house, platform, and preserved cars is free. Shopping at the shop or some experiences may cost extra.' },
    { q: 'Are there set visiting hours?', a: 'The outdoor area has no fixed opening hours. Shop and rest-facility hours vary by season, day, and weather; visiting in daylight is recommended.' },
    { q: 'How long should I plan to stay?', a: 'Seeing the station house, wish tags, platform, preserved cars, and the Bell of Happiness takes about 40–60 minutes. Allow around 90 minutes if walking to Kofuku Shrine or taking photos.' },
    { q: 'Is it close to Tokachi Obihiro Airport?', a: 'About 10 minutes by car or taxi from the airport. Easy to add as your first stop on arrival day or last sight before departure.' },
    { q: 'Can I get there without a car?', a: 'From Obihiro Station bus terminal, take the Tokachi Bus route 60 (Hiroo Line) and get off at "Kofuku", then walk about 5 minutes. Services are limited, so check both outbound and return times.' },
    { q: 'Is there parking?', a: 'There is free parking for about 36 spaces including buses. Visit with extra time during busy periods.' },
    { q: 'Can I visit in winter?', a: 'Yes, but watch for snow, ice, and blizzards. Bring warm boots and gloves, and move before sunset. Shops tend to close earlier in winter.' },
    { q: 'Can I combine it with Aikoku Station?', a: 'By car, Aikoku Station is about 15 minutes from Kofuku. It pairs well as a half-day route tracing the "From the Land of Love, to Happiness" story.' },
    { q: 'Is the original station building still there?', a: 'The first building was rebuilt in 2013 in a style that preserves its old atmosphere. Together with the platform and preserved cars, it is maintained as a tourist site carrying the memory of the Hiroo Line.' },
    { q: 'Is this the official website for Kofuku Station?', a: 'No. KofukuEki.com is an unofficial travel guide compiling publicly available government, tourism, and transit information. It is not affiliated with the local operator, the City of Obihiro, or any transport operator.' },
    { q: 'When is the shop open?', a: 'The outdoor grounds can generally be visited any time, but the shop and snack hours vary by season. Summer is about 9:00–17:30 and winter about 9:30–15:00. They can change by weather or day, so follow on-site notices.' },
    { q: 'Where can I buy the commemorative ticket?', a: 'The shops in front of both Kofuku Station and Aikoku Station sell commemorative tickets. There is no official online shop run by the City of Obihiro, so buy them at the local shops. See the "Commemorative tickets" page for details.' },
    { q: 'Does Kofuku Station still operate as a train station?', a: 'No. Kofuku Station ended railway operations in 1987 with the closure of the Hiroo Line. It is now maintained as a tourist and viewing spot preserving the station building, platform, and preserved trains.' },
  ],
  ko: [
    { q: '행복역 관람에 요금이 드나요?', a: '역사, 승강장, 보존 차량 등의 관람은 무료입니다. 매점 쇼핑이나 일부 체험은 별도 요금이 있을 수 있습니다.' },
    { q: '정해진 관람 시간이 있나요?', a: '야외 관광 구역은 기본적으로 정해진 개방 시간이 없습니다. 다만 매점과 휴게 시설은 계절·요일·날씨에 따라 바뀝니다. 낮 시간대 방문을 권장합니다.' },
    { q: '얼마나 머물면 좋을까요?', a: '역사, 소망 카드, 승강장, 보존 차량, 행복의 종을 모두 둘러보면 약 40–60분이 소요됩니다. 행복 신사까지 걸어가거나 사진을 찍는다면 90분 정도 잡으시면 안심입니다.' },
    { q: '도카치 오비히로 공항과 가깝나요?', a: '공항에서 차나 택시로 약 10분 거리입니다. 도착 당일 첫 행선지나 출발 전 마지막 관광지로 넣기 좋습니다.' },
    { q: '차 없이 갈 수 있나요?', a: '오비히로 역 버스 터미널에서 도카치 버스 60번(히로오 선)을 타고 「행복」 정류장에서 내린 뒤 도보 약 5분입니다. 운행 횟수가 적어 왕복 시간을 함께 확인하세요.' },
    { q: '주차장이 있나요?', a: '무료 주차장이 있으며 승용차와 대형 버스를 합쳐 약 36면입니다. 성수기에는 여유 있게 방문하세요.' },
    { q: '겨울에도 방문할 수 있나요?', a: '가능하지만 적설·결빙·눈보라에 주의하세요. 방한 부츠와 장갑을 준비하고 일몰 전 이동을 권장합니다. 매점은 겨울에 영업 시간이 짧아지는 경향이 있습니다.' },
    { q: '아이쿠 역과 함께 돌아볼 수 있나요?', a: '차로는 행복역에서 아이쿠 역까지 약 15분입니다. 「사랑의 나라에서 행복으로」 이야기를 따라가는 반일 코스로 잘 어울립니다.' },
    { q: '당시 역사가 그대로 남아 있나요?', a: '초기 역사는 노후로 2013년 옛 분위기를 계승하는 형태로 재건되었습니다. 승강장과 보존 차량과 함께 구 히로오 선의 기억을 전하는 관광지로 정비되어 있습니다.' },
    { q: '이 사이트는 행복역 공식 사이트인가요?', a: '아닙니다. KofukuEki.com은 공개된 행정·관광·교통 정보를 정리한 비공식 여행 가이드로, 현지 운영자·오비히로시·교통 사업자와는 무관합니다.' },
    { q: '매점은 언제 열나요?', a: '야외 관람 구역은 기본적으로 언제든 방문할 수 있지만, 매점과 간식 영업 시간은 계절에 따라 다릅니다. 여름은 약 9:00–17:30, 겨울은 약 9:30–15:00입니다. 날씨나 요일에 따라 바뀌므로 현장 안내를 우선 확인하세요.' },
    { q: '기념 승차권은 어디서 사나요?', a: '행복역과 아이쿠 역의 각 역 앞 매점에서 기념 승차권을 판매합니다. 오비히로시 공식 쇼핑 사이트는 없으니 현장 매점에서 구매하세요. 자세한 내용은 “기념 승차권” 페이지를 참고하세요.' },
    { q: '행복역은 지금도 열차역으로 영업하나요?', a: '아니요. 행복역은 1987년 히로오 선 폐지와 함께 철도역 영업을 마쳤습니다. 현재는 역사·승강장·보존 차량을 남긴 관광·견학 명소로 정비되어 있습니다.' },
  ],
};

export interface PlanCard { kicker: string; titleLines: string[]; text: string; note: string; }

export interface PageContent {
  home: {
    heroEyebrow: string;
    heroTitleMain: string;
    heroTitleLines: string[];
    heroSubLines: string[];
    cta1: string;
    cta2: string;
    story: { eyebrow: string; title: string; text: string; readMore: string };
    highlights: { eyebrow: string; title: string; text: string; pointLink: string };
    plan: {
      eyebrow: string;
      title: string;
      text: string;
      cards: PlanCard[];
    };
    beforeYouGo: { eyebrow: string; title: string; items: string[]; cta1: string; cta2: string };
    faqSection: { eyebrow: string; title: string; text: string; viewAll: string };
    cta: { kicker: string; title: string; text: string; button: string };
  };
  about: {
    hero: { eyebrow: string; title: string; intro: string; image: string; imageSmall: string; alt: string };
    sections: Array<{ eyebrow: string; title: string; body: string }>;
  };
  guide: {
    hero: { eyebrow: string; title: string; intro: string; image: string; imageSmall: string; alt: string };
    blocks: Array<{ number: string; title: string; text: string }>;
  };
  access: {
    hero: { eyebrow: string; title: string; intro: string; image: string; imageSmall: string; alt: string };
    introCards: Array<[string, string, string]>;
    choose: { eyebrow: string; title: string; text: string; tabs: Array<{ key: string; label: string }> };
    travelModes: Record<string, { kicker: string; title: string; body: string; items: string[] }>;
    routes: { eyebrow: string; title: string; text: string; cards: Array<{ kicker: string; title: string; text: string; note: string }> };
    atStation: { eyebrow: string; title: string; text: string; addressLabel: string; copy: string; mapApp: string; copyNote: string; busLabel: string; busTitle: string; busText: string; busLink: string };
    map: { eyebrow: string; title: string; text: string };
    hours: { eyebrow: string; title: string; text: string; items: Array<{ label: string; value: string; note: string }> };
    shopHours: { eyebrow: string; title: string; text: string; rows: Array<{ label: string; value: string; note: string }>; source: string; checked: string; caution: string };
  };
  food: {
    hero: { eyebrow: string; title: string; intro: string; image: string; imageSmall: string; alt: string };
    intro: string;
  };
  faq: {
    hero: { eyebrow: string; title: string; intro: string; image: string; imageSmall: string; alt: string };
    noteTitle: string;
    noteText: string;
  };
  ticket: {
    hero: { eyebrow: string; title: string; intro: string; image: string; imageSmall: string; alt: string };
    intro: string;
    blocks: Array<{ number: string; title: string; text: string }>;
    noteTitle: string;
    noteText: string;
  };
  aikoku: {
    hero: { eyebrow: string; title: string; intro: string; image: string; imageSmall: string; alt: string };
    blocks: Array<{ number: string; title: string; text: string }>;
    course: { eyebrow: string; title: string; text: string; steps: Array<{ kicker: string; title: string; text: string; note: string }> };
    aikokuInfo: { eyebrow: string; title: string; text: string; items: string[] };
  };
  photos: {
    hero: { eyebrow: string; title: string; intro: string };
  };
  credits: {
    hero: { eyebrow: string; title: string; intro: string };
    sections: Array<{ title: string; body: string }>;
  };
  privacy: {
    hero: { eyebrow: string; title: string; intro: string };
    sections: Array<{ title: string; body: string }>;
  };
}

export const pages: Record<Locale, PageContent> = {
  ja: {
    home: {
      heroEyebrow: '旧国鉄広尾線・北海道帯広市',
      heroTitleMain: '幸福駅跡（旧幸福駅）',
      heroTitleLines: ['愛の国から、', '幸福へ。'],
      heroSubLines: ['列車が走らなくなったあとも、願いはここに到着し続けています。', '幸福駅の物語と、十勝を旅するための静かな案内所。'],
      cta1: 'アクセスを確認',
      cta2: '幸福駅を知る',
      story: { eyebrow: 'STORY', title: '小さな駅名が、全国の人を幸福へ運んだ。', text: '幸福駅は、旧国鉄広尾線にあった小さな無人駅です。1970年代、「愛国から幸福へ」という言葉と記念切符が日本中に広がり、駅はひとつの願いの場所になりました。', readMore: '物語を詳しく読む' },
      highlights: { eyebrow: 'THREE SCENES', title: '幸福駅で出会う、三つの風景。', text: '駅舎に残された言葉、鉄道の時間、旅の節目を告げる鐘。急がずに歩くと、場所の表情が少しずつ変わります。', pointLink: '見学のポイント' },
      plan: {
        eyebrow: 'PLAN YOUR VISIT',
        title: '旅程に、幸福をひと駅。',
        text: '空港から近く、愛国駅や中札内とも組み合わせやすい幸福駅。移動手段に合わせて、無理のない過ごし方を選べます。',
        cards: [
          { kicker: '01 · ARRIVAL', titleLines: ['空港から', '最初の幸福へ'], text: 'とかち帯広空港から車で約10分。到着後に立ち寄り、帯広市街へ向かう短いコース。', note: '目安：60–90分' },
          { kicker: '02 · STORY', titleLines: ['愛国から', '幸福へ'], text: '愛国駅で鉄道の記憶に触れ、幸福駅へ。「愛の国から幸福へ」の言葉を実際の風景でたどるコース。', note: '目安：2–3時間' },
          { kicker: '03 · TOKACHI', titleLines: ['幸福の先へ', '十勝の食を巡る'], text: '幸福駅から中札内へ足を延ばし、農家レストランや道の駅で十勝の味を楽しむ半日コース。', note: '目安：3–5時間' },
        ],
      },
      beforeYouGo: { eyebrow: 'BEFORE YOU GO', title: '訪れる前に、知っておきたいこと。', items: ['屋外中心のため、十勝の風・雪・日差しに合わせた服装を。', 'バスは本数が限られます。往復の時刻を先に決めてください。', '売店の営業は季節や天候で変わるため、現地案内を優先してください。'], cta1: 'アクセス案内', cta2: 'よくある質問' },
      faqSection: { eyebrow: 'FAQ', title: 'よくある質問', text: '訪問前によく迷うポイントを、短くまとめました。', viewAll: 'すべての質問を見る' },
      cta: { kicker: 'NEXT STOP', title: '次の旅に、幸福駅を。', text: '住所・駐車場・バス停・空港からの行き方を、ひとつのページにまとめています。', button: 'アクセスを見る' },
    },
    about: {
      hero: { eyebrow: 'ABOUT', title: '幸福駅の物語。', intro: '地名の由来から「愛の国から幸福へ」の広がり、廃線後の再整備まで。小さな駅がどうして願いの場所になったのかをたどります。', image: '/images/station-1440.webp', imageSmall: '/images/station-960.webp', alt: '幸福駅の木造駅舎を正面から見た風景' },
      sections: [
        { eyebrow: 'ORIGIN', title: '地名と駅の始まり', body: '「幸福」という地名は、アイヌ語に由来する地名を意訳したものと伝えられます。1956年、旧国鉄広尾線の小さな駅として幸福駅が開設されました。' },
        { eyebrow: 'PHRASE', title: '「愛の国から幸福へ」', body: '1973年、NHK「新日本紀行」で紹介されたことをきっかけに、愛国駅から幸福駅ゆきの記念切符が話題になりました。やがてこの言葉は、日本中の恋人や家族が願いを託すフレーズになりました。' },
        { eyebrow: 'AFTER CLOSURE', title: '廃線後、そしていま', body: '1987年の広尾線廃止とともに駅としての役目を終えましたが、地名と物語は残りました。2013年には駅舎が建て替えられ、交通公園・ふれあい広場として年間20万人以上が訪れる観光地になっています。' },
      ],
    },
    guide: {
      hero: { eyebrow: 'GUIDE', title: '幸福駅の見どころ。', intro: '駅舎に残された願いの札、木造のホーム、朱色のディーゼルカー、そして幸福の鐘。訪れたときに立ち止まりたい、三つの風景を案内します。', image: '/images/interior-1440.webp', imageSmall: '/images/interior-480.webp', alt: 'ピンク色の願い札で覆われた幸福駅の内部' },
      blocks: [
        { number: '01', title: '願いで彩られた駅舎', text: '天井まで連なる淡い桃色の紙片。旅人が残したメッセージを見上げながら、静かな時間を過ごせます。' },
        { number: '02', title: '板張りのホームとキハ22', text: '旧広尾線を思わせるホームに並ぶ朱色のディーゼルカー。鉄道ファンだけでなく、写真を撮る人にも人気の風景です。' },
        { number: '03', title: '幸福の鐘', text: '駅舎へ続く小径に立つ鐘。大切な人との記念や、旅の節目にゆっくり音を響かせてみてください。' },
      ],
    },
    access: {
      hero: { eyebrow: 'ACCESS', title: '幸福駅への行き方。', intro: '帯広市街から南へ約30分。とかち帯広空港からは約10分。車が便利ですが、路線バスでも訪れることができます。', image: '/images/hero-1440.webp', imageSmall: '/images/hero-960.webp', alt: '広い空と草地の中に建つ幸福駅' },
      introCards: [['所在地', '帯広市幸福町', '東1線161'], ['帯広市街', '車で約30分', '道路状況により変動'], ['帯広空港', '車で約10分', '到着・出発日に便利'], ['駐車場', '無料・36台', '大型バス5台分を含む']],
      choose: { eyebrow: 'CHOOSE YOUR WAY', title: '移動手段から選ぶ。', text: '下のボタンで移動手段を切り替えると、訪問前に確認するポイントが変わります。', tabs: [{ key: 'car', label: '車・レンタカー' }, { key: 'bus', label: '路線バス' }, { key: 'airport', label: '空港から' }] },
      travelModes: {
        car: { kicker: 'BY CAR', title: '最も自由で、周辺も巡りやすい方法。', body: '帯広市街から約30分。幸福駅のあとに愛国駅、中札内、空港へ向かう旅程を組みやすく、冬季も防寒具を車に用意できます。', items: ['無料駐車場は普通車・大型バスを合わせて36台分。', '冬は圧雪・凍結・吹雪に備え、移動時間に余裕を。', 'カーナビでは住所または緯度経度を入力。'] },
        bus: { kicker: 'BY BUS', title: '車がなくても、幸福へ。', body: '帯広駅バスターミナルから十勝バス60番・広尾線を利用し、「幸福」停留所から徒歩約5分です。便数が限られるため、計画性が必要です。', items: ['往路と復路を必ずセットで確認。', '遅延や天候を考え、帰りの一本前も把握。', '停留所からは歩きやすい靴がおすすめ。'] },
        airport: { kicker: 'FROM AIRPORT', title: '十勝の最初、または最後の一駅。', body: 'とかち帯広空港から車・タクシーで約10分。短い距離ですが、搭乗前は道路状況や手続き時間を含めて余裕を持ってください。', items: ['レンタカーの受取・返却時間を別に確保。', '大きな荷物は車内や空港ロッカーの利用を検討。', '冬季・悪天候時はフライト情報も確認。'] },
      },
      routes: { eyebrow: 'ROUTE GUIDE', title: '三つの出発点から。', text: '時間は天候、渋滞、道路状況で変わります。特に冬は数字より余裕を優先してください。', cards: [
        { kicker: 'FROM OBIHIRO', title: '帯広駅・市街から', text: '車で南へ約30分。路線バスは帯広駅バスターミナルから十勝バス60番「広尾線」に乗り、「幸福」で下車後、徒歩約5分です。', note: 'バス利用時は復路の便を先に確認してください。' },
        { kicker: 'FROM AIRPORT', title: 'とかち帯広空港から', text: '自動車・タクシーで約10分。フライト到着後の最初の観光、または出発前の最後の立ち寄り先として組み込みやすい距離です。', note: '荷物・搭乗手続き・レンタカー返却時間を含めて計画を。' },
        { kicker: 'FROM NAKASATSUNAI', title: '中札内方面から', text: '国道236号周辺から帯広方面へ戻る途中に立ち寄れます。道の駅や農家レストランと合わせ、半日の十勝南部コースに。', note: '各施設の営業時間と定休日を個別に確認してください。' },
      ] },
      atStation: { eyebrow: 'AT THE STATION', title: '到着してから迷わないために。', text: '幸福駅はコンパクトな観光地です。住所、駐車、バス停の位置関係を先に把握しておくと安心です。', addressLabel: 'ADDRESS', copy: '住所をコピー', mapApp: '地図アプリで経路検索 ↗', copyNote: '現地の案内標識、立入表示、駐車誘導を優先してください。', busLabel: 'BUS CHECK', busTitle: '十勝バス 60番・広尾線', busText: '時刻は改定されるため、このサイトでは固定表示していません。訪問日を決めたら、往路と復路を同じ時刻表で確認してください。', busLink: '十勝バスの最新案内を確認 ↗' },
      map: { eyebrow: 'LOCATION MAP', title: '地図で幸福駅を確認。', text: '帯広市街、とかち帯広空港、国道236号との位置関係を確認し、利用する交通手段に合わせて経路を選べます。' },
      hours: { eyebrow: 'HOURS & PARKING', title: '見学時間と駐車場について。', text: '屋外の観光エリアは基本的にいつでも訪問できます。売店や休憩施設の営業時間は季節や天候で変わります。', items: [
        { label: '屋外エリア', value: 'ほぼ終日', note: '明るい時間帯の訪問をおすすめ' },
        { label: '売店・軽食', value: '季節で変動', note: '冬季は短くなる傾向あり' },
        { label: '駐車場', value: '無料・36台', note: '大型バス5台分を含む' },
      ] },
      shopHours: { eyebrow: 'SHOP HOURS', title: '売店・軽食の営業時間（目安）', text: '屋外の見学エリアとは異なり、売店や軽食の営業時間は季節で変わります。以下は北海道観光公式サイトなどが示す目安です。', rows: [
        { label: '夏期（目安）', value: '9:00–17:30', note: '繁忙期は延長する場合があります' },
        { label: '冬期（目安）', value: '9:30–15:00', note: '天候・曜日により短縮' },
      ], source: '北海道観光公式サイト HOKKAIDO LOVE!', checked: '2026年10月', caution: '現地の掲示を優先してください。' },
    },
    food: {
      hero: { eyebrow: 'FOOD', title: '周辺の食とお土産。', intro: '駅構内の軽食から、中札内の農家レストラン、空港の食事まで。幸福駅を中心に、十勝の味を楽しめる立ち寄り先をまとめました。', image: '/images/bell-1440.webp', imageSmall: '/images/bell-640.webp', alt: '幸福駅の幸福の鐘と駅舎へ続く道' },
      intro: '幸福駅周辺は農村地域です。駅で買える軽食と、車で数分の農家レストラン、中札内の道の駅、空港の食事を組み合わせると、十勝らしい一日になります。',
    },
    faq: {
      hero: { eyebrow: 'FAQ', title: '幸福駅へ行く前の、よくある質問。', intro: '料金、時間、交通、冬の服装。旅の前に気になることを、できるだけ簡潔にまとめました。', image: '/images/bell-1440.webp', imageSmall: '/images/bell-640.webp', alt: '幸福駅の幸福の鐘と駅舎へ続く道' },
      noteTitle: '訪問前に最新情報をご確認ください。',
      noteText: '現地の営業、交通、積雪、イベントなどは変わります。このページは旅行計画の入口として利用し、当日は現地掲示と交通事業者の最新案内を優先してください。',
    },
    ticket: {
      hero: { eyebrow: 'TICKET', title: '幸福駅の記念切符。', intro: '「愛国から幸福へ」を象徴する記念切符。どこで買え、どんな種類があるのかをまとめました。', image: '/images/interior-1440.webp', imageSmall: '/images/interior-480.webp', alt: 'ピンク色の願い札で覆われた幸福駅の内部' },
      intro: '幸福駅と愛国駅のそれぞれの駅前売店で、記念切符が販売されています。帯広市に公式の通販サイトはなく、現地の売店でのお求めになります。',
      blocks: [
        { number: '01', title: 'どこで買えるか', text: '幸福駅前の売店と、愛国駅前の売店で記念切符を扱っています。いずれも現地の営業状況に合わせて販売されます。' },
        { number: '02', title: 'どんな種類があるか', text: '「愛国→幸福」の記念切符をはじめ、台紙付きの硬券風や入場証明書型など、いくつかの種類があります。デザインは店舗によって異なる場合があります。' },
        { number: '03', title: 'オンライン購入はできるか', text: '帯広市が運営する公式の通販サイトはありません。郵送やネットでの購入をうたう第三者サイトにはご注意ください。現地売店でのお求めをおすすめします。' },
        { number: '04', title: '価格について', text: '切符の種類や時期により異なります。正確な価格は、幸福駅・愛国駅の売店の掲示でご確認ください。' },
      ],
      noteTitle: '非公式ガイドの注記',
      noteText: '当サイトは幸福駅の非公式観光ガイドです。記念切符の種類・価格・販売状況は変わるため、最新情報は現地の売店または帯広市の公式情報をご確認ください。',
    },
    aikoku: {
      hero: { eyebrow: 'AIKOKU TO KOFUKU', title: '愛国から幸福へ。', intro: '「愛の国から幸福へ」を実際の風景でたどる、半日のモデルコース。愛国駅と幸福駅をどうめぐるかを紹介します。', image: '/images/station-1440.webp', imageSmall: '/images/station-960.webp', alt: '幸福駅の木造駅舎を正面から見た風景' },
      blocks: [
        { number: '01', title: '愛国駅とは', text: '旧国鉄広尾線の駅で、現在は交通記念館として整備されています。鉄道の資料や古い切符、蒸気機関車などが展示され、幸福駅とセットで訪れる人の多い拠点です。' },
        { number: '02', title: 'ふたつの駅の距離', text: '愛国駅から幸福駅までは、自動車で約15分。短い距離ですが、ふたつの駅を結ぶ言葉がこの地を象徴しています。' },
        { number: '03', title: '記念切符のゆくえ', text: '1973年以降、「愛国→幸福」の記念切符が広がりました。幸福駅の前売店で実物を手に取ることができます。' },
      ],
      course: { eyebrow: 'MODEL COURSE', title: '半日でめぐる、愛国から幸福へ。', text: '帯広市街を拠点に、鉄道の記憶と願いの景色を効率よく巡るコースです。', steps: [
        { kicker: 'START', title: '帯広市街・帯広駅', text: 'レンタカーやタクシーで南へ。途中の景色も十勝らしい平原が広がります。', note: '帯広駅からは約30分' },
        { kicker: 'STOP 1', title: '愛国駅', text: '交通記念館で鉄道の記憶に触れ、記念切符の由来を知る。', note: '3–11月は毎日、12–2月は日曜のみ' },
        { kicker: 'STOP 2', title: '幸福駅', text: '駅舎・ホーム・保存車両を巡り、願いの札を眺める。', note: '愛国駅から約15分' },
        { kicker: 'STOP 3', title: '幸福神社（希望）', text: '幸福駅から徒歩約15分。テーマにそった静かな散策に。', note: '現地の時間に余裕を' },
        { kicker: 'RETURN', title: '中札内・空港へ', text: 'そのまま中札内方面のランチ、または帯広空港への立ち寄りへ。', note: '旅程に合わせて選択' },
      ] },
      aikokuInfo: { eyebrow: 'AIKOKU STATION', title: '愛国駅の基本情報', text: '幸福駅とセットで知っておくと、物語がより深まります。', items: ['入場無料（交通記念館）', '3月–11月は毎日開館、12月–2月は日曜のみ', '冬期は屋外の車両が見学できない場合があります', '愛国駅から幸福駅へは自動車で約15分'] },
    },
    photos: {
      hero: { eyebrow: 'PHOTOS', title: '写真で見る幸福駅。', intro: '駅舎、願いの札、ホーム、ディーゼルカー、幸福の鐘。季節ごとの表情を写真で巡ります。' },
    },
    credits: {
      hero: { eyebrow: 'CREDITS', title: '写真と出典について。', intro: 'このサイトで使用している写真のクレジットと、情報の出典をまとめています。' },
      sections: [
        { title: '写真について', body: '画像は独自に作成・撮影したもの、または利用条件を確認した素材を使用しています。商用利用や再配布はできません。' },
        { title: '情報の出典', body: '営業時間・交通・統計などの数値は、公開されている行政・観光・交通情報をもとにしています。最新情報は各公式サイトでご確認ください。' },
      ],
    },
    privacy: {
      hero: { eyebrow: 'PRIVACY', title: 'プライバシーポリシー。', intro: 'このサイトにおけるアクセス解析と情報の取り扱いについて説明します。' },
      sections: [
        { title: 'アクセス解析', body: 'このサイトは Google Analytics を利用して匿名のアクセス解析を行っています。IP アドレスは匿名化され、個人を特定する用途には使用しません。' },
        { title: '広告とCookie', body: 'アクセス解析のために Cookie を使用する場合があります。ブラウザの設定から無効にできます。' },
        { title: 'お問い合わせ', body: 'このサイトは非公式のガイドです。現地の運営や公式情報については、帯広市および各交通事業者の公式サイトをご確認ください。' },
      ],
    },
  },
  zh: {
    home: {
      heroEyebrow: '舊國鐵廣尾線・北海道帶廣市',
      heroTitleMain: '幸福車站遺跡（舊幸福車站）',
      heroTitleLines: ['從愛的國度，', '前往幸福。'],
      heroSubLines: ['即使列車不再行駛，願望仍不斷在此抵達。', '幸福車站的故事，與十勝之旅的靜謐指南。'],
      cta1: '查看交通方式',
      cta2: '認識幸福車站',
      story: { eyebrow: 'STORY', title: '一個小小站名，把全國的人送往幸福。', text: '幸福車站是舊國鐵廣尾線上一座小小的無人車站。1970 年代，「從愛國前往幸福」這句話與紀念車票傳遍日本，車站也成了一處許願之地。', readMore: '詳讀故事' },
      highlights: { eyebrow: 'THREE SCENES', title: '在幸福車站遇見的三種風景。', text: '留在站房的語句、鐵道的時光，以及宣告旅途中轉站的鐘。放慢腳步，風景會一點一滴地改變。', pointLink: '參觀重點' },
      plan: {
        eyebrow: 'PLAN YOUR VISIT',
        title: '為旅程，加上一站幸福。',
        text: '距離機場近，也便於與愛國車站、中札內串聯。依照交通方式，選擇最從容的玩法。',
        cards: [
          { kicker: '01 · ARRIVAL', titleLines: ['從機場', '最初的幸福'], text: '從帶廣機場開車約 10 分鐘。抵達後順路造訪、再前往帶廣市區的短程路線。', note: '建議：60–90分' },
          { kicker: '02 · STORY', titleLines: ['從愛國', '前往幸福'], text: '在愛國車站感受鐵道記憶，再到幸福車站。實地走訪「從愛的國度前往幸福」這句話的風景。', note: '建議：2–3小時' },
          { kicker: '03 · TOKACHI', titleLines: ['幸福之外', '品嚐十勝美食'], text: '從幸福車站深入中札內，以農家餐廳與道之驛享用十勝風味，安排半日行程。', note: '建議：3–5小時' },
        ],
      },
      beforeYouGo: { eyebrow: 'BEFORE YOU GO', title: '出發前，先知道這幾件事。', items: ['以戶外為主，請依十勝的風、雪與日照準備服裝。', '巴士班次有限，請先決定去程與回程時刻。', '商店營業會因季節與天候變動，請以現場公告為準。'], cta1: '交通指南', cta2: '常見問題' },
      faqSection: { eyebrow: 'FAQ', title: '常見問題', text: '我們將出發前常有的疑問，簡短整理如下。', viewAll: '查看所有問題' },
      cta: { kicker: 'NEXT STOP', title: '為下一段旅程，加上幸福車站。', text: '地址、停車場、巴士站、從機場前往的方式，都整理在同一頁。', button: '查看交通方式' },
    },
    about: {
      hero: { eyebrow: 'ABOUT', title: '幸福車站的故事。', intro: '從地名的由來，到「從愛的國度前往幸福」的流傳，再到廢線後的整修。我們來追溯這座小車站如何成為許願之地。', image: '/images/station-1440.webp', imageSmall: '/images/station-960.webp', alt: '從正面看幸福車站木造站房的風景' },
      sections: [
        { eyebrow: 'ORIGIN', title: '地名與車站的開始', body: '「幸福」這個地名，相傳是將源於愛努語的地名意譯而來。1956 年，作為舊國鐵廣尾線的小車站，幸福車站正式設立。' },
        { eyebrow: 'PHRASE', title: '「從愛的國度前往幸福」', body: '1973 年，經 NHK《新日本紀行》介紹後，從愛國車站開往幸福車站的紀念車票成為話題。這句話後來成為日本各地情侶與家人寄託心願的詞句。' },
        { eyebrow: 'AFTER CLOSURE', title: '廢線之後，直到現在', body: '隨著 1987 年廣尾線停駛，車站結束運輸使命，但地名與故事留存了下來。2013 年站房重建，如今作為交通公園與交流廣場，每年吸引超過 20 萬人造訪。' },
      ],
    },
    guide: {
      hero: { eyebrow: 'GUIDE', title: '幸福車站的看點。', intro: '留在站房的許願卡、木造月台、朱紅色柴油列車，以及幸福之鐘。為您介紹造訪時值得駐足的三種風景。', image: '/images/interior-1440.webp', imageSmall: '/images/interior-480.webp', alt: '內部被粉色許願卡覆蓋的幸福車站' },
      blocks: [
        { number: '01', title: '被願望妝點的站房', text: '一路綿延到天花板的淡粉色紙片。抬頭望著旅人留下的留言，度過一段安靜時光。' },
        { number: '02', title: '木造月台與 KiHa 22', text: '排列在彷彿舊廣尾線月台旁的朱紅色柴油列車。不僅鐵道迷，也深受攝影者喜愛。' },
        { number: '03', title: '幸福之鐘', text: '立於通往站房小徑上的鐘。在與重要之人的紀念時刻，或旅途中轉站，敲響它聽聽聲音吧。' },
      ],
    },
    access: {
      hero: { eyebrow: 'ACCESS', title: '前往幸福車站的方式。', intro: '從帶廣市區往南約 30 分鐘。從帶廣機場約 10 分鐘。自駕最方便，也可搭乘路線巴士前往。', image: '/images/hero-1440.webp', imageSmall: '/images/hero-960.webp', alt: '矗立在遼闊天空與草原中的幸福車站' },
      introCards: [['所在地', '帶廣市幸福町', '東1線161'], ['帶廣市區', '車程約30分', '依路況浮動'], ['帶廣機場', '車程約10分', '抵達／出發日方便'], ['停車場', '免費・36格', '含5格大型遊覽車位']],
      choose: { eyebrow: 'CHOOSE YOUR WAY', title: '依交通方式選擇。', text: '點選下方按鈕切換交通方式，出發前要確認的重點也會改變。', tabs: [{ key: 'car', label: '自駕・租車' }, { key: 'bus', label: '路線巴士' }, { key: 'airport', label: '從機場' }] },
      travelModes: {
        car: { kicker: 'BY CAR', title: '最自由、也最方便遊覽周邊的方式。', body: '從帶廣市區約 30 分鐘。幸福車站之後可接續愛國車站、中札內、機場，冬季也能在車內備妥防寒衣物。', items: ['免費停車場：一般汽車與大型遊覽車合計 36 格。', '冬季請預留積雪、結冰、暴風雪的緩衝時間。', '車用導航請輸入地址或經緯度。'] },
        bus: { kicker: 'BY BUS', title: '沒有車，也能前往幸福。', body: '從帶廣站巴士總站搭乘十勝巴士 60 號（廣尾線），在「幸福」站牌下車後步行約 5 分鐘。班次有限，需要事先規劃。', items: ['務必同時確認去程與回程。', '考量誤點與天候，連回程前一班也掌握。', '從站牌出發建議穿好走的鞋。'] },
        airport: { kicker: 'FROM AIRPORT', title: '十勝的第一站，或最後一站。', body: '從帶廣機場開車或搭計程車約 10 分鐘。距離很短，但登機前請預留路況與作業時間的餘裕。', items: ['另外預留租車領取／歸還時間。', '大件行李可放車內或使用機場置物櫃。', '冬季或天候不佳時也請確認航班資訊。'] },
      },
      routes: { eyebrow: 'ROUTE GUIDE', title: '從三個出發點出發。', text: '所需時間會因天候、壅塞與路況而變動。特別是冬季，請比數字預留更多餘裕。', cards: [
        { kicker: 'FROM OBIHIRO', title: '從帶廣站・市區', text: '開車往南約 30 分鐘。搭乘巴士可於帶廣站巴士總站搭乘十勝巴士 60 號（廣尾線），在「幸福」下車後步行約 5 分鐘。', note: '搭乘巴士時，請先確認回程班次。' },
        { kicker: 'FROM AIRPORT', title: '從帶廣機場', text: '開車或搭計程車約 10 分鐘。很適合作為航班抵達後的第一個景點，或出發前最後的順路停靠。', note: '請將行李、登機手續、租車歸還時間一併納入規劃。' },
        { kicker: 'FROM NAKASATSUNAI', title: '從中札內方向', text: '從國道 236 號周邊返回帶廣途中可順路造訪。搭配道之驛或農家餐廳，安排半日的十勝南部行程。', note: '請分別確認各設施的營業時間與公休日。' },
      ] },
      atStation: { eyebrow: 'AT THE STATION', title: '到達後不迷路的要點。', text: '幸福車站是緊湊的觀光地。事先掌握地址、停車場與巴士站的位置關係，會更安心。', addressLabel: 'ADDRESS', copy: '複製地址', mapApp: '在地圖 App 規劃路線 ↗', copyNote: '請以現場指示牌、禁入標示與停車引導為準。', busLabel: 'BUS CHECK', busTitle: '十勝巴士 60 號・廣尾線', busText: '時刻表會修訂，本站不固定顯示。決定造訪日後，請用同一份時刻表確認去程與回程。', busLink: '查看十勝巴士最新資訊 ↗' },
      map: { eyebrow: 'LOCATION MAP', title: '用地圖確認幸福車站。', text: '確認與帶廣市區、帶廣機場、國道 236 號的位置關係，再依交通方式選擇路線。' },
      hours: { eyebrow: 'HOURS & PARKING', title: '關於參觀時間與停車場。', text: '戶外觀光區基本上任何時候都能前往。商店與休息設施的營業時間會因季節與天候而變動。', items: [
        { label: '戶外區域', value: '幾乎全天', note: '建議於白天時段前往' },
        { label: '商店・輕食', value: '依季節變動', note: '冬季往往較短' },
        { label: '停車場', value: '免費・36格', note: '含5格大型遊覽車位' },
      ] },
      shopHours: { eyebrow: 'SHOP HOURS', title: '商店・輕食的營業時間（參考）', text: '與戶外參觀區不同，商店與輕食的營業時間會隨季節變動。以下為北海道官方旅遊網站等列出的參考值。', rows: [
        { label: '夏季（參考）', value: '9:00–17:30', note: '旺季可能延長' },
        { label: '冬季（參考）', value: '9:30–15:00', note: '依天候・星期可能縮短' },
      ], source: '北海道觀光官方網站 HOKKAIDO LOVE!', checked: '2026年10月', caution: '請優先以現場公告為準。' },
    },
    food: {
      hero: { eyebrow: 'FOOD', title: '周邊美食與伴手禮。', intro: '從站區內的輕食，到中札內的農家餐廳、機場的餐食。我們整理了以幸福車站為中心、能享受十勝風味的據點。', image: '/images/bell-1440.webp', imageSmall: '/images/bell-640.webp', alt: '幸福車站的幸福之鐘與通往站房的小路' },
      intro: '幸福車站周邊是農村地區。把在車站能買到的輕食、車程數分的農家餐廳、中札內道之驛，以及機場餐食組合起來，就能度過充滿十勝風味的一天。',
    },
    faq: {
      hero: { eyebrow: 'FAQ', title: '前往幸福車站前，常見的問題。', intro: '費用、時間、交通、冬季穿著。我們將出發前在意的事，盡可能簡短地整理。', image: '/images/bell-1440.webp', imageSmall: '/images/bell-640.webp', alt: '幸福車站的幸福之鐘與通往站房的小路' },
      noteTitle: '出發前請確認最新資訊。',
      noteText: '當地的營業、交通、積雪、活動等都可能變動。本頁作為旅行規劃的入口使用，當天請以現場公告與交通業者的最新資訊為準。',
    },
    ticket: {
      hero: { eyebrow: 'TICKET', title: '幸福車站的紀念車票。', intro: '象徵「從愛國前往幸福」的紀念車票。我們整理了在哪裡購買、有哪些種類。', image: '/images/interior-1440.webp', imageSmall: '/images/interior-480.webp', alt: '內部被粉色許願卡覆蓋的幸福車站' },
      intro: '幸福車站與愛國車站的站前商店，都有販售紀念車票。帶廣市沒有官方購物網站，請於現場商店購買。',
      blocks: [
        { number: '01', title: '在哪裡購買', text: '幸福車站前的商店，以及愛國車站前的商店，皆有販售紀念車票。皆配合現場營業狀況販售。' },
        { number: '02', title: '有哪些種類', text: '除了「愛國→幸福」紀念車票，還有附底紙的硬券風、入場證明書型等多種。設計可能因店而異。' },
        { number: '03', title: '能否線上購買', text: '帶廣市沒有官方經營的購物網站。請留意聲稱郵購或網購的第三方網站，建議於現場商店購買。' },
        { number: '04', title: '關於價格', text: '依車票種類與時期而異。正確價格請確認幸福車站、愛國車站商店的公告。' },
      ],
      noteTitle: '非官方指南註記',
      noteText: '本站為幸福車站的非官方旅遊指南。紀念車票的種類、價格、販售狀況會變動，最新資訊請確認現場商店或帶廣市官方資訊。',
    },
    aikoku: {
      hero: { eyebrow: 'AIKOKU TO KOFUKU', title: '從愛國到幸福。', intro: '用實際風景走一遍「從愛的國度前往幸福」的半日模型路線。介紹如何遊覽愛國車站與幸福車站。', image: '/images/station-1440.webp', imageSmall: '/images/station-960.webp', alt: '從正面看幸福車站木造站房的風景' },
      blocks: [
        { number: '01', title: '愛國車站是什麼', text: '舊國鐵廣尾線的車站，目前整建為交通紀念館。展示鐵道資料、舊車票、蒸汽機車等，是與幸福車站搭配造訪的主要據點。' },
        { number: '02', title: '兩站之間的距離', text: '從愛國車站到幸福車站，開車約 15 分鐘。距離雖短，串連兩站的這句話卻象徵著此地。' },
        { number: '03', title: '紀念車票的緣起', text: '1973 年以後，「愛國→幸福」的紀念車票廣為流傳。在幸福車站前的商店即可拿到實體車票。' },
      ],
      course: { eyebrow: 'MODEL COURSE', title: '半日遊，從愛國到幸福。', text: '以帶廣市區為起點，高效遊覽鐵道記憶與願望風景的路線。', steps: [
        { kicker: 'START', title: '帶廣市區・帶廣站', text: '租車或計程車往南行。途中也能看見十勝特有的平原景緻。', note: '從帶廣站約 30 分' },
        { kicker: 'STOP 1', title: '愛國車站', text: '在交通紀念館感受鐵道記憶，認識紀念車票的由來。', note: '3–11月每日、12–2月僅週日' },
        { kicker: 'STOP 2', title: '幸福車站', text: '遊覽站房、月台、保存車輛，眺望許願卡。', note: '從愛國車站約 15 分' },
        { kicker: 'STOP 3', title: '幸福神社（選擇）', text: '從幸福車站步行約 15 分。適合配合主題的安靜散步。', note: '請預留現場時間' },
        { kicker: 'RETURN', title: '前往中札內・機場', text: '接續中札內方向的午餐，或順路前往帶廣機場。', note: '依旅程選擇' },
      ] },
      aikokuInfo: { eyebrow: 'AIKOKU STATION', title: '愛國車站基本資訊', text: '與幸福車站搭配了解，故事會更深刻。', items: ['入場免費（交通紀念館）', '3月–11月每日開館、12月–2月僅週日', '冬季戶外車輛可能無法參觀', '從愛國車站到幸福車站開車約 15 分'] },
    },
    photos: {
      hero: { eyebrow: 'PHOTOS', title: '用照片看幸福車站。', intro: '站房、許願卡、月台、柴油列車、幸福之鐘。我們用照片帶您看不同季節的表情。' },
    },
    credits: {
      hero: { eyebrow: 'CREDITS', title: '關於照片與出處。', intro: '我們整理本站使用的照片來源，以及資訊的出處。' },
      sections: [
        { title: '關於照片', body: '圖像為自行製作／拍攝，或使用已確認使用條件的素材。不可用於商業目的或再散佈。' },
        { title: '資訊出處', body: '營業時間、交通、統計等數值，依據公開的行政、觀光與交通資訊。最新資訊請各官方網站確認。' },
      ],
    },
    privacy: {
      hero: { eyebrow: 'PRIVACY', title: '隱私權政策。', intro: '說明本站存取分析與資訊處理方式。' },
      sections: [
        { title: '存取分析', body: '本站使用 Google Analytics 進行匿名存取分析。IP 位址會被匿名化，不會用於識別個人。' },
        { title: '廣告與 Cookie', body: '為進行存取分析，可能會使用 Cookie。您可在瀏覽器設定中停用。' },
        { title: '聯絡方式', body: '本站為非官方指南。關於當地營運與官方資訊，請參考帶廣市及各交通業者的官方網站。' },
      ],
    },
  },
  en: {
    home: {
      heroEyebrow: 'Former JNR Hiroo Line · Obihiro, Hokkaido',
      heroTitleMain: 'Kofuku Station Ruins (Former Kofuku Station)',
      heroTitleLines: ['From the Land', 'of Love, to Happiness.'],
      heroSubLines: ['Even after trains stopped running, wishes keep arriving here.', 'A quiet guide to the story of Kofuku Station and traveling Tokachi.'],
      cta1: 'Check access',
      cta2: 'Discover Kofuku',
      story: { eyebrow: 'STORY', title: 'A tiny station name carried happiness across Japan.', text: 'Kofuku Station was a small unattended station on the former JNR Hiroo Line. In the 1970s, the phrase "From Aikoku to Kofuku" and its commemorative tickets spread nationwide, and the station became a place of wishes.', readMore: 'Read the full story' },
      highlights: { eyebrow: 'THREE SCENES', title: 'Three scenes you meet at Kofuku Station.', text: 'Words left on the station house, the time of the railway, and a bell that marks a turning point of the journey. Walk slowly and the place reveals itself.', pointLink: 'Viewing points' },
      plan: {
        eyebrow: 'PLAN YOUR VISIT',
        title: 'Add a stop of happiness to your trip.',
        text: 'Close to the airport and easy to combine with Aikoku Station and Nakasatsunai, Kofuku fits your mode of travel.',
        cards: [
          { kicker: '01 · ARRIVAL', titleLines: ['From the airport', 'to first happiness'], text: 'About 10 minutes by car from Tokachi Obihiro Airport. A short detour after arrival before heading into Obihiro city.', note: 'Allow: 60–90 min' },
          { kicker: '02 · STORY', titleLines: ['Aikoku', 'to Kofuku'], text: 'Feel the railway memory at Aikoku Station, then Kofuku. Trace the phrase "From the Land of Love, to Happiness" in real scenery.', note: 'Allow: 2–3 hours' },
          { kicker: '03 · TOKACHI', titleLines: ['Beyond Kofuku', 'taste Tokachi'], text: 'From Kofuku into Nakasatsunai, a half-day route enjoying Tokachi flavors at farm restaurants and road stations.', note: 'Allow: 3–5 hours' },
        ],
      },
      beforeYouGo: { eyebrow: 'BEFORE YOU GO', title: 'A few things to know before you visit.', items: ['Mostly outdoors—dress for Tokachi wind, snow, and sun.', 'Buses are limited; decide both outbound and return times first.', 'Shop hours vary by season and weather; follow on-site guidance.'], cta1: 'Access guide', cta2: 'FAQ' },
      faqSection: { eyebrow: 'FAQ', title: 'Frequently asked questions', text: 'We summed up the points people often wonder about before visiting.', viewAll: 'See all questions' },
      cta: { kicker: 'NEXT STOP', title: 'Add Kofuku Station to your next trip.', text: 'Address, parking, bus stop, and directions from the airport—all on one page.', button: 'See access' },
    },
    about: {
      hero: { eyebrow: 'ABOUT', title: 'The story of Kofuku Station.', intro: 'From the origin of its name, to the spread of "From the Land of Love, to Happiness," and its renewal after the line closed—how a tiny station became a place of wishes.', image: '/images/station-1440.webp', imageSmall: '/images/station-960.webp', alt: 'The wooden station house of Kofuku Station seen from the front' },
      sections: [
        { eyebrow: 'ORIGIN', title: 'The place name and the start', body: '"Kofuku" is said to come from a translation of an Ainu place name. In 1956, Kofuku Station opened as a small station on the former JNR Hiroo Line.' },
        { eyebrow: 'PHRASE', title: '"From the Land of Love, to Happiness"', body: 'After being featured on the 1973 NHK program "Shin Nihon Kikou," commemorative tickets from Aikoku to Kofuku became a sensation. The phrase became how couples and families across Japan entrusted their wishes.' },
        { eyebrow: 'AFTER CLOSURE', title: 'After closure, and now', body: 'With the Hiroo Line’s closure in 1987, the station ended its rail role, but its name and story remained. Rebuilt in 2013, it is now a railway park and plaza visited by over 200,000 people a year.' },
      ],
    },
    guide: {
      hero: { eyebrow: 'GUIDE', title: 'Highlights of Kofuku Station.', intro: 'Wish tags left on the station house, the wooden platform, vermilion diesel cars, and the Bell of Happiness—three scenes worth pausing for.', image: '/images/interior-1440.webp', imageSmall: '/images/interior-480.webp', alt: 'Inside Kofuku Station, covered with pink wish tags' },
      blocks: [
        { number: '01', title: 'A station house painted with wishes', text: 'Pale-pink papers stretch to the ceiling. Look up at the messages travelers left behind and enjoy a quiet moment.' },
        { number: '02', title: 'The wooden platform and KiHa 22', text: 'Vermilion diesel cars line a platform that recalls the old Hiroo Line—popular with railway fans and photographers alike.' },
        { number: '03', title: 'The Bell of Happiness', text: 'A bell stands along the path to the station house. Let it ring at a milestone with someone special, or at a turning point of your trip.' },
      ],
    },
    access: {
      hero: { eyebrow: 'ACCESS', title: 'How to get to Kofuku Station.', intro: 'About 30 minutes south of Obihiro city, and about 10 minutes from Tokachi Obihiro Airport. A car is convenient, but you can also come by local bus.', image: '/images/hero-1440.webp', imageSmall: '/images/hero-960.webp', alt: 'Kofuku Station standing under a wide sky and grassland' },
      introCards: [['Location', 'Kofukucho, Obihiro', 'Higashi 1 Sen 161'], ['Obihiro city', '~30 min by car', 'Varies with road conditions'], ['Obihiro Airport', '~10 min by car', 'Handy on arrival/departure'], ['Parking', 'Free · 36 spaces', 'Incl. 5 bus spaces']],
      choose: { eyebrow: 'CHOOSE YOUR WAY', title: 'Choose by mode of travel.', text: 'Switch the mode below and the points to check before visiting change.', tabs: [{ key: 'car', label: 'Car · rental' }, { key: 'bus', label: 'Local bus' }, { key: 'airport', label: 'From airport' }] },
      travelModes: {
        car: { kicker: 'BY CAR', title: 'The freest way, easy to tour around.', body: 'About 30 minutes from Obihiro city. After Kofuku you can continue to Aikoku, Nakasatsunai, and the airport, and keep warm clothes in the car in winter.', items: ['Free parking: 36 spaces incl. buses.', 'In winter, allow extra time for snow, ice, and blizzards.', 'For car navigation, enter the address or coordinates.'] },
        bus: { kicker: 'BY BUS', title: 'No car? Still reach happiness.', body: 'From Obihiro Station bus terminal, take Tokachi Bus route 60 (Hiroo Line) and get off at "Kofuku", then walk about 5 minutes. Services are limited, so plan ahead.', items: ['Always check outbound and return together.', 'Allow for delays and weather; know the bus before your return.', 'Comfortable shoes recommended from the stop.'] },
        airport: { kicker: 'FROM AIRPORT', title: 'The first, or last, stop in Tokachi.', body: 'About 10 minutes by car or taxi from Tokachi Obihiro Airport. A short distance, but before flights allow for road conditions and procedures.', items: ['Budget separate time for rental pickup/return.', 'Consider the car or airport lockers for large luggage.', 'Check flight info in winter or bad weather.'] },
      },
      routes: { eyebrow: 'ROUTE GUIDE', title: 'From three starting points.', text: 'Times vary with weather, traffic, and road conditions. Especially in winter, allow more than the numbers suggest.', cards: [
        { kicker: 'FROM OBIHIRO', title: 'From Obihiro Station / city', text: 'About 30 minutes south by car. By bus, take Tokachi Bus route 60 (Hiroo Line) from Obihiro Station terminal, get off at "Kofuku", then walk about 5 minutes.', note: 'If by bus, check the return service first.' },
        { kicker: 'FROM AIRPORT', title: 'From Tokachi Obihiro Airport', text: 'About 10 minutes by car or taxi. Easy to add as your first sight after landing or last stop before departure.', note: 'Plan including luggage, check-in, and rental return times.' },
        { kicker: 'FROM NAKASATSUNAI', title: 'From Nakasatsunai', text: 'On the way back toward Obihiro from Route 236, you can stop by. Combine with a road station or farm restaurant for a half-day southern Tokachi route.', note: 'Check each facility’s hours and closed days separately.' },
      ] },
      atStation: { eyebrow: 'AT THE STATION', title: 'So you don’t get lost on arrival.', text: 'Kofuku is a compact sight. Knowing the layout of the address, parking, and bus stop in advance brings peace of mind.', addressLabel: 'ADDRESS', copy: 'Copy address', mapApp: 'Plan route in maps app ↗', copyNote: 'Follow on-site signs, restricted areas, and parking guidance.', busLabel: 'BUS CHECK', busTitle: 'Tokachi Bus route 60 · Hiroo Line', busText: 'Timetables are revised; this site does not show fixed times. Once you set your visit date, check outbound and return on the same timetable.', busLink: 'Check the latest Tokachi Bus info ↗' },
      map: { eyebrow: 'LOCATION MAP', title: 'Locate Kofuku Station on the map.', text: 'Check its position relative to Obihiro city, Tokachi Obihiro Airport, and Route 236, then choose a route by your mode of travel.' },
      hours: { eyebrow: 'HOURS & PARKING', title: 'About visiting hours and parking.', text: 'The outdoor area can basically be visited any time. Shop and rest-facility hours vary by season and weather.', items: [
        { label: 'Outdoor area', value: 'Nearly all day', note: 'Visit in daylight' },
        { label: 'Shop · snacks', value: 'Varies by season', note: 'Often shorter in winter' },
        { label: 'Parking', value: 'Free · 36 spaces', note: 'Incl. 5 bus spaces' },
      ] },
      shopHours: { eyebrow: 'SHOP HOURS', title: 'Shop & snack hours (guide)', text: 'Unlike the open grounds, the shop and snack counters keep seasonal hours. The figures below are a guide from the official Hokkaido tourism site and others.', rows: [
        { label: 'Summer (guide)', value: '9:00–17:30', note: 'May extend in peak season' },
        { label: 'Winter (guide)', value: '9:30–15:00', note: 'Shorter by weather or day' },
      ], source: 'Hokkaido Tourism Official Site HOKKAIDO LOVE!', checked: 'October 2026', caution: 'Follow on-site notices.' },
    },
    food: {
      hero: { eyebrow: 'FOOD', title: 'Local food and souvenirs.', intro: 'From snacks on the station grounds to farm restaurants in Nakasatsunai and meals at the airport—stops to enjoy Tokachi flavors centered on Kofuku Station.', image: '/images/bell-1440.webp', imageSmall: '/images/bell-640.webp', alt: 'The Bell of Happiness and the path to the Kofuku station house' },
      intro: 'The area around Kofuku Station is rural. Combine the snacks you can buy at the station, a farm restaurant a few minutes away by car, the Nakasatsunai road station, and airport meals for a day full of Tokachi flavor.',
    },
    faq: {
      hero: { eyebrow: 'FAQ', title: 'Common questions before visiting Kofuku Station.', intro: 'Fees, hours, transport, winter clothing—we kept the things people wonder about before a trip as brief as possible.', image: '/images/bell-1440.webp', imageSmall: '/images/bell-640.webp', alt: 'The Bell of Happiness and the path to the Kofuku station house' },
      noteTitle: 'Please check the latest info before visiting.',
      noteText: 'Local hours, transit, snow, and events can change. Use this page as an entry point for planning, and prioritize on-site notices and the latest operator guidance on the day.',
    },
    ticket: {
      hero: { eyebrow: 'TICKET', title: 'Commemorative tickets of Kofuku.', intro: 'The "Aikoku to Kofuku" ticket became a symbol of good wishes. Here is where to buy it and what types exist.', image: '/images/interior-1440.webp', imageSmall: '/images/interior-480.webp', alt: 'Inside Kofuku Station, covered in pink wish tags' },
      intro: 'Commemorative tickets are sold at the shops in front of both Kofuku Station and Aikoku Station. The City of Obihiro has no official online shop, so buy them at the local shops.',
      blocks: [
        { number: '01', title: 'Where to buy', text: 'The shop in front of Kofuku Station and the one in front of Aikoku Station both sell commemorative tickets, according to their local opening status.' },
        { number: '02', title: 'What types exist', text: 'Besides the "Aikoku to Kofuku" ticket, there are hard-ticket style cards with backing paper, admission-certificate style, and more. Designs may differ by shop.' },
        { number: '03', title: 'Can I buy online?', text: 'There is no official online shop run by the City of Obihiro. Be cautious of third-party sites offering mail or online purchases; we recommend buying at the local shops.' },
        { number: '04', title: 'About prices', text: 'Prices vary by ticket type and season. Confirm the exact price on the notices at the Kofuku and Aikoku station shops.' },
      ],
      noteTitle: 'Note from an unofficial guide',
      noteText: 'KofukuEki.com is an unofficial visitor guide. Ticket types, prices, and availability change, so check the local shops or the official City of Obihiro information for the latest details.',
    },
    aikoku: {
      hero: { eyebrow: 'AIKOKU TO KOFUKU', title: 'From Aikoku to Kofuku.', intro: 'A half-day model route that traces "from the land of love to happiness" in real scenery. See how to tour Aikoku and Kofuku stations.', image: '/images/station-1440.webp', imageSmall: '/images/station-960.webp', alt: 'The wooden station building of Kofuku Station seen from the front' },
      blocks: [
        { number: '01', title: 'What is Aikoku Station', text: 'A former JNR Hiroo Line station, now maintained as a transport memorial hall. It displays railway materials, old tickets, and a steam locomotive, and is a common base paired with Kofuku Station.' },
        { number: '02', title: 'Distance between the two stations', text: 'From Aikoku Station to Kofuku Station is about a 15-minute drive. The distance is short, but the phrase linking the two stations symbolizes this place.' },
        { number: '03', title: 'Origin of the commemorative ticket', text: 'After 1973, the "Aikoku to Kofuku" commemorative ticket spread widely. You can pick up the real ticket at the shop in front of Kofuku Station.' },
      ],
      course: { eyebrow: 'MODEL COURSE', title: 'Half a day, from Aikoku to Kofuku.', text: 'A route from central Obihiro that efficiently visits railway memory and wishful scenery.', steps: [
        { kicker: 'START', title: 'Obihiro city · Obihiro Station', text: 'Head south by rental car or taxi. The plains along the way are classic Tokachi scenery.', note: 'About 30 min from Obihiro Station' },
        { kicker: 'STOP 1', title: 'Aikoku Station', text: 'Feel the railway memory at the memorial hall and learn the ticket’s origin.', note: 'Daily Mar–Nov, Sundays only Dec–Feb' },
        { kicker: 'STOP 2', title: 'Kofuku Station', text: 'Tour the building, platform, and preserved train, and look at the wish tags.', note: 'About 15 min from Aikoku Station' },
        { kicker: 'STOP 3', title: 'Kofuku Shrine (optional)', text: 'About a 15-minute walk from Kofuku Station. A quiet walk that fits the theme.', note: 'Allow on-site time' },
        { kicker: 'RETURN', title: 'Toward Nakasatsunai · Airport', text: 'Continue to lunch toward Nakasatsunai, or stop by Obihiro Airport.', note: 'Choose by itinerary' },
      ] },
      aikokuInfo: { eyebrow: 'AIKOKU STATION', title: 'Aikoku Station basics', text: 'Knowing this alongside Kofuku Station deepens the story.', items: ['Free admission (transport memorial hall)', 'Open daily Mar–Nov, Sundays only Dec–Feb', 'Outdoor trains may be unavailable to view in winter', 'About a 15-minute drive from Aikoku to Kofuku Station'] },
    },
    photos: {
      hero: { eyebrow: 'PHOTOS', title: 'Kofuku Station in photos.', intro: 'The station house, wish tags, platform, diesel cars, and the Bell of Happiness—see its changing expressions by season.' },
    },
    credits: {
      hero: { eyebrow: 'CREDITS', title: 'About photos and sources.', intro: 'We list the credits for photos used on this site and the sources of our information.' },
      sections: [
        { title: 'About photos', body: 'Images are self-produced/photographed or use materials whose terms we have confirmed. Commercial use and redistribution are not permitted.' },
        { title: 'Information sources', body: 'Figures for hours, transit, and statistics are based on publicly available government, tourism, and transit information. Please confirm the latest on each official site.' },
      ],
    },
    privacy: {
      hero: { eyebrow: 'PRIVACY', title: 'Privacy policy.', intro: 'This explains access analytics and how information is handled on this site.' },
      sections: [
        { title: 'Access analytics', body: 'This site uses Google Analytics for anonymous access analysis. IP addresses are anonymized and not used to identify individuals.' },
        { title: 'Ads and cookies', body: 'Cookies may be used for access analytics. You can disable them in your browser settings.' },
        { title: 'Contact', body: 'This is an unofficial guide. For local operations and official information, please see the official sites of the City of Obihiro and each transport operator.' },
      ],
    },
  },
  ko: {
    home: {
      heroEyebrow: '구 국철 히로오 선 · 오비히로시, 홋카이도',
      heroTitleMain: '행복역 터 (옛 행복역)',
      heroTitleLines: ['사랑의 나라에서,', '행복으로.'],
      heroSubLines: ['열차가 멈춘 뒤에도, 소망은 여기에 계속 도착합니다.', '행복역의 이야기와 도카치 여행을 위한 조용한 안내서.'],
      cta1: '교통편 보기',
      cta2: '행복역 알아보기',
      story: { eyebrow: 'STORY', title: '작은 역 이름이, 전국의 사람을 행복으로 이끌었습니다.', text: '행복역은 구 국철 히로오 선에 있던 작은 무인역입니다. 1970년대, 「아이쿠에서 행복으로」라는 말과 기념 승차권이 일본 전역으로 퍼지며 역은 하나의 소망의 장소가 되었습니다.', readMore: '이야기 자세히 보기' },
      highlights: { eyebrow: 'THREE SCENES', title: '행복역에서 만나는 세 가지 풍경.', text: '역사에 남은 말들, 철도의 시간, 그리고 여정의 변곡점을 알리는 종. 천천히 걸으면 장소의 표정이 조금씩 바뀝니다.', pointLink: '관람 포인트' },
      plan: {
        eyebrow: 'PLAN YOUR VISIT',
        title: '여정에, 행복을 한 정거장.',
        text: '공항과 가깝고 아이쿠 역·나카사츠나이와도 쉽게 묶을 수 있는 행복역. 이동 수단에 맞춰 무리 없는 즐기는 법을 고르세요.',
        cards: [
          { kicker: '01 · ARRIVAL', titleLines: ['공항에서', '첫 행복으로'], text: '도카치 오비히로 공항에서 차로 약 10분. 도착 후 들렀서 오비히로 시내로 향하는 짧은 코스.', note: '권장: 60–90분' },
          { kicker: '02 · STORY', titleLines: ['아이쿠에서', '행복으로'], text: '아이쿠 역에서 철도의 기억에 닿고 행복역으로. 「사랑의 나라에서 행복으로」라는 말을 실제 풍경으로 따라가는 코스.', note: '권장: 2–3시간' },
          { kicker: '03 · TOKACHI', titleLines: ['행복 너머', '도카치 맛을 돌다'], text: '행복역에서 나카사츠나이로 발을 넓혀 농가 레스토랑과 도로 휴게소에서 도카치 맛을 즐기는 반일 코스.', note: '권장: 3–5시간' },
        ],
      },
      beforeYouGo: { eyebrow: 'BEFORE YOU GO', title: '방문하기 전, 알아두면 좋은 것들.', items: ['야외 중심이라 도카치의 바람·눈·햇빛에 맞춰 옷을 준비하세요.', '버스는 운행 횟수가 적어 왕복 시각을 먼저 정하세요.', '매점 영업은 계절과 날씨에 따라 바뀌니 현장 안내를 우선하세요.'], cta1: '교통 안내', cta2: '자주 묻는 질문' },
      faqSection: { eyebrow: 'FAQ', title: '자주 묻는 질문', text: '방문 전 자주 헷갈리는 포인트를 짧게 정리했습니다.', viewAll: '모든 질문 보기' },
      cta: { kicker: 'NEXT STOP', title: '다음 여정에, 행복역을.', text: '주소·주차장·버스 정류장·공항에서 오는 길을 한 페이지에 정리했습니다.', button: '교통편 보기' },
    },
    about: {
      hero: { eyebrow: 'ABOUT', title: '행복역의 이야기.', intro: '지명의 유래에서 「사랑의 나라에서 행복으로」의 전파, 폐선 후의 정비까지. 작은 역이 어떻게 소망의 장소가 되었는지 따라가 봅니다.', image: '/images/station-1440.webp', imageSmall: '/images/station-960.webp', alt: '정면에서 본 행복역의 목조 역사' },
      sections: [
        { eyebrow: 'ORIGIN', title: '지명과 역의 시작', body: '「행복」이라는 지명은 아이누어 지명을 의역한 것이라 전해집니다. 1956년, 구 국철 히로오 선의 작은 역으로 행복역이 개업했습니다.' },
        { eyebrow: 'PHRASE', title: '「사랑의 나라에서 행복으로」', body: '1973년 NHK 《신일본기행》에서 소개된 것을 계기로, 아이쿠 역에서 행복역 행 기념 승차권이 화제가 되었습니다. 이 말은 일본 전국의 연인과 가족이 소망을 맡기는 문구가 되었습니다.' },
        { eyebrow: 'AFTER CLOSURE', title: '폐선 후, 그리고 지금', body: '1987년 히로오 선 폐선과 함께 역으로서의 임무를 마쳤지만 지명과 이야기는 남았습니다. 2013년 역사가 재건되어 교통 공원·교류 광장으로 연간 20만 명 이상이 찾는 관광지가 되었습니다.' },
      ],
    },
    guide: {
      hero: { eyebrow: 'GUIDE', title: '행복역 둘러보기.', intro: '역사에 남은 소망 카드, 목조 승강장, 주황색 디젤 카, 그리고 행복의 종. 방문했을 때 발길을 멈추고 싶은 세 가지 풍경을 안내합니다.', image: '/images/interior-1440.webp', imageSmall: '/images/interior-480.webp', alt: '분홍색 소망 카드로 덮인 행복역 내부' },
      blocks: [
        { number: '01', title: '소망으로 장식된 역사', text: '천장까지 이어지는 연분홍 종이. 여행객이 남긴 메시지를 올려다보며 조용한 시간을 보내세요.' },
        { number: '02', title: '목조 승강장과 키하 22', text: '옛 히로오 선을 떠올리게 하는 승강장에 늘어선 주황색 디젤 카. 철도 팬은 물론 사진을 찍는 이들에게도 인기 풍경입니다.' },
        { number: '03', title: '행복의 종', text: '역사로 이어지는 작은 길에 선 종. 소중한 이와의 기념이나 여정의 변곡점에 천천히 울려보세요.' },
      ],
    },
    access: {
      hero: { eyebrow: 'ACCESS', title: '행복역 오는 길.', intro: '오비히로 시내에서 남쪽으로 약 30분. 도카치 오비히로 공항에서 약 10분. 차가 편리하지만 노선 버스로도 갈 수 있습니다.', image: '/images/hero-1440.webp', imageSmall: '/images/hero-960.webp', alt: '넓은 하늘과 초원 사이에 선 행복역' },
      introCards: [['위치', '오비히로시 행복초', '동1선 161'], ['오비히로 시내', '차로 약30분', '도로 상황에 따라 변동'], ['오비히로 공항', '차로 약10분', '도착·출발일에 편리'], ['주차장', '무료·36면', '대형 버스 5면 포함']],
      choose: { eyebrow: 'CHOOSE YOUR WAY', title: '이동 수단으로 고르기.', text: '아래 버튼으로 이동 수단을 바꾸면 방문 전 확인할 포인트가 바뀝니다.', tabs: [{ key: 'car', label: '승용차·렌터카' }, { key: 'bus', label: '노선 버스' }, { key: 'airport', label: '공항에서' }] },
      travelModes: {
        car: { kicker: 'BY CAR', title: '가장 자유롭고 주변도 돌기 쉬운 방법.', body: '오비히로 시내에서 약 30분. 행복역 이후 아이쿠 역·나카사츠나이·공항으로 이어지기 좋고, 겨울에도 차에 방한복을 준비할 수 있습니다.', items: ['무료 주차장: 승용차와 대형 버스 합쳐 36면.', '겨울에는 적설·결빙·눈보라를 대비해 여유 있게.', '카 내비는 주소나 좌표를 입력하세요.'] },
        bus: { kicker: 'BY BUS', title: '차 없이도, 행복으로.', body: '오비히로 역 버스 터미널에서 도카치 버스 60번(히로오 선)을 타고 「행복」 정류장에서 내린 뒤 도보 약 5분. 운행 횟수가 적어 계획성이 필요합니다.', items: ['왕복을 반드시 함께 확인하세요.', '지연과 날씨를 생각해 돌아오는 한 정거장 앞도 파악하세요.', '정류장에서부터는 걷기 편한 신발을 추천합니다.'] },
        airport: { kicker: 'FROM AIRPORT', title: '도카치의 첫 번째, 또는 마지막 정거장.', body: '도카치 오비히로 공항에서 차·택시로 약 10분. 거리는 짧지만 탑승 전 도로 상황과 수속 시간을 포함해 여유 있게 가세요.', items: ['렌터카 수령·반납 시간을 별도로 확보하세요.', '큰 짐은 차 안이나 공항 사물함을 이용을 검토하세요.', '겨울·악천후 시 항공편 정보도 확인하세요.'] },
      },
      routes: { eyebrow: 'ROUTE GUIDE', title: '세 가지 출발점에서.', text: '시간은 날씨·정체·도로 상황에 따라 바뀝니다. 특히 겨울에는 수치보다 여유를 우선하세요.', cards: [
        { kicker: 'FROM OBIHIRO', title: '오비히로 역·시내에서', text: '차로 남쪽으로 약 30분. 버스는 오비히로 역 버스 터미널에서 도카치 버스 60번(히로오 선)을 타고 「행복」에서 내린 뒤 도보 약 5분입니다.', note: '버스 이용 시 돌아오는 편을 먼저 확인하세요.' },
        { kicker: 'FROM AIRPORT', title: '도카치 오비히로 공항에서', text: '차·택시로 약 10분. 항공편 도착 후 첫 관광지나 출발 전 마지막 경유 정차로 넣기 좋습니다.', note: '짐·탑승 수속·렌터카 반납 시간을 포함해 계획하세요.' },
        { kicker: 'FROM NAKASATSUNAI', title: '나카사츠나이 방면에서', text: '국도 236호 주변에서 오비히로 방향으로 돌아오는 길에 들를 수 있습니다. 도로 휴게소나 농가 레스토랑과 함께 반일 도카치 남부 코스로.', note: '각 시설의 영업 시간과 휴무일을 개별 확인하세요.' },
      ] },
      atStation: { eyebrow: 'AT THE STATION', title: '도착 후 헤매지 않도록.', text: '행복역은 콤팩트한 관광지입니다. 주소·주차장·버스 정류장의 위치 관계를 미리 파악해 두면 안심입니다.', addressLabel: 'ADDRESS', copy: '주소 복사', mapApp: '지도 앱에서 경로 검색 ↗', copyNote: '현장 안내판·출입 금지 표시·주차 유도를 우선하세요.', busLabel: 'BUS CHECK', busTitle: '도카치 버스 60번·히로오 선', busText: '시각표는 개정되므로 이 사이트는 고정 표시하지 않습니다. 방문일을 정한 뒤 같은 시각표로 왕복을 확인하세요.', busLink: '도카치 버스 최신 안내 보기 ↗' },
      map: { eyebrow: 'LOCATION MAP', title: '지도로 행복역 확인하기.', text: '오비히로 시내, 도카치 오비히로 공항, 국도 236호와의 위치 관계를 확인하고 이동 수단에 맞춰 경로를 고르세요.' },
      hours: { eyebrow: 'HOURS & PARKING', title: '관람 시간과 주차장에 대하여.', text: '야외 관광 구역은 기본적으로 언제든 방문할 수 있습니다. 매점과 휴게 시설은 계절과 날씨에 따라 바뀝니다.', items: [
        { label: '야외 구역', value: '거의 종일', note: '낮 시간대 방문 권장' },
        { label: '매점·간식', value: '계절별 변동', note: '겨울에는 짧아지는 경향' },
        { label: '주차장', value: '무료·36면', note: '대형 버스 5면 포함' },
      ] },
      shopHours: { eyebrow: 'SHOP HOURS', title: '매점·간식 영업 시간 (참고)', text: '개방된 야외 구역과 달리 매점과 간식은 계절에 따라 영업합니다. 아래는 홋카이도 관광 공식 사이트 등이 제시하는 참고값입니다.', rows: [
        { label: '여름 (참고)', value: '9:00–17:30', note: '성수기에는 연장될 수 있음' },
        { label: '겨울 (참고)', value: '9:30–15:00', note: '날씨·요일에 따라 단축' },
      ], source: '홋카이도 관광 공식 사이트 HOKKAIDO LOVE!', checked: '2026년 10월', caution: '현장 안내를 우선 확인하세요.' },
    },
    food: {
      hero: { eyebrow: 'FOOD', title: '주변 맛집과 기념품.', intro: '역 구내 간식부터 나카사츠나이 농가 레스토랑, 공항 식사까지. 행복역을 중심으로 도카치 맛을 즐길 수 있는 거점을 정리했습니다.', image: '/images/bell-1440.webp', imageSmall: '/images/bell-640.webp', alt: '행복의 종과 행복역사로 이어지는 길' },
      intro: '행복역 주변은 농촌 지역입니다. 역에서 살 수 있는 간식과 차로 수 분 거리의 농가 레스토랑, 나카사츠나이 도로 휴게소, 공항 식사를 조합하면 도카치 풍미 가득한 하루가 됩니다.',
    },
    faq: {
      hero: { eyebrow: 'FAQ', title: '행복역을 가기 전, 자주 묻는 질문.', intro: '요금, 시간, 교통, 겨울 복장. 여행 전 궁금한 것을 될 수 있는 한 간단히 정리했습니다.', image: '/images/bell-1440.webp', imageSmall: '/images/bell-640.webp', alt: '행복의 종과 행복역사로 이어지는 길' },
      noteTitle: '방문 전 최신 정보를 확인하세요.',
      noteText: '현지 영업·교통·적설·행사 등은 변할 수 있습니다. 이 페이지는 여행 계획의 입구로 활용하고, 당일에는 현장 안내와 교통 사업자 최신 안내를 우선하세요.',
    },
    ticket: {
      hero: { eyebrow: 'TICKET', title: '행복역의 기념 승차권.', intro: '“아이쿠에서 행복으로”를 상징하는 기념 승차권. 어디서 사고 어떤 종류가 있는지 정리했습니다.', image: '/images/interior-1440.webp', imageSmall: '/images/interior-480.webp', alt: '분홍색 소원 카드로 덮인 행복역 내부' },
      intro: '행복역과 아이쿠 역의 각 역 앞 매점에서 기념 승차권을 판매합니다. 오비히로시 공식 쇼핑 사이트는 없으니 현장 매점에서 구매하세요.',
      blocks: [
        { number: '01', title: '어디서 사나', text: '행복역 앞 매점과 아이쿠 역 앞 매점 모두 기념 승차권을 취급하며, 현지 영업 상황에 맞춰 판매합니다.' },
        { number: '02', title: '어떤 종류가 있나', text: '“아이쿠→행복” 기념 승차권 외에 장지가 있는 하드권 풍, 입장 증명서형 등 여러 종류가 있습니다. 디자인은 점포에 따라 다를 수 있습니다.' },
        { number: '03', title: '온라인 구매가 가능한가', text: '오비히로시가 운영하는 공식 쇼핑 사이트는 없습니다. 우편·온라인 구매를 내세우는 제3자 사이트는 주의하세요. 현장 매점 구매를 권장합니다.' },
        { number: '04', title: '가격은', text: '승차권 종류와 시기에 따라 다릅니다. 정확한 가격은 행복역·아이쿠 역 매점의 안내를 확인하세요.' },
      ],
      noteTitle: '비공식 가이드 안내',
      noteText: 'KofukuEki.com은 행복역의 비공식 관광 가이드입니다. 기념 승차권의 종류·가격·판매 상황은 변하므로 최신 정보는 현장 매점이나 오비히로시 공식 정보를 확인하세요.',
    },
    aikoku: {
      hero: { eyebrow: 'AIKOKU TO KOFUKU', title: '아이쿠에서 행복으로.', intro: '“사랑의 나라에서 행복으로”를 실제 풍경으로 걷는 반나절 모델 코스. 아이쿠 역과 행복역을 어떻게 둘러보는지 소개합니다.', image: '/images/station-1440.webp', imageSmall: '/images/station-960.webp', alt: '정면에서 본 행복역의 목조 역사' },
      blocks: [
        { number: '01', title: '아이쿠 역이란', text: '구 일본국유철도 히로오 선의 역으로, 현재는 교통 기념관으로 정비되어 있습니다. 철도 자료와 옛 승차권, 증기 기관차 등이 전시되며 행복역과 함께 찾는 주요 거점입니다.' },
        { number: '02', title: '두 역의 거리', text: '아이쿠 역에서 행복역까지는 자동차로 약 15분. 거리는 짧지만 두 역을 잇는 말이 이곳을 상징합니다.' },
        { number: '03', title: '기념 승차권의 유래', text: '1973년 이후 “아이쿠→행복” 기념 승차권이 널리 퍼졌습니다. 행복역 앞 매점에서 실물을 받을 수 있습니다.' },
      ],
      course: { eyebrow: 'MODEL COURSE', title: '반나절, 아이쿠에서 행복으로.', text: '오비히로 시내를 기점으로 철도의 기억과 소원 풍경을 효율적으로 도는 코스입니다.', steps: [
        { kicker: 'START', title: '오비히로 시내·오비히로역', text: '렌터카나 택시로 남쪽으로. 길가에는 도카치 특유의 평야가 펼쳐집니다.', note: '오비히로역에서 약 30분' },
        { kicker: 'STOP 1', title: '아이쿠 역', text: '교통 기념관에서 철도의 기억을 느끼고 기념 승차권의 유래를 압니다.', note: '3–11월 매일, 12–2월은 일요일만' },
        { kicker: 'STOP 2', title: '행복역', text: '역사·승강장·보존 차량을 둘러보고 소원 카드를 봅니다.', note: '아이쿠 역에서 약 15분' },
        { kicker: 'STOP 3', title: '행복신사(선택)', text: '행복역에서 도보 약 15분. 주제에 맞는 조용한 산책에 좋습니다.', note: '현장 시간을 여유 있게' },
        { kicker: 'RETURN', title: '나카사츠나이·공항으로', text: '나카사츠나이 방면 점심이나 오비히로 공항 경유로 이어집니다.', note: '일정에 따라 선택' },
      ] },
      aikokuInfo: { eyebrow: 'AIKOKU STATION', title: '아이쿠 역 기본 정보', text: '행복역과 함께 알면 이야기가 더 깊어집니다.', items: ['입장 무료(교통 기념관)', '3–11월 매일 개관, 12–2월은 일요일만', '겨울에는 야외 차량 관람이 불가할 수 있음', '아이쿠 역에서 행복역까지 자동차로 약 15분'] },
    },
    photos: {
      hero: { eyebrow: 'PHOTOS', title: '사진으로 보는 행복역.', intro: '역사, 소망 카드, 승강장, 디젤 카, 행복의 종. 계절별 표정을 사진으로 둘러봅니다.' },
    },
    credits: {
      hero: { eyebrow: 'CREDITS', title: '사진과 출처에 대하여.', intro: '이 사이트에 사용한 사진 크레딧과 정보 출처를 정리합니다.' },
      sections: [
        { title: '사진에 대하여', body: '이미지는 직접 제작·촬영했거나 이용 조건을 확인한 소재를 사용합니다. 상업적 이용과 재배포는 할 수 없습니다.' },
        { title: '정보 출처', body: '영업 시간·교통·통계 등 수치는 공개된 행정·관광·교통 정보를 바탕으로 합니다. 최신 정보는 각 공식 사이트에서 확인하세요.' },
      ],
    },
    privacy: {
      hero: { eyebrow: 'PRIVACY', title: '개인정보 처리방침.', intro: '이 사이트의 접속 분석과 정보 취급에 대하여 설명합니다.' },
      sections: [
        { title: '접속 분석', body: '이 사이트는 Google Analytics를 사용해 익명의 접속 분석을 합니다. IP 주소는 익명화되며 개인을 식별하는 용도로 사용하지 않습니다.' },
        { title: '광고와 Cookie', body: '접속 분석을 위해 Cookie를 사용할 수 있습니다. 브라우저 설정에서 비활성화할 수 있습니다.' },
        { title: '문의', body: '이 사이트는 비공식 가이드입니다. 현지 운영과 공식 정보는 오비히로시 및 각 교통 사업자의 공식 사이트를 확인하세요.' },
      ],
    },
  },
};
