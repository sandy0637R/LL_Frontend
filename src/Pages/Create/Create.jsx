import { redirect } from "react-router-dom";
import MapComponent from "./Map";
// import axios from "axios"; 
function Create() {
  return (
    <div className="container p-5">
      <form className="row g-3" method="post">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Enter city
          </label>
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            name="city"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            local address
          </label>
          <input
            type="Text"
            className="form-control"
            id="inputPassword4"
            name="localaddress"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Map
          </label>
          <MapComponent />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            Name of Property
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder="Enter the Title "
            name="title"
          />
        </div>
        <label htmlFor="inputState" className="form-label">
          Upload required documents
        </label>
    <input type="file" className="form-control" />
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            name="zip"
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              I have read the Terms and Condition
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary cursor-pointer">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
export async function CreateAction(Data) {
  const formData = await Data.request.formData();
  const newrecord = Object.fromEntries(formData);

//   await axios.post("/records/", postData);
console.log(newrecord);
  return redirect("/");
}
export default Create;
