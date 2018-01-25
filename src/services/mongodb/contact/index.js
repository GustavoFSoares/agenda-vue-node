const Contact = require('./contact')
const db = () => {
    return {
        all: () => {
            Contact.find((err, results) => {
                if(err){
                    return ({status: false, msg:"Erro ao listar contatos"})
                }
                return ({status: true, contacts: results})
            })
        },
        getContact: (id) => {

        },
        save: contact => {
            let db = new Contact(contact)
            db.save((err, results) => {
                if(err){
                    let response = ({ status: false, msg: "Erro ao cadastrar contato" })
                    console.log(response);
                    console.log(err);
                    
                    
                    return response
                }
                let response = ({ status: true, msg: "Contato salvo" })
                console.log(response);

                return response
            })
        },
        update: (id, contact) => {

        },
        delete: (id) => {

        }

    }
}

module.exports = db