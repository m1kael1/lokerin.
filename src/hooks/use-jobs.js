import axios from "axios";
import { useAtom } from "jotai";
import { useDebugValue, useEffect, useState, useCallback } from "react";
import { searchAtom } from "../lib/atoms";

export default function useJobs(id) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchJobs] = useAtom(searchAtom);
  const searchParams = `?search=${searchJobs}`;
  const url = id
    ? `${import.meta.env.VITE_BASE_JOBS}/${id}`
    : searchJobs
    ? `${import.meta.env.VITE_BASE_JOBS}${searchParams}`
    : `${import.meta.env.VITE_BASE_JOBS}`;

  useEffect(() => {
    const getJobs = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        const data = res.data;
        setJobs(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getJobs();
  }, [url]);

  useDebugValue(jobs);

  return { jobs, loading };
}
