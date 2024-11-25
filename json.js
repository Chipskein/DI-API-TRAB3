
export async function readCountryJSON(){
    try{
        const response = await fetch('paises.json')
        return await response.json();
    }
    catch(e){
        console.log("[ERR]readCountryJSON:"+e.message)
    }
}