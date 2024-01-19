import { addBook } from '../controllers/addBook.js'
import { deleteBook } from '../controllers/deleteBook.js'
import { getAllBooks } from '../controllers/getAllBooks.js'
import { getBookDetail } from '../controllers/getBookDetail.js'
import { updateBook } from '../controllers/updateBook.js'

export const bookRoutes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBook
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooks
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookDetail
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: updateBook
    },
    {
        method: 'Delete',
        path: '/books/{bookId}',
        handler: deleteBook
    }
]
