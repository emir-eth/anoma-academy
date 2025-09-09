export const content = {
  en: [
    {
      slug: "zk-privacy",
      title: "ZK & Privacy",
      desc: "Zero‑knowledge proofs and Anoma’s privacy approach.",
      sections: [
        { h: "What is ZK?", p: "Zero‑knowledge proofs allow verification without revealing the data." },
        { h: "Anoma Usage", p: "Integrated with Namada for privacy‑preserving applications." },
        { h: "Advantage", p: "Users get security and privacy at once." }
      ],
      quiz: [
        {
          q: "Main benefit of ZK proofs?",
          options: ["Faster mining","Verification without revealing data","Automatic token minting"],
          answer: 1,
          explain: "ZK proofs let you verify without exposing the underlying data."
        }
      ]
    },
    {
      slug: "modular-blockchains",
      title: "Modular Blockchains",
      desc: "Anoma’s view on modular chains.",
      sections: [
        { h: "Why Modular?", p: "Separates consensus, execution and settlement layers." },
        { h: "Advantage", p: "Improves scalability and flexibility." },
        { h: "Anoma’s Role", p: "Acts as a bridge across modular architectures with intents." }
      ],
      quiz: [
        {
          q: "What does modular blockchains aim for?",
          options: ["Weaker decentralization","Layer separation for scalability","Only PoW consensus"],
          answer: 1,
          explain: "Layer separation allows more scalable, flexible architectures."
        }
      ]
    },
    {
      slug: "ecosystem",
      title: "Ecosystem & Community",
      desc: "Anoma community and ecosystem initiatives.",
      sections: [
        { h: "Community Importance", p: "Open source contributions accelerate adoption." },
        { h: "Ecosystem Breadth", p: "Many projects integrate with Anoma for intent‑centric apps." },
        { h: "Education & Events", p: "Workshops, hackathons, and seminars fuel growth." }
      ],
      quiz: [
        {
          q: "What helps Anoma community grow?",
          options: ["Centralized control","Open source contributions","Only token sales"],
          answer: 1,
          explain: "Community contributions are key to rapid ecosystem growth."
        }
      ]
    },
    {
      slug: "cross-chain",
      title: "Cross‑Chain Interop",
      desc: "How Anoma enables chain‑to‑chain intents.",
      sections: [
        { h: "The Problem", p: "Most dApps today are tied to a single chain." },
        { h: "Anoma Solution", p: "Intent‑centric design allows seamless execution across chains." },
        { h: "Result", p: "Users see outcomes without caring about underlying chains." }
      ],
      quiz: [
        {
          q: "What does Anoma’s cross‑chain solution simplify?",
          options: ["Token minting","Inter‑chain operations","Mining speed"],
          answer: 1,
          explain: "Intent layer abstracts away cross‑chain complexity."
        }
      ]
    },
    {
      slug: "future-vision",
      title: "Future Vision",
      desc: "Anoma’s long‑term plans.",
      sections: [
        { h: "Research", p: "On intent machines and new app classes." },
        { h: "Governance", p: "Community‑driven decision making." },
        { h: "Long‑term Goal", p: "To be the human‑centric operating system for Web3." }
      ],
      quiz: [
        {
          q: "What is Anoma’s long‑term vision?",
          options: ["Pump token value","Be a human‑centric Web3 OS","Be only a L1 chain"],
          answer: 1,
          explain: "Anoma aims to become a human‑centric cross‑chain OS."
        }
      ]
    },

    {
      slug: "intent-theory",      title: "Intent Theory",
      desc: "The conceptual foundation behind intent-centric architecture.",
      sections: [
        { h: "Why Intents?", p: "Focusing on user-defined outcomes, not low-level transactions, yields more natural and flexible UX." },
        { h: "How Anoma Implements It", p: "Through intent gossip, solver matching, and the settlement layer, Anoma fulfills user intents transparently." },
        { h: "Advantages", p: "Enhanced privacy, multi-chain compatibility, and human-centric experience." }
      ],
      quiz: [
        {
          q: "What does intent‑centric architecture emphasize?",
          options: ["Blockchain consensus","User’s desired outcome","Database transaction order"],
          answer: 1,
          explain: "It prioritizes the user's intended outcome; solvers handle the rest."
        }
      ]
    },
    {
      slug: "builders-initiates",      title: "Builders Program",
      desc: "Supporting emerging Anoma builders with grants and mentorship.",
      sections: [
        { h: "What’s Inside?", p: "Offers mentorship, grant pool funding, Demo Day exposure, and technical support." },
        { h: "Who Should Join?", p: "New or established teams building intent‑centric apps or infrastructure." },
        { h: "Why Apply?", p: "Accelerate with ecosystem access, funding, and expert guidance." }
      ],
      quiz: [
        {
          q: "What does the Builders Program offer?",
          options: ["Blockchain node hosting","Mentorship and grant opportunity","Only tokens"],
          answer: 1,
          explain: "Includes mentorship, funding, and ecosystem access."
        }
      ]
    },

    {
      slug: "security",      title: "Security & Threats",
      desc: "Understand security assumptions and threat models.",
      sections: [
        { h: "Why Security Matters", p: "Intents and solvers introduce new assumptions: sybil attacks, liquidity exhaustion, censorship. Learn how these are mitigated." },
        { h: "Mitigations", p: "Economic incentives, decentralized solver diversity, and intent validation are key." }
      ],
      quiz: [
        { q: "Which is a solver threat?", options: ["Liquidity matching","Sybil attack","Gas estimation"], answer: 1, explain: "Sybil solvers can spam intents; diversity + stake mitigate." }
      ]
    },
    {
      slug: "intents-basics",      title: "Intents Basics",
      desc: "Outcome-first approach and constraints.",
      sections: [
        { h: "What is an Intent?", p: "An intent expresses the desired outcome instead of low‑level transactions. The user states constraints (amount, deadline, max fee) and the system finds a plan." }
      ],
      quiz: [
        { q: "Which statement best describes an intent?", options: ["A bundle of signed transactions","A high-level outcome with constraints","A miner-extracted bundle"], answer: 1, explain: "Intents capture outcomes + constraints; solvers derive the concrete steps." }
      ]
    },
    {
      slug: "solver-network",      title: "Solver Network",
      desc: "Route discovery & liquidity matching.",
      sections: [
        { h: "Solver Network", p: "Decentralized solvers discover liquidity, bridges, and services to construct routes that satisfy intents." }
      ],
      quiz: [
        { q: "What do solvers primarily do?", options: ["Mint tokens","Discover routes & match liquidity","Run consensus for L1"], answer: 1, explain: "Solvers explore options and propose plans that satisfy constraints." }
      ]
    },
    {
      slug: "settlement",      title: "Settlement",
      desc: "Finalization on target chain(s).",
      sections: [
        { h: "Settlement", p: "The selected plan is executed across target chain(s). The complexity is hidden; the user sees the outcome." }
      ],
      quiz: [
        { q: "Settlement happens…", options: ["Only on Ethereum","Only off-chain","On the target chain(s) chosen by the plan"], answer: 2, explain: "The route can finalize on one or multiple chains depending on the plan." }
      ]
    }
  ,
    {
      slug: "interoperability-namada",      title: "Interoperability & Namada",
      desc: "Privacy layer and ecosystem relation.",
      sections: [
        { h: "Why Interoperability?", p: "Intents often span multiple chains; robust routing needs bridges, shared standards and secure settlement." },
        { h: "Namada in the Picture", p: "Namada focuses on privacy and can complement Anoma-based apps with shielded transfers and privacy-preserving interactions." },
        { h: "Design Considerations", p: "Latency across chains, bridging risks, and fee abstraction are key aspects to model when building intent-centric UX." }
      ],
      quiz: [
        { q: "Namada primarily brings…", options: ["Faster L1 consensus","Privacy features that can complement intents","NFT metadata hosting"], answer: 1, explain: "Namada is a privacy-focused network that can complement intent-centric flows." }
      ]
    },
{
  slug: "intent-gossip",
  title: "Intent Gossip Protocol",
  desc: "How intents are propagated to solvers securely and efficiently.",
  sections: [
    { h: "Purpose", p: "Decentralized discovery and replication of intents." },
    { h: "Principles", p: "Content addressing, spam/DoS mitigation, scoped data sharing." },
    { h: "Outcome", p: "Solvers reach relevant intents faster; match quality improves." }
  ],
  quiz: [
    {
      q: "What is the aim of the gossip protocol?",
      options: ["Stabilize token price","Disseminate intents to solvers","Only produce L1 blocks"],
      answer: 1,
      explain: "Gossip spreads intents to the right solvers at scale."
    }
  ]
},
{
  slug: "fair-ordering",
  title: "MEV & Fair Ordering",
  desc: "MEV risks in intent‑centric designs and approaches to fair ordering.",
  sections: [
    { h: "What is MEV?", p: "Value extracted from ordering/visibility opportunities." },
    { h: "Mitigations", p: "Commit‑reveal schemes, encrypted mempools, privacy layers." },
    { h: "Effect on Intents", p: "Fair ordering and privacy improve user outcomes." }
  ],
  quiz: [
    {
      q: "Which helps reduce MEV?",
      options: ["Unlimited block size","Commit‑reveal and privacy layers","Only switching to PoS"],
      answer: 1,
      explain: "Commit‑reveal and privacy techniques reduce frontrunning/manipulation."
    }
  ]
},
{
  slug: "settlement-safety",
  title: "Settlement Safety",
  desc: "Security, atomicity, and fault tolerance in cross‑chain settlement.",
  sections: [
    { h: "Atomicity", p: "If all steps do not succeed, the plan is reverted or compensated." },
    { h: "Failure Modes", p: "Partial failure, delays, and retry strategies." },
    { h: "Observability", p: "Monitoring and proofs increase user trust." }
  ],
  quiz: [
    {
      q: "What does atomicity ensure?",
      options: ["Execution continues regardless","No outcome unless all steps succeed","Only lower fees"],
      answer: 1,
      explain: "Atomicity aims for all‑or‑nothing execution across chains."
    }
  ]
}
],
  tr: [
    {
      slug: "zk-privacy",
      title: "ZK & Gizlilik",
      desc: "Sıfır bilgi ispatları ve Anoma'nın gizlilik yaklaşımı.",
      sections: [
        { h: "ZK Nedir?", p: "Sıfır bilgi ispatları, veriyi açıklamadan doğrulama sağlar." },
        { h: "Anoma Kullanımı", p: "Namada entegrasyonu ile güçlü gizlilik ve esnek uygulamalar." },
        { h: "Avantaj", p: "Kullanıcı gizliliğini korurken doğrulama güvenliği sağlar." }
      ],
      quiz: [
        {
          q: "ZK ispatlarının temel avantajı nedir?",
          options: ["Daha hızlı işlem","Veriyi açıklamadan doğrulama","Token üretimi"],
          answer: 1,
          explain: "ZK ile veri açığa çıkmadan doğrulama yapılabilir."
        }
      ]
    },
    {
      slug: "modular-blockchains",
      title: "Modüler Blokzincirler",
      desc: "Anoma'nın modüler zincir vizyonu.",
      sections: [
        { h: "Neden Modüler?", p: "Farklı katmanlar (consensus, execution, settlement) ayrıştırılır." },
        { h: "Avantaj", p: "Ölçeklenebilirlik ve esneklik sağlar." },
        { h: "Anoma Rolü", p: "Intent tabanlı çözümle modüler zincirler arasında köprü kurar." }
      ],
      quiz: [
        {
          q: "Modüler zincir yaklaşımı neyi hedefler?",
          options: ["Merkeziyetsizlikten uzaklaşmayı","Katmanları ayrıştırarak ölçeklenebilirliği","Yalnızca PoW konsensüsünü"],
          answer: 1,
          explain: "Katman ayrımı ile daha esnek, ölçeklenebilir tasarım elde edilir."
        }
      ]
    },
    {
      slug: "ecosystem",
      title: "Ekosistem & Topluluk",
      desc: "Anoma topluluğu ve ekosistem gelişmeleri.",
      sections: [
        { h: "Topluluk Önemi", p: "Katılım ve açık kaynak katkıları büyümeyi hızlandırır." },
        { h: "Ekosistem Genişliği", p: "Çok sayıda proje Anoma ile entegre çalışır." },
        { h: "Eğitim ve Etkinlikler", p: "Workshop, hackathon ve seminerlerle destek." }
      ],
      quiz: [
        {
          q: "Anoma topluluğunun büyümesini ne sağlar?",
          options: ["Merkezi geliştirme","Açık kaynak katkıları","Sadece token satışları"],
          answer: 1,
          explain: "Açık kaynak katkıları ekosistemi hızla geliştirir."
        }
      ]
    },
    {
      slug: "cross-chain",
      title: "Çok‑Zincir Uyum",
      desc: "Anoma'nın zincirler arası niyet çözümü.",
      sections: [
        { h: "Zincirler Arası Sorun", p: "Bugün uygulamalar genellikle tek zincire bağlıdır." },
        { h: "Anoma Çözümü", p: "Intent tabanlı yapı ile farklı zincirler arasında sorunsuz işlem." },
        { h: "Sonuç", p: "Kullanıcı zincir farkını görmeden sonuç elde eder." }
      ],
      quiz: [
        {
          q: "Anoma’nın çok‑zincir çözümü neyi kolaylaştırır?",
          options: ["Token basımını","Zincirler arası işlemleri","Madencilik hızını"],
          answer: 1,
          explain: "Intent yaklaşımı ile zincirler arası işlem şeffaflaşır."
        }
      ]
    },
    {
      slug: "future-vision",
      title: "Gelecek Vizyonu",
      desc: "Anoma'nın uzun vadeli planları.",
      sections: [
        { h: "Araştırma", p: "Yeni intent makineleri ve uygulama sınıfları üzerinde araştırmalar." },
        { h: "Yönetişim", p: "Topluluk odaklı karar mekanizmaları." },
        { h: "Uzun Vadeli Hedef", p: "Web3 için insan merkezli bir işletim sistemi." }
      ],
      quiz: [
        {
          q: "Anoma’nın uzun vadeli hedefi nedir?",
          options: ["Token değerini artırmak","İnsan merkezli bir Web3 OS olmak","Sadece bir L1 zinciri olmak"],
          answer: 1,
          explain: "Anoma, zincir ötesi insan merkezli bir OS vizyonuna sahiptir."
        }
      ]
    },

    {
      slug: "intent-theory",      title: "Niyet Teorisi",
      desc: "Niyet‑merkezli mimarinin altında yatan kavramsal temel.",
      sections: [
        { h: "Niyetler Neden Temel?", p: "Uygulamalara değil, kullanıcı niyetlerine odaklanmak daha doğal ve esnek bir tasarım sunar." },
        { h: "Anoma Nasıl Uygular?", p: "Intent gossip, çözümleyiciler (solvers) ve tasfiye katmanı ile niyeti çözüp yürütür." },
        { h: "Avantajlar", p: "Daha güçlü gizlilik, çok‑zincir uyumu ve kullanıcı‑merkezli UX sağlar." }
      ],
      quiz: [
        {
          q: "Intent‑merkezli mimarlık neyi vurgular?",
          options: ["Blockchain konsensüsünü","Kullanıcının istediği sonucu","Veritabanı yapısını"],
          answer: 1,
          explain: "Kullanıcı işlemler yerine sonuca odaklanır; çözücüler gerisini halleder."
        }
      ]
    },
    {
      slug: "builders-initiates",      title: "Builders Programı",
      desc: "Anoma'nın builders community girişimlerinin desteklenmesi.",
      sections: [
        { h: "Neler içerir?", p: "Mentorluk, grant havuzu, demo günleri ve teknik destek gibi avantajlar sunar" },
        { h: "Kimler Katılmalı?", p: "Yeni ve deneyimli ekipler; intent‑merkezli uygulama veya altyapı geliştirenler" },
        { h: "Mim için Ne Kadar?", p: "Finansman, mentorluk ve ekosistem erişimi ile hızlandırılmış büyüme." }
      ],
      quiz: [
        {
          q: "Builders Programı katılımcılara ne sunar?",
          options: ["Blockchain node işletimi","Mentorluk ve grant fırsatı","Yalnızca token"],
          answer: 1,
          explain: "Mentorluk, fon ve ekosistemle bağlantı gibi fırsatlar içerir."
        }
      ]
    },

    {
      slug: "guvenlik",      title: "Güvenlik & Tehditler",
      desc: "Güvenlik varsayımları ve tehdit modellerini öğrenin.",
      sections: [
        { h: "Neden Güvenlik?", p: "Niyetler ve çözücüler yeni varsayımlar getirir: sybil saldırıları, likidite tükenmesi, sansür. Bunların nasıl azaltıldığını öğrenin." },
        { h: "Çözümler", p: "Ekonomik teşvikler, merkeziyetsiz çözücü çeşitliliği ve niyet doğrulama önemlidir." }
      ],
      quiz: [
        { q: "Bir çözücü tehdidi hangisidir?", options: ["Likidite eşleştirme","Sybil saldırısı","Gas tahmini"], answer: 1, explain: "Sybil çözücüler niyetleri spamlayabilir; çeşitlilik + stake azaltır." }
      ]
    },
    {
      slug: "intents-temeller",      title: "Niyet (Intent) Temelleri",
      desc: "Sonuç odaklı yaklaşım ve kısıtlar.",
      sections: [
        { h: "Niyet (Intent) Nedir?", p: "Niyet, düşük seviye işlemler yerine sonucu ifade eder. Kullanıcı kısıtlarını belirtir (miktar, son tarih, azami ücret); sistem bir plan bulur." }
      ],
      quiz: [
        { q: "Niyet en iyi nasıl tanımlanır?", options: ["İmzalı işlem demeti","Kısıtlarıyla birlikte yüksek seviyeli bir sonuç","Madenciye ayrılmış özel paket"], answer: 1, explain: "Niyetler sonuç + kısıtları içerir; somut adımları çözücüler çıkarır." }
      ]
    },
    {
      slug: "cozucu-agi",      title: "Çözücü Ağı",
      desc: "Rota keşfi ve likidite eşleştirme.",
      sections: [
        { h: "Çözücü Ağı", p: "Merkeziyetsiz çözücüler; likidite, köprüler ve servisleri keşfeder, kısıtları karşılayan rotaları önerir." }
      ],
      quiz: [
        { q: "Çözücüler esas olarak ne yapar?", options: ["Token basar","Rota keşfeder ve likidite eşleştirir","L1 üzerinde konsensüs çalıştırır"], answer: 1, explain: "Çözücüler seçenekleri tarar ve kısıtları karşılayan planlar önerir." }
      ]
    },
    {
      slug: "tasfiye",      title: "Tasfiye (Settlement)",
      desc: "Zincir(ler) üzerinde sonuçlandırma.",
      sections: [
        { h: "Tasfiye (Settlement)", p: "Seçilen plan hedef zincir(ler) üzerinde yürütülür. Karmaşıklık gizlenir; kullanıcı sonucu görür." }
      ],
      quiz: [
        { q: "Tasfiye nerede gerçekleşir?", options: ["Sadece Ethereum üzerinde","Sadece zincir dışı","Planın seçtiği hedef zincir(ler) üzerinde"], answer: 2, explain: "Rota tek veya birden fazla zincirde sonuçlanabilir." }
      ]
    }
  ,
    {
      slug: "birlikte-calisabilirlik-namada",      title: "Birlikte Çalışabilirlik & Namada",
      desc: "Gizlilik katmanı ve ekosistem ilişkisi.",
      sections: [
        { h: "Neden Birlikte Çalışabilirlik?", p: "Niyetler çoğu zaman birden fazla zinciri kapsar; sağlam yönlendirme için köprüler, standartlar ve güvenli tasfiye gerekir." },
        { h: "Namada'nın Rolü", p: "Namada gizlilik odaklıdır; Anoma tabanlı uygulamalara korumalı transferler ve gizlilik dostu etkileşimler ekleyebilir." },
        { h: "Tasarım Notları", p: "Zincirler arası gecikme, köprü riskleri ve ücret soyutlama; niyet-merkezli UX kurarken kritik konulardır." }
      ],
      quiz: [
        { q: "Namada'nın temel katkısı…", options: ["Daha hızlı L1 konsensüsü","Niyetleri tamamlayan gizlilik özellikleri","NFT metadata barındırma"], answer: 1, explain: "Namada, niyet-merkezli akışları tamamlayabilecek gizlilik odaklı bir ağdır." }
      ]
    },
{
  slug: "intent-gossip",
  title: "Intent Gossip Protokolü",
  desc: "Niyetlerin çözücülere güvenli ve verimli biçimde yayılması.",
  sections: [
    { h: "Amaç", p: "Niyetlerin merkeziyetsiz biçimde keşfedilmesi ve çoğaltılması." },
    { h: "Temel İlkeler", p: "İçerik adresleme, spam/DoS azaltımı, sınırlandırılmış veri paylaşımı." },
    { h: "Sonuç", p: "Çözücüler doğru niyetlere daha hızlı erişir; eşleşme kalitesi artar." }
  ],
  quiz: [
    {
      q: "Gossip protokolünün hedefi nedir?",
      options: ["Token fiyatını sabitlemek","Niyetleri çözücülere yaymak","Sadece L1 blok üretmek"],
      answer: 1,
      explain: "Gossip, niyetleri ilgili çözücülere ölçekli şekilde ulaştırır."
    }
  ]
},
{
  slug: "fair-ordering",
  title: "MEV & Adil Sıralama",
  desc: "Niyet‑merkezli tasarımda MEV riskleri ve adil sıralama yaklaşımları.",
  sections: [
    { h: "MEV Nedir?", p: "Ek değer çıkarımı; sıralama ve görülebilirlikten doğan fırsatlar." },
    { h: "Risk Azaltımı", p: "Taahhüt‑açığa çıkar (commit‑reveal), şifreli mempool, gizlilik katmanları." },
    { h: "Niyetler İçin Etki", p: "Adil sıralama ve gizlilik, kullanıcı sonucu üzerinde olumlu etki yaratır." }
  ],
  quiz: [
    {
      q: "MEV'yi azaltmak için hangi yaklaşım kullanılır?",
      options: ["Blok boyutunu sınırsız yapmak","Commit‑reveal ve gizlilik katmanları","Yalnızca PoS seçmek"],
      answer: 1,
      explain: "Commit‑reveal ve gizlilik teknikleri önden koşmayı ve manipülasyonu azaltır."
    }
  ]
},
{
  slug: "settlement-safety",
  title: "Tasfiye Güvenliği",
  desc: "Çok‑zincirli tasfiyede güvenlik, atomiklik ve hata toleransı.",
  sections: [
    { h: "Atomiklik", p: "Yolun tüm adımları başarılı değilse işlem geri alınır veya telafi edilir." },
    { h: "Hata Modelleri", p: "Kısmi başarısızlık, gecikme ve yeniden deneme stratejileri." },
    { h: "Gözlenebilirlik", p: "Durum izleme ve kanıtlamalarla kullanıcı güveni artırılır." }
  ],
  quiz: [
    {
      q: "Atomiklik neyi garanti eder?",
      options: ["İşlemin her durumda devam etmesini","Tüm adımlar başarılı değilse sonuç oluşmamasını","Sadece ücretlerin düşmesini"],
      answer: 1,
      explain: "Atomiklik, zincirler arası planın ya tamamen ya da hiç gerçekleşmesini hedefler."
    }
  ]
}
]
};
