import { Book } from '../models/book.js'

export function getBookDetail(request, h) {
    try {
        const { bookId } = request.params
        const book = Book.getById(bookId)

        if (book) {
            return h.response({
                status: 'success',
                data: { book }
            }).code(200)
        } else {
            return h.response({
                status: 'fail',
                message: 'Buku tidak ditemukan'
            }).code(404)
        }
    } catch (_) {
        return h.response({
            status: 'fail',
            message: 'Terjadi kesalahan.'
        }).code(500)
    }
}
