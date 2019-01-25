module.exports = {
    get: jest.fn(() => {
        return Promise.resolve({
            data: [
                {
                    id: 1,
                    name: 'Jane Doe',
                    email: 'janedoe@gmail.com',
                    username: 'jdoe'
                }
            ]
        })
    })
}