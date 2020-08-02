import { useState, useEffect } from "react";
import axios from "axios";

export default url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then(result => setData(result.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return [data, loading, error];
};
