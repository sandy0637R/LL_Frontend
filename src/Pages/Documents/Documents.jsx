import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecordsRequest } from "../../ReduxStore/reducer";
import DocRecord from "../../Components/DocRecords/DocRecord";
import Loader from "./Loader";

const Documents = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.records);

  useEffect(() => {
    dispatch(fetchRecordsRequest());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <p className="text-center w-100 p-3">Error: {error}</p>;

  return (
    <div>
      {data.length===0?<p className="text-center p-3 fs-4">N0 data found</p>:data.map((record, index) => (
        <>
          <DocRecord obj={record} key={index} />
        </>
      ))}
    </div>
  );
};

export default Documents;