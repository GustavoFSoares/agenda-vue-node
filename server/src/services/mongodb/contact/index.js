const Contact = require('./contact')
const db = () => {
    return {
        all: () => {
            return new Promise((resolve, reject) => {
                Contact.find((err, results) => {
                    if(err){
                        reject({status: false, msg:"Erro ao listar contatos"})
                    }
                    resolve({status: true, contacts: results})
                })
            })
        },
        getContact: id => {
            return new Promise((resolve, reject) => {
                
                Contact.findOne({"_id": id}, (err, results) => {
                    if(err){
                        reject({status: false, msg: `Erro ao buscar contato`, erro: err})
                    }
                    resolve({status: true, contact: results })
                })
            })
        },
        save: contact => {
            return new Promise((resolve, reject) => {
                let db = new Contact(contact)
                db.save((err, results) => {
                    if (err) {
                        reject({ status: false, msg: "Erro ao cadastrar contato", erro: err })
                    }
                    resolve({ status: true, msg: "Contato salvo" })
                })
            })
        },
        update: (id, contact) => {
            return new Promise((resolve, reject) => {
                Contact.findByIdAndUpdate(id, contact, (err, results) => {
                    if(err){
                        reject({ status: false, msg: "Erro ao editar contato" })
                    }
                    resolve({ status: true, msg: "Contato editado"})
                })
            })
        },
        delete: (id) => {
            return new Promise((resolve, reject) => {
                Contact.findByIdAndRemove(id, (err, results) => {
                    if (err) {
                        reject({ status: false, msg: "Erro ao excluir contato" })
                    }
                    resolve({ status: true, msg: "Contato excluido" })
                })
            })
        },
        insert: (contacts) => {
            return new Promise((resolve, reject) => {
                var err;
                contacts.forEach(contact => {
                
                    let db = new Contact(contact)
                    // db.save()
                    db.save((erro, results) => {
                        err = erro
                    })
                });
                if(err) {
                    reject({ status: false, msg: "Contatos não inseridos" })
                }
                resolve({ status: true, msg: "Contatos Inseridos" })
            })
        }

    }
}

module.exports = db