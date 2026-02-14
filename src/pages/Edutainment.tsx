import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { QuizCard } from '../components/QuizCard'
import { 
  Map, Landmark, Trees, Palmtree, Bird, 
  Globe, Scale, Heart, Recycle, Award, Leaf, Search
} from 'lucide-react'

type Island = 'sumatra' | 'java' | 'kalimantan' | 'sulawesi' | 'papua'

interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correct: number
  explanation: string
}

const islandQuizzes: Record<Island, QuizQuestion[]> = {
  sumatra: [
    {
      id: 'sum-1',
      question: 'Kain Songket Palembang terkenal karena menggunakan benang apa?',
      options: ['Benang katun', 'Benang emas dan perak', 'Benang sutra biasa', 'Benang nilon'],
      correct: 1,
      explanation: 'Songket Palembang menggunakan benang emas dan perak yang ditenun untuk menciptakan kain mewah.'
    },
    {
      id: 'sum-2',
      question: 'Kapan Songket Palembang biasanya dikenakan?',
      options: ['Sehari-hari', 'Upacara kerajaan dan acara spesial', 'Olahraga', 'Tidur'],
      correct: 1,
      explanation: 'Songket adalah kain mewah yang dikenakan untuk upacara kerajaan, pernikahan, dan acara penting.'
    },
    {
      id: 'sum-3',
      question: 'Berapa lama pengalaman Ibu Mariamah membuat Songket?',
      options: ['10 tahun', '15 tahun', '25 tahun', '30 tahun'],
      correct: 2,
      explanation: 'Ibu Mariamah telah membuat Songket Palembang selama 25 tahun dengan kualitas premium.'
    },
    {
      id: 'sum-4',
      question: 'Apa yang membuat Songket Palembang istimewa?',
      options: ['Murah', 'Cepat dibuat', 'Ditenun tangan dengan benang emas', 'Bisa dicuci mesin'],
      correct: 2,
      explanation: 'Songket istimewa karena ditenun tangan dengan benang emas/perak, membutuhkan keahlian tinggi.'
    },
    {
      id: 'sum-5',
      question: 'Alat tradisional apa yang digunakan untuk membuat Songket?',
      options: ['Mesin jahit', 'Alat tenun tradisional', 'Printer', 'Komputer'],
      correct: 1,
      explanation: 'Songket dibuat menggunakan alat tenun tradisional yang dioperasikan secara manual.'
    },
    {
      id: 'sum-6',
      question: 'Songket Palembang melambangkan apa dalam budaya Sumatera?',
      options: ['Kesederhanaan', 'Prestise dan kemewahan', 'Kesedihan', 'Perang'],
      correct: 1,
      explanation: 'Songket melambangkan prestise, kemewahan, dan status sosial tinggi dalam budaya Palembang.'
    },
    {
      id: 'sum-7',
      question: 'Berapa lama waktu yang dibutuhkan untuk membuat satu kain Songket?',
      options: ['1 hari', '1 minggu', 'Beberapa minggu hingga bulan', '1 jam'],
      correct: 2,
      explanation: 'Membuat Songket membutuhkan waktu berminggu-minggu hingga berbulan-bulan karena kerumitan pola.'
    },
    {
      id: 'sum-8',
      question: 'Apa warna dominan yang sering digunakan dalam Songket Palembang?',
      options: ['Hitam putih', 'Emas, merah, dan hijau', 'Biru muda', 'Abu-abu'],
      correct: 1,
      explanation: 'Songket Palembang identik dengan warna emas, merah, dan hijau yang melambangkan kemewahan.'
    },
    {
      id: 'sum-9',
      question: 'Siapa yang biasanya menenun Songket?',
      options: ['Mesin otomatis', 'Penenun ahli perempuan', 'Anak-anak', 'Robot'],
      correct: 1,
      explanation: 'Songket biasanya ditenun oleh penenun ahli perempuan yang mewarisi keahlian turun-temurun.'
    },
    {
      id: 'sum-10',
      question: 'Apa yang membuat harga Songket mahal?',
      options: ['Bahan murah', 'Proses cepat', 'Benang emas dan proses rumit', 'Produksi massal'],
      correct: 2,
      explanation: 'Songket mahal karena menggunakan benang emas/perak dan proses pembuatan yang rumit dan lama.'
    }
  ],
  java: [
    {
      id: 'jav-1',
      question: 'Bahan tradisional apa yang digunakan untuk membuat pola resist pada batik?',
      options: ['Tanah liat', 'Lilin/malam panas', 'Kertas', 'Garam'],
      correct: 1,
      explanation: 'Lilin panas (malam) diaplikasikan pada kain untuk membuat pola resist, mencegah pewarna meresap.'
    },
    {
      id: 'jav-2',
      question: 'Motif Mega Mendung melambangkan apa dalam budaya Sunda?',
      options: ['Hujan dan air', 'Perlindungan dan kemakmuran', 'Perang', 'Kematian'],
      correct: 1,
      explanation: 'Mega Mendung melambangkan perlindungan dan aliran kemakmuran berkelanjutan dalam kepercayaan Sunda.'
    },
    {
      id: 'jav-3',
      question: 'Berapa lama waktu yang dibutuhkan untuk membuat satu kain batik tulis?',
      options: ['2-3 jam', '5-7 jam', '8-12 jam', '20-24 jam'],
      correct: 2,
      explanation: 'Pengrajin ahli menghabiskan 8-12 jam menggambar pola rumit dengan lilin, membuat setiap karya unik.'
    },
    {
      id: 'jav-4',
      question: 'Dari mana tanah liat untuk Gerabah Kasongan diambil?',
      options: ['Gunung', 'Tepi sungai', 'Kota', 'Laut'],
      correct: 1,
      explanation: 'Tanah liat berkualitas tinggi digali dari tepi sungai Kasongan menggunakan metode tradisional.'
    },
    {
      id: 'jav-5',
      question: 'Berapa lama pengalaman Ibu Citra membuat jamu tradisional?',
      options: ['10 tahun', '20 tahun', '30 tahun', '40 tahun'],
      correct: 2,
      explanation: 'Ibu Citra telah membuat jamu tradisional selama lebih dari 30 tahun dengan resep keluarga.'
    },
    {
      id: 'jav-6',
      question: 'Apa bahan utama dalam Keripik Tempe?',
      options: ['Tahu', 'Tempe dari kedelai fermentasi', 'Singkong', 'Kentang'],
      correct: 1,
      explanation: 'Keripik tempe dibuat dari tempe yang difermentasi dari kedelai premium.'
    },
    {
      id: 'jav-7',
      question: 'Wayang Kulit terbuat dari bahan apa?',
      options: ['Kayu', 'Kertas', 'Kulit kerbau', 'Kain'],
      correct: 2,
      explanation: 'Wayang kulit dibuat dari kulit kerbau pilihan yang memungkinkan cahaya menembus untuk efek bayangan.'
    },
    {
      id: 'jav-8',
      question: 'Berapa lama waktu untuk mengukir satu wayang kulit?',
      options: ['10-15 jam', '30-50 jam', '70-90 jam', '120+ jam'],
      correct: 1,
      explanation: 'Pengukir ahli menghabiskan 30-50 jam per wayang, menciptakan detail rumit dan pola terbuka.'
    },
    {
      id: 'jav-9',
      question: 'Wedang Uwuh terbuat dari bahan apa?',
      options: ['Kopi dan gula', 'Jahe, cengkeh, kayu manis, rempah', 'Daun teh', 'Jus buah'],
      correct: 1,
      explanation: 'Wedang uwuh tradisional dibuat dari jahe, cengkeh, kayu manis, dan berbagai rempah alami.'
    },
    {
      id: 'jav-10',
      question: 'Apa fungsi utama Periuk Tanah Liat?',
      options: ['Dekorasi', 'Memasak', 'Penyimpanan', 'Pajangan'],
      correct: 1,
      explanation: 'Periuk adalah peralatan masak dari tanah liat yang sempurna untuk metode memasak tradisional Indonesia.'
    }
  ],
  kalimantan: [
    {
      id: 'kal-1',
      question: 'Apa kerajinan khas yang terkenal dari Kalimantan?',
      options: ['Batik', 'Anyaman rotan dan mandau', 'Wayang', 'Songket'],
      correct: 1,
      explanation: 'Kalimantan terkenal dengan anyaman rotan berkualitas tinggi dan mandau (senjata tradisional Dayak).'
    },
    {
      id: 'kal-2',
      question: 'Suku apa yang terkenal dengan kerajinan tangan di Kalimantan?',
      options: ['Suku Jawa', 'Suku Dayak', 'Suku Sunda', 'Suku Minang'],
      correct: 1,
      explanation: 'Suku Dayak adalah pengrajin terampil yang melestarikan kerajinan tradisional Kalimantan.'
    },
    {
      id: 'kal-3',
      question: 'Bahan alami apa yang banyak digunakan untuk kerajinan Kalimantan?',
      options: ['Plastik', 'Rotan dan kayu', 'Logam', 'Kaca'],
      correct: 1,
      explanation: 'Rotan dan kayu dari hutan Kalimantan adalah bahan utama kerajinan tradisional.'
    },
    {
      id: 'kal-4',
      question: 'Apa fungsi Mandau dalam budaya Dayak?',
      options: ['Mainan', 'Senjata tradisional dan simbol budaya', 'Alat masak', 'Perhiasan'],
      correct: 1,
      explanation: 'Mandau adalah senjata tradisional Dayak yang juga melambangkan keberanian dan identitas budaya.'
    },
    {
      id: 'kal-5',
      question: 'Motif apa yang sering ditemukan pada kerajinan Dayak?',
      options: ['Motif geometris dan alam', 'Motif modern', 'Tidak ada motif', 'Motif abstrak'],
      correct: 0,
      explanation: 'Kerajinan Dayak menampilkan motif geometris dan alam yang sarat makna spiritual dan budaya.'
    },
    {
      id: 'kal-6',
      question: 'Anyaman rotan Kalimantan digunakan untuk membuat apa?',
      options: ['Hanya topi', 'Keranjang, tas, furniture', 'Pakaian', 'Sepatu'],
      correct: 1,
      explanation: 'Rotan dianyam menjadi berbagai produk seperti keranjang, tas, dan furniture berkualitas tinggi.'
    },
    {
      id: 'kal-7',
      question: 'Apa yang membuat kerajinan rotan Kalimantan berkualitas?',
      options: ['Murah', 'Rotan alami dan teknik anyaman tradisional', 'Cepat dibuat', 'Produksi massal'],
      correct: 1,
      explanation: 'Kualitas tinggi berasal dari rotan alami pilihan dan teknik anyaman turun-temurun.'
    },
    {
      id: 'kal-8',
      question: 'Warna apa yang dominan pada kerajinan tradisional Dayak?',
      options: ['Hitam putih', 'Warna-warni cerah', 'Abu-abu', 'Pastel'],
      correct: 1,
      explanation: 'Kerajinan Dayak menggunakan warna-warni cerah yang melambangkan kehidupan dan alam.'
    },
    {
      id: 'kal-9',
      question: 'Siapa yang biasanya membuat kerajinan rotan?',
      options: ['Mesin', 'Pengrajin ahli dari komunitas lokal', 'Pabrik', 'Robot'],
      correct: 1,
      explanation: 'Kerajinan rotan dibuat oleh pengrajin ahli dari komunitas lokal yang mewarisi keahlian tradisional.'
    },
    {
      id: 'kal-10',
      question: 'Apa nilai budaya dari kerajinan Kalimantan?',
      options: ['Tidak ada', 'Melestarikan identitas dan kearifan lokal', 'Hanya komersial', 'Hiburan'],
      correct: 1,
      explanation: 'Kerajinan Kalimantan melestarikan identitas budaya Dayak dan kearifan lokal untuk generasi mendatang.'
    }
  ],
  sulawesi: [
    {
      id: 'sul-1',
      question: 'Apa kerajinan tekstil terkenal dari Sulawesi Selatan?',
      options: ['Batik', 'Tenun Sutra Bugis', 'Songket', 'Ulos'],
      correct: 1,
      explanation: 'Tenun Sutra Bugis dari Sulawesi Selatan terkenal dengan kehalusan dan motif tradisionalnya.'
    },
    {
      id: 'sul-2',
      question: 'Suku apa yang terkenal dengan tenun sutra di Sulawesi?',
      options: ['Suku Jawa', 'Suku Bugis dan Toraja', 'Suku Sunda', 'Suku Batak'],
      correct: 1,
      explanation: 'Suku Bugis dan Toraja memiliki tradisi menenun sutra yang kaya dan turun-temurun.'
    },
    {
      id: 'sul-3',
      question: 'Apa bahan utama tenun tradisional Sulawesi?',
      options: ['Katun', 'Sutra alami', 'Nilon', 'Polyester'],
      correct: 1,
      explanation: 'Tenun Sulawesi menggunakan sutra alami berkualitas tinggi yang menghasilkan kain halus dan mewah.'
    },
    {
      id: 'sul-4',
      question: 'Motif apa yang sering muncul pada tenun Toraja?',
      options: ['Motif bunga', 'Motif geometris dan simbol budaya', 'Motif hewan modern', 'Tidak ada motif'],
      correct: 1,
      explanation: 'Tenun Toraja menampilkan motif geometris dan simbol budaya yang sarat makna spiritual.'
    },
    {
      id: 'sul-5',
      question: 'Kapan kain tenun Sulawesi biasanya dikenakan?',
      options: ['Sehari-hari', 'Upacara adat dan acara penting', 'Olahraga', 'Tidur'],
      correct: 1,
      explanation: 'Kain tenun Sulawesi dikenakan untuk upacara adat, pernikahan, dan acara penting lainnya.'
    },
    {
      id: 'sul-6',
      question: 'Berapa lama waktu untuk menenun satu kain sutra Bugis?',
      options: ['1 hari', '1 minggu', 'Beberapa minggu hingga bulan', '1 jam'],
      correct: 2,
      explanation: 'Menenun kain sutra Bugis membutuhkan waktu berminggu-minggu karena kerumitan pola dan kehalusan.'
    },
    {
      id: 'sul-7',
      question: 'Apa yang membuat tenun Sulawesi istimewa?',
      options: ['Murah', 'Sutra halus dan motif tradisional', 'Cepat dibuat', 'Produksi massal'],
      correct: 1,
      explanation: 'Tenun Sulawesi istimewa karena menggunakan sutra halus dan motif tradisional yang rumit.'
    },
    {
      id: 'sul-8',
      question: 'Siapa yang biasanya menenun kain tradisional Sulawesi?',
      options: ['Mesin', 'Perempuan penenun ahli', 'Anak-anak', 'Robot'],
      correct: 1,
      explanation: 'Kain tradisional ditenun oleh perempuan ahli yang mewarisi keahlian dari generasi sebelumnya.'
    },
    {
      id: 'sul-9',
      question: 'Warna apa yang dominan pada tenun Toraja?',
      options: ['Hitam, merah, dan kuning', 'Biru muda', 'Pink', 'Abu-abu'],
      correct: 0,
      explanation: 'Tenun Toraja identik dengan warna hitam, merah, dan kuning yang melambangkan filosofi hidup.'
    },
    {
      id: 'sul-10',
      question: 'Apa nilai budaya dari tenun Sulawesi?',
      options: ['Tidak ada', 'Identitas budaya dan status sosial', 'Hanya fashion', 'Hiburan'],
      correct: 1,
      explanation: 'Tenun Sulawesi melambangkan identitas budaya, status sosial, dan warisan leluhur yang dijaga.'
    }
  ],
  papua: [
    {
      id: 'pap-1',
      question: 'Apa kerajinan khas yang terkenal dari Papua?',
      options: ['Batik', 'Noken (tas rajut tradisional)', 'Songket', 'Wayang'],
      correct: 1,
      explanation: 'Noken adalah tas rajut tradisional Papua yang diakui UNESCO sebagai warisan budaya.'
    },
    {
      id: 'pap-2',
      question: 'Bahan apa yang digunakan untuk membuat Noken?',
      options: ['Plastik', 'Kulit kayu dan serat alami', 'Kain', 'Logam'],
      correct: 1,
      explanation: 'Noken dibuat dari kulit kayu dan serat alami yang dirajut dengan teknik tradisional.'
    },
    {
      id: 'pap-3',
      question: 'Siapa yang biasanya membuat Noken?',
      options: ['Laki-laki', 'Perempuan Papua', 'Anak-anak', 'Mesin'],
      correct: 1,
      explanation: 'Noken dibuat oleh perempuan Papua yang mewarisi keahlian merajut turun-temurun.'
    },
    {
      id: 'pap-4',
      question: 'Apa fungsi Noken dalam kehidupan masyarakat Papua?',
      options: ['Hanya pajangan', 'Membawa barang, bayi, dan simbol budaya', 'Mainan', 'Tidak ada fungsi'],
      correct: 1,
      explanation: 'Noken multifungsi: membawa hasil panen, bayi, dan melambangkan identitas budaya Papua.'
    },
    {
      id: 'pap-5',
      question: 'Berapa lama waktu untuk membuat satu Noken?',
      options: ['1 jam', '1 hari', 'Beberapa hari hingga minggu', '1 menit'],
      correct: 2,
      explanation: 'Membuat Noken membutuhkan beberapa hari hingga minggu tergantung ukuran dan kerumitan.'
    },
    {
      id: 'pap-6',
      question: 'Apa pengakuan internasional yang diterima Noken?',
      options: ['Tidak ada', 'Warisan Budaya UNESCO', 'Hadiah Nobel', 'Oscar'],
      correct: 1,
      explanation: 'Noken diakui UNESCO sebagai Warisan Budaya Takbenda Manusia pada tahun 2012.'
    },
    {
      id: 'pap-7',
      question: 'Motif apa yang sering ditemukan pada kerajinan Papua?',
      options: ['Motif modern', 'Motif alam dan hewan', 'Tidak ada motif', 'Motif abstrak'],
      correct: 1,
      explanation: 'Kerajinan Papua menampilkan motif alam dan hewan yang mencerminkan kehidupan di hutan.'
    },
    {
      id: 'pap-8',
      question: 'Apa kerajinan kayu khas Papua?',
      options: ['Meja modern', 'Ukiran patung Asmat', 'Kursi plastik', 'Lemari besi'],
      correct: 1,
      explanation: 'Ukiran patung Asmat adalah seni pahat kayu Papua yang terkenal di dunia dengan makna spiritual.'
    },
    {
      id: 'pap-9',
      question: 'Apa yang membuat kerajinan Papua unik?',
      options: ['Murah', 'Teknik tradisional dan filosofi alam', 'Cepat dibuat', 'Produksi massal'],
      correct: 1,
      explanation: 'Kerajinan Papua unik karena menggunakan teknik tradisional dan filosofi alam yang mendalam.'
    },
    {
      id: 'pap-10',
      question: 'Apa nilai budaya dari kerajinan Papua?',
      options: ['Tidak ada', 'Identitas suku dan spiritualitas', 'Hanya komersial', 'Hiburan'],
      correct: 1,
      explanation: 'Kerajinan Papua melambangkan identitas suku, spiritualitas, dan hubungan harmonis dengan alam.'
    }
  ]
}

export const Edutainment = () => {
  const [selectedIsland, setSelectedIsland] = useState<Island>('java')
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [selectedIsland])
  
  const islands: { id: Island; name: string; icon: React.ReactNode }[] = [
    { id: 'sumatra', name: 'Sumatra', icon: <Palmtree className="w-6 h-6" /> },
    { id: 'java', name: 'Jawa', icon: <Landmark className="w-6 h-6" /> },
    { id: 'kalimantan', name: 'Kalimantan', icon: <Trees className="w-6 h-6" /> },
    { id: 'sulawesi', name: 'Sulawesi', icon: <Map className="w-6 h-6" /> },
    { id: 'papua', name: 'Papua', icon: <Bird className="w-6 h-6" /> }
  ]
  
  const lessons = [
    {
      icon: <Scale className="w-5 h-5" />,
      title: 'Apa itu Fair Trade?',
      content: 'Fair trade memastikan bahwa artisan dan petani menerima kompensasi yang adil untuk pekerjaan mereka, mempromosikan kehidupan sustainable dan praktik produksi ethical.'
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: 'Transparansi Supply Chain',
      content: 'Mengetahui dari mana produk berasal dan bagaimana dibuat menciptakan akuntabilitas dan mendukung komunitas yang layak mendapat pengakuan atas craftsmanship mereka.'
    },
    {
      icon: <Landmark className="w-5 h-5" />,
      title: 'Pelestarian Cultural',
      content: 'Kerajinan tradisional membawa warisan budaya. Mendukung artisan membantu melestarikan teknik berabad-abad dan identitas cultural.'
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: 'Praktik Sustainable',
      content: 'Banyak UMKM menggunakan bahan alami dan metode eco-friendly, mengurangi dampak lingkungan sambil mempertahankan kualitas dan authenticity.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <motion.section
        className="max-w-6xl mx-auto px-8 py-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-serif font-bold text-edu-blue dark:text-neon-edu-blue mb-3">🎓 Edutainment Hub</h1>
        <p className="text-xl text-slate-text dark:text-dark-body">
          Pelajari tentang produksi ethical, fair trade, dan komunitas artisan
        </p>
      </motion.section>

      {/* Lessons Grid */}
      <motion.section
        className="max-w-6xl mx-auto px-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lessons.map((lesson, idx) => (
            <motion.div 
              key={idx} 
              className="bg-pure-card dark:bg-dark-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-250 border-t-4 border-action-orange dark:border-dark-action-orange"
              variants={itemVariants}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-edu-blue to-growth-green dark:from-neon-edu-blue dark:to-glow-green text-white rounded-full flex items-center justify-center font-bold mb-4 text-lg">
                {lesson.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-ink-black dark:text-dark-heading mb-3">{lesson.title}</h3>
              <p className="text-slate-text dark:text-dark-body leading-relaxed text-sm">{lesson.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Interactive Quiz Section */}
      <motion.section
        className="max-w-6xl mx-auto px-8 mb-16 bg-pure-card dark:bg-dark-surface rounded-2xl shadow-md p-8 border border-soft-border dark:border-soft-dark-border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-serif font-bold text-edu-blue dark:text-neon-edu-blue mb-2 text-center">🎮 Interactive Learning</h2>
        <p className="text-lg text-slate-text dark:text-dark-body text-center mb-8">
          Pilih pulau dan uji pengetahuan Anda tentang kerajinan tradisional Indonesia!
        </p>

        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {islands.map(island => (
            <motion.button
              key={island.id}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-250 flex items-center gap-2 ${
                selectedIsland === island.id
                  ? 'bg-action-orange hover:bg-deep-action-orange dark:bg-dark-action-orange dark:hover:bg-hot-orange text-white shadow-md'
                  : 'bg-mist-gray dark:bg-soft-dark-border text-ink-black dark:text-dark-body hover:bg-sky-soft-blue dark:hover:bg-blue-glow-soft'
              }`}
              onClick={() => setSelectedIsland(island.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl flex items-center justify-center">{island.icon}</span>
              <span className="text-lg">{island.name}</span>
            </motion.button>
          ))}
        </div>

        <motion.div
          key={selectedIsland}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <QuizCard questions={islandQuizzes[selectedIsland]} />
        </motion.div>
      </motion.section>

      {/* Ethical Commitment */}
      <motion.section
        className="max-w-6xl mx-auto px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-serif font-bold text-edu-blue dark:text-neon-edu-blue text-center mb-12">💚 Komitmen Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Globe className="w-12 h-12 text-edu-blue" />, title: 'Komunitas Global', desc: 'Mendukung UMKM di seluruh Indonesia' },
            { icon: <Award className="w-12 h-12 text-action-orange" />, title: 'Quality Craftsmanship', desc: 'Melestarikan teknik tradisional' },
            { icon: <Scale className="w-12 h-12 text-purple-500" />, title: 'Kompensasi Fair', desc: 'Memastikan artisan mendapat yang layak' },
            { icon: <Recycle className="w-12 h-12 text-growth-green" />, title: 'Produksi Sustainable', desc: 'Praktik eco-friendly dan ethical' }
          ].map((item, idx) => (
            <div key={idx} className="bg-sky-soft-blue dark:bg-blue-glow-soft p-8 rounded-2xl text-center hover:shadow-md transition-all duration-250 border border-edu-blue/20 dark:border-neon-edu-blue/20">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-serif font-bold text-ink-black dark:text-dark-heading mb-2">{item.title}</h3>
              <p className="text-slate-text dark:text-dark-body text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}