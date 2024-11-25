export async function getFeriados(){
    try{
        
        const BASE_API=`https://brasilapi.com.br/api/feriados/v1/${new Date().getFullYear()}`;
        const response = await fetch(BASE_API);
        return await response.json();
    }
    catch(e){
        console.log("[ERR]getFeriados:"+e.message)
    }
}
export async function getCidade(cidade){
    try{
        const BASE_API=`https://brasilapi.com.br/api/cptec/v1/cidade/${cidade}`;
        const response = await fetch(BASE_API);
        return await response.json();
    }
    catch(e){
        console.log("[ERR]getCidade:"+e.message)
    }
}