import axios from 'axios'

export async function Fetcher(url: string) {

    const apiUrl = `https://brainn-api-loterias.herokuapp.com/api/v1${url}`

    const { data } = await axios.get(apiUrl);
       
    return data;
}
    
   

