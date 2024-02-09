import React from 'react'

export const ContactAxios = () => {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/contacts").then((response) => {
      setDataList(response.data);
    });
  }, []);
  return (
    <>
      <ol className="container">
        {dataList.map((data) => (
          <h5 key={data.id}>
            {data.firstName} {data.lastName}
          </h5>
        ))}
      </ol>
    </>
  );
}
