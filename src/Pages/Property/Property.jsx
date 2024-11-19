import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecordsRequest } from "../../ReduxStore/reducer";
import Record from "../../Components/Record/Record";

const Property = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.records);

  useEffect(() => {
    dispatch(fetchRecordsRequest());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {data.map((record, index) => (
        <>
          <Record obj={record} key={index} />
        </>
      ))}
    </div>
  );
};

export default Property;
