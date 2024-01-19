import { nanoid } from 'nanoid'
import { Book } from '../models/book.js'

export function addBook(request, h) {
    try {
        const data = request.payload
        data.id = nanoid()
        data.finished = data.readPage === data.pageCount

        if (!data.name) {
            return h.response({
                status: 'fail',
                message: 'Gagal menambahkan buku. Mohon isi nama buku'
            }).code(400)
        } else if (data.readPage > data.pageCount) {
            return h.response({
                status: 'fail',
                message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
            }).code(400)
        } else {
            Book.add(data)
            return h.response({
                status: 'success',
                message: 'Buku berhasil ditambahkan',
                data: { bookId: data.id }
            }).code(201)
        }
    } catch (_) {
        return h.response({
            status: 'fail',
            message: 'Terjadi kesalahan.'
        }).code(500)
    }
}
