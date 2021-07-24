export const getGifs = async( category: string ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=12&api_key=DHfuwGESEBcA5iHrwi5FMIeQMQZ5Gm1R`
    const resp = await fetch( url )
    const { data } = await resp.json()

    const gifs = data.map( (img: { id: any; title: any; images: { downsized_medium: { url: any } } }) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs
}