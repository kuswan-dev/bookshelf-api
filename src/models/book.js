let books = []

export const Book = {
    add: (data) => {
        const newData = data
        newData.insertedAt = new Date().toISOString()
        newData.updatedAt = new Date().toISOString()

        books.push(newData)
    },
    delete: (id) => {
        const newBooks = books.filter((book) => book.id !== id)
        books = newBooks
    },
    getAll: () => {
        const newBooks = books.map(({ id, name, publisher }) => ({ id, name, publisher }))
        return newBooks
    },
    getById: (id) => {
        const book = books.find((bookItem) => bookItem.id === id)
        return book
    },
    getByName: (bookName) => {
        const newBooks = books
            .filter((book) => book.name.toLowerCase().includes(bookName.toLowerCase()))
            .map(({ id, name, publisher }) => ({ id, name, publisher }))
        return newBooks
    },
    getFinished: () => {
        const newBooks = books
            .filter((book) => book.finished === true)
            .map(({ id, name, publisher }) => ({ id, name, publisher }))
        return newBooks
    },
    getUnFinished: () => {
        const newBooks = books
            .filter((book) => book.finished === false)
            .map(({ id, name, publisher }) => ({ id, name, publisher }))
        return newBooks
    },
    getReading: () => {
        const newBooks = books
            .filter((book) => book.reading === true)
            .map(({ id, name, publisher }) => ({ id, name, publisher }))
        return newBooks
    },
    getUnreading: () => {
        const newBooks = books
            .filter((book) => book.reading === false)
            .map(({ id, name, publisher }) => ({ id, name, publisher }))
        return newBooks
    },
    update: (id, data) => {
        const newBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...data }
            }
            return book
        })
        books = newBooks
    }
}
