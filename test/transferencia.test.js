const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao') 

describe('Transferâncias', () => {
    describe('POST /transferencias', () => {

        let token 

        beforeEach(async () => {
            token = await obterToken('julio.lima', '123456') 
        })

        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de 10', async () => {
           
              
           
                
           const resposta = await request(process.env.BASE_URL) 
               .post('/transferencias')
               //Passando os headers através do.s 
               .set ('Content-Type', 'application/json')
               //Contatenando a variavel token com a palavra inicial Bearer devido ao token ser do tipo Bearer
               .set('Authorization', `Bearer ${token}`) 
               .send({
                 'contaOrigem': 1,
                 'contaDestino': 2,
                 'valor': 11,
                 'token': ""
                })        
            expect(resposta.status).to.equal(201);

            
            

        })
        it('Deve retornar falha com 422 quando o valor da transferencia for menor de 10', async () => {

        
                
           const resposta = await request(process.env.BASE_URL) 
               .post('/transferencias')
               //Passando os headers através do.s 
               .set ('Content-Type', 'application/json')
               //Contatenando a variavel token com a palavra inicial Bearer devido ao token ser do tipo Bearer
               .set('Authorization', `Bearer ${token}`) 
               .send({
                 'contaOrigem': 1,
                 'contaDestino': 2,
                 'valor': 7,
                 'token': ""
                })        
            expect(resposta.status).to.equal(422);

            
            


        })

    })

})