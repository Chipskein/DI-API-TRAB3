import {readCountryJSON} from './json.js';
import {getFeriados,getCidade} from './api.js';
(async()=>{
    const select=document.getElementById('pais');
    const feriadosDiv=document.getElementById('feriados');
    const consultarCidadeBtn=document.getElementById('consultar-cidade');
    const divCidade=document.getElementById('cidades');
    const cidadeInput=document.getElementById('cidade');
    const divPais=document.getElementById('dado-pais');
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
        while (divCidade.firstChild) {
            divCidade.firstChild.remove();
        }
        const cidade=cidadeInput.value;
        const cidadeJSON=await getCidade(cidade);
        if(!cidadeJSON || cidadeJSON.type==='city_error'){
            console.log('cidadeJSON:',cidadeJSON);
            const p=document.createElement('p');
            p.textContent=`Cidade não encontrada`;
            divCidade.appendChild(p);
            return;
        }
        //map
        cidadeJSON.map(({nome,estado})=>{
            const p=document.createElement('p');
            p.textContent=`${nome}-${estado}`;
            divCidade.appendChild(p);
        })
    })
    
    select.addEventListener('change',()=>{
        console.log('select:',select.value);
        const [pais]=paises.filter(({sigla})=>sigla===select.value)
        if(!pais){
            return;
        }
        console.log('pais:',pais);
        const {sigla,nome_pais,nome_pais_int,gentilico}=pais;
        divPais.innerHTML=`<p>Sigla:${sigla}</p><p>Nome:${nome_pais}</p><p>Nome Internacional:${nome_pais_int}</p><p>Gentílico:${gentilico}`;
        

    })

})()