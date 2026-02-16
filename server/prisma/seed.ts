import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    console.log('🌱 Starting seed...')

    // Clear existing data
    await prisma.review.deleteMany()
    await prisma.supplyStep.deleteMany()
    await prisma.regionProduct.deleteMany()
    await prisma.product.deleteMany()
    await prisma.artisan.deleteMany()
    await prisma.region.deleteMany()
    await prisma.teamMember.deleteMany()
    await prisma.quizQuestion.deleteMany()
    await prisma.user.deleteMany()

    // ============================================
    // 1. ADMIN USER
    // ============================================
    const adminPassword = await bcrypt.hash('admin123', 10)
    const admin = await prisma.user.create({
        data: {
            email: 'admin@legacytrace.id',
            password: adminPassword,
            name: 'Admin LegacyTrace',
            role: 'ADMIN'
        }
    })
    console.log(`✅ Admin created: ${admin.email}`)

    // Demo user
    const userPassword = await bcrypt.hash('user123', 10)
    const demoUser = await prisma.user.create({
        data: {
            email: 'user@legacytrace.id',
            password: userPassword,
            name: 'Demo User',
            role: 'USER'
        }
    })
    console.log(`✅ Demo user created: ${demoUser.email}`)

    // ============================================
    // 2. ARTISANS (extracted from products data)
    // ============================================
    const artisansData = [
        { name: 'Ibu Siti Nurhaliza', specialty: 'batik', location: 'Cirebon, West Java', quote: 'Setiap pola menceritakan kisah leluhur kami. Saya hanya penjaga tradisi indah ini.', quoteLocal: 'Unggal pola nyaritakeun carita karuhun urang. Abdi ngan ukur panjaga tradisi geulis ieu.', photoUrl: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=faces', yearsExperience: 28, culturalBackground: 'Sundanese batik artisan' },
        { name: 'Pak Santoso', specialty: 'batik', location: 'Solo, Central Java', quote: 'Parang Rusak membawa semangat leluhur prajurit kami.', quoteLocal: 'Parang Rusak nggawa semangat leluhur prajurit kita.', photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces', yearsExperience: 32, culturalBackground: 'Javanese batik master' },
        { name: 'Mak Uni', specialty: 'makanan', location: 'Padang, West Sumatra', quote: 'Rendang bukan sekadar makanan, ini warisan kami yang dimasak dengan kesabaran dan cinta.', quoteLocal: 'Randang indak cuma makanan, ko warisan kami nan dimasak jo kasabaran dan cinto.', photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces', yearsExperience: 35, culturalBackground: 'Minangkabau culinary expert' },
        { name: 'Pak Karso', specialty: 'makanan', location: 'Banyumas, Central Java', quote: 'Mendoan adalah kebanggaan Banyumas.', quoteLocal: 'Mendoan kuwi kebanggaan Banyumas.', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces', yearsExperience: 35, culturalBackground: 'Banyumas culinary tradition' },
        { name: 'Ibu Retno', specialty: 'makanan', location: 'Semarang, Central Java', quote: 'Resep nenek saya adalah harta yang saya bagikan dengan bangga.', quoteLocal: 'Resep mbah saya iku bandha sing tak bagekake kanthi bangga.', photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces', yearsExperience: 15, culturalBackground: 'Semarang culinary heritage' },
        { name: 'Ki Purbo', specialty: 'kerajinan', location: 'Yogyakarta, Special Region', quote: 'Wayang bukan hanya seni—ini adalah suara leluhur kami.', quoteLocal: 'Wayang dudu mung seni—iki swara leluhur kita.', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces', yearsExperience: 35, culturalBackground: 'UNESCO heritage craftsman' },
        { name: 'Pak Darmanto', specialty: 'kerajinan', location: 'Cirebon, West Java', quote: 'Setiap topeng membawa semangat tari Cirebon.', quoteLocal: 'Unggal topeng mawa sumanget tari Cirebon.', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces', yearsExperience: 20, culturalBackground: 'Cirebon mask dance tradition' },
        { name: 'Pak Wayan', specialty: 'tenun', location: 'Lombok, Nusa Tenggara Barat', quote: 'Kakek saya mengajari ayah saya, ayah saya mengajari saya, dan sekarang saya mengajari putri saya.', quoteLocal: 'Kaki tiang ngajahin bapa tiang, bapa tiang ngajahin tiang, tur mangkin tiang ngajahin pianak tiang.', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces', yearsExperience: 42, culturalBackground: 'Lombok ikat weaving tradition' },
        { name: 'Ibu Mariamah', specialty: 'tenun', location: 'Palembang, South Sumatra', quote: 'Songket adalah mahkota budaya Palembang.', quoteLocal: 'Songket itu mahkota budaya Palembang.', photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces', yearsExperience: 25, culturalBackground: 'Palembang royal weaving tradition' },
        { name: 'Pak Sulaiman', specialty: 'gerabah', location: 'Bantul, Yogyakarta', quote: 'Tanah liat menghubungkan kami dengan bumi dan tradisi.', quoteLocal: 'Lempung nyambungake kita karo bumi lan tradhisi.', photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces', yearsExperience: 38, culturalBackground: 'Kasongan pottery village' },
        { name: 'Pak Hendra', specialty: 'gerabah', location: 'Bandung, West Java', quote: 'Gerabah yang baik menghasilkan masakan yang enak.', quoteLocal: 'Gerabah sing apik ngasilake masakan sing enak.', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces', yearsExperience: 22, culturalBackground: 'Bandung earthenware tradition' },
        { name: 'Ibu Citra', specialty: 'herbal', location: 'Yogyakarta, Special Region', quote: 'Jamu bukan sekadar minuman, ini adalah kebijaksanaan penyembuhan dari leluhur kami.', quoteLocal: 'Jamu dudu mung unjukan, iki kawruh marasake sehat saka leluhur kita.', photoUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=faces', yearsExperience: 30, culturalBackground: 'Traditional Javanese herbalist' },
        { name: 'Pak Joko Susilo', specialty: 'herbal', location: 'Imogiri, Yogyakarta', quote: 'Wedang uwuh menghangatkan tubuh dan menenangkan jiwa.', quoteLocal: 'Wedang uwuh anget awak lan ayem jiwa.', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces', yearsExperience: 25, culturalBackground: 'Javanese herbal drink tradition' },
        { name: 'Ibu Ratna', specialty: 'batik', location: 'Yogyakarta, Special Region', quote: 'Kawung adalah simbol kesucian dan umur panjang dalam filosofi Jawa.', quoteLocal: 'Kawung iku simbol kesucian lan umur dawa ing filosofi Jawa.', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces', yearsExperience: 20, culturalBackground: 'Yogyakarta royal batik tradition' },
        { name: 'Empu Suparman', specialty: 'kerajinan', location: 'Surakarta, Central Java', quote: 'Keris bukan sekadar senjata, ini adalah jiwa dan kehormatan leluhur kami.', quoteLocal: 'Keris dudu mung sanjata, iki jiwa lan pakurmatan leluhur kita.', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces', yearsExperience: 30, culturalBackground: 'Sacred Javanese keris maker' },
        { name: 'Ibu Tiurma', specialty: 'tenun', location: 'Lake Toba, North Sumatra', quote: 'Ulos adalah kehangatan dan kasih sayang yang ditenun untuk orang terkasih.', quoteLocal: 'Ulos on hangoluan dohot holong na tinun tu halak na dipangidoahon.', photoUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=faces', yearsExperience: 40, culturalBackground: 'Batak weaving tradition' },
        { name: 'Pak Bambang', specialty: 'gerabah', location: 'Dinoyo, Malang, East Java', quote: 'Keramik Dinoyo adalah warisan desa kami yang penuh warna.', quoteLocal: 'Keramik Dinoyo iku warisan desa kita sing kebak warna.', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces', yearsExperience: 28, culturalBackground: 'Malang pottery village' },
        { name: 'Pak Yusuf', specialty: 'herbal', location: 'Ambon, Maluku', quote: 'Minyak kayu putih Ambon adalah obat alami terbaik dari alam Maluku.', quoteLocal: 'Minyak kayu putih Ambon adalah obat alami terbaik dari alam Maluku.', photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces', yearsExperience: 45, culturalBackground: 'Maluku essential oil tradition' },
    ]

    const artisans = await Promise.all(
        artisansData.map(a => prisma.artisan.create({ data: a }))
    )
    console.log(`✅ ${artisans.length} artisans created`)

    // ============================================
    // 3. PRODUCTS with SUPPLY STEPS
    // ============================================
    const productsData = [
        {
            name: 'Batik Mega Mendung', description: 'Traditional Gambar Tangan batik with Mega Mendung motif, symbolizing protection and prosperity in Sundanese culture.',
            category: 'batik', imageUrl: '/assets/img/batik-mega-mendung.jpg',
            umkm: 'Batik Tulis Setono', umkmStory: 'Didirikan pada tahun 1995, Batik Tulis Setono telah menghasilkan batik tulis tradisional berkualitas tinggi dari Cirebon selama lebih dari 25 tahun.',
            village: 'Cirebon, West Java', culturalValue: 'Mega Mendung melambangkan perlindungan dan aliran kemakmuran yang berkelanjutan dalam budaya Sunda.',
            ethicalBadges: ['100% Tulis Tangan', 'Perdagangan Adil', 'Pewarna Ramah Lingkungan', 'Bersertifikat Pengrajin'],
            artisanId: artisans[0].id,
            supplySteps: {
                create: [
                    { title: 'Pemilihan Benang Kapas', actor: 'Ahli Benang', location: 'Solo', description: 'Benang kapas berkualitas tinggi dipilih.', icon: 'I', sortOrder: 0 },
                    { title: 'Perancangan Pola', actor: 'Desainer Batik', location: 'Workshop Solo', description: 'Pola Parang Rusak dirancang mengikuti pakem tradisional.', icon: 'II', sortOrder: 1 },
                    { title: 'Pembatikan', actor: 'Pembatik Ahli', location: 'Workshop Solo', description: 'Lilin malam diaplikasikan dengan canting.', icon: 'III', sortOrder: 2 },
                    { title: 'Pewarnaan', actor: 'Ahli Pewarna', location: 'Workshop Solo', description: 'Pencelupan pewarna indigo berulang.', icon: 'IV', sortOrder: 3 },
                    { title: 'Pelorodan', actor: 'Tim Finishing', location: 'Workshop Solo', description: 'Lilin dilelehkan.', icon: 'V', sortOrder: 4 },
                    { title: 'Pemeriksaan', actor: 'Tim Kontrol Kualitas', location: 'Solo', description: 'Batik diperiksa dan dikemas.', icon: 'VI', sortOrder: 5 },
                ]
            }
        },
        {
            name: 'Batik Parang Rusak', description: 'Ancient Javanese motif reserved for royalty, symbolizing strength and power.',
            category: 'batik', imageUrl: '/assets/img/batik-parang-rusak.png',
            umkm: 'Batik Tulis Klasik', umkmStory: 'Lebih dari 30 tahun melestarikan warisan budaya.',
            village: 'Solo, Central Java', culturalValue: 'Melambangkan kekuatan dan martabat prajurit dalam tradisi Jawa.',
            ethicalBadges: ['Pola Warisan', 'Bahan Alami', 'Autentik Solo'],
            artisanId: artisans[1].id,
            supplySteps: {
                create: [
                    { title: 'Pemilihan Benang Kapas', actor: 'Ahli Benang', location: 'Solo', description: 'Benang kapas berkualitas tinggi dipilih.', icon: 'I', sortOrder: 0 },
                    { title: 'Perancangan Pola', actor: 'Desainer Batik', location: 'Workshop Solo', description: 'Pola Parang Rusak dirancang mengikuti pakem tradisional.', icon: 'II', sortOrder: 1 },
                    { title: 'Pembatikan', actor: 'Pembatik Ahli', location: 'Workshop Solo', description: 'Lilin malam diaplikasikan dengan canting.', icon: 'III', sortOrder: 2 },
                    { title: 'Pewarnaan', actor: 'Ahli Pewarna', location: 'Workshop Solo', description: 'Pencelupan pewarna indigo berulang.', icon: 'IV', sortOrder: 3 },
                    { title: 'Pelorodan', actor: 'Tim Finishing', location: 'Workshop Solo', description: 'Lilin dilelehkan.', icon: 'V', sortOrder: 4 },
                    { title: 'Pemeriksaan', actor: 'Tim Kontrol Kualitas', location: 'Solo', description: 'Batik diperiksa dan dikemas.', icon: 'VI', sortOrder: 5 },
                ]
            }
        },
        {
            name: 'Rendang Padang Asli', description: 'Slow-cooked beef in rich coconut milk and spices, recognized by CNN as World\'s Most Delicious Food.',
            category: 'makanan', imageUrl: '/assets/img/rendang-padang.jpg',
            umkm: 'Rendang Mak Uni', umkmStory: 'Established in 1985, cooking authentic Padang rendang for over 35 years.',
            village: 'Padang, West Sumatra', culturalValue: 'Rendang merupakan keunggulan kuliner Minangkabau.',
            ethicalBadges: ['Resep Tradisional', 'Tanpa Pengawet', 'Bersertifikat Halal', 'Dimasak Lambat'],
            artisanId: artisans[2].id,
            supplySteps: {
                create: [
                    { title: 'Pemilihan Kelapa', actor: 'Ahli Bahan', location: 'Padang', description: 'Kelapa tua berkualitas tinggi dipilih.', icon: 'I', sortOrder: 0 },
                    { title: 'Persiapan Bumbu', actor: 'Koki', location: 'Dapur Mak Uni', description: 'Rempah digiling halus.', icon: 'II', sortOrder: 1 },
                    { title: 'Pemasakan Santan', actor: 'Koki', location: 'Dapur Mak Uni', description: 'Santan dimasak hingga berminyak.', icon: 'III', sortOrder: 2 },
                    { title: 'Pencampuran Daging', actor: 'Koki', location: 'Dapur Mak Uni', description: 'Daging dimasukkan dan dimasak perlahan.', icon: 'IV', sortOrder: 3 },
                    { title: 'Pengadukan', actor: 'Asisten Koki', location: 'Dapur Mak Uni', description: 'Diaduk terus-menerus selama 4 jam.', icon: 'V', sortOrder: 4 },
                    { title: 'Pengemasan', actor: 'Tim Pengemasan', location: 'Padang', description: 'Rendang dikemas vakum.', icon: 'VI', sortOrder: 5 },
                ]
            }
        },
        {
            name: 'Mendoan Banyumas', description: 'Thinly sliced tempeh fried in seasoned batter, half-cooked (mendo).',
            category: 'makanan', imageUrl: '/assets/img/mendoan-banyumas.png',
            umkm: 'Mendoan Pak Karso', umkmStory: 'Didirikan pada tahun 1985, melestarikan resep tradisional.',
            village: 'Banyumas, Central Java', culturalValue: 'Mendoan adalah camilan tradisional Banyumas.',
            ethicalBadges: ['Resep Tradisional', 'Tanpa Pengawet', 'Buatan Tangan', 'Rempah Lokal'],
            artisanId: artisans[3].id,
            supplySteps: {
                create: [
                    { title: 'Fermentasi Tempe', actor: 'Pembuat Tempe', location: 'Banyumas', description: 'Kedelai difermentasi menjadi tempe tipis khusus.', icon: 'I', sortOrder: 0 },
                    { title: 'Persiapan Adonan', actor: 'Koki', location: 'Warung Pak Karso', description: 'Tepung beras dan rempah dicampur.', icon: 'II', sortOrder: 1 },
                    { title: 'Penggorengan Cepat', actor: 'Koki', location: 'Warung Pak Karso', description: 'Digoreng setengah matang dalam minyak panas.', icon: 'III', sortOrder: 2 },
                    { title: 'Penyajian', actor: 'Pelayan', location: 'Warung Pak Karso', description: 'Disajikan hangat dengan sambal kecap.', icon: 'IV', sortOrder: 3 },
                ]
            }
        },
        {
            name: 'Lumpia Semarang', description: 'Savory spring rolls filled with bamboo shoots, chicken, and shrimp.',
            category: 'makanan', imageUrl: '/assets/img/kue-lumpia-basah.png',
            umkm: 'Kue Lumpia Ibu Retno', umkmStory: 'Traditional spring rolls maker for 15 years.',
            village: 'Semarang, Central Java', culturalValue: 'Lumpia merepresentasikan warisan kuliner Semarang.',
            ethicalBadges: ['Bahan Segar', 'Tanpa MSG', 'Resep Tradisional', 'Buatan Tangan Wrappers'],
            artisanId: artisans[4].id,
            supplySteps: {
                create: [
                    { title: 'Persiapan Rebung', actor: 'Ahli Bahan', location: 'Semarang', description: 'Rebung segar dipotong dan direbus.', icon: 'I', sortOrder: 0 },
                    { title: 'Pembuatan Kulit', actor: 'Koki', location: 'Dapur Ibu Retno', description: 'Kulit lumpia tipis dibuat manual.', icon: 'II', sortOrder: 1 },
                    { title: 'Isian & Rolling', actor: 'Koki', location: 'Dapur Ibu Retno', description: 'Isian ditumis dan dibungkus kulit.', icon: 'III', sortOrder: 2 },
                    { title: 'Penggorengan', actor: 'Koki', location: 'Dapur Ibu Retno', description: 'Digoreng hingga keemasan.', icon: 'IV', sortOrder: 3 },
                ]
            }
        },
        {
            name: 'Wayang Kulit Arjuna', description: 'Shadow puppet made from buffalo leather, depicting the hero Arjuna.',
            category: 'kerajinan', imageUrl: '/assets/img/wayang-kulit.png',
            umkm: 'Wayang Kulit Yogyakarta Artisan', umkmStory: 'Studio keluarga melestarikan seni wayang kulit sejak 1987.',
            village: 'Yogyakarta, Special Region', culturalValue: 'Wayang kulit adalah warisan budaya takbenda UNESCO.',
            ethicalBadges: ['Diukir Tangan', 'Warisan UNESCO', 'Pelestarian Budaya', 'Kerajinan Master'],
            artisanId: artisans[5].id,
            supplySteps: {
                create: [
                    { title: 'Persiapan Kulit', actor: 'Pengrajin Kulit', location: 'Yogyakarta', description: 'Kulit kerbau direndam dan dikeringkan.', icon: 'I', sortOrder: 0 },
                    { title: 'Pola & Pahat', actor: 'Master Ukir', location: 'Studio Wayang', description: 'Pola rumit dipahat manual.', icon: 'II', sortOrder: 1 },
                    { title: 'Pewarnaan', actor: 'Seniman', location: 'Studio Wayang', description: 'Detail wajah dan busana diwarnai emas.', icon: 'III', sortOrder: 2 },
                    { title: 'Pemasangan Gapit', actor: 'Pengrajin', location: 'Studio Wayang', description: 'Pegangan tanduk kerbau dipasang.', icon: 'IV', sortOrder: 3 },
                ]
            }
        },
        {
            name: 'Topeng Cirebon Panji', description: 'Traditional mask representing purity and nobility used in Topeng Cirebon dance.',
            category: 'kerajinan', imageUrl: '/assets/img/topeng-cirebon.png',
            umkm: 'Topeng Cirebon Heritage', umkmStory: 'Selama 20 tahun menciptakan seni topeng tradisional.',
            village: 'Cirebon, West Java', culturalValue: 'Topeng adalah pusat pertunjukan budaya tari topeng Cirebon.',
            ethicalBadges: ['Kerajinan Tangan', 'Seni Tradisional', 'Cat Alami'],
            artisanId: artisans[6].id,
            supplySteps: {
                create: [
                    { title: 'Pemilihan Kayu', actor: 'Pengrajin Kayu', location: 'Cirebon', description: 'Kayu Jaranan ringan dipilih.', icon: 'I', sortOrder: 0 },
                    { title: 'Ukiran Kasar', actor: 'Pengukir', location: 'Studio Topeng', description: 'Bentuk dasar wajah dibentuk.', icon: 'II', sortOrder: 1 },
                    { title: 'Penghalusan', actor: 'Pengukir', location: 'Studio Topeng', description: 'Permukaan diamplas halus.', icon: 'III', sortOrder: 2 },
                    { title: 'Pewarnaan', actor: 'Seniman', location: 'Studio Topeng', description: 'Dilukis dengan warna putih khas Panji.', icon: 'IV', sortOrder: 3 },
                    { title: 'Finishing', actor: 'Pengrajin', location: 'Studio Topeng', description: 'Rambut dan aksesoris ditambahkan.', icon: 'V', sortOrder: 4 },
                ]
            }
        },
        {
            name: 'Tenun Ikat Lombok', description: 'Hand-woven fabric with vibrant colors and traditional geometric patterns.',
            category: 'tenun', imageUrl: '/assets/img/tenun-ikat-lombok.jpg',
            umkm: 'Tenun Songket Lombok Heritage', umkmStory: 'Melestarikan tradisi tenun berusia 200+ tahun dari Lombok.',
            village: 'Lombok, Nusa Tenggara Barat', culturalValue: 'Tenun ikat merepresentasikan identitas budaya Lombok.',
            ethicalBadges: ['Tenun Tangan', 'Perdagangan Adil Certified', 'Dukungan Pengrajin', 'Warisan 200+ Tahun'],
            artisanId: artisans[7].id,
            supplySteps: {
                create: [
                    { title: 'Pemintalan Benang', actor: 'Pemintal', location: 'Desa Sade', description: 'Kapas dipintal jadi benang.', icon: 'I', sortOrder: 0 },
                    { title: 'Pewarnaan Alami', actor: 'Pewarna', location: 'Desa Sade', description: 'Benang dicelup warna akar/daun.', icon: 'II', sortOrder: 1 },
                    { title: 'Penenunan', actor: 'Penunun Wanita', location: 'Desa Sade', description: 'Ditenun dengan alat gedogan tradisional.', icon: 'III', sortOrder: 2 },
                    { title: 'Finishing', actor: 'Penunun', location: 'Desa Sade', description: 'Kain dirapikan dan disetrika.', icon: 'IV', sortOrder: 3 },
                    { title: 'Pewarnaan Benang', actor: 'Pewarna', location: 'Desa Sade', description: 'Benang diwarnai sebelum ditenun.', icon: 'V', sortOrder: 4 },
                ]
            }
        },
        {
            name: 'Kain Songket Palembang', description: 'Luxurious woven fabric with gold or silver threads, worn for special occasions.',
            category: 'tenun', imageUrl: '/assets/img/kain-songket-palembang.png',
            umkm: 'Songket Palembang Premium', umkmStory: 'Selama 25 tahun menciptakan kain songket mewah.',
            village: 'Palembang, South Sumatra', culturalValue: 'Songket melambangkan prestise dan kerajaan.',
            ethicalBadges: ['Benang Emas', 'Kualitas Kerajaan', 'Tenun Tangan', 'Pakaian Festival'],
            artisanId: artisans[8].id,
            supplySteps: {
                create: [
                    { title: 'Pemilihan Benang Emas', actor: 'Pengrajin', location: 'Palembang', description: 'Benang emas impor dipilih.', icon: 'I', sortOrder: 0 },
                    { title: 'Penenunan Rumit', actor: 'Master Songket', location: 'Palembang', description: 'Ditenun dengan teknik songket (menyisipkan benang emas).', icon: 'II', sortOrder: 1 },
                    { title: 'Finishing', actor: 'Pengrajin', location: 'Palembang', description: 'Kain dibersihkan.', icon: 'III', sortOrder: 2 },
                ]
            }
        },
        {
            name: 'Gerabah Kasongan', description: 'Earthenware pottery from Bantul featuring natural colors and traditional forms.',
            category: 'gerabah', imageUrl: '/assets/img/gerabah-kosongan.png',
            umkm: 'Gerabah Kasongan Sentra', umkmStory: 'Lebih dari 40 tahun melestarikan teknik gerabah tradisional.',
            village: 'Bantul, Yogyakarta', culturalValue: 'Gerabah Kasongan memupuk identitas komunitas.',
            ethicalBadges: ['Buatan Tangan', 'Tanah Liat Alami', 'Ikon Budaya', 'Komunitas Pengrajin'],
            artisanId: artisans[9].id,
            supplySteps: {
                create: [
                    { title: 'Pengambilan Tanah Liat', actor: 'Penggali', location: 'Sungai Bedog', description: 'Tanah liat diambil dari sungai.', icon: 'I', sortOrder: 0 },
                    { title: 'Pembentukan', actor: 'Pengrajin', location: 'Kasongan', description: 'Dibentuk dengan roda putar.', icon: 'II', sortOrder: 1 },
                    { title: 'Pembakaran', actor: 'Pengrajin', location: 'Tungku Desa', description: 'Dibakar dengan jerami.', icon: 'III', sortOrder: 2 },
                    { title: 'Finishing', actor: 'Seniman', location: 'Kasongan', description: 'Diwarnai atau diglasir.', icon: 'IV', sortOrder: 3 },
                ]
            }
        },
        {
            name: 'Jamu Kunyit Asam', description: 'Traditional herbal drink made from turmeric and tamarind.',
            category: 'herbal', imageUrl: '/assets/img/jamu-tradisional.png',
            umkm: 'Jamu Mak Citra Nusantara', umkmStory: 'Lebih dari 30 tahun meracik jamu tradisional Indonesia.',
            village: 'Yogyakarta, Special Region', culturalValue: 'Jamu tradisional merepresentasikan praktik penyembuhan Indonesia.',
            ethicalBadges: ['100% Alami', 'Tanpa Tambahan', 'Resep Keluarga', 'Herbal Organik'],
            artisanId: artisans[11].id,
            supplySteps: {
                create: [
                    { title: 'Panen Kunyit', actor: 'Petani', location: 'Bantul', description: 'Kunyit segar dipanen.', icon: 'I', sortOrder: 0 },
                    { title: 'Pembersihan & Parut', actor: 'Pembuat Jamu', location: 'Dapur Jamu', description: 'Kunyit dikupas dan diparut.', icon: 'II', sortOrder: 1 },
                    { title: 'Perebusan', actor: 'Pembuat Jamu', location: 'Dapur Jamu', description: 'Direbus dengan asam jawa dan gula merah.', icon: 'III', sortOrder: 2 },
                    { title: 'Penyaringan', actor: 'Pembuat Jamu', location: 'Dapur Jamu', description: 'Disaring bersih.', icon: 'IV', sortOrder: 3 },
                ]
            }
        },
    ]

    for (const p of productsData) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { supplySteps, ...productData } = p
        await prisma.product.create({
            data: {
                ...productData,
                ethicalBadges: productData.ethicalBadges as any,
                supplySteps: {
                    create: supplySteps.create
                }
            }
        })
    }
    console.log(`✅ ${productsData.length} detailed products created`)

    // ============================================
    // 4. REGIONS (with simplified products)
    // ============================================
    const regionsData = [
        {
            name: 'Pulau Jawa', emoji: '🏝️', description: 'Pusat kerajinan tangan Indonesia dengan tradisi batik, wayang kulit, dan keramik terkenal dunia.', products: {
                create: [
                    { name: 'Batik Parang Rusak', category: 'Batik', umkm: 'Batik Tulis Klasik', emoji: '🎨' },
                    { name: 'Wayang Kulit', category: 'Crafts', umkm: 'Wayang Kulit Yogyakarta', emoji: '🎭' },
                    { name: 'Gerabah Kasongan', category: 'Pottery', umkm: 'Sentra Kasongan', emoji: '🏺' },
                    { name: 'Jamu Tradisional', category: 'Herbal', umkm: 'Jamu Mak Citra', emoji: '🌿' },
                    { name: 'Tahu Goreng Pedas', category: 'Snacks', umkm: 'Mak Sumi Bandung', emoji: '🍴' },
                ]
            }
        },
        {
            name: 'Pulau Sumatra', emoji: '🏝️', description: 'Kaya dengan tekstil tradisional, kopi premium, dan kerajinan tangan dari berbagai suku.', products: {
                create: [
                    { name: 'Kain Songket Palembang', category: 'Woven', umkm: 'Songket Premium', emoji: '🧵' },
                    { name: 'Minyak Kayu Putih', category: 'Herbal', umkm: 'Essential Oil Ambon', emoji: '🧴' },
                    { name: 'Tenun Ulos Batak', category: 'Woven', umkm: 'Tenun Tradisional', emoji: '🧶' },
                    { name: 'Kopi Arabika Gayo', category: 'Snacks', umkm: 'Kopi Specialty', emoji: '☕' },
                    { name: 'Batik Jambi Modern', category: 'Batik', umkm: 'Batik Jambi', emoji: '🎨' },
                ]
            }
        },

        {
            name: 'Pulau Kalimantan', emoji: '🏝️', description: 'Warisan budaya Dayak dengan ukiran kayu, anyaman rotan, dan kerajinan tradisional unik.', products: {
                create: [
                    { name: 'Ukiran Kayu Dayak', category: 'Crafts', umkm: 'Ukir Tradisional', emoji: '🎭' },
                    { name: 'Anyaman Rotan', category: 'Crafts', umkm: 'Kerajinan Rotan', emoji: '🧺' },
                    { name: 'Batik Kalimantan', category: 'Batik', umkm: 'Batik Lokal', emoji: '🎨' },
                ]
            }
        },
        {
            name: 'Pulau Sulawesi', emoji: '🏝️', description: 'Kekayaan budaya Bugis, Makassar, dan Minahasa.', products: {
                create: [
                    { name: 'Tenun Ikat Sulawesi', category: 'Woven', umkm: 'Tenun Sulawesi', emoji: '🧵' },
                    { name: 'Batik Makassar', category: 'Batik', umkm: 'Batik Makassar', emoji: '🎨' },
                ]
            }
        },
        {
            name: 'Pulau Papua', emoji: '🏝️', description: 'Budaya asli Papua dengan kerajinan unik dan seni ukir autentik.', products: {
                create: [
                    { name: 'Tenun Papua Asli', category: 'Woven', umkm: 'Tenun Tradisional', emoji: '🧵' },
                    { name: 'Ukir Kayu Papua', category: 'Crafts', umkm: 'Seni Ukir', emoji: '🎭' },
                    { name: 'Madu Hutan Papua', category: 'Herbal', umkm: 'Madu Organik', emoji: '🍯' },
                ]
            }
        },
        {
            name: 'Pulau Bali', emoji: '🏖️', description: 'Surga wisata dengan kerajinan seni tradisional Bali.', products: {
                create: [
                    { name: 'Batik Bali', category: 'Batik', umkm: 'Batik Bali Tradisional', emoji: '🎨' },
                    { name: 'Ukir Kayu Bali', category: 'Crafts', umkm: 'Ukir Bali', emoji: '🎭' },
                    { name: 'Silver Jewelry Ubud', category: 'Crafts', umkm: 'Perak Ubud', emoji: '✨' },
                ]
            }
        },
        {
            name: 'Pulau Lombok', emoji: '🏖️', description: 'Destinasi wisata dengan tenun ikat terkenal dan keramik.', products: {
                create: [
                    { name: 'Tenun Ikat Lombok', category: 'Woven', umkm: 'Tenun Songket', emoji: '🧵' },
                    { name: 'Keramik Lombok', category: 'Pottery', umkm: 'Keramik Tradisional', emoji: '🏺' },
                ]
            }
        },
    ]

    for (const r of regionsData) {
        await prisma.region.create({ data: r })
    }
    console.log(`✅ ${regionsData.length} regions created`)

    // ============================================
    // 5. TEAM MEMBERS
    // ============================================
    const teamData = [
        { name: 'Muhammad Faqih', role: 'Beban Fakultas', position: 'Beban Fakultas', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '/assets/team/golden-gunungan-wayang-design-indonesian-javanese-culture-free-png-removebg-preview.png', email: 'faqih@legacytrace.id', phone: '+62 812-3456-7890', instagram: 'https://instagram.com/voidbriella', expertise: ['Beban Kampus'], experience: 8, quote: 'yang penting makan nasi' },
        { name: 'Kaffqa Tegar Gayuh Pamungkas', role: 'Beban Fakultas', position: 'Beban Fakultas', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '/assets/team/golden-gunungan-wayang-design-indonesian-javanese-culture-free-png-removebg-preview.png', email: 'kaffqa@legacytrace.id', phone: '+62 821-9876-5432', expertise: ['Beban Kampus'], experience: 6, quote: 'yang penting makan nasi' },
        { name: 'Desmonda Varel Robel Salim', role: 'Beban Fakultas', position: 'Beban Fakultas', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: '/assets/team/golden-gunungan-wayang-design-indonesian-javanese-culture-free-png-removebg-preview.png', email: 'v@legacytrace.id', phone: '+62 822-1111-2222', expertise: ['Beban Kampus'], experience: 5, quote: 'yang penting makan nasi' },
    ]

    for (const t of teamData) {
        await prisma.teamMember.create({
            data: {
                ...t,
                expertise: t.expertise as any
            }
        })
    }
    console.log(`✅ ${teamData.length} team members created`)

    // ============================================
    // 6. QUIZ QUESTIONS (sample from batik-001)
    // ============================================
    const quizData = [
        { question: 'Bahan tradisional apa yang digunakan untuk membuat pola resist pada batik?', options: ['Tanah liat', 'Lilin', 'Kertas', 'Garam'], correct: 1, explanation: 'Lilin panas diaplikasikan pada kain untuk membuat pola resist.' },
        { question: 'Apa yang disimbolkan oleh motif Mega Mendung dalam budaya Sunda?', options: ['Hujan dan air', 'Perlindungan dan kemakmuran', 'Perang dan konflik', 'Kematian dan berkabung'], correct: 1, explanation: 'Mega Mendung melambangkan perlindungan dan aliran kemakmuran.' },
        { question: 'Berapa lama waktu menggambar satu lembar batik dengan tangan?', options: ['2-3 jam', '5-7 jam', '8-12 jam', '20-24 jam'], correct: 2, explanation: 'Pengrajin ahli menghabiskan 8-12 jam menggambar pola rumit.' },
        { question: 'Bahan apa yang secara tradisional digunakan untuk membuat wayang kulit?', options: ['Kayu', 'Kertas', 'Kulit kerbau', 'Kain'], correct: 2, explanation: 'Wayang kulit dibuat dari kulit kerbau.' },
        { question: 'Berapa jam yang dibutuhkan untuk mengukir satu wayang?', options: ['10-15 jam', '30-50 jam', '70-90 jam', '120+ jam'], correct: 1, explanation: 'Pengukir ahli menginvestasikan 30-50 jam per wayang.' },
        { question: 'Apa yang membuat kain songket istimewa?', options: ['Benang sutra', 'Benang emas/perak', 'Hanya katun', 'Sintetis'], correct: 1, explanation: 'Kain songket ditenun dengan benang metalik emas dan perak.' },
        { question: 'Dari mana tanah liat gerabah Kasongan diekstrak?', options: ['Gunung', 'Tepi sungai', 'Area kota', 'Laut'], correct: 1, explanation: 'Tanah liat digali dari tepi sungai Kasongan.' },
        { question: 'Jamu terbuat dari apa?', options: ['Perasa buatan', 'Herbal dan rempah alami', 'Air gula', 'Bahan kimia'], correct: 1, explanation: 'Jamu tradisional dibuat dari 100% herbal dan rempah alami.' },
    ]

    for (const q of quizData) {
        await prisma.quizQuestion.create({
            data: {
                ...q,
                options: q.options as any
            }
        })
    }
    console.log(`✅ ${quizData.length} quiz questions created`)

    // ============================================
    // 7. REVIEWS (Sample)
    // ============================================
    const products = await prisma.product.findMany()
    for (const p of products) {
        await prisma.review.create({
            data: {
                rating: 5,
                comment: 'Produk yang luar biasa! Kualitas kerajinannya sangat bagus.',
                userId: demoUser.id,
                productId: p.id
            }
        })
    }
    console.log(`✅ Sample reviews created`)

    console.log('\n🎉 Seed completed successfully!')
    console.log('📧 Admin login: admin@legacytrace.id / admin123')
    console.log('📧 User login: user@legacytrace.id / user123')
}

main()
    .catch((e) => {
        console.error('❌ Seed error:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
