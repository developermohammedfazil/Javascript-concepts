const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
      setData(response.data);
      setLoading(false);
    })
    .catch(error => {
      setError(error.message);
      setLoading(false);
    });
}, []);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;

return <p>Name: {data.name}</p>;
