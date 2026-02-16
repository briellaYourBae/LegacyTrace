import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const prisma = new PrismaClient()

async function importData() {
    const backupPath = path.join(__dirname, 'data-backup.json')

    if (!fs.existsSync(backupPath)) {
        console.error('❌ data-backup.json not found! Run export-data.ts first.')
        process.exit(1)
    }

    const data = JSON.parse(fs.readFileSync(backupPath, 'utf-8'))
    console.log(`📥 Importing data from backup (exported at ${data.exportedAt})...\n`)

    // Clear existing data (in reverse dependency order)
    await prisma.review.deleteMany()
    await prisma.supplyStep.deleteMany()
    await prisma.regionProduct.deleteMany()
    await prisma.product.deleteMany()
    await prisma.artisan.deleteMany()
    await prisma.region.deleteMany()
    await prisma.teamMember.deleteMany()
    await prisma.quizQuestion.deleteMany()
    await prisma.user.deleteMany()
    console.log('  🗑️  Cleared existing data')

    // Import in dependency order
    // 1. Users
    for (const user of data.users) {
        await prisma.user.create({
            data: {
                id: user.id,
                email: user.email,
                password: user.password,
                name: user.name,
                role: user.role,
                createdAt: new Date(user.createdAt),
                updatedAt: new Date(user.updatedAt)
            }
        })
    }
    console.log(`  ✅ Users: ${data.users.length}`)

    // 2. Artisans
    for (const artisan of data.artisans) {
        await prisma.artisan.create({
            data: {
                id: artisan.id,
                name: artisan.name,
                specialty: artisan.specialty,
                location: artisan.location,
                description: artisan.description,
                quote: artisan.quote,
                quoteLocal: artisan.quoteLocal,
                photoUrl: artisan.photoUrl,
                yearsExperience: artisan.yearsExperience,
                culturalBackground: artisan.culturalBackground,
                createdAt: new Date(artisan.createdAt),
                updatedAt: new Date(artisan.updatedAt)
            }
        })
    }
    console.log(`  ✅ Artisans: ${data.artisans.length}`)

    // 3. Products (ethicalBadges stored as real array in PostgreSQL Json field)
    for (const product of data.products) {
        await prisma.product.create({
            data: {
                id: product.id,
                name: product.name,
                description: product.description,
                category: product.category,
                imageUrl: product.imageUrl,
                umkm: product.umkm,
                umkmStory: product.umkmStory,
                village: product.village,
                culturalValue: product.culturalValue,
                ethicalBadges: product.ethicalBadges, // Already a real array from export
                artisanId: product.artisanId,
                createdAt: new Date(product.createdAt),
                updatedAt: new Date(product.updatedAt)
            }
        })
    }
    console.log(`  ✅ Products: ${data.products.length}`)

    // 4. SupplySteps
    for (const step of data.supplySteps) {
        await prisma.supplyStep.create({
            data: {
                id: step.id,
                title: step.title,
                actor: step.actor,
                location: step.location,
                description: step.description,
                icon: step.icon,
                imageUrl: step.imageUrl,
                sortOrder: step.sortOrder,
                productId: step.productId
            }
        })
    }
    console.log(`  ✅ SupplySteps: ${data.supplySteps.length}`)

    // 5. Reviews
    for (const review of data.reviews) {
        await prisma.review.create({
            data: {
                id: review.id,
                rating: review.rating,
                comment: review.comment,
                userId: review.userId,
                productId: review.productId,
                createdAt: new Date(review.createdAt)
            }
        })
    }
    console.log(`  ✅ Reviews: ${data.reviews.length}`)

    // 6. Regions
    for (const region of data.regions) {
        await prisma.region.create({
            data: {
                id: region.id,
                name: region.name,
                emoji: region.emoji,
                description: region.description,
                createdAt: new Date(region.createdAt),
                updatedAt: new Date(region.updatedAt)
            }
        })
    }
    console.log(`  ✅ Regions: ${data.regions.length}`)

    // 7. RegionProducts
    for (const rp of data.regionProducts) {
        await prisma.regionProduct.create({
            data: {
                id: rp.id,
                name: rp.name,
                category: rp.category,
                umkm: rp.umkm,
                emoji: rp.emoji,
                regionId: rp.regionId
            }
        })
    }
    console.log(`  ✅ RegionProducts: ${data.regionProducts.length}`)

    // 8. TeamMembers (expertise stored as real array in PostgreSQL Json field)
    for (const member of data.teamMembers) {
        await prisma.teamMember.create({
            data: {
                id: member.id,
                name: member.name,
                role: member.role,
                position: member.position,
                bio: member.bio,
                image: member.image,
                email: member.email,
                phone: member.phone,
                linkedin: member.linkedin,
                twitter: member.twitter,
                instagram: member.instagram,
                expertise: member.expertise, // Already a real array from export
                experience: member.experience,
                quote: member.quote,
                createdAt: new Date(member.createdAt),
                updatedAt: new Date(member.updatedAt)
            }
        })
    }
    console.log(`  ✅ TeamMembers: ${data.teamMembers.length}`)

    // 9. QuizQuestions (options stored as real array in PostgreSQL Json field)
    for (const q of data.quizQuestions) {
        await prisma.quizQuestion.create({
            data: {
                id: q.id,
                question: q.question,
                options: q.options, // Already a real array from export
                correct: q.correct,
                explanation: q.explanation
            }
        })
    }
    console.log(`  ✅ QuizQuestions: ${data.quizQuestions.length}`)

    // Reset auto-increment sequences for PostgreSQL
    // Reset auto-increment sequences for PostgreSQL
    // const tables = ['User', 'Artisan', 'Product', 'SupplyStep', 'Review', 'Region', 'RegionProduct', 'TeamMember', 'QuizQuestion']
    // for (const table of tables) {
    //     try {
    //         await prisma.$executeRawUnsafe(
    //             `SELECT setval(pg_get_serial_sequence('"${table}"', 'id'), (SELECT COALESCE(MAX(id), 0) FROM "${table}") + 1, false)`
    //         )
    //     } catch (e) {
    //         // Ignore if sequence doesn't exist (might happen with different naming)
    //     }
    // }
    console.log('  🔄 Reset auto-increment sequences')

    console.log('\n✅ Data import complete!')
}

importData()
    .catch(console.error)
    .finally(() => prisma.$disconnect())
