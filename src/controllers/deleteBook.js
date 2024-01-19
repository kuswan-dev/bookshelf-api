import { Book } from '../models/book.js'

export function deleteBook(request, h) {
    try {
        const { bookId } = request.params
        const book = Book.getById(bookId)

        if (book) {
            Book.delete(bookId)
            return h.response({
                status: 'success',
                message: 'Buku berhasil dihapus'
            }).code(200)
        } else {
            return h.response({
                status: 'fail',
                message: 'Buku gagal dihapus. Id tidak ditemukan'
            }).code(404)
        }
    } catch (_) {
        return h.response({
            status: 'fail',
            message: 'Terjadi kesalahan.'
        }).code(500)
    }
}
