const TIMESERIES_STRING_KEY = 'Time Series (5min)'
const OPEN_STRING_KEY = '1. open'

const formatData = (data: any, datastr: string) => {
  return {
    date: datastr,
    value: data[TIMESERIES_STRING_KEY][datastr][OPEN_STRING_KEY]
  }
}

export const loader = async ({request}: any) => {
  const ALPHA_VANTAGE_KEY = process.env.NODE_ENV

  const url = new URL(request.url)
  const symbol = url.searchParams.get('symbol')
    let response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${ALPHA_VANTAGE_KEY}`
    )
    let data: any = await response.json()
    if(data && data[TIMESERIES_STRING_KEY]){
      return Object.keys(data[TIMESERIES_STRING_KEY]).map((datastr) => formatData(data, datastr))
    }
    return null
}