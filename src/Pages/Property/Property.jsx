import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecordsRequest } from "../../ReduxStore/reducer";
import Record from "../../Components/Record/Record";
import Loader from "../Documents/Loader";

const Property = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.records);

  useEffect(() => {
    dispatch(fetchRecordsRequest());
  }, [dispatch]);

  if (loading) return <Loader/>;
  if (error) return <p className="text-center w-100 p-3">Error: {error}</p>;

  return (
    <div>
      {data.length===0?<p className="text-center p-3 fs-4">N0 data found</p>:data.map((record, index) => (
        <>
          <Record obj={record} key={index} />
        </>
      ))}
    </div>
  );
};

export default Property;
