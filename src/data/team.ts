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
    name: 'Muhammad Faqih',
    role: 'Beban Fakultas',
    position: 'Beban Fakultas',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    image: '/assets/team/golden-gunungan-wayang-design-indonesian-javanese-culture-free-png-removebg-preview.png',
    email: 'faqih@legacytrace.id',
    phone: '+62 812-3456-7890',
    social: {
      linkedin: '#',
      instagram: 'https://instagram.com/voidbriella'
    },
    expertise: ['Beban Kampus'],
    experience: 8,
    quote: 'yang penting makan nasi'
  },
  {
    id: 'team-002',
    name: 'Kaffqa Tegar Gayuh Pamungkas',
    role: 'Beban Fakultas',
    position: 'Beban Fakultas',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    image: '/assets/team/golden-gunungan-wayang-design-indonesian-javanese-culture-free-png-removebg-preview.png',
    email: 'kaffqa@legacytrace.id',
    phone: '+62 821-9876-5432',
    social: {
      linkedin: '#',
      instagram: '#'
    },
    expertise: ['Beban Kampus'],
    experience: 6,
    quote: 'yang penting makan nasi'
  },
  {
    id: 'team-003',
    name: 'Desmonda Varel Robel Salim',
    role: 'Beban Fakultas',
    position: 'Beban Fakultas',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    image: '/assets/team/golden-gunungan-wayang-design-indonesian-javanese-culture-free-png-removebg-preview.png',
    email: 'v@legacytrace.id',
    phone: '+62 822-1111-2222',
    social: {
      linkedin: '#',
      instagram: '#'
    },
    expertise: ['Beban Kampus'],
    experience: 5,
    quote: 'yang penting makan nasi'
  }
]