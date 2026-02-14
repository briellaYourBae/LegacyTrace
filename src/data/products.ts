import { Product, QuizQuestion } from '../types/product'

export const products: Product[] = [
  // ===== BATIK =====
  {
    id: 'batik-001',
    name: 'Batik Mega Mendung',
    umkm: 'Batik Tulis Setono',
    umkmStory: 'Established in 1995, Batik Tulis Setono carries 25+ years of traditional batik-making excellence from Cirebon, preserving the ancestral craft.',
    village: 'Cirebon, West Java',
    category: 'batik',
    description: 'Traditional hand-drawn batik with Mega Mendung motif, symbolizing protection and prosperity in Sundanese culture.',
    imageUrl: '/assets/img/batik-mega-mendung.jpg',
    ethicalBadges: ['100% Hand-Drawn', 'Fair Trade', 'Eco-Dye', 'Artisan Certified'],
    steps: [
      {
        id: 'batik-step-1',
        title: 'Pengadaan Kapas',
        actor: 'Petani Lokal',
        location: 'Ladang Jawa Barat',
        description: 'Kapas premium dipanen dari pertanian berkelanjutan di Jawa Barat, memastikan kualitas dan praktik pertanian yang etis.',
        icon: '🌾',
        imageUrl: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop'
      },
      {
        id: 'batik-step-2',
        title: 'Persiapan Kain',
        actor: 'Tim Persiapan',
        location: 'Workshop Cirebon',
        description: 'Kapas dicuci, dikeringkan, dan disiapkan untuk proses batik menggunakan metode tradisional.',
        icon: '🧵',
        imageUrl: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop'
      },
      {
        id: 'batik-step-3',
        title: 'Menggambar dengan Lilin',
        actor: 'Artisan Master',
        location: 'Workshop Cirebon',
        description: 'Pengrajin terampil menggambar motif Mega Mendung menggunakan lilin panas, proses yang memakan waktu 8-12 jam per kain.',
        icon: '🖌️',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'batik-step-4',
        title: 'Pewarnaan Alami',
        actor: 'Master Pewarna',
        location: 'Workshop Cirebon',
        description: 'Kain dicelup dalam pewarna indigo alami, menciptakan warna biru tua ikonik melalui teknik tradisional.',
        icon: '🎨',
        imageUrl: 'https://images.unsplash.com/photo-1536228637022-db989d6c8e5b?w=400&h=300&fit=crop'
      },
      {
        id: 'batik-step-5',
        title: 'Pelepasan Lilin & Finishing',
        actor: 'Tim Finishing',
        location: 'Workshop Cirebon',
        description: 'Lilin panas dilepas dengan hati-hati, mengungkapkan pola yang rumit. Penyetrikaan akhir memastikan hasil sempurna.',
        icon: '✨',
        imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop'
      },
      {
        id: 'batik-step-6',
        title: 'Pengecekan Kualitas & Pengemasan',
        actor: 'Tim Kualitas',
        location: 'Gudang Cirebon',
        description: 'Setiap kain diperiksa kualitasnya, kemudian dikemas dengan hati-hati menggunakan bahan ramah lingkungan.',
        icon: '📦',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Ibu Siti Nurhaliza',
    artisanExperience: 28,
    artisanQuote: 'Setiap pola menceritakan kisah leluhur kami. Saya hanya penjaga tradisi indah ini.',
    artisanQuoteLocal: 'Unggal pola nyaritakeun carita karuhun urang. Abdi ngan ukur panjaga tradisi geulis ieu.',
    culturalValue: 'Mega Mendung symbolizes protection and continuous flow of prosperity in Sundanese culture.'
  },

  {
    id: 'batik-002',
    name: 'Batik Parang Rusak',
    umkm: 'Batik Tulis Klasik',
    umkmStory: 'Over 30 years of heritage, creating the iconic Parang Rusak pattern traditional to Solo batik.',
    village: 'Solo, Central Java',
    category: 'batik',
    description: 'Classic Parang Rusak motif representing warrior strength and confidence.',
    imageUrl: '/assets/img/batik-parang-rusak.png',
    ethicalBadges: ['Heritage Pattern', 'Natural Materials', 'Solo Authentic'],
    steps: [
      {
        id: 'batik2-step-1',
        title: 'Persiapan Benang',
        actor: 'Master Benang',
        location: 'Solo',
        description: 'Benang kapas dipilih untuk daya tahan dan kualitas.',
        icon: '🧶',
        imageUrl: 'https://images.unsplash.com/photo-1617635279887-4e5d75e5a09d?w=400&h=300&fit=crop'
      },
      {
        id: 'batik2-step-2',
        title: 'Desain Pola',
        actor: 'Desainer',
        location: 'Workshop Solo',
        description: 'Pola Parang Rusak dirancang dengan hati-hati.',
        icon: '✏️',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'batik2-step-3',
        title: 'Aplikasi Lilin',
        actor: 'Master Lilin',
        location: 'Workshop Solo',
        description: 'Lilin panas diaplikasikan untuk membuat resist.',
        icon: '🖌️',
        imageUrl: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop'
      },
      {
        id: 'batik2-step-4',
        title: 'Rendaman Indigo',
        actor: 'Pewarna',
        location: 'Workshop Solo',
        description: 'Beberapa rendaman pewarna untuk warna yang dalam.',
        icon: '🎨',
        imageUrl: 'https://images.unsplash.com/photo-1536228637022-db989d6c8e5b?w=400&h=300&fit=crop'
      },
      {
        id: 'batik2-step-5',
        title: 'Perebusan Lilin',
        actor: 'Finisher',
        location: 'Workshop Solo',
        description: 'Lilin dilelehkan untuk mengungkapkan pola.',
        icon: '🔥',
        imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop'
      },
      {
        id: 'batik2-step-6',
        title: 'Sentuhan Akhir',
        actor: 'Tim QC',
        location: 'Solo',
        description: 'Diperiksa kualitasnya dan dikemas.',
        icon: '✨',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Pak Santoso',
    artisanExperience: 32,
    artisanQuote: 'Parang Rusak membawa semangat leluhur prajurit kami.',
    artisanQuoteLocal: 'Parang Rusak nggawa semangat leluhur prajurit kita.',
    culturalValue: 'Represents warrior strength and dignity in Javanese tradition.'
  },

  // ===== MAKANAN =====
  {
    id: 'makanan-001',
    name: 'Rendang Padang Asli',
    umkm: 'Rendang Mak Uni',
    umkmStory: 'Established in 1985, Rendang Mak Uni has been cooking authentic Padang rendang for over 35 years using grandmother\'s secret recipe.',
    village: 'Padang, West Sumatra',
    category: 'makanan',
    description: 'Slow-cooked beef in rich coconut milk and spices, recognized by CNN as World\'s Most Delicious Food.',
    imageUrl: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=500&h=500&fit=crop',
    ethicalBadges: ['Traditional Recipe', 'No Preservatives', 'Halal Certified', 'Slow Cooked'],
    steps: [
      {
        id: 'rendang-step-1',
        title: 'Persiapan Bumbu',
        actor: 'Master Bumbu',
        location: 'Dapur Padang',
        description: 'Bumbu segar digiling menjadi pasta: cabai, lengkuas, jahe, kunyit, serai.',
        icon: '🌶️',
        imageUrl: 'https://images.unsplash.com/photo-1596040995857-ba42d16cb0f2?w=400&h=300&fit=crop'
      },
      {
        id: 'rendang-step-2',
        title: 'Pemilihan Daging',
        actor: 'Tukang Daging',
        location: 'Pasar Padang',
        description: 'Potongan daging sapi premium dipilih untuk kelembutan dan kualitas.',
        icon: '🥩',
        imageUrl: 'https://images.unsplash.com/photo-1588347818036-8fc8d1d6b7b7?w=400&h=300&fit=crop'
      },
      {
        id: 'rendang-step-3',
        title: 'Ekstraksi Santan',
        actor: 'Spesialis Kelapa',
        location: 'Dapur Padang',
        description: 'Santan segar diekstrak dari kelapa lokal.',
        icon: '🥥',
        imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784422?w=400&h=300&fit=crop'
      },
      {
        id: 'rendang-step-4',
        title: 'Memasak Perlahan',
        actor: 'Master Masak',
        location: 'Dapur Padang',
        description: 'Daging dimasak perlahan selama 4-6 jam hingga empuk dan gelap.',
        icon: '🍲',
        imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop'
      },
      {
        id: 'rendang-step-5',
        title: 'Karamelisasi',
        actor: 'Master Masak',
        location: 'Dapur Padang',
        description: 'Memasak berlanjut hingga minyak terpisah dan daging berkaramel.',
        icon: '🔥',
        imageUrl: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=400&h=300&fit=crop'
      },
      {
        id: 'rendang-step-6',
        title: 'Pengemasan',
        actor: 'Tim Pengemasan',
        location: 'Padang',
        description: 'Disegel vakum untuk menjaga kesegaran dan rasa autentik.',
        icon: '📦',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Mak Uni',
    artisanExperience: 35,
    artisanQuote: 'Rendang bukan sekadar makanan, ini warisan kami yang dimasak dengan kesabaran dan cinta.',
    artisanQuoteLocal: 'Randang indak cuma makanan, ko warisan kami nan dimasak jo kasabaran dan cinto.',
    culturalValue: 'Rendang represents Minangkabau culinary excellence and is served at important ceremonies.'
  },

  {
    id: 'makanan-002',
    name: 'Keripik Tempe Original',
    umkm: 'Keripik Tempe Sanan',
    umkmStory: 'Established in 1980, Keripik Tempe Sanan has been producing authentic tempe chips for over 40 years from the famous tempe village of Sanan, Malang.',
    village: 'Sanan, Malang, East Java',
    category: 'makanan',
    description: 'Crispy tempe chips made from premium fermented soybeans, a beloved traditional Indonesian snack known nationwide.',
    imageUrl: '/assets/img/keripik-tempe-original.png',
    ethicalBadges: ['Traditional Recipe', 'No Preservatives', 'Handmade', 'Natural Ingredients'],
    steps: [
      {
        id: 'snacks-step-1',
        title: 'Pemilihan Kedelai',
        actor: 'Petani Lokal',
        location: 'Wilayah Malang',
        description: 'Kedelai premium diperoleh dari petani lokal di Jawa Timur.',
        icon: '🫘',
        imageUrl: 'https://images.unsplash.com/photo-1599599810694-2a7a49d60908?w=400&h=300&fit=crop'
      },
      {
        id: 'snacks-step-2',
        title: 'Fermentasi Tempe',
        actor: 'Master Fermentasi',
        location: 'Workshop Sanan',
        description: 'Kedelai difermentasi dengan ragi tradisional selama 36-48 jam untuk membuat tempe berkualitas.',
        icon: '🦠',
        imageUrl: 'https://images.unsplash.com/photo-1576866209365-74ba233f3f48?w=400&h=300&fit=crop'
      },
      {
        id: 'snacks-step-3',
        title: 'Pemotongan',
        actor: 'Tim Persiapan',
        location: 'Dapur Sanan',
        description: 'Tempe segar diiris tipis dengan tangan untuk memastikan kerenyahan yang seragam.',
        icon: '🔪',
        imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'
      },
      {
        id: 'snacks-step-4',
        title: 'Pembumbuan',
        actor: 'Spesialis Bumbu',
        location: 'Dapur Sanan',
        description: 'Irisan tempe dilapisi dengan campuran bumbu rahasia yang diwariskan turun-temurun.',
        icon: '🌿',
        imageUrl: 'https://images.unsplash.com/photo-1596040995857-ba42d16cb0f2?w=400&h=300&fit=crop'
      },
      {
        id: 'snacks-step-5',
        title: 'Penggorengan Dalam',
        actor: 'Master Penggorengan',
        location: 'Dapur Sanan',
        description: 'Tempe berbumbu digoreng dalam minyak premium hingga keemasan dan renyah.',
        icon: '🍳',
        imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
      },
      {
        id: 'snacks-step-6',
        title: 'Pengemasan',
        actor: 'Tim Pengemasan',
        location: 'Sanan',
        description: 'Keripik tempe renyah dikemas dalam kantong kedap udara untuk menjaga kesegaran.',
        icon: '📦',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Pak Hadi Santoso',
    artisanExperience: 35,
    artisanQuote: 'Tempe adalah kebanggaan Indonesia. Setiap keripik membawa tradisi desa Sanan.',
    artisanQuoteLocal: 'Tempe iku kebanggaan Indonesia. Saben keripik nggawa tradisi desa Sanan.',
    culturalValue: 'Tempe is a traditional Indonesian superfood, and Sanan village in Malang is renowned as the center of tempe production.'
  },

  {
    id: 'snacks-002',
    name: 'Kue Lumpia Basah',
    umkm: 'Kue Lumpia Ibu Retno',
    umkmStory: 'Traditional spring rolls maker for 15 years, using grandmother\'s authentic recipe.',
    village: 'Semarang, Central Java',
    category: 'makanan',
    description: 'Fresh soft spring rolls filled with vegetables and meat, wrapped in thin golden crepes.',
    imageUrl: '/assets/img/kue-lumpia-basah.png',
    ethicalBadges: ['Fresh Ingredients', 'No MSG', 'Traditional Recipe', 'Handmade Wrappers'],
    steps: [
      {
        id: 'lumpia-step-1',
        title: 'Penggilingan Tepung',
        actor: 'Penggiling',
        location: 'Semarang',
        description: 'Tepung premium digiling dari beras lokal.',
        icon: '🌾',
        imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop'
      },
      {
        id: 'lumpia-step-2',
        title: 'Persiapan Adonan',
        actor: 'Pembuat Kue',
        location: 'Dapur Semarang',
        description: 'Tepung dicampur dengan air untuk adonan crepe.',
        icon: '👨‍🍳',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'lumpia-step-3',
        title: 'Pembuatan Crepe',
        actor: 'Master Crepe',
        location: 'Dapur Semarang',
        description: 'Crepe tipis dimasak di atas wajan panas.',
        icon: '🔥',
        imageUrl: 'https://images.unsplash.com/photo-1556910110-a5a63dfd393c?w=400&h=300&fit=crop'
      },
      {
        id: 'lumpia-step-4',
        title: 'Persiapan Isian',
        actor: 'Tim Isian',
        location: 'Dapur Semarang',
        description: 'Sayuran dan daging ditumis.',
        icon: '🥘',
        imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop'
      },
      {
        id: 'lumpia-step-5',
        title: 'Menggulung & Membungkus',
        actor: 'Pembungkus',
        location: 'Dapur Semarang',
        description: 'Digulung dengan tangan dengan hati-hati.',
        icon: '🌯',
        imageUrl: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=300&fit=crop'
      },
      {
        id: 'lumpia-step-6',
        title: 'Pengemasan',
        actor: 'Tim',
        location: 'Semarang',
        description: 'Dikemas dalam kotak untuk pengiriman.',
        icon: '📦',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Ibu Retno',
    artisanExperience: 15,
    artisanQuote: 'My grandmother\'s recipe is a treasure I proudly share.',
    culturalValue: 'Lumpia represents Semarang\'s culinary heritage and family values.'
  },

  // ===== CRAFTS =====
  {
    id: 'crafts-001',
    name: 'Wayang Kulit Handcarved',
    umkm: 'Wayang Kulit Yogyakarta Artisan',
    umkmStory: 'Family-owned craft studio preserving shadow puppet art since 1987, training new generations in this UNESCO heritage craft.',
    village: 'Yogyakarta, Special Region',
    category: 'kerajinan',
    description: 'Hand-carved leather shadow puppets, intricate pieces of theatrical art that tell stories of Indonesian heritage.',
    imageUrl: '/assets/img/wayang-kulit.png',
    ethicalBadges: ['Handcarved', 'UNESCO Heritage', 'Cultural Preservation', 'Master Craft'],
    steps: [
      {
        id: 'craft-step-1',
        title: 'Pemilihan Kulit',
        actor: 'Master Pemilih',
        location: 'Studio Yogyakarta',
        description: 'Kulit kerbau premium dipilih dengan hati-hati untuk ketebalan dan fleksibilitas yang cocok untuk kerajinan wayang kulit.',
        icon: '🐃',
        imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop'
      },
      {
        id: 'craft-step-2',
        title: 'Transfer Pola',
        actor: 'Artisan Desain',
        location: 'Studio Yogyakarta',
        description: 'Desain karakter wayang tradisional ditransfer ke kulit yang telah disiapkan menggunakan template yang telah teruji waktu.',
        icon: '🖼️',
        imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop'
      },
      {
        id: 'craft-step-3',
        title: 'Ukiran & Pahat',
        actor: 'Master Ukir',
        location: 'Studio Yogyakarta',
        description: 'Setiap wayang diukir dengan rumit menggunakan pahat dan alat tradisional, memakan waktu 30-50 jam per karya.',
        icon: '⚒️',
        imageUrl: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=300&fit=crop'
      },
      {
        id: 'craft-step-4',
        title: 'Penusukan & Detail',
        actor: 'Spesialis Detail',
        location: 'Studio Yogyakarta',
        description: 'Detail halus ditusuk dan disempurnakan, menciptakan efek bayangan indah yang akan dihasilkan wayang.',
        icon: '🔨',
        imageUrl: 'https://images.unsplash.com/photo-1565193566173-7cba06dab0d4?w=400&h=300&fit=crop'
      },
      {
        id: 'craft-step-5',
        title: 'Pewarnaan Kulit',
        actor: 'Spesialis Warna',
        location: 'Studio Yogyakarta',
        description: 'Pigmen berbasis tanaman alami diaplikasikan untuk mewarnai wayang, meningkatkan keindahan teatrikalnya.',
        icon: '🎨',
        imageUrl: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop'
      },
      {
        id: 'craft-step-6',
        title: 'Pemasangan Pegangan & Kualitas',
        actor: 'Master Perakitan',
        location: 'Studio Yogyakarta',
        description: 'Pegangan kayu dipasang dan setiap wayang menjalani inspeksi kualitas akhir sebelum pengiriman.',
        icon: '🎭',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Ki Purbo',
    artisanExperience: 35,
    artisanQuote: 'Wayang bukan hanya seni—ini adalah suara leluhur kami, hati nurani rakyat kami.',
    artisanQuoteLocal: 'Wayang dudu mung seni—iki swara leluhur kita, ati nurani wong kita.',
    culturalValue: 'Wayang kulit is a UNESCO-recognized intangible cultural heritage representing Indonesian philosophical values.'
  },

  {
    id: 'crafts-002',
    name: 'Topeng Cirebon Handmade',
    umkm: 'Topeng Cirebon Heritage',
    umkmStory: '20 years of creating traditional mask art for theatrical performances and cultural ceremonies.',
    village: 'Cirebon, West Java',
    category: 'kerajinan',
    description: 'Handmade wooden masks with vibrant colors, used in traditional Cirebon mask dance.',
    imageUrl: '/assets/img/topeng-cirebon.png',
    ethicalBadges: ['Handcrafted', 'Traditional Art', 'Natural Paint'],
    steps: [
      {
        id: 'topeng-step-1',
        title: 'Pemilihan Kayu',
        actor: 'Tukang Kayu',
        location: 'Cirebon',
        description: 'Pilih kayu ringan yang cocok untuk topeng.',
        icon: '🌳',
        imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop'
      },
      {
        id: 'topeng-step-2',
        title: 'Ukiran Kayu',
        actor: 'Master Ukir',
        location: 'Studio Cirebon',
        description: 'Ukir fitur wajah dan ekspresi.',
        icon: '⚒️',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'topeng-step-3',
        title: 'Pengamplasan',
        actor: 'Finisher',
        location: 'Studio Cirebon',
        description: 'Haluskan permukaan.',
        icon: '🪵',
        imageUrl: 'https://images.unsplash.com/photo-1565193566173-7cba06dab0d4?w=400&h=300&fit=crop'
      },
      {
        id: 'topeng-step-4',
        title: 'Pengecatan Dasar',
        actor: 'Pelukis',
        location: 'Studio Cirebon',
        description: 'Aplikasikan cat dasar putih.',
        icon: '🎨',
        imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop'
      },
      {
        id: 'topeng-step-5',
        title: 'Pengecatan Warna',
        actor: 'Seniman',
        location: 'Studio Cirebon',
        description: 'Cat warna-warna cerah dan detail.',
        icon: '🖌️',
        imageUrl: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop'
      },
      {
        id: 'topeng-step-6',
        title: 'Perakitan',
        actor: 'Perakit',
        location: 'Studio Cirebon',
        description: 'Pasang karet elastis dan sentuhan akhir.',
        icon: '✨',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Pak Darmanto',
    artisanExperience: 20,
    artisanQuote: 'Each mask carries the spirit of Cirebon dance.',
    culturalValue: 'Topeng masks are central to Cirebon\'s mask dance cultural performances.'
  },

  // ===== WOVEN =====
  {
    id: 'woven-001',
    name: 'Tenun Ikat Lombok',
    umkm: 'Tenun Songket Lombok Heritage',
    umkmStory: 'Preserving 200+ year old weaving tradition from Lombok, supporting 40+ artisans and their families.',
    village: 'Lombok, Nusa Tenggara Barat',
    category: 'tenun',
    description: 'Hand-woven ikat fabric with intricate geometric patterns, using traditional techniques passed down for generations.',
    imageUrl: '/assets/img/tenun-ikat-lombok.jpg',
    ethicalBadges: ['Hand-Woven', 'Fair Trade Certified', 'Artisan Support', '200+ Year Heritage'],
    steps: [
      {
        id: 'woven-step-1',
        title: 'Persiapan Kapas',
        actor: 'Master Persiapan',
        location: 'Desa Lombok',
        description: 'Benang kapas berkualitas tinggi disiapkan dan diorganisir berdasarkan warna, siap untuk proses pewarnaan.',
        icon: '🧶',
        imageUrl: 'https://images.unsplash.com/photo-1617635279887-4e5d75e5a09d?w=400&h=300&fit=crop'
      },
      {
        id: 'woven-step-2',
        title: 'Pengikatan Benang Resist',
        actor: 'Artisan Pengikat',
        location: 'Workshop Lombok',
        description: 'Benang diikat dengan hati-hati menggunakan raffia untuk membuat pola resist, mengontrol di mana warna akan menempel.',
        icon: '🪢',
        imageUrl: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop'
      },
      {
        id: 'woven-step-3',
        title: 'Pewarnaan Alami',
        actor: 'Spesialis Pewarna',
        location: 'Workshop Lombok',
        description: 'Benang direndam dalam pewarna alami dari tanaman, menciptakan warna autentik yang cerah.',
        icon: '🌿',
        imageUrl: 'https://images.unsplash.com/photo-1596040995857-ba42d16cb0f2?w=400&h=300&fit=crop'
      },
      {
        id: 'woven-step-4',
        title: 'Menenun Manual',
        actor: 'Master Penenun',
        location: 'Desa Lombok',
        description: 'Benang yang telah diwarnai ditenun dengan tangan di alat tenun kayu tradisional, memakan waktu 40-80 jam per karya.',
        icon: '🪡',
        imageUrl: 'https://images.unsplash.com/photo-1565193566173-7cba06dab0d4?w=400&h=300&fit=crop'
      },
      {
        id: 'woven-step-5',
        title: 'Finishing & Penyetrikaan',
        actor: 'Tim Finishing',
        location: 'Workshop Lombok',
        description: 'Kain tenun diselesaikan dengan hati-hati, disetrika, dan diperiksa kualitas serta presisi polanya.',
        icon: '✨',
        imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop'
      },
      {
        id: 'woven-step-6',
        title: 'Pengemasan Ramah Lingkungan & Ekspor',
        actor: 'Tim Ekspor',
        location: 'Gudang Lombok',
        description: 'Kain jadi dikemas dalam bahan berkelanjutan dan disiapkan untuk distribusi perdagangan yang adil.',
        icon: '🌍',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Pak Wayan',
    artisanExperience: 42,
    artisanQuote: 'Kakek saya mengajari ayah saya, ayah saya mengajari saya, dan sekarang saya mengajari putri saya. Ini warisan kami.',
    artisanQuoteLocal: 'Kaki tiang ngajahin bapa tiang, bapa tiang ngajahin tiang, tur mangkin tiang ngajahin pianak tiang. Puniki warisan tiange.',
    culturalValue: 'Tenun ikat represents the cultural identity and spiritual beliefs of Lombok communities.'
  },

  {
    id: 'woven-002',
    name: 'Kain Songket Palembang',
    umkm: 'Songket Palembang Premium',
    umkmStory: '25 years creating luxurious songket fabric with gold and silver threads for royal ceremonies.',
    village: 'Palembang, South Sumatra',
    category: 'tenun',
    description: 'Luxury hand-woven fabric with gold and silver thread accents, traditionally worn for special occasions.',
    imageUrl: '/assets/img/kain-songket-palembang.png',
    ethicalBadges: ['Gold Thread', 'Royal Quality', 'Hand-Woven', 'Festival Wear'],
    steps: [
      {
        id: 'songket-step-1',
        title: 'Pengadaan Benang',
        actor: 'Master Benang',
        location: 'Palembang',
        description: 'Benang sutra dan metalik premium diperoleh.',
        icon: '✨',
        imageUrl: 'https://images.unsplash.com/photo-1617635279887-4e5d75e5a09d?w=400&h=300&fit=crop'
      },
      {
        id: 'songket-step-2',
        title: 'Pengorganisasian Benang',
        actor: 'Pengorganisir',
        location: 'Workshop Palembang',
        description: 'Benang diorganisir berdasarkan warna dan jenis.',
        icon: '🧶',
        imageUrl: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop'
      },
      {
        id: 'songket-step-3',
        title: 'Pengaturan Alat Tenun',
        actor: 'Master Alat Tenun',
        location: 'Workshop Palembang',
        description: 'Alat tenun tradisional disiapkan untuk menenun.',
        icon: '⚙️',
        imageUrl: 'https://images.unsplash.com/photo-1565193566173-7cba06dab0d4?w=400&h=300&fit=crop'
      },
      {
        id: 'songket-step-4',
        title: 'Menenun Benang Emas',
        actor: 'Master Penenun',
        location: 'Workshop Palembang',
        description: 'Hati-hati menenun benang emas/perak ke dalam pola.',
        icon: '🧵',
        imageUrl: 'https://images.unsplash.com/photo-1617635279887-4e5d75e5a09d?w=400&h=300&fit=crop'
      },
      {
        id: 'songket-step-5',
        title: 'Inspeksi Kualitas',
        actor: 'Inspektur QC',
        location: 'Workshop Palembang',
        description: 'Periksa pola dan kualitas benang.',
        icon: '🔍',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'songket-step-6',
        title: 'Pengemasan Royal',
        actor: 'Tim',
        location: 'Palembang',
        description: 'Dikemas dalam kotak premium.',
        icon: '📦',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Ibu Mariamah',
    artisanExperience: 25,
    artisanQuote: 'Songket is the crown of Palembang culture.',
    culturalValue: 'Songket symbolizes prestige and is worn for royal ceremonies and celebrations.'
  },

  // ===== POTTERY (NEW) =====
  {
    id: 'pottery-001',
    name: 'Gerabah Kasongan Tradisional',
    umkm: 'Gerabah Kasongan Sentra',
    umkmStory: 'Over 40 years preserving traditional pottery techniques in Kasongan, supporting entire artisan community.',
    village: 'Bantul, Yogyakarta',
    category: 'gerabah',
    description: 'Handmade pottery with traditional Javanese motifs, crafted using ancient clay and firing techniques.',
    imageUrl: '/assets/img/gerabah-kosongan.png',
    ethicalBadges: ['Handmade', 'Natural Clay', 'Cultural Icon', 'Artisan Community'],
    steps: [
      {
        id: 'pottery-step-1',
        title: 'Ekstraksi Tanah Liat',
        actor: 'Penambang Tanah Liat',
        location: 'Tepi Sungai Kasongan',
        description: 'Tanah liat alami digali dengan hati-hati dari tepi sungai menggunakan metode tradisional.',
        icon: '⛏️',
        imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a7167e67?w=400&h=300&fit=crop'
      },
      {
        id: 'pottery-step-2',
        title: 'Persiapan Tanah Liat',
        actor: 'Tim Persiapan',
        location: 'Workshop Kasongan',
        description: 'Tanah liat diuleni, dihidrasi, dan disiapkan untuk pembuatan gerabah.',
        icon: '👐',
        imageUrl: 'https://images.unsplash.com/photo-1576066211575-d60bbb31ac0e?w=400&h=300&fit=crop'
      },
      {
        id: 'pottery-step-3',
        title: 'Pembentukan Tangan',
        actor: 'Master Pembuat Gerabah',
        location: 'Workshop Kasongan',
        description: 'Wadah dibentuk dengan tangan di roda gerabah manual.',
        icon: '⚙️',
        imageUrl: 'https://images.unsplash.com/photo-1565193566173-7cba06dab0d4?w=400&h=300&fit=crop'
      },
      {
        id: 'pottery-step-4',
        title: 'Pengeringan Udara',
        actor: 'Tim Pengeringan',
        location: 'Workshop Kasongan',
        description: 'Gerabah yang telah dibentuk dibiarkan mengering secara alami selama beberapa hari.',
        icon: '☀️',
        imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a7167e67?w=400&h=300&fit=crop'
      },
      {
        id: 'pottery-step-5',
        title: 'Pembakaran Tradisional',
        actor: 'Master Kiln',
        location: 'Kiln Kasongan',
        description: 'Dibakar dalam kiln pembakaran kayu tradisional untuk membuat gerabah yang tahan lama.',
        icon: '🔥',
        imageUrl: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400&h=300&fit=crop'
      },
      {
        id: 'pottery-step-6',
        title: 'Pengecatan Motif',
        actor: 'Seniman',
        location: 'Workshop Kasongan',
        description: 'Motif Jawa tradisional dilukis pada gerabah yang sudah jadi.',
        icon: '🎨',
        imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Pak Sulaiman',
    artisanExperience: 38,
    artisanQuote: 'Tanah liat menghubungkan kami dengan bumi dan tradisi, setiap karya membawa roh leluhur kami.',
    artisanQuoteLocal: 'Lempung nyambungake kita karo bumi lan tradhisi, saben karya nggawa roh leluhur kita.',
    culturalValue: 'Kasongan pottery fosters community identity and preserves Javanese artistic heritage.'
  },

  {
    id: 'pottery-002',
    name: 'Periuk Tanah Liat Bandung',
    umkm: 'Periuk Bandung Heritage',
    umkmStory: 'Traditional earthenware pots maker for cooking, preserving the skill of ancient pottery craft.',
    village: 'Bandung, West Java',
    category: 'gerabah',
    description: 'Functional earthenware cookware, perfect for traditional Indonesian cooking methods.',
    imageUrl: '/assets/img/periuk-tanah-liat.png',
    ethicalBadges: ['Functional Art', 'Natural Clay', 'Eco-Friendly', 'Traditional'],
    steps: [
      {
        id: 'periuk-step-1',
        title: 'Penambangan Tanah Liat',
        actor: 'Penambang',
        location: 'Bandung',
        description: 'Ekstrak tanah liat alami dari bumi.',
        icon: '⛏️',
        imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a7167e67?w=400&h=300&fit=crop'
      },
      {
        id: 'periuk-step-2',
        title: 'Penyulingan Tanah Liat',
        actor: 'Penyuling',
        location: 'Workshop Bandung',
        description: 'Buang batu dan kotoran.',
        icon: '🧹',
        imageUrl: 'https://images.unsplash.com/photo-1576066211575-d60bbb31ac0e?w=400&h=300&fit=crop'
      },
      {
        id: 'periuk-step-3',
        title: 'Pencetakan Tangan',
        actor: 'Pencetak',
        location: 'Workshop Bandung',
        description: 'Cetak tanah liat menjadi bentuk periuk.',
        icon: '🤲',
        imageUrl: 'https://images.unsplash.com/photo-1565193566173-7cba06dab0d4?w=400&h=300&fit=crop'
      },
      {
        id: 'periuk-step-4',
        title: 'Pemasangan Pegangan',
        actor: 'Perakit',
        location: 'Workshop Bandung',
        description: 'Pasang pegangan ke periuk.',
        icon: '🔗',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'periuk-step-5',
        title: 'Pembakaran Kiln',
        actor: 'Master Kiln',
        location: 'Kiln Bandung',
        description: 'Bakar dalam kiln tradisional.',
        icon: '🔥',
        imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a7167e67?w=400&h=300&fit=crop'
      },
      {
        id: 'periuk-step-6',
        title: 'Pengujian Kualitas',
        actor: 'Penguji',
        location: 'Workshop Bandung',
        description: 'Uji daya tahan dan fungsi.',
        icon: '✅',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Pak Hendra',
    artisanExperience: 22,
    artisanQuote: 'Good pottery makes good food. This is my craft.',
    culturalValue: 'Earthenware cookware connects cooking to traditional cultural practices.'
  },

  // ===== HERBAL (NEW) =====
  {
    id: 'herbal-001',
    name: 'Jamu Tradisional Asli',
    umkm: 'Jamu Mak Citra Nusantara',
    umkmStory: 'Over 30 years brewing traditional Indonesian herbal medicine with original family recipes.',
    village: 'Yogyakarta, Special Region',
    category: 'herbal',
    description: 'Authentic traditional herbal drink made from natural herbs and spices, no artificial additives.',
    imageUrl: '/assets/img/jamu-tradisional.png',
    ethicalBadges: ['100% Natural', 'No Additives', 'Family Recipe', 'Organic Herbs'],
    steps: [
      {
        id: 'jamu-step-1',
        title: 'Pemanenan Herbal',
        actor: 'Petani',
        location: 'Kebun Yogyakarta',
        description: 'Herbal dan akar organik dipanen pada puncak potensinya.',
        icon: '🌿',
        imageUrl: 'https://images.unsplash.com/photo-1597318970834-a57ae9eb4f4d?w=400&h=300&fit=crop'
      },
      {
        id: 'jamu-step-2',
        title: 'Pengeringan Herbal',
        actor: 'Master Pengeringan',
        location: 'Workshop Yogyakarta',
        description: 'Herbal dikeringkan secara alami untuk menjaga potensi.',
        icon: '☀️',
        imageUrl: 'https://images.unsplash.com/photo-1571513200266-1d8c3d9bf2fb?w=400&h=300&fit=crop'
      },
      {
        id: 'jamu-step-3',
        title: 'Penggilingan Herbal',
        actor: 'Penggiling',
        location: 'Workshop Yogyakarta',
        description: 'Herbal kering digiling menjadi bubuk halus.',
        icon: '⚙️',
        imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop'
      },
      {
        id: 'jamu-step-4',
        title: 'Pencampuran Formula',
        actor: 'Master Herbalis',
        location: 'Workshop Yogyakarta',
        description: 'Campurkan bahan sesuai resep kuno.',
        icon: '🧪',
        imageUrl: 'https://images.unsplash.com/photo-1596040995857-ba42d16cb0f2?w=400&h=300&fit=crop'
      },
      {
        id: 'jamu-step-5',
        title: 'Penyeduhan & Ekstraksi',
        actor: 'Penyeduh',
        location: 'Dapur Yogyakarta',
        description: 'Seduh bahan untuk mengekstrak manfaat.',
        icon: '☕',
        imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop'
      },
      {
        id: 'jamu-step-6',
        title: 'Pembotolan & Pengemasan',
        actor: 'Pengemas',
        location: 'Yogyakarta',
        description: 'Dibotolkan dalam wadah kaca untuk menjaga kualitas.',
        icon: '🍯',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Ibu Citra',
    artisanExperience: 30,
    artisanQuote: 'Jamu bukan sekadar minuman, ini adalah kebijaksanaan penyembuhan dari leluhur kami.',
    artisanQuoteLocal: 'Jamu dudu mung unjukan, iki kawruh marasake sehat saka leluhur kita.',
    culturalValue: 'Traditional jamu represents centuries of Indonesian healing practices and wellness culture.'
  },

  {
    id: 'herbal-002',
    name: 'Wedang Uwuh Tradisional',
    umkm: 'Wedang Uwuh Imogiri',
    umkmStory: 'Preserving traditional Javanese herbal drink recipe for over 25 years, using natural ingredients from local forests.',
    village: 'Imogiri, Yogyakarta',
    category: 'herbal',
    description: 'Traditional Javanese herbal tea blend made from spices, herbs, and natural ingredients for warmth and wellness.',
    imageUrl: '/assets/img/wedang-uwuh.png',
    ethicalBadges: ['100% Natural', 'Traditional Recipe', 'Organic Spices', 'No Sugar Added'],
    steps: [
      {
        id: 'wedang-step-1',
        title: 'Spice Harvesting',
        actor: 'Local Farmers',
        location: 'Imogiri Hills',
        description: 'Fresh ginger, cloves, cinnamon, and herbs harvested from organic gardens.',
        icon: '🌿',
        imageUrl: 'https://images.unsplash.com/photo-1597318970834-a57ae9eb4f4d?w=400&h=300&fit=crop'
      },
      {
        id: 'wedang-step-2',
        title: 'Ingredient Drying',
        actor: 'Drying Team',
        location: 'Imogiri Workshop',
        description: 'Spices and herbs sun-dried naturally to preserve aroma and benefits.',
        icon: '☀️',
        imageUrl: 'https://images.unsplash.com/photo-1571513200266-1d8c3d9bf2fb?w=400&h=300&fit=crop'
      },
      {
        id: 'wedang-step-3',
        title: 'Ingredient Selection',
        actor: 'Quality Master',
        location: 'Imogiri Workshop',
        description: 'Only premium quality spices selected for the blend.',
        icon: '✨'
      },
      {
        id: 'wedang-step-4',
        title: 'Traditional Blending',
        actor: 'Herbalist',
        location: 'Imogiri Workshop',
        description: 'Ingredients mixed according to ancestral recipe for perfect balance.',
        icon: '🧪',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'wedang-step-5',
        title: 'Quality Testing',
        actor: 'Taster',
        location: 'Imogiri Workshop',
        description: 'Each batch tested for aroma, taste, and quality.',
        icon: '☕',
        imageUrl: 'https://images.unsplash.com/photo-1597318970834-a57ae9eb4f4d?w=400&h=300&fit=crop'
      },
      {
        id: 'wedang-step-6',
        title: 'Packaging',
        actor: 'Packaging Team',
        location: 'Imogiri',
        description: 'Packed in airtight bags to maintain freshness and aroma.',
        icon: '📦',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Pak Joko Susilo',
    artisanExperience: 25,
    artisanQuote: 'Wedang uwuh menghangatkan tubuh dan menenangkan jiwa, seperti yang dimaksudkan leluhur kami.',
    artisanQuoteLocal: 'Wedang uwuh anget awak lan ayem jiwa, kaya sing dikarepake leluhur kita.',
    culturalValue: 'Wedang uwuh is a traditional Javanese herbal drink that represents hospitality and wellness culture.'
  }
]

export const quizzes: Record<string, QuizQuestion[]> = {
  'batik-001': [
    {
      id: 'q1',
      question: 'What traditional material is used to create the resist pattern in batik?',
      options: ['Clay', 'Wax', 'Paper', 'Salt'],
      correct: 1,
      explanation: 'Hot wax is applied to the fabric to create resist patterns. Where wax is applied, dye cannot penetrate.'
    },
    {
      id: 'q2',
      question: 'What does Mega Mendung motif symbolize in Sundanese culture?',
      options: ['Rain and water', 'Protection and prosperity', 'War and conflict', 'Death and mourning'],
      correct: 1,
      explanation: 'Mega Mendung symbolizes protection and the continuous flow of prosperity in Sundanese cultural beliefs.'
    },
    {
      id: 'q3',
      question: 'How long does it typically take to hand-draw one batik piece?',
      options: ['2-3 hours', '5-7 hours', '8-12 hours', '20-24 hours'],
      correct: 2,
      explanation: 'Master artisans spend 8-12 hours hand-drawing intricate patterns with wax, making each piece truly unique.'
    }
  ],
  'batik-002': [
    {
      id: 'q1',
      question: 'What does Parang Rusak pattern represent?',
      options: ['Peace', 'Warrior strength', 'Nature', 'Wealth'],
      correct: 1,
      explanation: 'Parang Rusak pattern represents warrior strength and confidence in Javanese tradition.'
    },
    {
      id: 'q2',
      question: 'How many dye baths are used in Parang Rusak batik?',
      options: ['One', 'Two', 'Multiple', 'Random'],
      correct: 2,
      explanation: 'Multiple indigo dye baths create the deep, rich color characteristic of classic batik.'
    },
    {
      id: 'q3',
      question: 'Where is Parang Rusak batik traditionally made?',
      options: ['Bandung', 'Yogyakarta', 'Solo', 'Semarang'],
      correct: 2,
      explanation: 'Parang Rusak is traditional to Solo batik-making heritage.'
    }
  ],
  'snacks-001': [
    {
      id: 'q1',
      question: 'What is the main ingredient in tahu goreng?',
      options: ['Rice', 'Beans', 'Soybeans', 'Wheat'],
      correct: 2,
      explanation: 'Tofu is made from soybeans. High-quality soybeans are processed into soy milk, then coagulated into tofu.'
    },
    {
      id: 'q2',
      question: 'At what time of day does Mak Sumi start making tofu?',
      options: ['8:00 AM', '12:00 PM', '5:00 AM', '6:00 PM'],
      correct: 2,
      explanation: 'Tofu making begins at 5:00 AM to ensure fresh product reaches the market by mid-morning.'
    },
    {
      id: 'q3',
      question: 'What makes tahu goreng crispy?',
      options: ['Salt coating', 'Deep frying in oil', 'Sun drying', 'Baking'],
      correct: 1,
      explanation: 'Deep frying tofu in premium oil creates the crispy exterior while keeping the inside soft.'
    }
  ],
  'snacks-002': [
    {
      id: 'q1',
      question: 'What is the crepe wrapper made from?',
      options: ['Wheat flour', 'Rice flour', 'Corn flour', 'Tapioca'],
      correct: 1,
      explanation: 'Lumpia crepes are made from premium rice flour and water mixed to perfect consistency.'
    },
    {
      id: 'q2',
      question: 'How many generations has the recipe been passed down?',
      options: ['One', 'Two', 'Three', 'Four'],
      correct: 2,
      explanation: 'The recipe comes from grandmother\'s original recipe, passed down through family generations.'
    },
    {
      id: 'q3',
      question: 'What makes lumpia healthy?',
      options: ['No MSG', 'Fresh ingredients', 'No preservatives', 'All of above'],
      correct: 3,
      explanation: 'Lumpia Ibu Retno is made with all fresh ingredients, no MSG, and no artificial preservatives.'
    }
  ],
  'crafts-001': [
    {
      id: 'q1',
      question: 'What material is wayang kulit traditionally made from?',
      options: ['Wood', 'Paper', 'Buffalo leather', 'Fabric'],
      correct: 2,
      explanation: 'Wayang kulit is made from carefully selected buffalo leather, which allows light to pass through for shadow effects.'
    },
    {
      id: 'q2',
      question: 'How many hours can it take to carve a single wayang puppet?',
      options: ['10-15 hours', '30-50 hours', '70-90 hours', '120+ hours'],
      correct: 1,
      explanation: 'A master carver invests 30-50 hours per puppet, creating intricate details and openwork patterns.'
    },
    {
      id: 'q3',
      question: 'What is the cultural significance of wayang kulit?',
      options: ['Just entertainment', 'Voice of ancestors and cultural conscience', 'Religious ritual only', 'Historical record'],
      correct: 1,
      explanation: 'Wayang kulit is not merely entertainment—it carries philosophical values and moral teachings from ancestors.'
    }
  ],
  'crafts-002': [
    {
      id: 'q1',
      question: 'What is the base coat color for Cirebon masks?',
      options: ['Black', 'Red', 'White', 'Gold'],
      correct: 2,
      explanation: 'A white base coat is applied before painting vibrant colors on Cirebon masks.'
    },
    {
      id: 'q2',
      question: 'Topeng masks are used in which performance?',
      options: ['Theater', 'Dance', 'Ceremony', 'All'],
      correct: 3,
      explanation: 'Topeng masks are central to Cirebon\'s mask dance and cultural ceremonies.'
    },
    {
      id: 'q3',
      question: 'What material is the mask base made from?',
      options: ['Clay', 'Wood', 'Paper', 'Metal'],
      correct: 1,
      explanation: 'Topeng masks are carved from lightweight wood suitable for wearing during performances.'
    }
  ],
  'woven-001': [
    {
      id: 'q1',
      question: 'What traditional weaving technique creates the ikat pattern?',
      options: ['Block printing', 'Thread resist tying', 'Screen printing', 'Digital embroidery'],
      correct: 1,
      explanation: 'Threads are carefully tied before dyeing to create resist patterns. When ties are removed, the pattern appears.'
    },
    {
      id: 'q2',
      question: 'How long can it take to hand-weave one piece of tenun ikat?',
      options: ['5-10 hours', '20-30 hours', '40-80 hours', '100+ hours'],
      correct: 2,
      explanation: 'Master weavers spend 40-80 hours on traditional wooden looms, making each piece a labor of love.'
    },
    {
      id: 'q3',
      question: 'What color dyes are traditionally used in Lombok weaving?',
      options: ['Synthetic chemicals only', 'Natural plant-based dyes', 'Mineral-based dyes', 'Food coloring'],
      correct: 1,
      explanation: 'Tenun ikat uses natural dyes extracted from plants, creating vibrant authentic colors.'
    }
  ],
  'woven-002': [
    {
      id: 'q1',
      question: 'What makes songket fabric special?',
      options: ['Silk threads', 'Gold/silver threads', 'Cotton only', 'Synthetic'],
      correct: 1,
      explanation: 'Songket fabric is woven with gold and silver metallic threads for luxury and prestige.'
    },
    {
      id: 'q2',
      question: 'When is songket traditionally worn?',
      options: ['Daily', 'Royal ceremonies', 'Casual events', 'Never'],
      correct: 1,
      explanation: 'Songket is traditionally worn during royal ceremonies, festivals, and special celebratory occasions.'
    },
    {
      id: 'q3',
      question: 'Songket is especially famous from which region?',
      options: ['Yogyakarta', 'Bandung', 'Palembang', 'Surabaya'],
      correct: 2,
      explanation: 'Palembang is famous for producing the finest songket fabric in Indonesia.'
    }
  ],
  'pottery-001': [
    {
      id: 'q1',
      question: 'Where is Kasongan pottery clay extracted from?',
      options: ['Mountains', 'Riverbank', 'City area', 'Ocean'],
      correct: 1,
      explanation: 'High-quality natural clay is dug from the Kasongan riverbank using traditional methods.'
    },
    {
      id: 'q2',
      question: 'How long does pottery take to air dry?',
      options: ['1 day', '3 days', 'Several days', 'One week'],
      correct: 2,
      explanation: 'Shaped pottery is left to dry naturally for several days before firing.'
    },
    {
      id: 'q3',
      question: 'What type of kiln is used for firing?',
      options: ['Electric kiln', 'Gas kiln', 'Wood-burning kiln', 'Solar kiln'],
      correct: 2,
      explanation: 'Traditional wood-burning kilns are used to fire Kasongan pottery.'
    }
  ],
  'pottery-002': [
    {
      id: 'q1',
      question: 'What is the main function of periuk tanah liat?',
      options: ['Decoration', 'Cooking', 'Storage', 'Display'],
      correct: 1,
      explanation: 'Periuk is functional earthenware cookware perfect for traditional Indonesian cooking.'
    },
    {
      id: 'q2',
      question: 'What is removed from clay before molding?',
      options: ['Water', 'Stones and impurities', 'Color', 'Heat'],
      correct: 1,
      explanation: 'Stones and impurities are removed during clay refinement process.'
    },
    {
      id: 'q3',
      question: 'How is each pot tested for quality?',
      options: ['Visual inspection', 'Durability test', 'Function test', 'All above'],
      correct: 3,
      explanation: 'Each pot is tested thoroughly for durability, function, and quality before sale.'
    }
  ],
  'herbal-001': [
    {
      id: 'q1',
      question: 'How long has Ibu Citra been making traditional jamu?',
      options: ['10 years', '20 years', '30 years', '40 years'],
      correct: 2,
      explanation: 'Ibu Citra has been brewing traditional jamu for over 30 years with family recipes.'
    },
    {
      id: 'q2',
      question: 'What is jamu made from?',
      options: ['Artificial flavors', 'Natural herbs and spices', 'Sugar water', 'Chemicals'],
      correct: 1,
      explanation: 'Traditional jamu is made from 100% natural herbs and spices with no artificial additives.'
    },
    {
      id: 'q3',
      question: 'What does jamu represent in Indonesian culture?',
      options: ['Modern medicine', 'Ancestral healing wisdom', 'Western remedy', 'Commercial product'],
      correct: 1,
      explanation: 'Jamu represents centuries of ancestral Indonesian healing practices and wellness knowledge.'
    }
  ],
  'herbal-002': [
    {
      id: 'q1',
      question: 'What is the main benefit of wedang uwuh?',
      options: ['Cooling', 'Warmth and wellness', 'Weight loss', 'Sleep aid'],
      correct: 1,
      explanation: 'Wedang uwuh provides warmth and promotes wellness through natural spices and herbs.'
    },
    {
      id: 'q2',
      question: 'What are the main ingredients in wedang uwuh?',
      options: ['Coffee and sugar', 'Ginger, cloves, cinnamon, herbs', 'Tea leaves', 'Fruit juice'],
      correct: 1,
      explanation: 'Traditional wedang uwuh is made from ginger, cloves, cinnamon, and various natural herbs.'
    },
    {
      id: 'q3',
      question: 'How long has Pak Joko been making wedang uwuh?',
      options: ['10 years', '15 years', '25 years', '30 years'],
      correct: 2,
      explanation: 'Pak Joko Susilo has been preserving the traditional recipe for over 25 years.'
    }
  ]
}
