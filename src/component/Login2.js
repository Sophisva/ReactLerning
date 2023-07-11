import React from 'react'

const Login2 = () => {

    const textPswd = React.useRef()
    const textPswd2 = React.useRef()
    
    const onBlurPassword = () => {
        let pswd = textPswd.current.value

        if(pswd.trim() !== '' && pswd.match(/^[0-9a-zA-Z]+$/)){
            textPswd.current.value = ''
            alert("ต้องเป็น 0-9 หรือ a-z หรือ A-Z เท่านั้น X")
        }
    }

    const onBlurPassword2 = () => {

        let pswd2 = textPswd.current.value

        if(pswd2.trim() !== '' && pswd2.match(/^[0-9a-zA-Z]+$/)){
            textPswd.current.value = ''
            alert("ต้องเป็น 0-9 หรือ a-z หรือ A-Z เท่านั้น Y")
        }
    }

    const CheckPassword = (event) => {
        event.preventDefault();
        if(textPswd2.current.value !== textPswd.current.value){
            textPswd2.current.value = ''
            alert("รหัสผ่านไม่สอดคล้องกัน กรุณาป้อนรหัสใหม่")
        }
    }

    return (
        <div className='mt-4 mx-auto p-3 rounded' style={{width: '400px', background: '#cee'}}>
            <form>
                <div className='form-group mb-2'>
                    <label htmlFor="login">ชื่อผู้ใช้ (login)</label>
                    <input type='text' id='login' maxLength="20" className='form-control form-control-sm' />
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor="password">Password</label>
                    <input type='text' id='password' minLength="6" maxLength="20" className='form-control form-control-sm' ref={textPswd} onBlur={onBlurPassword}/>
                </div>
                <div className='form-group mb-2'>``
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input type='text' id='confirm_password' minLength="6" maxLength="20" className='form-control form-control-sm' ref={textPswd2} onBlur={onBlurPassword}/>
                </div>
                <div className='form-group mb-4'>
                    <label>บันทึกช่วยจำ test แก้ที่ VS Code</label>
                    <textarea id='memo' name='memo' rows="2" className='form-control form-control-sm'></textarea>
                </div>
                <div>
                    <button className='btn btn-success btn-sm px-4' onClick={CheckPassword}>OK สุดยอด</button>
                </div>
            </form>
        </div>
      )
}

export default Login2
