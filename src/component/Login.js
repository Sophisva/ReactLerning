import React from 'react'

const Login = () => {
  return (
    <div className='mt-4 mx-auto p-3 rounded' style={{width: '400px', background: '#cee'}}>
        <form>
            <div className='form-group mb-2'>
                <label htmlFor="login">ชื่อผู้ใช้ (login)</label>
                <input type='text' id='login' maxLength="20" className='form-control form-control-sm'/>
            </div>
            <div className='form-group mb-2'>
                <label htmlFor="password">Password</label>
                <input type='text' id='password' minLength="6" maxLength="20" className='form-control form-control-sm'/>
            </div>
            <div className='form-group mb-2'>
                <label htmlFor="confirm_password">Confirm Password</label>
                <input type='text' id='confirm_password' minLength="6" maxLength="20" className='form-control form-control-sm'/>
            </div>
            <div className='form-group mb-4'>
                <label>บันทึกช่วยจำ</label>
                <textarea id='memo' name='memo' rows="2" className='form-control form-control-sm'></textarea>
            </div>
            <div>
                <button className='btn btn-success btn-sm px-4'>OK</button>
            </div>
        </form>
    </div>
  )
}

export default Login