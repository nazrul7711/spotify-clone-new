import useSwr from "swr"
import fetcher from "@/lib/fetcher"
export default  function useAvailableSong(songId:string){

  const {data,error,mutate,isLoading} = useSwr(`/api/songAvailable?songId=${songId}`,fetcher)
  return {
    data,error,mutate,isLoading
  }



}