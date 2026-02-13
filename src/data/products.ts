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
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    ethicalBadges: ['100% Hand-Drawn', 'Fair Trade', 'Eco-Dye', 'Artisan Certified'],
    steps: [
      {
        id: 'batik-step-1',
        title: 'Cotton Sourcing',
        actor: 'Local Farmers',
        location: 'West Java Fields',
        description: 'Premium cotton is harvested from sustainable farms in West Java, ensuring quality and ethical farming practices.',
        icon: '🌾',
        imageUrl: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop'
      },
      {
        id: 'batik-step-2',
        title: 'Fabric Preparation',
        actor: 'Preparation Team',
        location: 'Cirebon Workshop',
        description: 'Cotton is washed, dried, and prepared for the batik process using traditional methods.',
        icon: '🧵',
        imageUrl: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop'
      },
      {
        id: 'batik-step-3',
        title: 'Hand Drawing with Wax',
        actor: 'Master Artisan',
        location: 'Cirebon Workshop',
        description: 'Skilled artisans hand-draw the Mega Mendung motif using hot wax, a process that takes 8-12 hours per piece.',
        icon: '🖌️',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'batik-step-4',
        title: 'Natural Dyeing',
        actor: 'Dye Master',
        location: 'Cirebon Workshop',
        description: 'Fabric is immersed in natural indigo dye, creating the iconic deep blue color through traditional techniques.',
        icon: '🎨',
        imageUrl: 'https://images.unsplash.com/photo-1536228637022-db989d6c8e5b?w=400&h=300&fit=crop'
      },
      {
        id: 'batik-step-5',
        title: 'Wax Removal & Finishing',
        actor: 'Finishing Team',
        location: 'Cirebon Workshop',
        description: 'Hot wax is carefully removed, revealing the intricate pattern. Final pressing ensures perfect finish.',
        icon: '✨',
        imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop'
      },
      {
        id: 'batik-step-6',
        title: 'Quality Check & Packaging',
        actor: 'Quality Team',
        location: 'Cirebon Warehouse',
        description: 'Each piece is inspected for quality, then carefully packaged with eco-friendly materials.',
        icon: '📦',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Ibu Siti Nurhaliza',
    artisanExperience: 28,
    artisanQuote: 'Every pattern tells a story of our ancestors. I am just a keeper of this beautiful tradition.',
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
    imageUrl: 'https://images.unsplash.com/photo-1595563365619-7e1900ef4c0e?w=500&h=500&fit=crop',
    ethicalBadges: ['Heritage Pattern', 'Natural Materials', 'Solo Authentic'],
    steps: [
      {
        id: 'batik2-step-1',
        title: 'Thread Preparation',
        actor: 'Master Threader',
        location: 'Solo',
        description: 'Cotton threads selected for durability and quality.',
        icon: '🧶'
      },
      {
        id: 'batik2-step-2',
        title: 'Pattern Design',
        actor: 'Designer',
        location: 'Solo Workshop',
        description: 'Parang Rusak pattern carefully drafted.',
        icon: '✏️'
      },
      {
        id: 'batik2-step-3',
        title: 'Wax Application',
        actor: 'Wax Master',
        location: 'Solo Workshop',
        description: 'Hot wax applied to create resist.',
        icon: '🖌️'
      },
      {
        id: 'batik2-step-4',
        title: 'Indigo Bath',
        actor: 'Dyer',
        location: 'Solo Workshop',
        description: 'Multiple dye baths for deep color.',
        icon: '🎨'
      },
      {
        id: 'batik2-step-5',
        title: 'Wax Boiling',
        actor: 'Finisher',
        location: 'Solo Workshop',
        description: 'Wax melted off to reveal pattern.',
        icon: '🔥'
      },
      {
        id: 'batik2-step-6',
        title: 'Finishing Touch',
        actor: 'QC Team',
        location: 'Solo',
        description: 'Quality checked and packaged.',
        icon: '✨'
      }
    ],
    artisanName: 'Pak Santoso',
    artisanExperience: 32,
    artisanQuote: 'Parang Rusak carries the spirit of our warrior ancestors.',
    culturalValue: 'Represents warrior strength and dignity in Javanese tradition.'
  },

  // ===== SNACKS =====
  {
    id: 'snacks-001',
    name: 'Tahu Goreng Pedas Authentik',
    umkm: 'Tahu Goreng Mak Sumi',
    umkmStory: 'Family-run business for 18 years, producing deep-fried tofu snacks using traditional recipes passed down through generations.',
    village: 'Bandung, West Java',
    category: 'snacks',
    description: 'Crispy deep-fried tofu with spicy seasoning, a beloved local street snack packed with authentic flavors.',
    imageUrl: 'https://images.unsplash.com/photo-1599599810694-2a7a49d60908?w=500&h=500&fit=crop',
    ethicalBadges: ['Locally Sourced', 'No Preservatives', 'Family Recipe', 'Fresh Daily'],
    steps: [
      {
        id: 'snacks-step-1',
        title: 'Soybean Sourcing',
        actor: 'Bean Farmers',
        location: 'Bandung Region',
        description: 'High-quality soybeans sourced from local farmers, supporting community agriculture.',
        icon: '🫘',
        imageUrl: 'https://images.unsplash.com/photo-1599599810694-2a7a49d60908?w=400&h=300&fit=crop'
      },
      {
        id: 'snacks-step-2',
        title: 'Soybean Processing',
        actor: 'Processing Team',
        location: 'Bandung Workshop',
        description: 'Soybeans are cleaned, soaked, and ground to create fresh soy milk for tofu production.',
        icon: '⚙️',
        imageUrl: 'https://images.unsplash.com/photo-1576866209365-74ba233f3f48?w=400&h=300&fit=crop'
      },
      {
        id: 'snacks-step-3',
        title: 'Tofu Making',
        actor: 'Tofu Master',
        location: 'Bandung Workshop',
        description: 'Soy milk is coagulated and pressed into firm tofu blocks using traditional methods, 5am start daily.',
        icon: '🏭',
        imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'
      },
      {
        id: 'snacks-step-4',
        title: 'Deep Frying',
        actor: 'Mak Sumi Team',
        location: 'Bandung Kitchen',
        description: 'Tofu is cut into cubes and deep-fried in premium oil until golden and crispy.',
        icon: '🍳',
        imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
      },
      {
        id: 'snacks-step-5',
        title: 'Spice Coating',
        actor: 'Seasoning Specialist',
        location: 'Bandung Kitchen',
        description: 'Fresh-fried tofu is coated with secret spice blend, made from grinding traditional spices daily.',
        icon: '🌶️',
        imageUrl: 'https://images.unsplash.com/photo-1596040995857-ba42d16cb0f2?w=400&h=300&fit=crop'
      },
      {
        id: 'snacks-step-6',
        title: 'Packaging & Distribution',
        actor: 'Distribution Team',
        location: 'Bandung',
        description: 'Hot tofu is packed in paper bags to maintain crispiness, distributed to local markets within hours.',
        icon: '🚗',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Mak Sumi',
    artisanExperience: 18,
    artisanQuote: 'Simple ingredients, made with love. That\'s the secret to delicious tahu goreng.',
    culturalValue: 'Tahu goreng is a staple street food that brings communities together in Indonesian culture.'
  },

  {
    id: 'snacks-002',
    name: 'Kue Lumpia Basah',
    umkm: 'Kue Lumpia Ibu Retno',
    umkmStory: 'Traditional spring rolls maker for 15 years, using grandmother\'s authentic recipe.',
    village: 'Semarang, Central Java',
    category: 'snacks',
    description: 'Fresh soft spring rolls filled with vegetables and meat, wrapped in thin golden crepes.',
    imageUrl: 'https://images.unsplash.com/photo-1586985289688-cacf35b827dc?w=500&h=500&fit=crop',
    ethicalBadges: ['Fresh Ingredients', 'No MSG', 'Traditional Recipe', 'Handmade Wrappers'],
    steps: [
      {
        id: 'lumpia-step-1',
        title: 'Flour Milling',
        actor: 'Miller',
        location: 'Semarang',
        description: 'Premium flour milled from local rice.',
        icon: '🌾'
      },
      {
        id: 'lumpia-step-2',
        title: 'Dough Preparation',
        actor: 'Baker',
        location: 'Semarang Kitchen',
        description: 'Flour mixed with water for crepe batter.',
        icon: '👨‍🍳'
      },
      {
        id: 'lumpia-step-3',
        title: 'Crepe Making',
        actor: 'Crepe Master',
        location: 'Semarang Kitchen',
        description: 'Thin crepes cooked on hot griddle.',
        icon: '🔥'
      },
      {
        id: 'lumpia-step-4',
        title: 'Filling Preparation',
        actor: 'Filling Team',
        location: 'Semarang Kitchen',
        description: 'Vegetables and meat sautéed.',
        icon: '🥘'
      },
      {
        id: 'lumpia-step-5',
        title: 'Rolling & Wrapping',
        actor: 'Wrapper',
        location: 'Semarang Kitchen',
        description: 'Hand-rolled with care.',
        icon: '🌯'
      },
      {
        id: 'lumpia-step-6',
        title: 'Packaging',
        actor: 'Team',
        location: 'Semarang',
        description: 'Packed in boxes for delivery.',
        icon: '📦'
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
    category: 'crafts',
    description: 'Hand-carved leather shadow puppets, intricate pieces of theatrical art that tell stories of Indonesian heritage.',
    imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop',
    ethicalBadges: ['Handcarved', 'UNESCO Heritage', 'Cultural Preservation', 'Master Craft'],
    steps: [
      {
        id: 'craft-step-1',
        title: 'Leather Selection',
        actor: 'Master Selector',
        location: 'Yogyakarta Studio',
        description: 'Premium buffalo leather is carefully selected for thickness and flexibility suitable for shadow puppet craft.',
        icon: '🐃',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'craft-step-2',
        title: 'Pattern Transfer',
        actor: 'Design Artisan',
        location: 'Yogyakarta Studio',
        description: 'Traditional wayang character designs are transferred onto prepared leather using time-tested templates.',
        icon: '🖼️',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'craft-step-3',
        title: 'Carving & Chiseling',
        actor: 'Master Carver',
        location: 'Yogyakarta Studio',
        description: 'Each puppet is intricately carved by hand using traditional chisels and tools, taking 30-50 hours per piece.',
        icon: '⚒️',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'craft-step-4',
        title: 'Piercing & Detail Work',
        actor: 'Detail Specialist',
        location: 'Yogyakarta Studio',
        description: 'Delicate details are pierced and refined, creating the beautiful shadow effects the puppet will produce.',
        icon: '🔨',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'craft-step-5',
        title: 'Leather Coloring',
        actor: 'Color Specialist',
        location: 'Yogyakarta Studio',
        description: 'Natural plant-based pigments are applied to color the puppet, enhancing its theatrical beauty.',
        icon: '🎨',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'craft-step-6',
        title: 'Handle Attachment & Quality',
        actor: 'Assembly Master',
        location: 'Yogyakarta Studio',
        description: 'Wooden handles are attached and each puppet undergoes final quality inspection before delivery.',
        icon: '🎭',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Ki Purbo',
    artisanExperience: 35,
    artisanQuote: 'Wayang is not just art—it is the voice of our ancestors, the conscience of our people.',
    culturalValue: 'Wayang kulit is a UNESCO-recognized intangible cultural heritage representing Indonesian philosophical values.'
  },

  {
    id: 'crafts-002',
    name: 'Topeng Cirebon Handmade',
    umkm: 'Topeng Cirebon Heritage',
    umkmStory: '20 years of creating traditional mask art for theatrical performances and cultural ceremonies.',
    village: 'Cirebon, West Java',
    category: 'crafts',
    description: 'Handmade wooden masks with vibrant colors, used in traditional Cirebon mask dance.',
    imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop',
    ethicalBadges: ['Handcrafted', 'Traditional Art', 'Natural Paint'],
    steps: [
      {
        id: 'topeng-step-1',
        title: 'Wood Selection',
        actor: 'Carpenter',
        location: 'Cirebon',
        description: 'Select lightweight wood suitable for mask.',
        icon: '🌳'
      },
      {
        id: 'topeng-step-2',
        title: 'Wood Carving',
        actor: 'Master Carver',
        location: 'Cirebon Studio',
        description: 'Carve facial features and expressions.',
        icon: '⚒️'
      },
      {
        id: 'topeng-step-3',
        title: 'Sanding',
        actor: 'Finisher',
        location: 'Cirebon Studio',
        description: 'Smooth the surface.',
        icon: '🪵'
      },
      {
        id: 'topeng-step-4',
        title: 'Base Coating',
        actor: 'Painter',
        location: 'Cirebon Studio',
        description: 'Apply white base coat.',
        icon: '🎨'
      },
      {
        id: 'topeng-step-5',
        title: 'Color Painting',
        actor: 'Artist',
        location: 'Cirebon Studio',
        description: 'Paint vibrant colors and details.',
        icon: '🖌️'
      },
      {
        id: 'topeng-step-6',
        title: 'Assembly',
        actor: 'Assembler',
        location: 'Cirebon Studio',
        description: 'Attach elastic and final touches.',
        icon: '✨'
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
    category: 'woven',
    description: 'Hand-woven ikat fabric with intricate geometric patterns, using traditional techniques passed down for generations.',
    imageUrl: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop',
    ethicalBadges: ['Hand-Woven', 'Fair Trade Certified', 'Artisan Support', '200+ Year Heritage'],
    steps: [
      {
        id: 'woven-step-1',
        title: 'Cotton Preparation',
        actor: 'Preparation Masters',
        location: 'Lombok Village',
        description: 'High-quality cotton threads are prepared and organized by color, ready for dyeing process.',
        icon: '🧶',
        imageUrl: 'https://images.unsplash.com/photo-1617635279887-4e5d75e5a09d?w=400&h=300&fit=crop'
      },
      {
        id: 'woven-step-2',
        title: 'Thread Resist Tying',
        actor: 'Tying Artisans',
        location: 'Lombok Workshop',
        description: 'Threads are carefully tied with raffia to create resist patterns, controlling where color will set.',
        icon: '🪢',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'woven-step-3',
        title: 'Natural Dyeing',
        actor: 'Dye Specialists',
        location: 'Lombok Workshop',
        description: 'Threads are immersed in natural dyes from plants, creating vibrant authentic colors.',
        icon: '🌿',
        imageUrl: 'https://images.unsplash.com/photo-1596040995857-ba42d16cb0f2?w=400&h=300&fit=crop'
      },
      {
        id: 'woven-step-4',
        title: 'Manual Loom Weaving',
        actor: 'Master Weavers',
        location: 'Lombok Village',
        description: 'Dyed threads are hand-woven on traditional wooden looms, taking 40-80 hours per piece.',
        icon: '🪡',
        imageUrl: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop'
      },
      {
        id: 'woven-step-5',
        title: 'Finishing & Pressing',
        actor: 'Finishing Team',
        location: 'Lombok Workshop',
        description: 'Woven fabric is carefully finished, pressed, and inspected for quality and pattern precision.',
        icon: '✨',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'woven-step-6',
        title: 'Eco-Packaging & Export',
        actor: 'Export Team',
        location: 'Lombok Warehouse',
        description: 'Finished fabric is packaged in sustainable materials and prepared for fair-trade distribution.',
        icon: '🌍',
        imageUrl: 'https://images.unsplash.com/photo-1617635279887-4e5d75e5a09d?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Pak Wayan',
    artisanExperience: 42,
    artisanQuote: 'My grandfather taught my father, my father taught me, and now I teach my daughter. This is our legacy.',
    culturalValue: 'Tenun ikat represents the cultural identity and spiritual beliefs of Lombok communities.'
  },

  {
    id: 'woven-002',
    name: 'Kain Songket Palembang',
    umkm: 'Songket Palembang Premium',
    umkmStory: '25 years creating luxurious songket fabric with gold and silver threads for royal ceremonies.',
    village: 'Palembang, South Sumatra',
    category: 'woven',
    description: 'Luxury hand-woven fabric with gold and silver thread accents, traditionally worn for special occasions.',
    imageUrl: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop',
    ethicalBadges: ['Gold Thread', 'Royal Quality', 'Hand-Woven', 'Festival Wear'],
    steps: [
      {
        id: 'songket-step-1',
        title: 'Thread Sourcing',
        actor: 'Thread Master',
        location: 'Palembang',
        description: 'Premium silk and metallic threads sourced.',
        icon: '✨'
      },
      {
        id: 'songket-step-2',
        title: 'Thread Organization',
        actor: 'Organizer',
        location: 'Palembang Workshop',
        description: 'Threads organized by color and type.',
        icon: '🧶'
      },
      {
        id: 'songket-step-3',
        title: 'Loom Setup',
        actor: 'Loom Master',
        location: 'Palembang Workshop',
        description: 'Traditional loom prepared for weaving.',
        icon: '⚙️'
      },
      {
        id: 'songket-step-4',
        title: 'Gold Thread Weaving',
        actor: 'Master Weaver',
        location: 'Palembang Workshop',
        description: 'Carefully weave gold/silver threads into pattern.',
        icon: '🧵'
      },
      {
        id: 'songket-step-5',
        title: 'Quality Inspection',
        actor: 'QC Inspector',
        location: 'Palembang Workshop',
        description: 'Check pattern and thread quality.',
        icon: '🔍'
      },
      {
        id: 'songket-step-6',
        title: 'Royal Packaging',
        actor: 'Team',
        location: 'Palembang',
        description: 'Packaged in premium boxes.',
        icon: '📦'
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
    category: 'pottery',
    description: 'Handmade pottery with traditional Javanese motifs, crafted using ancient clay and firing techniques.',
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a7167e67?w=500&h=500&fit=crop',
    ethicalBadges: ['Handmade', 'Natural Clay', 'Cultural Icon', 'Artisan Community'],
    steps: [
      {
        id: 'pottery-step-1',
        title: 'Clay Extraction',
        actor: 'Clay Miner',
        location: 'Kasongan Riverbank',
        description: 'Natural clay is carefully dug from the riverbank using traditional methods.',
        icon: '⛏️',
        imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a7167e67?w=400&h=300&fit=crop'
      },
      {
        id: 'pottery-step-2',
        title: 'Clay Preparation',
        actor: 'Prep Team',
        location: 'Kasongan Workshop',
        description: 'Clay is kneaded, hydrated, and prepared for pottery making.',
        icon: '👐',
        imageUrl: 'https://images.unsplash.com/photo-1576066211575-d60bbb31ac0e?w=400&h=300&fit=crop'
      },
      {
        id: 'pottery-step-3',
        title: 'Hand Shaping',
        actor: 'Potter Master',
        location: 'Kasongan Workshop',
        description: 'Vessels hand-shaped on manual pottery wheel.',
        icon: '⚙️',
        imageUrl: 'https://images.unsplash.com/photo-1565193566173-7cba06dab0d4?w=400&h=300&fit=crop'
      },
      {
        id: 'pottery-step-4',
        title: 'Air Drying',
        actor: 'Drying Team',
        location: 'Kasongan Workshop',
        description: 'Shaped pottery left to dry naturally for several days.',
        icon: '☀️',
        imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a7167e67?w=400&h=300&fit=crop'
      },
      {
        id: 'pottery-step-5',
        title: 'Traditional Firing',
        actor: 'Kiln Master',
        location: 'Kasongan Kiln',
        description: 'Fired in traditional wood-burning kiln to create durable pottery.',
        icon: '🔥',
        imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a7167e67?w=400&h=300&fit=crop'
      },
      {
        id: 'pottery-step-6',
        title: 'Motif Painting',
        actor: 'Artist',
        location: 'Kasongan Workshop',
        description: 'Traditional Javanese motifs painted on finished pottery.',
        icon: '🎨',
        imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a7167e67?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Pak Sulaiman',
    artisanExperience: 38,
    artisanQuote: 'Clay connects us to earth and tradition, each piece carries the spirit of our ancestors.',
    culturalValue: 'Kasongan pottery fosters community identity and preserves Javanese artistic heritage.'
  },

  {
    id: 'pottery-002',
    name: 'Periuk Tanah Liat Bandung',
    umkm: 'Periuk Bandung Heritage',
    umkmStory: 'Traditional earthenware pots maker for cooking, preserving the skill of ancient pottery craft.',
    village: 'Bandung, West Java',
    category: 'pottery',
    description: 'Functional earthenware cookware, perfect for traditional Indonesian cooking methods.',
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a7167e67?w=500&h=500&fit=crop',
    ethicalBadges: ['Functional Art', 'Natural Clay', 'Eco-Friendly', 'Traditional'],
    steps: [
      {
        id: 'periuk-step-1',
        title: 'Clay Mining',
        actor: 'Miner',
        location: 'Bandung',
        description: 'Extract natural clay from earth.',
        icon: '⛏️'
      },
      {
        id: 'periuk-step-2',
        title: 'Clay Refinement',
        actor: 'Refiner',
        location: 'Bandung Workshop',
        description: 'Remove stones and impurities.',
        icon: '🧹'
      },
      {
        id: 'periuk-step-3',
        title: 'Hand Molding',
        actor: 'Molder',
        location: 'Bandung Workshop',
        description: 'Mold clay into pot shape.',
        icon: '🤲'
      },
      {
        id: 'periuk-step-4',
        title: 'Handle Attachment',
        actor: 'Assembler',
        location: 'Bandung Workshop',
        description: 'Attach handles to pot.',
        icon: '🔗'
      },
      {
        id: 'periuk-step-5',
        title: 'Kiln Firing',
        actor: 'Kiln Master',
        location: 'Bandung Kiln',
        description: 'Fire in traditional kiln.',
        icon: '🔥'
      },
      {
        id: 'periuk-step-6',
        title: 'Quality Testing',
        actor: 'Tester',
        location: 'Bandung Workshop',
        description: 'Test for durability and function.',
        icon: '✅'
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
    imageUrl: 'https://images.unsplash.com/photo-1597318970834-a57ae9eb4f4d?w=500&h=500&fit=crop',
    ethicalBadges: ['100% Natural', 'No Additives', 'Family Recipe', 'Organic Herbs'],
    steps: [
      {
        id: 'jamu-step-1',
        title: 'Herb Harvesting',
        actor: 'Farmer',
        location: 'Yogyakarta Gardens',
        description: 'Organic herbs and roots harvested at peak potency.',
        icon: '🌿',
        imageUrl: 'https://images.unsplash.com/photo-1597318970834-a57ae9eb4f4d?w=400&h=300&fit=crop'
      },
      {
        id: 'jamu-step-2',
        title: 'Herb Drying',
        actor: 'Drying Master',
        location: 'Yogyakarta Workshop',
        description: 'Herbs dried naturally to preserve potency.',
        icon: '☀️',
        imageUrl: 'https://images.unsplash.com/photo-1571513200266-1d8c3d9bf2fb?w=400&h=300&fit=crop'
      },
      {
        id: 'jamu-step-3',
        title: 'Herb Grinding',
        actor: 'Grinder',
        location: 'Yogyakarta Workshop',
        description: 'Dried herbs ground to fine powder.',
        icon: '⚙️',
        imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a7167e67?w=400&h=300&fit=crop'
      },
      {
        id: 'jamu-step-4',
        title: 'Formula Mixing',
        actor: 'Herbalist Master',
        location: 'Yogyakarta Workshop',
        description: 'Mix ingredients according to ancient recipe.',
        icon: '🧪',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'jamu-step-5',
        title: 'Brewing & Extraction',
        actor: 'Brewer',
        location: 'Yogyakarta Kitchen',
        description: 'Steep ingredients to extract benefits.',
        icon: '☕',
        imageUrl: 'https://images.unsplash.com/photo-1597318970834-a57ae9eb4f4d?w=400&h=300&fit=crop'
      },
      {
        id: 'jamu-step-6',
        title: 'Bottling & Packaging',
        actor: 'Packager',
        location: 'Yogyakarta',
        description: 'Bottled in glass containers to preserve quality.',
        icon: '🍯',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Ibu Citra',
    artisanExperience: 30,
    artisanQuote: 'Jamu is not just a drink, it is healing wisdom from our ancestors.',
    culturalValue: 'Traditional jamu represents centuries of Indonesian healing practices and wellness culture.'
  },

  {
    id: 'herbal-002',
    name: 'Minyak Kayu Putih Organik',
    umkm: 'Minyak Kayu Putih Adi Jaya',
    umkmStory: 'Extracting essential oils from cajeput trees for 20 years using sustainable methods.',
    village: 'Ambon, Maluku',
    category: 'herbal',
    description: 'Pure cajeput oil with soothing and medicinal properties, extracted from native Maluku trees.',
    imageUrl: 'https://images.unsplash.com/photo-1618047651857-87773836f890?w=500&h=500&fit=crop',
    ethicalBadges: ['Pure Essential Oil', 'Sustainable Harvest', 'Maluku Native', 'Organic'],
    steps: [
      {
        id: 'minyak-step-1',
        title: 'Tree Selection',
        actor: 'Forester',
        location: 'Ambon Forest',
        description: 'Select mature cajeput trees for harvest.',
        icon: '🌳',
        imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'
      },
      {
        id: 'minyak-step-2',
        title: 'Leaf Harvesting',
        actor: 'Harvester',
        location: 'Ambon Forest',
        description: 'Carefully harvest fresh leaves.',
        icon: '🍃',
        imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'
      },
      {
        id: 'minyak-step-3',
        title: 'Leaf Cleaning',
        actor: 'Cleaner',
        location: 'Ambon Workshop',
        description: 'Clean leaves from dirt and debris.',
        icon: '🧹'
      },
      {
        id: 'minyak-step-4',
        title: 'Distillation Process',
        actor: 'Distiller',
        location: 'Ambon Workshop',
        description: 'Steam distillation to extract pure oil.',
        icon: '🔬',
        imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop'
      },
      {
        id: 'minyak-step-5',
        title: 'Oil Filtering',
        actor: 'Filterer',
        location: 'Ambon Workshop',
        description: 'Filter oil to remove impurities.',
        icon: '⚙️'
      },
      {
        id: 'minyak-step-6',
        title: 'Bottling',
        actor: 'Packager',
        location: 'Ambon',
        description: 'Bottle in dark glass to preserve quality.',
        icon: '🧴',
        imageUrl: 'https://images.unsplash.com/photo-1618047651857-87773836f890?w=400&h=300&fit=crop'
      }
    ],
    artisanName: 'Pak Ambo',
    artisanExperience: 20,
    artisanQuote: 'Nature provides; we just extract its essence respectfully.',
    culturalValue: 'Cajeput oil is an essential part of Indonesian traditional medicine and wellness.'
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
      question: 'Where does cajeput oil originate from?',
      options: ['Java', 'Sumatra', 'Maluku', 'Bali'],
      correct: 2,
      explanation: 'Cajeput trees are native to Maluku islands, where the oil is sustainably harvested.'
    },
    {
      id: 'q2',
      question: 'What method is used to extract cajeput oil?',
      options: ['Pressing', 'Steam distillation', 'Chemical extraction', 'Soaking'],
      correct: 1,
      explanation: 'Pure cajeput oil is extracted using steam distillation process from fresh leaves.'
    },
    {
      id: 'q3',
      question: 'How many years has this production method been used?',
      options: ['5 years', '10 years', '20 years', '30 years'],
      correct: 2,
      explanation: 'Adi Jaya has been extracting essential oils using sustainable methods for 20 years.'
    }
  ]
}