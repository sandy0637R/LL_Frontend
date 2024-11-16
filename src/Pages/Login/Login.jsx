function Login(){
  return (<div className="container">
    <div className="modal-header p-9 pb-4  border-bottom-0 ">
            <h1 className="fw-bold mb-0 fs-2 w-100 text-center">Sign up for free</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
    
          <div className="modal-body p-5 pt-0">
            <form className="">
              <div className="form-floating mb-3">
                <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
              <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
              <hr className="my-4"/>
              <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                <svg className="bi me-1" width="16" height="16"><use xlinkHref="#twitter"></use></svg>
                Sign 
              </button>
            </form>
          </div>
          </div>)
}
export default Login