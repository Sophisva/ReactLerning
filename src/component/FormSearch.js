import React, {useState} from 'react'

function FormSearch() {

    const RefSearch = React.useRef()
    const RefBtOK = React.useRef()

    const [getval,SetGetval] = useState('')
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const onChangeKw = () => {

        const val_ = RefSearch.current.value.trim()
        SetGetval(val_)
        setIsButtonDisabled(false)

    }

    const GetInput = (event) => {

        event.preventDefault();

        alert(getval)

        SetGetval('')
        setIsButtonDisabled(true)


    }

  return (
    <form>
        <input type='text' name='search' id='search' placeholder='Search' ref={RefSearch} onInput={onChangeKw} value={getval}/>
        <button className='btn btn-success ms-2' ref={RefBtOK} disabled={isButtonDisabled} onClick={GetInput}>ตกลง</button>
    </form>
  )
}

export default FormSearch