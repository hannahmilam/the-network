import { AppState } from "../AppState"
import { Ad } from "../models/Ad"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class AdsService{
async getAds(){
  let res = await api.get('api/ads')
  logger.log('ads', res.data)
  AppState.ads = res.data.map(a => new Ad(a))
}
}
export const adsService = new AdsService()