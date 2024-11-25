import {readCountryJSON} from './json.js';
import {getFeriados,getCidade} from './api.js';
(async()=>{
    const select=document.getElementById('pais');
    const feriadosDiv=document.getElementById('feriados');
    const consultarCidadeBtn=document.getElementById('consultar-cidade');
    const cidadeInput=document.getElementById('cidade');
    const divCidade=document.getElementById('cidades');
    const paises=await readCountryJSON();
    if(!paises){
        return;
    }
    //map
    paises.map(({sigla,nome_pais})=>{
        const option=document.createElement('option');
        option.value=sigla;
        option.text=nome_pais;
        select.appendChild(option);
    })

    const feriados=await getFeriados();
    if(!feriados){
        return;
    }
    //map
    feriados.map(({name,date})=>{
        const p=document.createElement('p');
        p.textContent=`${name}:${date}`;
        feriadosDiv.appendChild(p);
    })

    consultarCidadeBtn.addEventListener('click',async()=>{
        for(let i=0;i<divCidade.children.length;i++){
            divCidade.children[i].remove();
        }
        const cidade=cidadeInput.value;
        const cidadeJSON=await getCidade(cidade);
        if(!cidadeJSON){
            console.log('cidadeJSON:',cidadeJSON);

            return;
        }
        //map
        cidadeJSON.map(({nome,estado})=>{
            const p=document.createElement('p');
            p.textContent=`${nome}-${estado}`;
            divCidade.appendChild(p);
        })
    })
    

})()