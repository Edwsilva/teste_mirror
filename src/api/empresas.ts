import useSWR from "swr";

const fetcher = <T>(...args: Parameters<typeof fetch>): Promise<T> =>
  fetch(...args).then((res) => res.json() as Promise<T>);

export { fetcher };
