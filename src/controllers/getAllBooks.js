import { Book } from '../models/book.js'

export function getAllBooks(request, h) {
    try {
        const { name, reading, finished } = request.query

        let books = []

        if (name) {
            books = Book.getByName(name)
        } else if (reading === '1') {
            books = Book.getReading()
        } else if (reading === '0') {
            books = Book.getUnreading()
        } else if (finished === '1') {
            books = Book.getFinished()
        } else if (finished === '0') {
            books = Book.getUnFinished()
        } else {
            books = Book.getAll()
        }

        return h.response({
            status: 'success',
            data: { books }
        }).code(200)
    } catch (_) {
        return h.response({
            status: 'fail',
            message: 'Terjadi kesalahan.'
        }).code(500)
    }
}
