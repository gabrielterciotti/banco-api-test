const request = require('supertest');
const { expect } = require('chai');

describe('Transferâncias', () => {
    describe('POST /transferencias', () => {
        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de 10', async () => {
            //Capturar o token
            const respostaLogin = await request('http://localhost:3000') 
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    'username': "julio.lima",
                    'senha': "123456"
    
                })
               
            const token = respostaLogin.body.token   
                
           const resposta = await request('http://localhost:3000') 
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

            const respostaLogin = await request('http://localhost:3000') 
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    'username': "julio.lima",
                    'senha': "123456"
    
                })
               
            const token = respostaLogin.body.token   
                
           const resposta = await request('http://localhost:3000') 
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