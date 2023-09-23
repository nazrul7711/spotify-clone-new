import fetcher from "@/lib/fetcher";
import useSWR from "swr";

export default function useGetSongs() {
  const { data, isLoading, mutate, error } = useSWR("/api/getSongs", fetcher);
  return {
    data,
    isLoading,
    mutate,
    error,
  };
}
