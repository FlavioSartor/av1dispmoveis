/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

// --------------------------código--------------------------
const saldoD = document.getElementById('saldo')
const jurosD = document.getElementById('juros')
const parcelaD = document.getElementById('parcelas')
const campoDEValores = document.getElementById('valoresDigitados')
const buttonEnviar = document.getElementById('enviar')


const valorRec = document.getElementById('valor1')
const valorRec2 = document.getElementById('valor2')
const valorRec3 = document.getElementById('valor3')
const valorRec4 = document.getElementById('valor4')


const quantidadeDeParcelas= []
const ju = []
const val = []
let resultado= []


jurosD.addEventListener('input', ()=>{
   
    ju[0] =  jurosD.value
    console.log(ju)
    
})

saldoD.addEventListener('input',()=>{
    val[0]= saldoD.value
    console.log(val)
    
})


parcelaD.addEventListener('input', ()=>{
        if(parcelaD.value <= 36){
            quantidadeDeParcelas[parcelaD.value] = parcelaD.value
            console.log(quantidadeDeParcelas)
        }
            
})


buttonEnviar.addEventListener('click', ()=>{
    campoDEValores.innerHTML = ""
    val[0] = saldoD.value

   

    for(let i=1; i<=parcelaD.value; i++){
      
       resultado[i] = Number(val[0]) + Number(val[0]*(ju[0]*0.01)) 
       const divisoes = document.createElement('div')
       const conteudo = document.createElement('p')
       conteudo.innerText = 'Parcela' + i
       divisoes.appendChild(conteudo)
       campoDEValores.appendChild(divisoes)
       
       let sald = document.createElement('p')
       let jros = document.createElement('p')
       let porcentagem = document.createElement('p')
       sald.innerText = ` R$ ${resultado[i].toFixed(2)} `
       jros.innerText = `R$ ${( resultado[i]- saldoD.value).toFixed(2)} `
       porcentagem.innerText = ` ${(((resultado[i]- saldoD.value)*100) / saldoD.value).toFixed(2)} % `
       divisoes.appendChild(sald)
       divisoes.appendChild(jros)
       divisoes.appendChild(porcentagem)
       val[0] = resultado[i]
       
       
       
    }
   
})

