const mongoose = require('mongoose')

const resumeSchema = new mongoose.Schema({
    informacoes_pessoais: {
        nome:{ type: String },
        telefone:{ type: String },
        email:{ type: String },
        nacionalidade:{ type: String },
        estado_civil:{ type: String },
        idade:{ type: String },
        titulo_eleitor:{
            numero: { type: String },
            zona: { type: String },
            secao: { type: String },
        },
        endereco:{
            rua: { type: String },
            numero: { type: String },
            bairro: { type: String },
            cidade: { type: String },
            estado: { type: String },
            cep: { type: String },
        }
    },

    formacao: [
        {
            instituicao: { type: String },
            descricao: { type: String },
            nivel: { type: String },
            situacao: { type: String },
            local: { type: String },
            ano_inicio: { type: String },
        }
    ],

    cursos: [
        {
            ano: { type: String },
            local: { type: String },
            instituicao: { type: String },
            curso: [
                {
                    titulo: { type: String },
                    duracao: { type: String },
                    link: { type: String },
                }
            ]
        }
    ],

    conhecimentos: [
        {
            conhecimento: { type: String },
            nivel: { type: String },
        }
    ],
    data: {
        data: { type: String },
        local: { type: String },
    },
})

module.exports = mongoose.model('resume', resumeSchema)