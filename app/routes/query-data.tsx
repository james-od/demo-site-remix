export const loader: LoaderFunction = async ({request}) => {
  const ALPHA_VANTAGE_KEY = process.env.NODE_ENV

  const url = new URL(request.url)
  const symbol = url.searchParams.get('symbol')
  let parsedData = {}
    let response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${ALPHA_VANTAGE_KEY}`)
    // TODO: type this with alpha vantage schema
    let data: any = await response.json()
    if(data && data['Time Series (5min)']){
      return Object.keys(data['Time Series (5min)']).map((datstr) => new Object({date: datstr, value: data['Time Series (5min)'][datstr]['1. open']}))
    }
    return null
}