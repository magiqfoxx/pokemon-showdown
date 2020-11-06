import {useState, useEffect} from 'react';

import { getPokemon } from '../utils/requests';
import {normalizePokemon} from "../utils/normalize";
import {getWinner} from "../utils/helpers";

export const useWinner = (value:any
): {
  error: boolean,
  loading: boolean,
  results: string,
} => {
  const { redName, setRedData, blueName, setBlueData } = value
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [results, setResults] = useState("");

  useEffect(() => {
    (async () => {

      if (!(redName && blueName)){
        return;
      };
      setLoading(true);
      const names = [redName, blueName];
      const promises = names.map(pokemon=> getPokemon(pokemon).then(response=>response.json()))
      try {
          const results = await Promise.all(promises);
          setRedData(normalizePokemon(results[0]));
          setBlueData(normalizePokemon(results[1]));
          const winner = getWinner(normalizePokemon(results[0]), normalizePokemon(results[1]));
          setResults(winner);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [setLoading, setResults, redName, blueName]);

  return {
    error,
    loading,
    results,
  };
};
