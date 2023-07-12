import React, { useState }  from 'react'

function Inputform() {

    const [selectedOptions, setSelectedOptions] = useState([]);
      
    const handleSelectChange = (event) => {
        const options = Array.from(event.target.selectedOptions).map((option) => option.value);
        setSelectedOptions(options);
    };

  return (
    <div>
        <select id="idse" name="idse[]" multiple size="3" onChange={handleSelectChange}>
            <option value="faceboook">Facebook</option>
            <option value="twitter">Twitter</option>
            <option value="ig">IG</option>
            <option value="line">Line</option>
            <option value="ChatGPT">ChatGPT</option>
        </select>
        <p>Selected Options: {selectedOptions.join(', ')}</p>
    </div>
  )
}

export default Inputform