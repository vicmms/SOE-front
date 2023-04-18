export default class UsersRequest {
    getUsers(context) {
        return new Promise((resolve, reject) => {
            context.$http
                .get('localhost:3000/users', {
                    headers: {}
                })
                .then(
                    data => {
                        resolve(data.body)
                    },
                    error => {
                        context.error = error
                        reject(error)
                    }
                )
        })
    }
}