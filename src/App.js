import React from 'react'
import './App.css'

const App = () => {
  return (
    <>
      <div className='container'>
        <div class="row justify-content-md-center">
          <h1 className='col-md-auto text-danger'>Aurous</h1>
        </div>
        <div class="row justify-content-md-center">
          <form>
            <div className='justify-content-md-center p-4 '>
              <label for="user_login" class="col-md-auto form-label">User</label>
              <input id='user_login' className='form-control' />
            </div>
            <div className='justify-content-md-center p-4'>
              <label for="pass_login" class="form-label col-md-auto">Password</label>
              <input id='pass_login' className='form-control' />
            </div>
            <div className='col-auto p-4'>
              <input id='submit_login' type="submit" className='form-control col-md-auto btn btn-primary' />
            </div>


          </form>
        </div>

      </div>

    </>
  )
}

export default App;

