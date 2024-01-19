import { Book } from '../models/book.js'

export function updateBook(request, h) {
    try {
        const { bookId } = request.params
        const data = request.payload

        const book = Book.getById(bookId)

        if (!data.name) {
            return h.response({
                status: 'fail',
                message: 'Gagal memperbarui buku. Mohon isi nama buku'
            }).code(400)
        } else if (data.readPage > data.pageCount) {
            return h.response({
                status: 'fail',
                message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
            }).code(400)
        } else if (!book) {
            return h.response({
                status: 'fail',
                message: 'Gagal memperbarui buku. Id tidak ditemukan'
            }).code(404)
        } else {
            Book.update(bookId, data)
            return h.response({
                status: 'success',
                message: 'Buku berhasil diperbarui'
            }).code(200)
        }
    } catch (_) {
        return h.response({
            status: 'fail',
            message: 'Terjadi kesalahan.'
        }).code(500)
    }
}
