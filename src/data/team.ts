export interface TeamMember {
  id: string
  name: string
  role: string
  position: string
  bio: string
  image: string
  email: string
  phone: string
  social: {
    linkedin?: string
    twitter?: string
    instagram?: string
  }
  expertise: string[]
  experience: number
  quote: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 'team-001',
    name: 'Eka Putri Wijaya',
    role: 'Founder & Creative Director',
    position: 'Project Lead',
    bio: 'Eka adalah pendiri LegacyTrace dengan visi untuk melestarikan warisan budaya UMKM Indonesia. Dengan latar belakang desain grafis dan passion terhadap social entrepreneurship, dia memimpin tim untuk menciptakan platform storytelling yang bermakna.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
    email: 'eka@legacytrace.id',
    phone: '+62 812-3456-7890',
    social: {
      linkedin: 'https://linkedin.com/in/ekaputri',
      twitter: 'https://twitter.com/ekaputri',
      instagram: 'https://instagram.com/ekaputri'
    },
    expertise: ['Brand Strategy', 'UX/UI Design', 'Social Entrepreneurship', 'Storytelling'],
    experience: 8,
    quote: 'Setiap UMKM memiliki cerita unik yang perlu didengar dunia.'
  },
  {
    id: 'team-002',
    name: 'Rendra Kusuma',
    role: 'Lead Developer & Tech Strategist',
    position: 'CTO',
    bio: 'Rendra adalah developer berpengalaman dengan expertise dalam full-stack web development. Dia bertanggung jawab untuk mengembangkan infrastruktur teknis LegacyTrace yang robust dan scalable.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    email: 'rendra@legacytrace.id',
    phone: '+62 821-9876-5432',
    social: {
      linkedin: 'https://linkedin.com/in/rendrakusuma',
      twitter: 'https://twitter.com/rendrakusuma',
      instagram: 'https://instagram.com/rendrakusuma'
    },
    expertise: ['Full-Stack Development', 'React/TypeScript', 'Database Design', 'DevOps'],
    experience: 6,
    quote: 'Technology should empower communities, not replace them.'
  },
  {
    id: 'team-003',
    name: 'Sinta Maharani',
    role: 'Content & Community Manager',
    position: 'Community Lead',
    bio: 'Sinta adalah jantung dari strategi konten dan community engagement LegacyTrace. Dengan background di journalism dan digital marketing, dia mengkurasi cerita-cerita artisan yang menarik.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
    email: 'sinta@legacytrace.id',
    phone: '+62 822-1111-2222',
    social: {
      linkedin: 'https://linkedin.com/in/sintamaharani',
      twitter: 'https://twitter.com/sintamaharani',
      instagram: 'https://instagram.com/sintamaharani'
    },
    expertise: ['Content Writing', 'Community Management', 'Social Media Marketing', 'Journalism'],
    experience: 5,
    quote: 'Cerita autentik adalah jembatan antara artisan dan dunia.'
  }
]