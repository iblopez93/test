import React from 'react'
import './App.css'

const App = () => {
  return (
    <>
      <div className='container'>
        <div className="row justify-content-md-center">
          <h1 className='col-md-auto text-danger'>Aurous</h1>
        </div>
        <div id="form" className="row justify-content-md-center">
          <form className='col-md-auto shadow p-3 mb-5 bg-body rounded'>
            <div className='justify-content-md-center p-4 '>
              <label htmlFor="user_login" className="col-md-auto form-label">User</label>
              <input id='user_login' className='form-control' />
            </div>
            <div className='justify-content-md-center p-4'>
              <label htmlFor="pass_login" className="form-label col-md-auto">Password</label>
              <input id='pass_login' type='password' className='form-control ' />
            </div>
            <div className='col-auto p-4'>
              <input id='submit_login' type="submit" className='form-control col-md-auto btn btn-primary shadow rounded align-center' />
            </div>


          </form>
        </div>

      </div>

    </>
  )
}

export default App;

