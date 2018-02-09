const db = require('../services/mongodb');
const contacts_default = require('../defaults/contacts-default')

const model = () => {
    return {
        getAll: () => {
            return db.contact().all()
        },
        getById: id => {
            return db.contact().getContact(id)
        },
        save: contact => {
            return db.contact().save(contact)
        },
        update: (id, contact) => {
            return db.contact().update(id, contact)
        },
        delete: id => {
            return db.contact().delete(id)
        },
        insert: () => {
            contacts_default.forEach(contact => {
                db.contact().save(contact)
            });
            return { status: true, msg: "Saved"}
        }

    }
} 

module.exports = model()