import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const prisma = new PrismaClient()

async function exportData() {
    console.log('📦 Exporting data from SQLite...\n')

    const users = await prisma.user.findMany()
    console.log(`  ✅ Users: ${users.length}`)

    const artisans = await prisma.artisan.findMany()
    console.log(`  ✅ Artisans: ${artisans.length}`)

    const products = await prisma.product.findMany()
    console.log(`  ✅ Products: ${products.length}`)

    const supplySteps = await prisma.supplyStep.findMany()
    console.log(`  ✅ SupplySteps: ${supplySteps.length}`)

    const reviews = await prisma.review.findMany()
    console.log(`  ✅ Reviews: ${reviews.length}`)

    const regions = await prisma.region.findMany()
    console.log(`  ✅ Regions: ${regions.length}`)

    const regionProducts = await prisma.regionProduct.findMany()
    console.log(`  ✅ RegionProducts: ${regionProducts.length}`)

    const teamMembers = await prisma.teamMember.findMany()
    console.log(`  ✅ TeamMembers: ${teamMembers.length}`)

    const quizQuestions = await prisma.quizQuestion.findMany()
    console.log(`  ✅ QuizQuestions: ${quizQuestions.length}`)

    // Parse JSON string fields before export (so they're stored as real arrays in JSON)
    const data = {
        exportedAt: new Date().toISOString(),
        users,
        artisans,
        products,
        supplySteps,
        reviews,
        regions,
        regionProducts,
        teamMembers,
        quizQuestions
    }

    const outPath = path.join(__dirname, 'data-backup.json')
    fs.writeFileSync(outPath, JSON.stringify(data, null, 2), 'utf-8')

    console.log(`\n✅ Data exported to: ${outPath}`)
    console.log(`   Total records: ${users.length + artisans.length + products.length + supplySteps.length + reviews.length + regions.length + regionProducts.length + teamMembers.length + quizQuestions.length}`)
}



exportData()
    .catch(console.error)
    .finally(() => prisma.$disconnect())
