// translations.ts

export type Language = 'en' | 'ja';

export interface PriceItem {
  label: string;
  value: string;
}

export interface TranslationData {
  nav: {
    concept: string;
    destinations: string;
    plans: string;
    contact: string;
  };
  hero: {
    subtitle1: string;
    subtitle2: string;
    quote: string;
    scroll: string;
  };
  concept: {
    label: string;
    title: string;
    subtitle: string;
    text1: string;
    text2: string;
    cta: string;
  };
  destinations: {
    label: string;
    title: string;
    cta: string;
    ctaTitle: string;
    ctaButton: string;
    items: {
      [key: string]: {
        name: string;
        description: string;
      }
    }
  };
  plans: {
    label: string;
    title: string;
    intro: string;
    cta: string;
    items: {
      [key: string]: {
        name: string;
        price: string;
        prices?: PriceItem[];
        description: string;
        details?: string;
        features: string[];
      }
    };
    common: {
      title: string;
      included: string;
      notIncluded: string;
      options: string;
    }
  };
  contact: {
    title: string;
    intro: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
    }
  };
  footer: {
    rights: string;
    description: string;
    sitemap: string;
    privacyPolicy: string;
    company: {
      title: string;
      rep: string;
      industry: string;
      established: string;
      employees: string;
      address: string;
      medical: string;
    }
  };
  // Pages
  conceptPage: {
    title: string;
    intro: string;
    connectionTitle: string;
    connectionText1: string;
    connectionText2: string;
    valuesTitle: string;
    values: { title: string; desc: string }[];
  };
  destinationsPage: {
    label: string;
    title: string;
    highlightsLabel: string;
    exploreButton: string;
  };
  plansPage: {
    title: string;
    subtitle: string;
    bespokeTitle: string;
    bespokeText: string;
    bespokeCta: string;
  };
  contactPage: {
    label: string;
    title: string;
    intro: string;
    officeTitle: string;
    directTitle: string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      plan: string;
      planPlaceholder: string;
      message: string;
      submit: string;
    }
  };
  privacyPolicyPage: {
    title: string;
    updated: string;
    sections: {
      title: string;
      content: string;
    }[];
  }
}

export const translations: Record<Language, TranslationData> = {
  en: {
    nav: {
      concept: 'About ENN',
      destinations: 'Areas',
      plans: 'Plans',
      contact: 'Contact',
    },
    hero: {
      subtitle1: 'Luxury Guides',
      subtitle2: 'Tokyo, Japan',
      quote: '"Experience the city through the eyes of a local friend."',
      scroll: 'Scroll',
    },
    concept: {
      label: 'About ENN',
      title: 'Not just a guide.',
      subtitle: 'A local friend.',
      text1: 'ENN is a new sensation of travel, offering the perspective and experience of a local friend in Tokyo. For the precious "4 hours" of your trip, which you might visit only once in a lifetime, a young local who knows Tokyo inside out will guide you flexibly according to your wishes—shopping, photography, dining, or cultural experiences.',
      text2: 'We call this connection between people "ENN" (Edge/Fate). We hope you take this word back to your country and spread the value of human resonance and the preciousness of each moment born there.',
      cta: 'View Plans',
    },
    destinations: {
      label: '4 Areas',
      title: 'Select Your Area',
      cta: 'View All Locations',
      ctaTitle: 'Your custom journey awaits.',
      ctaButton: 'View Plans',
      items: {
        shibuya: {
          name: 'SHIBUYA',
          description: 'The symbol of Tokyo\'s "scene." The chaos of culture and cutting-edge trends gathering at once creates a "busyness" that feels like a near-future reality.'
        },
        ginza: {
          name: 'GINZA',
          description: 'A high-end district known for luxury brands and select shops. From historic establishments to fine dining, it offers a chic experience of the highest quality.'
        },
        asakusa: {
          name: 'ASAKUSA',
          description: 'A town where history and tradition remain vibrant. Senso-ji Temple and Kaminarimon are iconic. Enjoy street food, rickshaw rides, or walking in Yukata/Kimono.'
        },
        akihabara: {
          name: 'AKIHABARA',
          description: 'The symbol of Japanese culture. Anime, manga, cameras, and "Otaku" communities. Experience "Japaneseness" like cat cafes and maid cafes.'
        }
      }
    },
    plans: {
      label: 'Plans & Pricing',
      title: 'The Collection',
      intro: 'From casual exploration to full VIP customization.',
      cta: 'Inquire Now',
      items: {
        'plan-a': {
          name: 'Single Area Experience',
          price: '$300 / person',
          prices: [
            { label: '1 Person', value: '$300' },
            { label: '2 People', value: '$500' },
            { label: '3 People', value: '$700' },
            { label: '4 People', value: '$800' },
            { label: '5 People', value: '$1,000' }
          ],
          description: 'A casual 4-hour plan focusing on one area.',
          details: '1 Area (e.g., Shibuya, Asakusa, Ginza), food & cafe, walking, local insights, translation, photo/short video.',
          features: ['4 Hours', '1 Area', 'Walking', 'Photography']
        },
        'plan-b': {
          name: '2 Area Experience',
          price: '$400 / person',
          prices: [
            { label: '1 Person', value: '$400' },
            { label: '2 People', value: '$700' },
            { label: '3 People', value: '$900' },
            { label: '4 People', value: '$1,000' },
            { label: '5 People', value: '$1,200' }
          ],
          description: 'A flexible 4-hour plan covering two areas.',
          details: '2 Areas (e.g., Shibuya + Ginza), food, walking, local experiences, translation, photo/short video, cultural support.',
          features: ['4 Hours', '2 Areas', 'Flexible', 'Translation Support']
        },
        'plan-c': {
          name: 'Sushi Experience',
          price: '$600 / person',
          prices: [
            { label: '1 Person', value: '$600' }
          ],
          description: 'A special plan to experience sushi culture. (No pair discount)',
          details: 'Sushi making or cultural experience, English explanation/interpretation, photo/short video. (Note: Food costs may apply separately)',
          features: ['Sushi Making/Culture', 'English Support', 'Photo/Video']
        },
        'plan-d': {
          name: '1 Day Plan',
          price: 'Custom',
          description: 'Full day experience (Max 12H) from morning to night.',
          details: 'Up to 12 hours, multi-area, fully custom, photography, translation, full support.',
          features: ['Max 12 Hours', 'Multi-Area', 'Fully Custom', 'All Inclusive Support']
        },
        'plan-f': {
          name: 'VIP Experience',
          price: '$2,000~',
          description: 'Exclusive special experiences difficult even for locals.',
          details: 'Tsukiji special access, high culture experience, dedicated documentation (photo/video). Conditions apply.',
          features: ['Tsukiji Special', 'High Culture', 'Dedicated Documentation']
        }
      },
      common: {
        title: 'Common Information',
        included: 'Included: English-speaking local guide, private experience, photo/short video shooting, translation/cultural support, ENN emergency support.',
        notIncluded: 'Not Included: Food & drinks, transportation, facility entrance fees, personal purchases.',
        options: 'Option: Extension +$100 per hour (until 23:00).'
      }
    },
    contact: {
      title: 'Begin Your Journey',
      intro: 'Tell us about your dates and interests. We will curate a proposal for you.',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Interest',
        message: 'Message',
        submit: 'Send Inquiry'
      }
    },
    footer: {
      rights: 'All Rights Reserved.',
      description: 'We curate the intangible. A collection of moments, scents, and conversations that define the soul of Tokyo.',
      sitemap: 'Sitemap',
      privacyPolicy: 'Privacy Policy',
      company: {
        title: 'Company Information',
        rep: 'Representative: RUTA MORII',
        industry: 'ENN Inc.',
        established: 'Established: March 2026',
        employees: 'Employees: TBD',
        address: 'Address: 3F Kojimachi Site Bldg, 6-2-1 Kojimachi, Chiyoda-ku, Tokyo 102-0083',
        medical: 'Affiliated Medical Institution: Okusawa Clinic (Complete English support available)'
      }
    },
    conceptPage: {
      title: 'Philosophy',
      intro: '"We are not travel agents. We are curators of serendipity. Architects of memory. Your first friend in a city of 37 million strangers."',
      connectionTitle: 'The Connection',
      connectionText1: 'Traditional tourism observes from a distance. ENN immerses you in the current. Our guides are not professional historians reciting scripts; they are Tokyo\'s creatives, designers, and thinkers. They show you their Tokyo—the hidden jazz kissa, the private gallery viewings, the late-night ramen shop known only to locals.',
      connectionText2: 'The name "ENN" (縁) signifies a mysterious bond. It is the fate that brings two people together at a specific moment in time. We honor this bond.',
      valuesTitle: 'Our Core Values',
      values: [
        { title: 'Authenticity', desc: 'No tourist traps. Only places we actually visit.' },
        { title: 'Intimacy', desc: 'Small groups or private only. True connection requires quiet.' },
        { title: 'Flexibility', desc: 'The city changes every minute. So do our plans.' }
      ]
    },
    destinationsPage: {
      label: 'Curated Areas',
      title: 'Destinations',
      highlightsLabel: 'Highlights:',
      exploreButton: 'Explore',
    },
    plansPage: {
      title: 'The Collection',
      subtitle: 'Beyond regular tourism. Designing the depths of Tokyo.',
      bespokeTitle: 'Bespoke Arrangements',
      bespokeText: 'For those seeking the truly extraordinary. Private jet transfers, exclusive restaurant buyouts, or after-hours museum access. Our team is capable of realizing the impossible.',
      bespokeCta: 'Contact Concierge',
    },
    contactPage: {
      label: 'Inquiries',
      title: 'Begin Your Journey',
      intro: 'Please fill out the form to request a reservation or consultation. We reply to all inquiries within 24 hours.',
      officeTitle: 'Office',
      directTitle: 'Direct',
      form: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        plan: 'Interested Plan',
        planPlaceholder: 'Select a plan...',
        message: 'Message',
        submit: 'Send Inquiry'
      }
    },
    privacyPolicyPage: {
      title: 'Privacy Policy',
      updated: 'Last Updated: February 2026',
      sections: [
        {
          title: 'Introduction',
          content: 'At ENN, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our services.'
        },
        {
          title: 'Information Collection',
          content: 'We collect information you provide directly to us, such as your name, email address, and travel preferences when you inquire about or book our services.'
        },
        {
          title: 'Use of Information',
          content: 'We use your information to provide and improve our services, communicate with you, and customize your Tokyo experience.'
        },
        {
          title: 'Data Security',
          content: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access or disclosure.'
        }
      ]
    }
  },
  ja: {
    nav: {
      concept: 'コンセプト',
      destinations: 'エリア紹介',
      plans: 'プラン一覧',
      contact: 'お問い合わせ',
    },
    hero: {
      subtitle1: 'Luxury Guides',
      subtitle2: 'Tokyo, Japan',
      quote: '「ローカルフレンドの視点で、この街を体験する。」',
      scroll: 'Scroll',
    },
    concept: {
      label: 'About ENN',
      title: 'Not just a guide.',
      subtitle: '新感覚のガイド体験',
      text1: 'ENNは、ローカルフレンドの視点と経験を、日本・東京でのガイドを通じて体感できる新感覚の事業です。一生に一度しか訪れることがないかもしれない、そんなあなたの大切で貴重な旅行の「4時間」という時間。その中で、現地言語の通じる東京を熟知した若者が、ローカルな知識と現地の人しか知らないノウハウを教えながら、あなたのやりたいプラン（ショッピング、撮影、飲み会、食事、文化体験など）を柔軟に案内します。',
      text2: 'これを日本では人と人のつながり、「縁（ENN）」という言葉で表します。この言葉をぜひあなたの国に持ち帰り、人と人がつながり共鳴することの尊さや、その場で生まれる一瞬一瞬の大切さを広めてほしい。そんなビジョンや思いを込めています。',
      cta: 'View Plans',
    },
    destinations: {
      label: '4 Areas',
      title: 'Destinations',
      cta: 'View All Locations',
      ctaTitle: 'Your custom journey awaits.',
      ctaButton: 'View Plans',
      items: {
        shibuya: {
          name: 'SHIBUYA',
          description: 'まさに東京の「シーン」の象徴。あらゆる文化や最先端が一度に集まるからこそ生まれる混沌とした「Busyさ」が、ある種の近未来を感じさせるエリア。'
        },
        ginza: {
          name: 'GINZA',
          description: '日本のハイエンドな街として知られ、高級ブランドからセレクトショップまで多彩な買い物を楽しめる街。歴史深い老舗から高級料理店まで、飲食やショッピングにおいて極上の体験ができる非常にシックな場所。'
        },
        asakusa: {
          name: 'ASAKUSA',
          description: '歴史と伝統が今もなお色濃く残る街。雷門を構える浅草寺は、正月や行事の際には日本人が押し寄せるほどの人気を誇る。屋台（出店）での食べ歩き文化も盛んで、人力車で歴史的な道を巡ったり、浴衣や着物を着て練り歩く体験も可能。'
        },
        akihabara: {
          name: 'AKIHABARA',
          description: '日本のカルチャーの象徴。アニメ、漫画、カメラなど、日本が生んだカルト的な文化の集結場所。「オタク」と呼ばれる日本人のコミュニティが集う場所としても有名で、猫カフェやアイドルカフェなど、海外ではなかなか見られない「日本らしさ」を詰め込んだ場所。'
        }
      }
    },
    plans: {
      label: 'Plans & Pricing',
      title: 'The Collection',
      intro: 'あなたのスタイルに合わせて選べる多彩なプランをご用意しています。',
      cta: 'Inquire Now',
      items: {
        'plan-a': {
          name: 'シングルエリア体験（4時間）',
          price: '1名：300ドル〜',
          prices: [
            { label: '1名', value: '300ドル' },
            { label: '2名', value: '500ドル' },
            { label: '3名', value: '700ドル' },
            { label: '4名', value: '800ドル' },
            { label: '5名', value: '1,000ドル' }
          ],
          description: '1つのエリアを中心に、カジュアルに過ごすプラン',
          details: '1エリア（例：渋谷、浅草、銀座など）、食事・カフェ・散策・会話、ローカル案内、通訳サポート、写真・短尺動画撮影',
          features: ['4 Hours', '1 Area', 'Casual', 'Photo/Video']
        },
        'plan-b': {
          name: '2エリア体験（4時間）',
          price: '1名：400ドル〜',
          prices: [
            { label: '1名', value: '400ドル' },
            { label: '2名', value: '700ドル' },
            { label: '3名', value: '900ドル' },
            { label: '4名', value: '1,000ドル' },
            { label: '5名', value: '1,200ドル' }
          ],
          description: '2つのエリアを回る、より自由度の高いプラン',
          details: '2エリア（例：渋谷＋銀座など）、食事・散策・ローカル体験、写真・短尺動画撮影、翻訳・文化サポート',
          features: ['4 Hours', '2 Areas', 'Flexible', 'Support']
        },
        'plan-c': {
          name: '寿司体験プラン',
          price: '1名：600ドル',
          prices: [
            { label: '1名', value: '600ドル' }
          ],
          description: '寿司文化を体験する特別プラン',
          details: '寿司体験（寿司作り、または寿司文化体験）、英語での説明・通訳、写真・短尺動画撮影（※寿司提供費用は別途実費が発生する場合あり）',
          features: ['Sushi Experience', 'Interpretation', 'Photo/Video']
        },
        'plan-d': {
          name: '1日貸切プラン（最大12時間）',
          price: '要相談',
          prices: [
            { label: '1組(最大4名)', value: 'カスタム料金（事前相談制）' }
          ],
          description: '朝から夜まで東京を満喫する1日フル体験',
          details: '最大12時間同行、複数エリア移動可能、完全カスタマイズ、写真・短尺動画撮影、翻訳・サポート込み',
          features: ['Max 12 Hours', 'Multi-Area', 'Fully Custom', 'Full Support']
        },
        'plan-f': {
          name: 'VIP特別体験',
          price: '2,000ドル〜',
          prices: [
            { label: '1組', value: '2,000ドル〜' }
          ],
          description: '日本人でも体験が難しい特別なプラン',
          details: '築地関連の特別体験、高度な文化体験、専用ドキュメンテーション（写真・動画撮影）。※セリ開催日など、諸条件あり',
          features: ['Exclusive', 'High Culture', 'Documentation']
        }
      },
      common: {
        title: 'Common Information',
        included: '料金に含まれるもの：英語対応のローカルガイド、プライベート体験、写真・短尺動画撮影、翻訳・文化サポート、ENNによる緊急時サポート',
        notIncluded: '料金に含まれないもの：飲食代、交通費、体験施設の入場料、個人的な購入費用',
        options: '延長：1時間 100ドル（23時まで対応可）'
      }
    },
    contact: {
      title: 'Begin Your Journey',
      intro: '日程や興味のあることをお聞かせください。あなただけのプランをご提案します。',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Interest',
        message: 'Message',
        submit: 'Send Inquiry'
      }
    },
    footer: {
      rights: '無断転載を禁じます。',
      description: '地図には載っていない東京へ。街の息吹、香り、人々との対話を通じて、この街の「本質」に触れる旅をお届けします。',
      sitemap: 'サイトマップ',
      privacyPolicy: 'プライバシーポリシー',
      company: {
        title: '会社概要',
        rep: '代表：RUTA MORII',
        industry: '株式会社ENN',
        established: '設立：2026年3月',
        employees: '従業員数：未定',
        address: '住所：〒102-0083 東京都千代田区麹町6-2-1 麹町サイトビル3F',
        medical: '提携医療機関：奥沢診療所（完全英語対応。万が一の際も、医師による迅速なサポートが可能です）'
      }
    },
    // New Pages Japanese Translations
    conceptPage: {
      title: 'Philosophy',
      intro: '「私たちは旅行代理店ではありません。記憶の建築家であり、3,700万人の他人が行き交う街で、あなたが出会う最初の友人です。」',
      connectionTitle: 'The Connection',
      connectionText1: '従来の観光は、距離を置いて眺めるものでした。ENNは、その流れの中にあなたを浸します。私たちのガイドは歴史家ではありません。東京のクリエイター、デザイナー、思想家です。彼らが知る「彼らの東京」――隠れ家的なジャズ喫茶、プライベートギャラリー、地元民しか知らない深夜のラーメン店へとご案内します。',
      connectionText2: 'ENN（縁）という名は、不思議な絆を意味します。特定の瞬間に二人を引き合わせる運命。私たちはその絆を大切にします。',
      valuesTitle: 'Our Core Values',
      values: [
        { title: 'Authenticity', desc: '観光客向けの場所ではなく、私たちが実際に通う場所へ。' },
        { title: 'Intimacy', desc: '少人数、またはプライベートのみ。真のつながりには静寂が必要です。' },
        { title: 'Flexibility', desc: '街は刻一刻と変化します。私たちのプランも同様です。' }
      ]
    },
    destinationsPage: {
      label: 'Curated Areas',
      title: 'Destinations',
      highlightsLabel: '見どころ：',
      exploreButton: '詳細を見る',
    },
    plansPage: {
      title: 'The Collection',
      subtitle: '一過性の観光では辿り着けない、東京の深層へ。',
      bespokeTitle: 'Bespoke Arrangements',
      bespokeText: '真の非日常をお求めの方へ。プライベートジェットの送迎、レストランの貸切、閉館後の美術館アクセスなど。私たちのチームは、不可能を可能にします。',
      bespokeCta: 'コンシェルジュに相談',
    },
    contactPage: {
      label: 'Inquiries',
      title: 'Begin Your Journey',
      intro: 'ご予約やご相談はこちらのフォームよりお問い合わせください。24時間以内にご返信いたします。',
      officeTitle: 'Office',
      directTitle: 'Direct',
      form: {
        firstName: '名',
        lastName: '姓',
        email: 'メールアドレス',
        plan: 'ご希望のプラン',
        planPlaceholder: 'プランを選択...',
        message: 'メッセージ',
        submit: '送信する'
      }
    },
    privacyPolicyPage: {
      title: 'Privacy Policy',
      updated: '最終更新日：2026年2月',
      sections: [
        {
          title: 'はじめに',
          content: '株式会社ENN（以下「当社」）は、お客様の個人情報の重要性を認識し、その保護に努めます。本ポリシーは、当社のサービスをご利用いただく際の情報収集、利用、および保護について説明するものです。'
        },
        {
          title: '情報の収集',
          content: '当社は、お問い合わせや予約の際に、お客様から直接提供される氏名、メールアドレス、旅行の好みなどの情報を収集します。'
        },
        {
          title: '情報の利用目的',
          content: '収集した情報は、サービスの提供、お客様との連絡、および東京での体験のカスタマイズのために利用されます。'
        },
        {
          title: 'データの安全性',
          content: '当社は、個人データへの不正アクセスや漏洩を防ぐため、適切な技術的・組織的対策を講じています。'
        }
      ]
    }
  }
};