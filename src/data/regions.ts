export interface RegionProduct {
  id: string
  name: string
  category: string
  umkm: string
  emoji: string
}

export interface Region {
  id: string
  name: string
  emoji: string
  description: string
  products: RegionProduct[]
}

export const regions: Region[] = [
  // ===== PULAU BESAR =====
  {
    id: 'java',
    name: 'Pulau Jawa',
    emoji: '🏝️',
    description: 'Pusat kerajinan tangan Indonesia dengan tradisi batik, wayang kulit, dan keramik terkenal dunia.',
    products: [
      { id: 'java-1', name: 'Batik Parang Rusak', category: 'Batik', umkm: 'Batik Tulis Klasik', emoji: '🎨' },
      { id: 'java-2', name: 'Wayang Kulit', category: 'Crafts', umkm: 'Wayang Kulit Yogyakarta', emoji: '🎭' },
      { id: 'java-3', name: 'Gerabah Kasongan', category: 'Pottery', umkm: 'Sentra Kasongan', emoji: '🏺' },
      { id: 'java-4', name: 'Jamu Tradisional', category: 'Herbal', umkm: 'Jamu Mak Citra', emoji: '🌿' },
      { id: 'java-5', name: 'Tahu Goreng Pedas', category: 'Snacks', umkm: 'Mak Sumi Bandung', emoji: '🍴' }
    ]
  },
  {
    id: 'sumatra',
    name: 'Pulau Sumatra',
    emoji: '🏝️',
    description: 'Kaya dengan tekstil tradisional, kopi premium, dan kerajinan tangan dari berbagai suku.',
    products: [
      { id: 'sumatra-1', name: 'Kain Songket Palembang', category: 'Woven', umkm: 'Songket Premium', emoji: '🧵' },
      { id: 'sumatra-2', name: 'Minyak Kayu Putih', category: 'Herbal', umkm: 'Essential Oil Ambon', emoji: '🧴' },
      { id: 'sumatra-3', name: 'Tenun Ulos Batak', category: 'Woven', umkm: 'Tenun Tradisional', emoji: '🧶' },
      { id: 'sumatra-4', name: 'Kopi Arabika Gayo', category: 'Snacks', umkm: 'Kopi Specialty', emoji: '☕' },
      { id: 'sumatra-5', name: 'Batik Jambi Modern', category: 'Batik', umkm: 'Batik Jambi', emoji: '🎨' }
    ]
  },
  {
    id: 'kalimantan',
    name: 'Pulau Kalimantan',
    emoji: '🏝️',
    description: 'Warisan budaya Dayak dengan ukiran kayu, anyaman rotan, dan kerajinan tradisional unik.',
    products: [
      { id: 'kalimantan-1', name: 'Ukiran Kayu Dayak', category: 'Crafts', umkm: 'Ukir Tradisional', emoji: '🎭' },
      { id: 'kalimantan-2', name: 'Anyaman Rotan', category: 'Crafts', umkm: 'Kerajinan Rotan', emoji: '🧺' },
      { id: 'kalimantan-3', name: 'Batik Kalimantan', category: 'Batik', umkm: 'Batik Lokal', emoji: '🎨' },
      { id: 'kalimantan-4', name: 'Tepung Ubi Premium', category: 'Snacks', umkm: 'Pangan Lokal', emoji: '🍴' },
      { id: 'kalimantan-5', name: 'Perhiasan Kuningan', category: 'Crafts', umkm: 'Logam Tradisional', emoji: '⚒️' }
    ]
  },
  {
    id: 'sulawesi',
    name: 'Pulau Sulawesi',
    emoji: '🏝️',
    description: 'Kekayaan budaya Bugis, Makassar, dan Minahasa dengan kerajinan laut dan darat yang memukau.',
    products: [
      { id: 'sulawesi-1', name: 'Tenun Ikat Sulawesi', category: 'Woven', umkm: 'Tenun Sulawesi', emoji: '🧵' },
      { id: 'sulawesi-2', name: 'Ikan Asap Tradisional', category: 'Snacks', umkm: 'Pangan Laut', emoji: '🍴' },
      { id: 'sulawesi-3', name: 'Kayu Cendana Ukir', category: 'Crafts', umkm: 'Kerajinan Kayu', emoji: '🎭' },
      { id: 'sulawesi-4', name: 'Batik Makassar', category: 'Batik', umkm: 'Batik Makassar', emoji: '🎨' },
      { id: 'sulawesi-5', name: 'Obat Tradisional Herbal', category: 'Herbal', umkm: 'Herbal Organik', emoji: '🌿' }
    ]
  },
  {
    id: 'papua',
    name: 'Pulau Papua',
    emoji: '🏝️',
    description: 'Budaya asli Papua dengan kerajinan unik, tekstil tradisional, dan seni ukir yang autentik.',
    products: [
      { id: 'papua-1', name: 'Tenun Papua Asli', category: 'Woven', umkm: 'Tenun Tradisional', emoji: '🧵' },
      { id: 'papua-2', name: 'Ukir Kayu Papua', category: 'Crafts', umkm: 'Seni Ukir', emoji: '🎭' },
      { id: 'papua-3', name: 'Tas Anyaman Papua', category: 'Crafts', umkm: 'Anyaman Lokal', emoji: '🧺' },
      { id: 'papua-4', name: 'Sagu Tradisional', category: 'Snacks', umkm: 'Pangan Lokal', emoji: '🍴' },
      { id: 'papua-5', name: 'Madu Hutan Papua', category: 'Herbal', umkm: 'Madu Organik', emoji: '🍯' }
    ]
  },

  // ===== PULAU KECIL TERKENAL =====
  {
    id: 'bali',
    name: 'Pulau Bali',
    emoji: '🏖️',
    description: 'Surga wisata dengan kerajinan seni tradisional Bali, ukiran, dan batik Bali yang terkenal.',
    products: [
      { id: 'bali-1', name: 'Batik Bali', category: 'Batik', umkm: 'Batik Bali Tradisional', emoji: '🎨' },
      { id: 'bali-2', name: 'Ukir Kayu Bali', category: 'Crafts', umkm: 'Ukir Bali', emoji: '🎭' },
      { id: 'bali-3', name: 'Silver Jewelry Ubud', category: 'Crafts', umkm: 'Perak Ubud', emoji: '✨' },
      { id: 'bali-4', name: 'Kopi Luwak Bali', category: 'Snacks', umkm: 'Kopi Premium', emoji: '☕' },
      { id: 'bali-5', name: 'Obat Herbal Tradisional', category: 'Herbal', umkm: 'Herbal Bali', emoji: '🌿' }
    ]
  },
  {
    id: 'lombok',
    name: 'Pulau Lombok',
    emoji: '🏖️',
    description: 'Destinasi wisata dengan tenun ikat terkenal, keramik, dan kerajinan lokal yang autentik.',
    products: [
      { id: 'lombok-1', name: 'Tenun Ikat Lombok', category: 'Woven', umkm: 'Tenun Songket', emoji: '🧵' },
      { id: 'lombok-2', name: 'Keramik Lombok', category: 'Pottery', umkm: 'Keramik Tradisional', emoji: '🏺' },
      { id: 'lombok-3', name: 'Tas Anyaman', category: 'Crafts', umkm: 'Anyaman Lokal', emoji: '🧺' },
      { id: 'lombok-4', name: 'Garam Laut Lombok', category: 'Snacks', umkm: 'Garam Organik', emoji: '🍴' },
      { id: 'lombok-5', name: 'Minyak Tradisional', category: 'Herbal', umkm: 'Essential Oil', emoji: '🧴' }
    ]
  },
  {
    id: 'flores',
    name: 'Pulau Flores',
    emoji: '🏖️',
    description: 'Kaya dengan budaya lokal, tenun ikat yang indah, dan kerajinan tangan tradisional Flores.',
    products: [
      { id: 'flores-1', name: 'Tenun Ikat Flores', category: 'Woven', umkm: 'Tenun Flores', emoji: '🧵' },
      { id: 'flores-2', name: 'Ukiran Lokal Flores', category: 'Crafts', umkm: 'Seni Lokal', emoji: '🎭' },
      { id: 'flores-3', name: 'Keramik Flores', category: 'Pottery', umkm: 'Gerabah Flores', emoji: '🏺' },
      { id: 'flores-4', name: 'Kopi Flores Arabika', category: 'Snacks', umkm: 'Kopi Lokal', emoji: '☕' },
      { id: 'flores-5', name: 'Obat Herbal Lokal', category: 'Herbal', umkm: 'Herbal Flores', emoji: '🌿' }
    ]
  },
  {
    id: 'madura',
    name: 'Pulau Madura',
    emoji: '🏖️',
    description: 'Pulau penghasil batik, keramik, dan makanan tradisional yang kaya akan budaya lokal.',
    products: [
      { id: 'madura-1', name: 'Batik Madura', category: 'Batik', umkm: 'Batik Madura Asli', emoji: '🎨' },
      { id: 'madura-2', name: 'Keramik Madura', category: 'Pottery', umkm: 'Gerabah Madura', emoji: '🏺' },
      { id: 'madura-3', name: 'Ukiran Kayu', category: 'Crafts', umkm: 'Kerajinan Kayu', emoji: '🎭' },
      { id: 'madura-4', name: 'Soto Ayam Madura', category: 'Snacks', umkm: 'Kuliner Madura', emoji: '🍴' },
      { id: 'madura-5', name: 'Obat Tradisional', category: 'Herbal', umkm: 'Herbal Madura', emoji: '🌿' }
    ]
  },
  {
    id: 'bangka-belitung',
    name: 'Kepulauan Bangka-Belitung',
    emoji: '🏖️',
    description: 'Kepulauan dengan kerajinan laut, batik lokal, dan produk tradisional yang unik.',
    products: [
      { id: 'bangka-1', name: 'Batik Belitung', category: 'Batik', umkm: 'Batik Lokal', emoji: '🎨' },
      { id: 'bangka-2', name: 'Keramik Tradisional', category: 'Pottery', umkm: 'Gerabah Lokal', emoji: '🏺' },
      { id: 'bangka-3', name: 'Anyaman Lokal', category: 'Crafts', umkm: 'Kerajinan Tangan', emoji: '🧺' },
      { id: 'bangka-4', name: 'Seafood Kering', category: 'Snacks', umkm: 'Produk Laut', emoji: '🍴' },
      { id: 'bangka-5', name: 'Minyak Tradisional', category: 'Herbal', umkm: 'Essential Oil', emoji: '🧴' }
    ]
  }
]