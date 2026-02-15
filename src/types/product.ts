export interface SupplyStep {
    id: string
    title: string
    actor: string
    location: string
    description: string
    icon: string
    imageUrl?: string
}

export interface Product {
    id: string
    name: string
    umkm: string
    umkmStory: string
    village: string
    category: 'batik' | 'makanan' | 'kerajinan' | 'tenun' | 'gerabah' | 'herbal'
    description: string
    imageUrl: string
    ethicalBadges: string[]
    steps: SupplyStep[]
    artisanName: string
    artisanExperience: number
    artisanQuote: string
    artisanQuoteLocal?: string
    artisanPhotoUrl?: string
    culturalValue: string
}

export interface QuizQuestion {
    id: string
    question: string
    options: string[]
    correct: number
    explanation: string
}

export interface Artisan {
    id: string
    name: string
    photoUrl: string
    yearsExperience: number
    specialty: string
    culturalBackground: string
    quote: string
    products: string[]
}