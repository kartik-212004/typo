const fs = require('fs')
const promises = require('fs/promises')
const hello = async () => {
    const readfile = await promises.readdir('C:\\Users\\karti\\OneDrive\\Pictures\\Saved Pictures')
    for (const element of readfile) {
        let a = element.split('.')[1]
        fs.mkdir(a)
    }

}
hello()
