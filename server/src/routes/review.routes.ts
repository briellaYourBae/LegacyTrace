import { Router, Request, Response } from 'express'
import prisma from '../lib/prisma.js'
import { authenticate, AuthRequest } from '../middleware/auth.js'

const router = Router()

// GET /api/reviews?productId=X - Public
router.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const { productId } = req.query
        const where = productId ? { productId: parseInt(productId as string) } : {}
        const reviews = await prisma.review.findMany({
            where,
            include: { user: { select: { id: true, name: true } } },
            orderBy: { createdAt: 'desc' }
        })
        res.json(reviews)
    } catch (error) {
        console.error('Get reviews error:', error)
        res.status(500).json({ error: 'Gagal mengambil data review' })
    }
})

// POST /api/reviews - User only (authenticated)
router.post('/', authenticate, async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { rating, comment, productId } = req.body

        if (!rating || !comment || !productId) {
            res.status(400).json({ error: 'Rating, komentar, dan productId wajib diisi' })
            return
        }

        if (rating < 1 || rating > 5) {
            res.status(400).json({ error: 'Rating harus antara 1-5' })
            return
        }

        const review = await prisma.review.create({
            data: {
                rating: parseInt(rating),
                comment,
                userId: req.user!.id,
                productId: parseInt(productId)
            },
            include: { user: { select: { id: true, name: true } } }
        })

        res.status(201).json(review)
    } catch (error) {
        console.error('Create review error:', error)
        res.status(500).json({ error: 'Gagal membuat review' })
    }
})

// DELETE /api/reviews/:id - Owner or Admin
router.delete('/:id', authenticate, async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const review = await prisma.review.findUnique({ where: { id: parseInt(req.params.id as string) } })
        if (!review) {
            res.status(404).json({ error: 'Review tidak ditemukan' })
            return
        }

        if (review.userId !== req.user!.id && req.user!.role !== 'ADMIN') {
            res.status(403).json({ error: 'Tidak memiliki akses' })
            return
        }

        await prisma.review.delete({ where: { id: review.id } })
        res.json({ message: 'Review berhasil dihapus' })
    } catch (error) {
        console.error('Delete review error:', error)
        res.status(500).json({ error: 'Gagal menghapus review' })
    }
})

export default router
