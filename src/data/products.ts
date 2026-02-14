import { Product, QuizQuestion } from '../types/product'

export const products: Product[] = [
  // ===== BATIK =====
  {
    id: 'batik-001',
    name: 'Batik Mega Mendung',
    umkm: 'Batik Tulis Setono',
    umkmStory: 'Didirikan pada tahun 1995, Batik Tulis Setono telah menghasilkan batik tulis tradisional berkualitas tinggi dari Cirebon selama lebih dari 25 tahun, melestarikan kerajinan warisan leluhur.',
    village: 'Cirebon, West Java',
    category: 'batik',
    description: 'Traditional Gambar Tangan batik with Mega Mendung motif, symbolizing protection and prosperity in Sundanese culture.',
    imageUrl: '/assets/img/batik-mega-mendung.jpg',
    ethicalBadges: ['100% Tulis Tangan', 'Perdagangan Adil', 'Pewarna Ramah Lingkungan', 'Bersertifikat Pengrajin'],
    steps: [
      {
        id: 'batik-step-1',
        title: 'Pemanenan Kapas',
        actor: 'Petani Lokal',
        location: 'Ladang Jawa Barat',
        description: 'Kapas premium dipanen dari pertanian berkelanjutan di Jawa Barat dengan metode organik, memastikan kualitas serat terbaik dan praktik pertanian yang ramah lingkungan.',
        icon: 'I',
        imageUrl: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop'
      },
      {
        id: 'batik-step-2',
        title: 'Persiapan dan Pencucian Kain',
        actor: 'Tim Persiapan',
        location: 'Workshop Cirebon',
        description: 'Kain mori dari kapas dicuci bersih, dikeringkan di bawah sinar matahari, kemudian disetrika untuk menghilangkan kotoran dan minyak agar siap menerima lilin dan pewarna.',
        icon: 'II',
        imageUrl: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop'
      },
      {
        id: 'batik-step-3',
        title: 'Pembatikan dengan Canting',
        actor: 'Pengrajin Batik',
        location: 'Workshop Cirebon',
        description: 'Pengrajin terampil menggambar motif Mega Mendung menggunakan canting berisi lilin malam panas. Proses ini membutuhkan ketelitian tinggi dan memakan waktu 8-12 jam per kain.',
        icon: 'III',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'batik-step-4',
        title: 'Pewarnaan dengan Pewarna Alami',
        actor: 'Ahli Pewarna',
        location: 'Workshop Cirebon',
        description: 'Kain dicelupkan ke dalam larutan pewarna indigo alami yang berasal dari tumbuhan. Proses pencelupan dilakukan berulang kali untuk mendapatkan warna biru tua yang khas dan tahan lama.',
        icon: 'IV',
        imageUrl: 'https://images.unsplash.com/photo-1536228637022-db989d6c8e5b?w=400&h=300&fit=crop'
      },
      {
        id: 'batik-step-5',
        title: 'Pelorodan (Pelepasan Lilin)',
        actor: 'Tim Finishing',
        location: 'Workshop Cirebon',
        description: 'Kain direbus dalam air panas untuk melepaskan lilin malam, sehingga motif batik yang indah terlihat jelas. Kemudian kain dicuci bersih dan dikeringkan.',
        icon: 'V',
        imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop'
      },
      {
        id: 'batik-step-6',
        title: 'Kontrol Kualitas dan Pengemasan',
        actor: 'Tim Kontrol Kualitas',
        location: 'Gudang Cirebon',
        description: 'Setiap lembar kain batik diperiksa secara teliti untuk memastikan kualitas motif dan warna. Kemudian dikemas dengan rapi menggunakan bahan ramah lingkungan untuk dikirim ke konsumen.',
        icon: 'VI',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Ibu Siti Nurhaliza',
    artisanExperience: 28,
    artisanQuote: 'Setiap pola menceritakan kisah leluhur kami. Saya hanya penjaga tradisi indah ini.',
    artisanQuoteLocal: 'Unggal pola nyaritakeun carita karuhun urang. Abdi ngan ukur panjaga tradisi geulis ieu.',
    culturalValue: 'Mega Mendung melambangkan perlindungan dan aliran kemakmuran yang berkelanjutan dalam budaya Sunda.'
  },

  {
    id: 'batik-002',
    name: 'Batik Parang Rusak',
    umkm: 'Batik Tulis Klasik',
    umkmStory: 'Lebih dari 30 tahun melestarikan warisan budaya, menciptakan motif ikonik Parang Rusak yang menjadi ciri khas batik Solo.',
    village: 'Solo, Central Java',
    category: 'batik',
    description: 'Classic Parang Rusak motif representing warrior strength and confidence.',
    imageUrl: '/assets/img/batik-parang-rusak.png',
    ethicalBadges: ['Pola Warisan', 'Bahan Alami', 'Autentik Solo'],
    steps: [
      {
        id: 'batik2-step-1',
        title: 'Pemilihan Benang Kapas',
        actor: 'Ahli Benang',
        location: 'Solo',
        description: 'Benang kapas berkualitas tinggi dipilih dengan cermat berdasarkan kekuatan serat dan kehalusan tekstur untuk menghasilkan kain batik yang tahan lama.',
        icon: 'I',
        imageUrl: 'https://images.unsplash.com/photo-1617635279887-4e5d75e5a09d?w=400&h=300&fit=crop'
      },
      {
        id: 'batik2-step-2',
        title: 'Perancangan Pola Parang Rusak',
        actor: 'Desainer Batik',
        location: 'Workshop Solo',
        description: 'Pola Parang Rusak yang merupakan motif klasik keraton dirancang dengan presisi tinggi mengikuti pakem tradisional yang telah diwariskan turun-temurun.',
        icon: 'II',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'batik2-step-3',
        title: 'Pembatikan dengan Lilin Malam',
        actor: 'Pembatik Ahli',
        location: 'Workshop Solo',
        description: 'Lilin malam panas diaplikasikan dengan canting mengikuti pola Parang Rusak untuk membuat lapisan pelindung pada kain sebelum proses pewarnaan.',
        icon: 'III',
        imageUrl: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop'
      },
      {
        id: 'batik2-step-4',
        title: 'Pencelupan Pewarna Indigo',
        actor: 'Ahli Pewarna',
        location: 'Workshop Solo',
        description: 'Kain dicelupkan berulang kali ke dalam larutan pewarna indigo alami untuk mendapatkan gradasi warna biru yang dalam dan merata.',
        icon: 'IV',
        imageUrl: 'https://images.unsplash.com/photo-1536228637022-db989d6c8e5b?w=400&h=300&fit=crop'
      },
      {
        id: 'batik2-step-5',
        title: 'Pelorodan Lilin',
        actor: 'Tim Finishing',
        location: 'Workshop Solo',
        description: 'Lilin malam dilelehkan dengan cara direbus dalam air mendidih sehingga motif batik Parang Rusak yang indah terungkap dengan sempurna.',
        icon: 'V',
        imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop'
      },
      {
        id: 'batik2-step-6',
        title: 'Pemeriksaan dan Pengemasan',
        actor: 'Tim Kontrol Kualitas',
        location: 'Solo',
        description: 'Batik diperiksa secara menyeluruh untuk memastikan kualitas motif dan warna, kemudian dikemas dengan rapi untuk siap dipasarkan.',
        icon: 'VI',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Pak Santoso',
    artisanExperience: 32,
    artisanQuote: 'Parang Rusak membawa semangat leluhur prajurit kami.',
    artisanQuoteLocal: 'Parang Rusak nggawa semangat leluhur prajurit kita.',
    culturalValue: 'Melambangkan kekuatan dan martabat prajurit dalam tradisi Jawa.'
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
    imageUrl: '/assets/img/rendang-padang.jpg',
    ethicalBadges: ['Resep Tradisional', 'Tanpa Pengawet', 'Bersertifikat Halal', 'Dimasak Lambat'],
    steps: [
      {
        id: 'rendang-step-1',
        title: 'Penggilingan Bumbu Segar',
        actor: 'Ahli Bumbu',
        location: 'Dapur Padang',
        description: 'Bumbu-bumbu segar seperti cabai merah, bawang merah, bawang putih, lengkuas, jahe, kunyit, dan serai digiling halus menjadi pasta bumbu yang aromanya harum.',
        icon: 'I',
        imageUrl: 'https://images.unsplash.com/photo-1596040995857-ba42d16cb0f2?w=400&h=300&fit=crop'
      },
      {
        id: 'rendang-step-2',
        title: 'Pemilihan Daging Sapi Premium',
        actor: 'Ahli Daging',
        location: 'Pasar Padang',
        description: 'Daging sapi bagian has dalam atau sandung lamur dipilih dengan teliti untuk mendapatkan tekstur yang empuk dan kualitas terbaik.',
        icon: 'II',
        imageUrl: 'https://images.unsplash.com/photo-1588347818036-8fc8d1d6b7b7?w=400&h=300&fit=crop'
      },
      {
        id: 'rendang-step-3',
        title: 'Pemerasan Santan Kelapa',
        actor: 'Spesialis Santan',
        location: 'Dapur Padang',
        description: 'Santan segar diperas dari kelapa lokal pilihan untuk menghasilkan santan kental yang akan memberikan cita rasa gurih dan creamy pada rendang.',
        icon: 'III',
        imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784422?w=400&h=300&fit=crop'
      },
      {
        id: 'rendang-step-4',
        title: 'Pemasakan Lambat Tradisional',
        actor: 'Juru Masak Ahli',
        location: 'Dapur Padang',
        description: 'Daging dimasak bersama bumbu dan santan dengan api kecil selama 4-6 jam sambil terus diaduk agar bumbu meresap sempurna dan daging menjadi empuk.',
        icon: 'IV',
        imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop'
      },
      {
        id: 'rendang-step-5',
        title: 'Proses Karamelisasi',
        actor: 'Juru Masak Ahli',
        location: 'Dapur Padang',
        description: 'Memasak dilanjutkan hingga minyak kelapa terpisah dan daging berubah warna menjadi coklat kehitaman dengan tekstur kering dan bumbu yang menempel sempurna.',
        icon: 'V',
        imageUrl: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?w=400&h=300&fit=crop'
      },
      {
        id: 'rendang-step-6',
        title: 'Pengemasan Vakum',
        actor: 'Tim Pengemasan',
        location: 'Padang',
        description: 'Rendang yang sudah matang sempurna dikemas dengan sistem vakum untuk menjaga kesegaran, aroma, dan cita rasa autentik hingga sampai ke tangan konsumen.',
        icon: 'VI',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Mak Uni',
    artisanExperience: 35,
    artisanQuote: 'Rendang bukan sekadar makanan, ini warisan kami yang dimasak dengan kesabaran dan cinta.',
    artisanQuoteLocal: 'Randang indak cuma makanan, ko warisan kami nan dimasak jo kasabaran dan cinto.',
    culturalValue: 'Rendang merupakan keunggulan kuliner Minangkabau dan disajikan pada upacara-upacara penting.'
  },

  {
    id: 'makanan-002',
    name: 'Mendoan Khas Banyumas',
    umkm: 'Mendoan Pak Karso',
    umkmStory: 'Didirikan pada tahun 1985, Mendoan Pak Karso telah menyajikan mendoan khas Banyumas yang autentik selama lebih dari 35 tahun, melestarikan resep tradisional yang diwariskan turun-temurun.',
    village: 'Banyumas, Central Java',
    category: 'makanan',
    description: 'Thin-sliced tempe coated in crispy batter with aromatic herbs, a beloved traditional snack from Banyumas region.',
    imageUrl: '/assets/img/mendoan-banyumas.png',
    ethicalBadges: ['Resep Tradisional', 'Tanpa Pengawet', 'Buatan Tangan', 'Rempah Lokal'],
    steps: [
      {
        id: 'mendoan-step-1',
        title: 'Pemilihan Kedelai Berkualitas',
        actor: 'Petani Lokal',
        location: 'Wilayah Banyumas',
        description: 'Kedelai lokal berkualitas premium dipilih dari petani Banyumas yang menerapkan sistem pertanian berkelanjutan untuk menghasilkan tempe terbaik.',
        icon: 'I',
        imageUrl: 'https://images.unsplash.com/photo-1599599810694-2a7a49d60908?w=400&h=300&fit=crop'
      },
      {
        id: 'mendoan-step-2',
        title: 'Fermentasi Tempe Tipis',
        actor: 'Ahli Fermentasi',
        location: 'Workshop Banyumas',
        description: 'Kedelai yang sudah direbus difermentasi menggunakan ragi tradisional selama 24-36 jam untuk membuat tempe tipis khas mendoan dengan tekstur yang pas.',
        icon: 'II',
        imageUrl: 'https://images.unsplash.com/photo-1576866209365-74ba233f3f48?w=400&h=300&fit=crop'
      },
      {
        id: 'mendoan-step-3',
        title: 'Pemotongan Tempe Tipis',
        actor: 'Tim Persiapan',
        location: 'Dapur Banyumas',
        description: 'Tempe diiris sangat tipis dengan ketebalan sekitar 3-5 mm, yang merupakan ciri khas mendoan agar menghasilkan tekstur renyah di luar namun tetap lembut di dalam.',
        icon: 'III',
        imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'
      },
      {
        id: 'mendoan-step-4',
        title: 'Pembuatan Adonan Bumbu',
        actor: 'Spesialis Adonan',
        location: 'Dapur Banyumas',
        description: 'Adonan tepung terigu dicampur dengan daun bawang iris, bawang putih halus, ketumbar bubuk, garam, dan air hingga menghasilkan adonan kental yang berbumbu.',
        icon: 'IV',
        imageUrl: 'https://images.unsplash.com/photo-1596040995857-ba42d16cb0f2?w=400&h=300&fit=crop'
      },
      {
        id: 'mendoan-step-5',
        title: 'Penggorengan Setengah Matang',
        actor: 'Juru Goreng',
        location: 'Dapur Banyumas',
        description: 'Tempe yang sudah dicelup adonan digoreng setengah matang dengan minyak panas bersuhu sedang, menciptakan tekstur khas mendoan yang lembut di dalam dan renyah di luar.',
        icon: 'V',
        imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
      },
      {
        id: 'mendoan-step-6',
        title: 'Penyajian dan Pengemasan',
        actor: 'Tim Pengemasan',
        location: 'Banyumas',
        description: 'Mendoan yang baru digoreng disajikan hangat atau dikemas dalam wadah kedap udara untuk menjaga kerenyahan dan kesegaran hingga sampai ke konsumen.',
        icon: 'VI',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Pak Karso',
    artisanExperience: 35,
    artisanQuote: 'Mendoan adalah kebanggaan Banyumas. Setiap gigitan membawa rasa kampung halaman.',
    artisanQuoteLocal: 'Mendoan kuwi kebanggaan Banyumas. Saben gigitan nggawa rasa kampung halaman.',
    culturalValue: 'Mendoan adalah camilan tradisional Banyumas yang merepresentasikan warisan kuliner dan keramahan hangat masyarakat Jawa Tengah.'
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
    ethicalBadges: ['Bahan Segar', 'Tanpa MSG', 'Resep Tradisional', 'Buatan Tangan Wrappers'],
    steps: [
      {
        id: 'lumpia-step-1',
        title: 'Penggilingan Tepung Beras',
        actor: 'Penggiling',
        location: 'Semarang',
        description: 'Beras lokal berkualitas premium digiling menjadi tepung halus yang akan digunakan sebagai bahan dasar kulit lumpia yang lembut dan kenyal.',
        icon: 'I',
        imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop'
      },
      {
        id: 'lumpia-step-2',
        title: 'Pembuatan Adonan Kulit',
        actor: 'Pembuat Kulit',
        location: 'Dapur Semarang',
        description: 'Tepung beras dicampur dengan air dan sedikit garam hingga membentuk adonan cair yang halus untuk membuat kulit lumpia yang tipis.',
        icon: 'II',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'lumpia-step-3',
        title: 'Pembuatan Kulit Lumpia',
        actor: 'Ahli Kulit Lumpia',
        location: 'Dapur Semarang',
        description: 'Adonan cair dituang tipis di atas wajan panas anti lengket dan dimasak sebentar hingga membentuk kulit lumpia yang tipis, lembut, dan tidak mudah robek.',
        icon: 'III',
        imageUrl: 'https://images.unsplash.com/photo-1556910110-a5a63dfd393c?w=400&h=300&fit=crop'
      },
      {
        id: 'lumpia-step-4',
        title: 'Persiapan Isian Sayuran',
        actor: 'Tim Isian',
        location: 'Dapur Semarang',
        description: 'Rebung, wortel, dan sayuran segar lainnya dipotong halus kemudian ditumis bersama daging ayam cincang dan bumbu rempah hingga matang dan harum.',
        icon: 'IV',
        imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop'
      },
      {
        id: 'lumpia-step-5',
        title: 'Penggulungan Lumpia',
        actor: 'Pembungkus',
        location: 'Dapur Semarang',
        description: 'Isian sayuran dan daging diletakkan di atas kulit lumpia, kemudian digulung dengan rapi dan hati-hati agar isian tidak keluar dan bentuknya sempurna.',
        icon: 'V',
        imageUrl: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=300&fit=crop'
      },
      {
        id: 'lumpia-step-6',
        title: 'Pengemasan Siap Saji',
        actor: 'Tim Pengemasan',
        location: 'Semarang',
        description: 'Lumpia basah yang sudah jadi dikemas dalam kotak makanan yang aman dan higienis, siap untuk dikirim atau disajikan langsung kepada konsumen.',
        icon: 'VI',
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
    name: 'Wayang Kulit Diukir Tangan',
    umkm: 'Wayang Kulit Yogyakarta Artisan',
    umkmStory: 'Studio kerajinan keluarga yang melestarikan seni wayang kulit sejak 1987, melatih generasi baru dalam kerajinan warisan UNESCO ini.',
    village: 'Yogyakarta, Special Region',
    category: 'kerajinan',
    description: 'Hand-carved leather shadow puppets, intricate pieces of theatrical art that tell stories of Indonesian heritage.',
    imageUrl: '/assets/img/wayang-kulit.png',
    ethicalBadges: ['Diukir Tangan', 'Warisan UNESCO', 'Pelestarian Budaya', 'Kerajinan Master'],
    steps: [
      {
        id: 'craft-step-1',
        title: 'Pemilihan Kulit Kerbau',
        actor: 'Ahli Pemilih Kulit',
        location: 'Studio Yogyakarta',
        description: 'Kulit kerbau berkualitas premium dipilih dengan cermat berdasarkan ketebalan, kekuatan, dan fleksibilitas yang sesuai untuk pembuatan wayang kulit yang tahan lama.',
        icon: 'I',
        imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop'
      },
      {
        id: 'craft-step-2',
        title: 'Pemindahan Pola ke Kulit',
        actor: 'Desainer Wayang',
        location: 'Studio Yogyakarta',
        description: 'Desain karakter wayang tradisional seperti Arjuna, Bima, atau Srikandi dipindahkan ke kulit yang sudah disiapkan menggunakan pola yang telah diwariskan turun-temurun.',
        icon: 'II',
        imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop'
      },
      {
        id: 'craft-step-3',
        title: 'Pengukiran Detail Rumit',
        actor: 'Pengukir Ahli',
        location: 'Studio Yogyakarta',
        description: 'Setiap detail wayang diukir dengan sangat teliti menggunakan pahat dan alat tradisional. Proses ini membutuhkan keahlian tinggi dan waktu 30-50 jam per wayang.',
        icon: 'III',
        imageUrl: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=300&fit=crop'
      },
      {
        id: 'craft-step-4',
        title: 'Penusukan Pola Bayangan',
        actor: 'Spesialis Detail',
        location: 'Studio Yogyakarta',
        description: 'Detail halus ditusuk dengan alat khusus untuk menciptakan lubang-lubang kecil yang akan menghasilkan efek bayangan indah saat wayang dimainkan di belakang layar.',
        icon: 'IV',
        imageUrl: 'https://images.unsplash.com/photo-1565193566173-7cba06dab0d4?w=400&h=300&fit=crop'
      },
      {
        id: 'craft-step-5',
        title: 'Pewarnaan dengan Pigmen Alami',
        actor: 'Ahli Pewarna',
        location: 'Studio Yogyakarta',
        description: 'Pigmen warna dari bahan alami berbasis tumbuhan diaplikasikan dengan hati-hati untuk mewarnai wayang, meningkatkan keindahan visual dan nilai teatrikalnya.',
        icon: 'V',
        imageUrl: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop'
      },
      {
        id: 'craft-step-6',
        title: 'Pemasangan Gagang dan Inspeksi',
        actor: 'Perakit Ahli',
        location: 'Studio Yogyakarta',
        description: 'Gagang dari tanduk kerbau atau kayu dipasang pada wayang, kemudian setiap wayang menjalani inspeksi kualitas menyeluruh sebelum siap dipasarkan.',
        icon: 'VI',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Ki Purbo',
    artisanExperience: 35,
    artisanQuote: 'Wayang bukan hanya seni—ini adalah suara leluhur kami, hati nurani rakyat kami.',
    artisanQuoteLocal: 'Wayang dudu mung seni—iki swara leluhur kita, ati nurani wong kita.',
    culturalValue: 'Wayang kulit adalah warisan budaya takbenda yang diakui UNESCO yang merepresentasikan nilai-nilai filosofis Indonesia.'
  },

  {
    id: 'crafts-002',
    name: 'Topeng Cirebon Buatan Tangan',
    umkm: 'Topeng Cirebon Heritage',
    umkmStory: 'Selama 20 tahun menciptakan seni topeng tradisional untuk pertunjukan teater dan upacara budaya.',
    village: 'Cirebon, West Java',
    category: 'kerajinan',
    description: 'Buatan Tangan wooden masks with vibrant colors, used in traditional Cirebon mask dance.',
    imageUrl: '/assets/img/topeng-cirebon.png',
    ethicalBadges: ['Kerajinan Tangan', 'Seni Tradisional', 'Cat Alami'],
    steps: [
      {
        id: 'topeng-step-1',
        title: 'Pemilihan Kayu Ringan',
        actor: 'Ahli Kayu',
        location: 'Cirebon',
        description: 'Kayu ringan seperti kayu pule atau kayu sengon dipilih dengan cermat karena bobotnya yang ringan namun kuat, cocok untuk topeng yang akan dikenakan dalam pertunjukan tari.',
        icon: 'I',
        imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop'
      },
      {
        id: 'topeng-step-2',
        title: 'Pengukiran Bentuk Wajah',
        actor: 'Pengukir Ahli',
        location: 'Studio Cirebon',
        description: 'Kayu diukir dengan pahat untuk membentuk karakter topeng seperti Panji, Samba, atau Rumyang dengan ekspresi wajah yang khas sesuai karakter dalam tari topeng Cirebon.',
        icon: 'II',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'topeng-step-3',
        title: 'Penghalusan Permukaan',
        actor: 'Tim Finishing',
        location: 'Studio Cirebon',
        description: 'Permukaan topeng diamplas dengan halus menggunakan amplas bertingkat dari kasar hingga halus agar permukaan menjadi mulus dan siap untuk dicat.',
        icon: 'III',
        imageUrl: 'https://images.unsplash.com/photo-1565193566173-7cba06dab0d4?w=400&h=300&fit=crop'
      },
      {
        id: 'topeng-step-4',
        title: 'Pengecatan Dasar Putih',
        actor: 'Pelukis',
        location: 'Studio Cirebon',
        description: 'Cat dasar berwarna putih diaplikasikan secara merata ke seluruh permukaan topeng sebagai lapisan dasar sebelum pewarnaan detail.',
        icon: 'IV',
        imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop'
      },
      {
        id: 'topeng-step-5',
        title: 'Pewarnaan dan Detail',
        actor: 'Seniman Pelukis',
        location: 'Studio Cirebon',
        description: 'Warna-warna cerah khas Cirebon seperti merah, hijau, dan emas dilukis dengan detail pada mata, hidung, mulut, dan ornamen topeng untuk menghidupkan karakter.',
        icon: 'V',
        imageUrl: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop'
      },
      {
        id: 'topeng-step-6',
        title: 'Pemasangan Tali Pengikat',
        actor: 'Perakit',
        location: 'Studio Cirebon',
        description: 'Tali elastis atau karet dipasang pada kedua sisi topeng agar dapat dikenakan dengan nyaman oleh penari, kemudian topeng siap untuk digunakan atau dipasarkan.',
        icon: 'VI',
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
    umkmStory: 'Melestarikan tradisi tenun berusia 200+ tahun dari Lombok, mendukung 40+ pengrajin dan keluarga mereka.',
    village: 'Lombok, Nusa Tenggara Barat',
    category: 'tenun',
    description: 'Tenun Tangan ikat fabric with intricate geometric patterns, using traditional techniques passed down for generations.',
    imageUrl: '/assets/img/tenun-ikat-lombok.jpg',
    ethicalBadges: ['Tenun Tangan', 'Perdagangan Adil Certified', 'Dukungan Pengrajin', 'Warisan 200\+ Tahun'],
    steps: [
      {
        id: 'woven-step-1',
        title: 'Persiapan Benang Kapas',
        actor: 'Ahli Persiapan Benang',
        location: 'Desa Lombok',
        description: 'Benang kapas berkualitas tinggi dipilih dan diorganisir berdasarkan warna yang diinginkan, kemudian digulung pada kumparan siap untuk proses pewarnaan ikat.',
        icon: 'I',
        imageUrl: 'https://images.unsplash.com/photo-1617635279887-4e5d75e5a09d?w=400&h=300&fit=crop'
      },
      {
        id: 'woven-step-2',
        title: 'Pengikatan Pola Resist',
        actor: 'Pengrajin Pengikat',
        location: 'Workshop Lombok',
        description: 'Benang diikat dengan sangat hati-hati menggunakan tali rafia pada bagian-bagian tertentu untuk membuat pola resist yang akan menghalangi pewarna masuk ke bagian yang diikat.',
        icon: 'II',
        imageUrl: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop'
      },
      {
        id: 'woven-step-3',
        title: 'Pewarnaan dengan Pewarna Alami',
        actor: 'Ahli Pewarna',
        location: 'Workshop Lombok',
        description: 'Benang yang sudah diikat direndam dalam larutan pewarna alami dari tumbuhan seperti indigo, mengkudu, atau kunyit untuk menghasilkan warna-warna cerah yang tahan lama.',
        icon: 'III',
        imageUrl: 'https://images.unsplash.com/photo-1596040995857-ba42d16cb0f2?w=400&h=300&fit=crop'
      },
      {
        id: 'woven-step-4',
        title: 'Proses Menenun Manual',
        actor: 'Penenun Ahli',
        location: 'Desa Lombok',
        description: 'Benang yang telah diwarnai ditenun dengan tangan menggunakan alat tenun kayu tradisional (ATBM). Proses ini membutuhkan ketelitian tinggi dan waktu 40-80 jam per kain.',
        icon: 'IV',
        imageUrl: 'https://images.unsplash.com/photo-1565193566173-7cba06dab0d4?w=400&h=300&fit=crop'
      },
      {
        id: 'woven-step-5',
        title: 'Finishing dan Penyetrikaan',
        actor: 'Tim Finishing',
        location: 'Workshop Lombok',
        description: 'Kain tenun yang sudah selesai dirapikan, dipotong ujung-ujungnya, kemudian disetrika dengan hati-hati dan diperiksa kualitas serta presisi pola ikatnya.',
        icon: 'V',
        imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop'
      },
      {
        id: 'woven-step-6',
        title: 'Pengemasan Ramah Lingkungan',
        actor: 'Tim Ekspor',
        location: 'Gudang Lombok',
        description: 'Kain tenun ikat dikemas menggunakan bahan ramah lingkungan seperti kertas daur ulang dan disiapkan untuk distribusi dengan sistem perdagangan yang adil.',
        icon: 'VI',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Pak Wayan',
    artisanExperience: 42,
    artisanQuote: 'Kakek saya mengajari ayah saya, ayah saya mengajari saya, dan sekarang saya mengajari putri saya. Ini warisan kami.',
    artisanQuoteLocal: 'Kaki tiang ngajahin bapa tiang, bapa tiang ngajahin tiang, tur mangkin tiang ngajahin pianak tiang. Puniki warisan tiange.',
    culturalValue: 'Tenun ikat merepresentasikan identitas budaya dan kepercayaan spiritual masyarakat Lombok.'
  },

  {
    id: 'woven-002',
    name: 'Kain Songket Palembang',
    umkm: 'Songket Palembang Premium',
    umkmStory: 'Selama 25 tahun menciptakan kain songket mewah dengan benang emas dan perak untuk upacara kerajaan.',
    village: 'Palembang, South Sumatra',
    category: 'tenun',
    description: 'Luxury Tenun Tangan fabric with gold and silver thread accents, traditionally worn for special occasions.',
    imageUrl: '/assets/img/kain-songket-palembang.png',
    ethicalBadges: ['Benang Emas', 'Kualitas Kerajaan', 'Tenun Tangan', 'Pakaian Festival'],
    steps: [
      {
        id: 'songket-step-1',
        title: 'Pengadaan Benang Premium',
        actor: 'Ahli Benang',
        location: 'Palembang',
        description: 'Benang sutra berkualitas tinggi dan benang metalik emas atau perak diperoleh dari supplier terpercaya untuk menghasilkan songket yang mewah dan berkilau.',
        icon: 'I',
        imageUrl: 'https://images.unsplash.com/photo-1617635279887-4e5d75e5a09d?w=400&h=300&fit=crop'
      },
      {
        id: 'songket-step-2',
        title: 'Pengorganisasian Benang',
        actor: 'Pengorganisir',
        location: 'Workshop Palembang',
        description: 'Benang sutra dan benang emas/perak dipisahkan dan diorganisir berdasarkan warna dan jenis untuk memudahkan proses menenun yang kompleks.',
        icon: 'II',
        imageUrl: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop'
      },
      {
        id: 'songket-step-3',
        title: 'Pengaturan Alat Tenun',
        actor: 'Ahli Alat Tenun',
        location: 'Workshop Palembang',
        description: 'Alat tenun tradisional disiapkan dengan memasang benang lungsin dan pakan, serta mengatur ketegangan benang agar proses menenun berjalan lancar.',
        icon: 'III',
        imageUrl: 'https://images.unsplash.com/photo-1565193566173-7cba06dab0d4?w=400&h=300&fit=crop'
      },
      {
        id: 'songket-step-4',
        title: 'Menenun dengan Benang Emas',
        actor: 'Penenun Ahli',
        location: 'Workshop Palembang',
        description: 'Benang emas atau perak ditenun dengan sangat hati-hati mengikuti pola motif songket yang rumit seperti bunga, burung, atau geometris khas Palembang.',
        icon: 'IV',
        imageUrl: 'https://images.unsplash.com/photo-1617635279887-4e5d75e5a09d?w=400&h=300&fit=crop'
      },
      {
        id: 'songket-step-5',
        title: 'Inspeksi Kualitas Detail',
        actor: 'Inspektur Kualitas',
        location: 'Workshop Palembang',
        description: 'Setiap bagian kain songket diperiksa dengan teliti untuk memastikan pola benang emas tertenun dengan sempurna dan tidak ada cacat pada kain.',
        icon: 'V',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'songket-step-6',
        title: 'Pengemasan Mewah',
        actor: 'Tim Pengemasan',
        location: 'Palembang',
        description: 'Songket yang sudah jadi dikemas dalam kotak premium dengan lapisan pelindung untuk menjaga kualitas dan kemewahan kain hingga sampai ke tangan konsumen.',
        icon: 'VI',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Ibu Mariamah',
    artisanExperience: 25,
    artisanQuote: 'Songket is the crown of Palembang culture.',
    culturalValue: 'Songket melambangkan prestise dan dikenakan untuk upacara kerajaan dan perayaan.'
  },

  // ===== POTTERY (NEW) =====
  {
    id: 'pottery-001',
    name: 'Gerabah Kasongan Tradisional',
    umkm: 'Gerabah Kasongan Sentra',
    umkmStory: 'Lebih dari 40 tahun melestarikan teknik gerabah tradisional di Kasongan, mendukung seluruh komunitas pengrajin.',
    village: 'Bantul, Yogyakarta',
    category: 'gerabah',
    description: 'Buatan Tangan pottery with traditional Javanese motifs, crafted using ancient clay and firing techniques.',
    imageUrl: '/assets/img/gerabah-kosongan.png',
    ethicalBadges: ['Buatan Tangan', 'Tanah Liat Alami', 'Ikon Budaya', 'Komunitas Pengrajin'],
    steps: [
      {
        id: 'pottery-step-1',
        title: 'Penggalian Tanah Liat',
        actor: 'Penambang Tanah Liat',
        location: 'Tepi Sungai Kasongan',
        description: 'Tanah liat alami berkualitas tinggi digali dengan hati-hati dari tepi sungai Kasongan menggunakan metode tradisional yang ramah lingkungan.',
        icon: 'I',
        imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a7167e67?w=400&h=300&fit=crop'
      },
      {
        id: 'pottery-step-2',
        title: 'Persiapan dan Pengulenan Tanah Liat',
        actor: 'Tim Persiapan',
        location: 'Workshop Kasongan',
        description: 'Tanah liat dibersihkan dari kotoran, kemudian diuleni berulang kali dengan menambahkan air secukupnya hingga mencapai tekstur yang pas untuk dibentuk.',
        icon: 'II',
        imageUrl: 'https://images.unsplash.com/photo-1576066211575-d60bbb31ac0e?w=400&h=300&fit=crop'
      },
      {
        id: 'pottery-step-3',
        title: 'Pembentukan dengan Roda Putar',
        actor: 'Pembuat Gerabah Ahli',
        location: 'Workshop Kasongan',
        description: 'Tanah liat dibentuk menjadi berbagai wadah seperti guci, vas, atau piring menggunakan roda putar manual dengan teknik yang telah diwariskan turun-temurun.',
        icon: 'III',
        imageUrl: 'https://images.unsplash.com/photo-1565193566173-7cba06dab0d4?w=400&h=300&fit=crop'
      },
      {
        id: 'pottery-step-4',
        title: 'Pengeringan Alami',
        actor: 'Tim Pengeringan',
        location: 'Workshop Kasongan',
        description: 'Gerabah yang sudah dibentuk dibiarkan mengering secara alami di bawah sinar matahari selama beberapa hari hingga kadar airnya berkurang dan siap untuk dibakar.',
        icon: 'IV',
        imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a7167e67?w=400&h=300&fit=crop'
      },
      {
        id: 'pottery-step-5',
        title: 'Pembakaran dalam Tungku Tradisional',
        actor: 'Ahli Tungku',
        location: 'Tungku Kasongan',
        description: 'Gerabah dibakar dalam tungku pembakaran kayu tradisional dengan suhu tinggi selama berjam-jam untuk menghasilkan gerabah yang keras, kuat, dan tahan lama.',
        icon: 'V',
        imageUrl: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400&h=300&fit=crop'
      },
      {
        id: 'pottery-step-6',
        title: 'Pengecatan Motif Tradisional',
        actor: 'Seniman Pelukis',
        location: 'Workshop Kasongan',
        description: 'Motif tradisional Jawa seperti batik, wayang, atau flora fauna dilukis dengan cat pada permukaan gerabah untuk menambah nilai estetika dan budaya.',
        icon: 'VI',
        imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Pak Sulaiman',
    artisanExperience: 38,
    artisanQuote: 'Tanah liat menghubungkan kami dengan bumi dan tradisi, setiap karya membawa roh leluhur kami.',
    artisanQuoteLocal: 'Lempung nyambungake kita karo bumi lan tradhisi, saben karya nggawa roh leluhur kita.',
    culturalValue: 'Gerabah Kasongan memupuk identitas komunitas dan melestarikan warisan seni Jawa.'
  },

  {
    id: 'pottery-002',
    name: 'Periuk Tanah Liat Bandung',
    umkm: 'Periuk Bandung Heritage',
    umkmStory: 'Pembuat periuk tanah liat tradisional untuk memasak, melestarikan keterampilan kerajinan gerabah kuno.',
    village: 'Bandung, West Java',
    category: 'gerabah',
    description: 'Functional earthenware cookware, perfect for traditional Indonesian cooking methods.',
    imageUrl: '/assets/img/periuk-tanah-liat.png',
    ethicalBadges: ['Seni Fungsional', 'Tanah Liat Alami', 'Ramah Lingkungan', 'Traditional'],
    steps: [
      {
        id: 'periuk-step-1',
        title: 'Penambangan Tanah Liat',
        actor: 'Penambang',
        location: 'Bandung',
        description: 'Tanah liat berkualitas baik digali dari lokasi penambangan di sekitar Bandung yang kaya akan deposit tanah liat alami untuk pembuatan periuk.',
        icon: 'I',
        imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a7167e67?w=400&h=300&fit=crop'
      },
      {
        id: 'periuk-step-2',
        title: 'Penyaringan dan Pembersihan',
        actor: 'Penyaring',
        location: 'Workshop Bandung',
        description: 'Tanah liat disaring untuk membuang batu, kerikil, dan kotoran lainnya agar menghasilkan tanah liat yang bersih dan halus untuk dibentuk.',
        icon: 'II',
        imageUrl: 'https://images.unsplash.com/photo-1576066211575-d60bbb31ac0e?w=400&h=300&fit=crop'
      },
      {
        id: 'periuk-step-3',
        title: 'Pencetakan Bentuk Periuk',
        actor: 'Pencetak',
        location: 'Workshop Bandung',
        description: 'Tanah liat yang sudah bersih dibentuk menjadi periuk dengan tangan atau menggunakan cetakan tradisional sesuai ukuran yang diinginkan.',
        icon: 'III',
        imageUrl: 'https://images.unsplash.com/photo-1565193566173-7cba06dab0d4?w=400&h=300&fit=crop'
      },
      {
        id: 'periuk-step-4',
        title: 'Pemasangan Pegangan',
        actor: 'Perakit',
        location: 'Workshop Bandung',
        description: 'Pegangan atau telinga periuk dipasang pada kedua sisi periuk dengan hati-hati agar kuat dan tidak mudah lepas saat digunakan untuk memasak.',
        icon: 'IV',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'periuk-step-5',
        title: 'Pembakaran dalam Tungku',
        actor: 'Ahli Tungku',
        location: 'Tungku Bandung',
        description: 'Periuk dibakar dalam tungku tradisional dengan suhu tinggi untuk mengeras dan menjadi tahan panas, siap digunakan untuk memasak.',
        icon: 'V',
        imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a7167e67?w=400&h=300&fit=crop'
      },
      {
        id: 'periuk-step-6',
        title: 'Pengujian Kualitas dan Fungsi',
        actor: 'Penguji',
        location: 'Workshop Bandung',
        description: 'Setiap periuk diuji daya tahan dan fungsinya untuk memastikan tidak ada retak atau cacat, serta aman digunakan untuk memasak makanan.',
        icon: 'VI',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Pak Hendra',
    artisanExperience: 22,
    artisanQuote: 'Good pottery makes good food. This is my craft.',
    culturalValue: 'Peralatan masak gerabah menghubungkan memasak dengan praktik budaya tradisional.'
  },

  // ===== HERBAL (NEW) =====
  {
    id: 'herbal-001',
    name: 'Jamu Tradisional Asli',
    umkm: 'Jamu Mak Citra Nusantara',
    umkmStory: 'Lebih dari 30 tahun meracik jamu tradisional Indonesia dengan resep keluarga asli.',
    village: 'Yogyakarta, Special Region',
    category: 'herbal',
    description: 'Authentic traditional herbal drink made from natural herbs and spices, no artificial additives.',
    imageUrl: '/assets/img/jamu-tradisional.png',
    ethicalBadges: ['100% Alami', 'Tanpa Tambahan', 'Resep Keluarga', 'Herbal Organik'],
    steps: [
      {
        id: 'jamu-step-1',
        title: 'Pemanenan Rempah dan Herbal',
        actor: 'Petani Herbal',
        location: 'Kebun Yogyakarta',
        description: 'Rempah-rempah dan tanaman herbal organik seperti kunyit, jahe, temulawak, dan kencur dipanen pada waktu yang tepat saat kandungan nutrisinya mencapai puncak.',
        icon: 'I',
        imageUrl: 'https://images.unsplash.com/photo-1597318970834-a57ae9eb4f4d?w=400&h=300&fit=crop'
      },
      {
        id: 'jamu-step-2',
        title: 'Pengeringan Alami',
        actor: 'Ahli Pengeringan',
        location: 'Workshop Yogyakarta',
        description: 'Rempah dan herbal yang sudah dipanen dikeringkan secara alami di bawah sinar matahari atau dalam ruangan berventilasi untuk menjaga kandungan khasiat dan aromanya.',
        icon: 'II',
        imageUrl: 'https://images.unsplash.com/photo-1571513200266-1d8c3d9bf2fb?w=400&h=300&fit=crop'
      },
      {
        id: 'jamu-step-3',
        title: 'Penggilingan Menjadi Bubuk',
        actor: 'Penggiling',
        location: 'Workshop Yogyakarta',
        description: 'Rempah dan herbal kering digiling menggunakan alat penggiling tradisional atau modern menjadi bubuk halus yang siap untuk dicampur.',
        icon: 'III',
        imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop'
      },
      {
        id: 'jamu-step-4',
        title: 'Pencampuran Formula Rahasia',
        actor: 'Herbalis Ahli',
        location: 'Workshop Yogyakarta',
        description: 'Berbagai bahan herbal dicampur sesuai resep tradisional turun-temurun dengan takaran yang tepat untuk menghasilkan jamu dengan khasiat optimal.',
        icon: 'IV',
        imageUrl: 'https://images.unsplash.com/photo-1596040995857-ba42d16cb0f2?w=400&h=300&fit=crop'
      },
      {
        id: 'jamu-step-5',
        title: 'Penyeduhan dan Ekstraksi',
        actor: 'Penyeduh',
        location: 'Dapur Yogyakarta',
        description: 'Campuran herbal diseduh dengan air panas atau direbus untuk mengekstrak semua kandungan khasiat dan menghasilkan minuman jamu yang siap dikonsumsi.',
        icon: 'V',
        imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop'
      },
      {
        id: 'jamu-step-6',
        title: 'Pembotolan dan Pengemasan',
        actor: 'Tim Pengemasan',
        location: 'Yogyakarta',
        description: 'Jamu yang sudah jadi dibotolkan dalam wadah kaca bersih atau dikemas dalam sachet untuk menjaga kualitas, kesegaran, dan khasiatnya hingga sampai ke konsumen.',
        icon: 'VI',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Ibu Citra',
    artisanExperience: 30,
    artisanQuote: 'Jamu bukan sekadar minuman, ini adalah kebijaksanaan penyembuhan dari leluhur kami.',
    artisanQuoteLocal: 'Jamu dudu mung unjukan, iki kawruh marasake sehat saka leluhur kita.',
    culturalValue: 'Jamu tradisional merepresentasikan berabad-abad praktik penyembuhan dan budaya kesehatan Indonesia.'
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
    ethicalBadges: ['100% Alami', 'Resep Tradisional', 'Rempah Organik', 'Tanpa Tambahan Gula'],
    steps: [
      {
        id: 'wedang-step-1',
        title: 'Pemanenan Rempah Segar',
        actor: 'Petani Lokal',
        location: 'Perbukitan Imogiri',
        description: 'Rempah-rempah segar seperti jahe merah, cengkeh, kayu manis, kapulaga, dan daun pandan dipanen dari kebun organik di perbukitan Imogiri yang sejuk.',
        icon: 'I',
        imageUrl: 'https://images.unsplash.com/photo-1597318970834-a57ae9eb4f4d?w=400&h=300&fit=crop'
      },
      {
        id: 'wedang-step-2',
        title: 'Pengeringan dengan Sinar Matahari',
        actor: 'Tim Pengeringan',
        location: 'Workshop Imogiri',
        description: 'Rempah-rempah yang sudah dipanen dijemur di bawah sinar matahari secara alami untuk mengurangi kadar air sambil mempertahankan aroma dan khasiat alaminya.',
        icon: 'II',
        imageUrl: 'https://images.unsplash.com/photo-1571513200266-1d8c3d9bf2fb?w=400&h=300&fit=crop'
      },
      {
        id: 'wedang-step-3',
        title: 'Seleksi Bahan Berkualitas',
        actor: 'Ahli Kualitas',
        location: 'Workshop Imogiri',
        description: 'Hanya rempah-rempah dengan kualitas terbaik yang dipilih untuk campuran wedang uwuh, memastikan aroma harum dan rasa yang khas.',
        icon: 'III',
        imageUrl: 'https://images.unsplash.com/photo-1597318970834-a57ae9eb4f4d?w=400&h=300&fit=crop'
      },
      {
        id: 'wedang-step-4',
        title: 'Pencampuran Resep Tradisional',
        actor: 'Herbalis',
        location: 'Workshop Imogiri',
        description: 'Berbagai rempah dicampur dengan proporsi yang tepat sesuai resep leluhur untuk menghasilkan keseimbangan rasa manis, pedas, dan hangat yang sempurna.',
        icon: 'IV',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'wedang-step-5',
        title: 'Pengujian Rasa dan Aroma',
        actor: 'Pencicip',
        location: 'Workshop Imogiri',
        description: 'Setiap batch campuran wedang uwuh diuji dengan cara diseduh untuk memastikan aroma harum, rasa yang pas, dan kualitas yang konsisten.',
        icon: 'V',
        imageUrl: 'https://images.unsplash.com/photo-1597318970834-a57ae9eb4f4d?w=400&h=300&fit=crop'
      },
      {
        id: 'wedang-step-6',
        title: 'Pengemasan Kedap Udara',
        actor: 'Tim Pengemasan',
        location: 'Imogiri',
        description: 'Wedang uwuh dikemas dalam kantong atau wadah kedap udara untuk menjaga kesegaran aroma rempah dan mencegah kelembaban masuk hingga sampai ke tangan konsumen.',
        icon: 'VI',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Pak Joko Susilo',
    artisanExperience: 25,
    artisanQuote: 'Wedang uwuh menghangatkan tubuh dan menenangkan jiwa, seperti yang dimaksudkan leluhur kami.',
    artisanQuoteLocal: 'Wedang uwuh anget awak lan ayem jiwa, kaya sing dikarepake leluhur kita.',
    culturalValue: 'Wedang uwuh is a traditional Javanese herbal drink that represents hospitality and wellness culture.'
  },

  // ===== BATIK (NEW) =====
  {
    id: 'batik-003',
    name: 'Batik Kawung Yogyakarta',
    umkm: 'Batik Kawung Heritage',
    umkmStory: 'Preserving the sacred Kawung pattern for over 20 years, a motif once reserved for Javanese royalty.',
    village: 'Yogyakarta, Special Region',
    category: 'batik',
    description: 'Traditional batik with Kawung motif symbolizing purity and longevity in Javanese philosophy.',
    imageUrl: '/assets/img/batik-kawung.jpg',
    ethicalBadges: ['Pola Kerajaan', 'Gambar Tangan', 'Pewarna Alami', 'Kerajinan Warisan'],
    steps: [
      { id: 'batik3-s1', title: 'Persiapan Kain Mori', actor: 'Tim Persiapan', location: 'Yogyakarta', description: 'Kain mori putih berkualitas tinggi dicuci bersih dan dikeringkan untuk menghilangkan kanji dan kotoran, siap untuk proses pembatikan.', icon: 'I', imageUrl: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop' },
      { id: 'batik3-s2', title: 'Pembatikan Pola Kawung', actor: 'Pembatik Ahli', location: 'Yogyakarta', description: 'Motif Kawung yang merupakan pola sakral keraton digambar dengan canting berisi lilin malam panas mengikuti pakem tradisional yang ketat.', icon: 'II', imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop' },
      { id: 'batik3-s3', title: 'Pewarnaan Soga Alami', actor: 'Ahli Pewarna', location: 'Yogyakarta', description: 'Kain dicelupkan ke dalam pewarna soga alami yang berasal dari kulit pohon soga untuk menghasilkan warna coklat khas batik klasik Yogyakarta.', icon: 'III', imageUrl: 'https://images.unsplash.com/photo-1536228637022-db989d6c8e5b?w=400&h=300&fit=crop' },
      { id: 'batik3-s4', title: 'Pelorodan Lilin', actor: 'Tim Finishing', location: 'Yogyakarta', description: 'Lilin malam dilepaskan dengan cara direbus dalam air panas sehingga motif Kawung yang indah terlihat jelas pada kain.', icon: 'IV', imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
      { id: 'batik3-s5', title: 'Finishing dan Penyetrikaan', actor: 'Tim Kontrol Kualitas', location: 'Yogyakarta', description: 'Batik dicuci bersih, dikeringkan, kemudian disetrika dan diperiksa kualitasnya untuk memastikan motif sempurna tanpa cacat.', icon: 'V', imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop' },
      { id: 'batik3-s6', title: 'Pengemasan Ramah Lingkungan', actor: 'Tim Pengemasan', location: 'Yogyakarta', description: 'Batik Kawung dikemas dengan bahan ramah lingkungan seperti kertas kraft dan kain katun untuk menjaga kualitas dan kelestarian alam.', icon: 'VI', imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop' }
    ],
    artisanName: 'Ibu Ratna',
    artisanExperience: 20,
    artisanQuote: 'Kawung adalah simbol kesucian dan umur panjang dalam filosofi Jawa.',
    artisanQuoteLocal: 'Kawung iku simbol kesucian lan umur dawa ing filosofi Jawa.',
    culturalValue: 'Kawung pattern represents purity, longevity, and was historically reserved for Javanese royalty.'
  },

  // ===== KERAJINAN (NEW) =====
  {
    id: 'crafts-003',
    name: 'Keris Jawa Tradisional',
    umkm: 'Empu Keris Surakarta',
    umkmStory: 'Master blacksmith preserving the ancient art of keris making for over 30 years, following sacred traditions.',
    village: 'Surakarta, Central Java',
    category: 'kerajinan',
    description: 'Traditional Javanese ceremonial dagger with intricate patterns, Kerajinan Tangan by master blacksmith.',
    imageUrl: '/assets/img/keris-jawa.png',
    ethicalBadges: ['Kerajinan Master', 'Seni Sakral', 'Warisan UNESCO', 'Tempa Tangan'],
    steps: [
      { id: 'keris-s1', title: 'Pemilihan Besi Berkualitas', actor: 'Empu', location: 'Surakarta', description: 'Besi meteorit dan besi tua berkualitas tinggi dipilih dengan cermat sebagai bahan dasar pembuatan keris yang akan memiliki pamor indah.', icon: 'I', imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop' },
      { id: 'keris-s2', title: 'Penempaan Berulang', actor: 'Empu', location: 'Surakarta', description: 'Besi ditempa berulang kali dengan palu berat di atas landasan hingga mencapai lapisan yang diinginkan, proses yang membutuhkan kekuatan dan keahlian tinggi.', icon: 'II', imageUrl: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=300&fit=crop' },
      { id: 'keris-s3', title: 'Pembentukan Pola Pamor', actor: 'Empu', location: 'Surakarta', description: 'Pola pamor seperti beras wutah atau udan mas dibentuk dengan teknik khusus melipat dan menempa besi berlapis-lapis hingga menghasilkan motif yang indah.', icon: 'III', imageUrl: 'https://images.unsplash.com/photo-1565193566173-7cba06dab0d4?w=400&h=300&fit=crop' },
      { id: 'keris-s4', title: 'Pengasahan Bilah', actor: 'Pengasah', location: 'Surakarta', description: 'Bilah keris diasah dengan batu asah khusus hingga tajam dan mengkilap, memunculkan pola pamor yang tersembunyi di dalam logam.', icon: 'IV', imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop' },
      { id: 'keris-s5', title: 'Pembuatan Warangka (Sarung)', actor: 'Pengukir Kayu', location: 'Surakarta', description: 'Sarung keris dari kayu pilihan seperti kayu trembalo atau kayu sono diukir dengan motif tradisional yang indah dan presisi tinggi.', icon: 'V', imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop' },
      { id: 'keris-s6', title: 'Ritual Spiritual Penyelesaian', actor: 'Empu', location: 'Surakarta', description: 'Keris menjalani ritual spiritual dan doa-doa khusus oleh empu untuk memberikan kekuatan spiritual dan menyelesaikan proses pembuatan keris secara sakral.', icon: 'VI', imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop' }
    ],
    artisanName: 'Empu Suparman',
    artisanExperience: 30,
    artisanQuote: 'Keris bukan sekadar senjata, ini adalah jiwa dan kehormatan leluhur kami.',
    artisanQuoteLocal: 'Keris dudu mung sanjata, iki jiwa lan pakurmatan leluhur kita.',
    culturalValue: 'Keris is a sacred Javanese weapon representing spiritual power and cultural heritage.'
  },

  // ===== TENUN (NEW) =====
  {
    id: 'woven-003',
    name: 'Tenun Ulos Batak',
    umkm: 'Tenun Ulos Toba',
    umkmStory: 'Preserving Batak weaving tradition for 40+ years, creating Tekstil Sakrals for ceremonies.',
    village: 'Lake Toba, North Sumatra',
    category: 'tenun',
    description: 'Sacred Batak textile with symbolic patterns, traditionally used in important life ceremonies.',
    imageUrl: '/assets/img/tenun-ulos-batak.png',
    ethicalBadges: ['Tekstil Sakral', 'Tenun Tangan', 'Cultural Heritage', 'Pewarna Alami'],
    steps: [
      { id: 'ulos-s1', title: 'Persiapan Benang Kapas', actor: 'Penenun', location: 'Danau Toba', description: 'Benang kapas berkualitas tinggi disiapkan dan dipintal dengan tangan untuk menghasilkan benang yang kuat dan halus untuk tenun ulos.', icon: 'I', imageUrl: 'https://images.unsplash.com/photo-1617635279887-4e5d75e5a09d?w=400&h=300&fit=crop' },
      { id: 'ulos-s2', title: 'Pewarnaan dengan Pewarna Alami', actor: 'Ahli Pewarna', location: 'Danau Toba', description: 'Benang diwarnai menggunakan pewarna alami dari tumbuhan lokal seperti kulit kayu, daun, dan akar untuk menghasilkan warna merah, hitam, dan putih khas ulos.', icon: 'II', imageUrl: 'https://images.unsplash.com/photo-1596040995857-ba42d16cb0f2?w=400&h=300&fit=crop' },
      { id: 'ulos-s3', title: 'Pengaturan Alat Tenun Tradisional', actor: 'Penenun', location: 'Danau Toba', description: 'Alat tenun tradisional Batak disiapkan dengan memasang benang lungsin dan mengatur ketegangan benang agar proses menenun berjalan lancar.', icon: 'III', imageUrl: 'https://images.unsplash.com/photo-1565193566173-7cba06dab0d4?w=400&h=300&fit=crop' },
      { id: 'ulos-s4', title: 'Menenun Pola Simbolis', actor: 'Penenun Ahli', location: 'Danau Toba', description: 'Pola-pola simbolis khas Batak seperti tumpal, gorga, dan motif lainnya ditenun dengan tangan mengikuti tradisi yang telah diwariskan turun-temurun.', icon: 'IV', imageUrl: 'https://images.unsplash.com/photo-1565193566173-7cba06dab0d4?w=400&h=300&fit=crop' },
      { id: 'ulos-s5', title: 'Finishing dan Pemeriksaan', actor: 'Tim Finishing', location: 'Danau Toba', description: 'Kain ulos yang sudah selesai ditenun diperiksa dengan teliti untuk memastikan pola sempurna, kemudian dirapikan dan disetrika.', icon: 'V', imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop' },
      { id: 'ulos-s6', title: 'Pengemasan dengan Penuh Hormat', actor: 'Tim Pengemasan', location: 'Danau Toba', description: 'Ulos dikemas dengan penuh hormat dan kehati-hatian karena dianggap sebagai kain sakral yang membawa berkah dan kehangatan bagi penerimanya.', icon: 'VI', imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop' }
    ],
    artisanName: 'Ibu Tiurma',
    artisanExperience: 40,
    artisanQuote: 'Ulos adalah kehangatan dan kasih sayang yang ditenun untuk orang terkasih.',
    artisanQuoteLocal: 'Ulos on hangoluan dohot holong na tinun tu halak na dipangidoahon.',
    culturalValue: 'Ulos represents warmth, love, and blessing in Batak culture, essential for ceremonies.'
  },

  // ===== GERABAH (NEW) =====
  {
    id: 'pottery-003',
    name: 'Keramik Dinoyo Malang',
    umkm: 'Keramik Dinoyo Heritage',
    umkmStory: 'Traditional pottery village preserving ceramic art for over 50 years in Malang.',
    village: 'Dinoyo, Malang, East Java',
    category: 'gerabah',
    description: 'Decorative and functional ceramics with Glasir Berwarnas, Kerajinan Tangan by local artisans.',
    imageUrl: '/assets/img/keramik-dinoyo.jpg',
    ethicalBadges: ['Buatan Tangan', 'Glasir Berwarna', 'Kerajinan Desa', 'Ramah Lingkungan'],
    steps: [
      { id: 'dinoyo-s1', title: 'Penggalian Tanah Liat Lokal', actor: 'Penambang', location: 'Dinoyo', description: 'Tanah liat lokal berkualitas baik digali dari area Dinoyo yang terkenal dengan deposit tanah liatnya yang cocok untuk pembuatan keramik.', icon: 'I', imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a7167e67?w=400&h=300&fit=crop' },
      { id: 'dinoyo-s2', title: 'Pembentukan dengan Roda Putar', actor: 'Pembuat Keramik', location: 'Dinoyo', description: 'Tanah liat dibentuk menjadi berbagai bentuk seperti vas, piring, atau guci menggunakan roda putar dengan keterampilan tangan yang tinggi.', icon: 'II', imageUrl: 'https://images.unsplash.com/photo-1565193566173-7cba06dab0d4?w=400&h=300&fit=crop' },
      { id: 'dinoyo-s3', title: 'Pengeringan Alami', actor: 'Tim Pengeringan', location: 'Dinoyo', description: 'Keramik yang sudah dibentuk dijemur di bawah sinar matahari hingga kering sempurna dan siap untuk dibakar tahap pertama.', icon: 'III', imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a7167e67?w=400&h=300&fit=crop' },
      { id: 'dinoyo-s4', title: 'Pembakaran Pertama (Bisque)', actor: 'Ahli Tungku', location: 'Dinoyo', description: 'Keramik dibakar dalam tungku pada suhu tinggi untuk mengeras dan menjadi kuat, siap untuk proses glazing.', icon: 'IV', imageUrl: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400&h=300&fit=crop' },
      { id: 'dinoyo-s5', title: 'Pengecatan Glasir Warna', actor: 'Pelukis Keramik', location: 'Dinoyo', description: 'Glasir berwarna-warni khas Dinoyo seperti hijau, biru, kuning, dan merah diaplikasikan dengan kuas atau teknik celup untuk menciptakan keramik yang indah.', icon: 'V', imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop' },
      { id: 'dinoyo-s6', title: 'Pembakaran Kedua (Glaze Firing)', actor: 'Ahli Tungku', location: 'Dinoyo', description: 'Keramik yang sudah diglasir dibakar lagi pada suhu tinggi untuk melelehkan glasir sehingga menghasilkan permukaan yang mengkilap dan tahan lama.', icon: 'VI', imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a7167e67?w=400&h=300&fit=crop' }
    ],
    artisanName: 'Pak Bambang',
    artisanExperience: 28,
    artisanQuote: 'Keramik Dinoyo adalah warisan desa kami yang penuh warna.',
    artisanQuoteLocal: 'Keramik Dinoyo iku warisan desa kita sing kebak warna.',
    culturalValue: 'Dinoyo ceramics represent the vibrant artistic heritage of Malang pottery village.'
  },

  // ===== HERBAL (NEW) =====
  {
    id: 'herbal-003',
    name: 'Minyak Kayu Putih Ambon',
    umkm: 'Essential Oil Maluku',
    umkmStory: 'Producing authentic cajuput oil for over 45 years using traditional distillation methods.',
    village: 'Ambon, Maluku',
    category: 'herbal',
    description: 'Pure cajuput essential oil with Terapeutik properties, traditionally used for wellness.',
    imageUrl: '/assets/img/madu-hutan-sumbawa.png',
    ethicalBadges: ['100% Murni', 'Metode Tradisional', 'Terapeutik', 'Organik'],
    steps: [
      { id: 'kayu-s1', title: 'Pemanenan Daun Kayu Putih', actor: 'Petani', location: 'Ambon', description: 'Daun kayu putih segar dipanen dari pohon kayu putih (Melaleuca leucadendra) yang tumbuh di hutan Ambon pada pagi hari saat kandungan minyaknya optimal.', icon: 'I', imageUrl: 'https://images.unsplash.com/photo-1597318970834-a57ae9eb4f4d?w=400&h=300&fit=crop' },
      { id: 'kayu-s2', title: 'Penyortiran Daun Berkualitas', actor: 'Tim Sortir', location: 'Ambon', description: 'Daun kayu putih yang baru dipanen disortir untuk memilih hanya daun segar dan berkualitas tinggi, membuang daun yang rusak atau kering.', icon: 'II', imageUrl: 'https://images.unsplash.com/photo-1571513200266-1d8c3d9bf2fb?w=400&h=300&fit=crop' },
      { id: 'kayu-s3', title: 'Distilasi Uap Tradisional', actor: 'Operator Distilasi', location: 'Ambon', description: 'Daun kayu putih dimasukkan ke dalam alat distilasi uap tradisional dan dipanaskan dengan uap panas untuk mengekstrak minyak esensial dari daun.', icon: 'III', imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=300&fit=crop' },
      { id: 'kayu-s4', title: 'Pemisahan Minyak dari Air', actor: 'Teknisi', location: 'Ambon', description: 'Minyak kayu putih yang terekstrak dipisahkan dari air menggunakan metode dekantasi karena minyak lebih ringan dan mengapung di atas air.', icon: 'IV', imageUrl: 'https://images.unsplash.com/photo-1596040995857-ba42d16cb0f2?w=400&h=300&fit=crop' },
      { id: 'kayu-s5', title: 'Kontrol Kualitas dan Kemurnian', actor: 'Tim Kontrol Kualitas', location: 'Ambon', description: 'Minyak kayu putih diuji kualitas dan kemurniannya untuk memastikan kandungan cineole (senyawa aktif) mencapai standar dan tidak ada campuran bahan lain.', icon: 'V', imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop' },
      { id: 'kayu-s6', title: 'Pembotolan dalam Kaca Gelap', actor: 'Tim Pengemasan', location: 'Ambon', description: 'Minyak kayu putih murni dibotolkan dalam botol kaca berwarna gelap untuk melindungi dari cahaya dan menjaga kualitas serta khasiat terapeutiknya.', icon: 'VI', imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop' }
    ],
    artisanName: 'Pak Yusuf',
    artisanExperience: 45,
    artisanQuote: 'Minyak kayu putih Ambon adalah obat alami terbaik dari alam Maluku.',
    artisanQuoteLocal: 'Minyak kayu putih Ambon adalah obat alami terbaik dari alam Maluku.',
    culturalValue: 'Cajuput oil from Ambon is renowned for its Terapeutik quality and traditional healing properties.'
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
      options: ['Tanpa MSG', 'Bahan Segar', 'Tanpa Pengawet', 'All of above'],
      correct: 3,
      explanation: 'Lumpia Ibu Retno is made with all Bahan Segar, Tanpa MSG, and no artificial preservatives.'
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
      explanation: 'Tenun ikat uses Pewarna Alamis extracted from plants, creating vibrant authentic colors.'
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
      explanation: 'High-quality Tanah Liat Alami is dug from the Kasongan riverbank using Metode Tradisionals.'
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
      explanation: 'Ibu Citra has been brewing traditional jamu for over 30 years with Resep Keluargas.'
    },
    {
      id: 'q2',
      question: 'What is jamu made from?',
      options: ['Artificial flavors', 'Natural herbs and spices', 'Sugar water', 'Chemicals'],
      correct: 1,
      explanation: 'Traditional jamu is made from 100% Alami herbs and spices with no artificial additives.'
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
      explanation: 'Pak Joko Susilo has been preserving the Resep Tradisional for over 25 years.'
    }
  ]
}