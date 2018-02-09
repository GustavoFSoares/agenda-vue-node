const Resume = require('./resume')
const db = () => {
    return {
        all: () => {
            return new Promise((resolve, reject) => {
                Resume.find((err, results) => {
                    if(err) {
                        reject({ err })
                    }
                    resolve({ status: true, reumes: results })
                })
            })
        },
        getResume: (id = null) => {
            return new Promise((resolve, reject) => {
                Resume.findOne((err, result) => {
                    if(err) {
                        reject({ err })
                    }
                    resolve({ status: true, resume: result })
                })
            })
        },
        save: resume => {
            return new Promise((resolve, reject) => {
                let db = new Resume(resume)
                db.save((err, result) => {
                    if(err) {
                        reject({ err })
                    }
                    resolve({ status: true, msg: "Curriculo salvo" })
                })
            })
        },
        update: (id, resume) => {

        },
        delete: id => {

        },
    }
}

module.exports = db