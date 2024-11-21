function Loader() {
  return (
    <div className="loader p-5 m-5">
      <div className="d-flex justify-content-center">
        <div className="spinner-border p-4" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}
export default Loader;
