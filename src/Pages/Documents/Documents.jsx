import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecordsRequest } from "../../ReduxStore/reducer";
import DocRecord from "../../Components/DocRecords/DocRecord";
import Loader from "./Loader";
import "./Documents.css";

const Documents = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.records);

  useEffect(() => {
    dispatch(fetchRecordsRequest());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <p className="text-center w-100 p-3">Error: {error}</p>;

  return (
    <div className="document-background">
      <div className="document-main">
        <center>
          <h1 className="doc-heading">Documents</h1>
        </center>
        <div className="document-sec">
          {data.length === 0 ? (
            <p className="text-center p-3 w-100 ">N0 data found</p>
          ) : (
            data.map((record, index) => (
              <>
                <DocRecord obj={record} key={index} />
              </>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Documents;
