import { useRef, useState } from "react";

/**
 * `<input>` 태그의 속성 value, defaultValue 및 onChange 확인용
 * 
 * @returns 
 */
const InputValueEx = () => {

  const formWithInputValueWithoutChange = useRef(null);
  const formWithInputDefaultValue = useRef(null);
  const [ displayInputValue, setDisplayInputValue ] = useState('');
  const [ tempInputValue, setTempInputValue ] = useState('');

  /**
   * 
   * @param {Event} event 
   */
  const handleSubmitInputValue = event => {
    event.preventDefault();

    const textValue = formWithInputValueWithoutChange
      .current['inputValueNoChange'].value;
    setDisplayInputValue(textValue);
  };

  /**
   * 
   * @param {Event} event 
   */
  const handleSubmitInputValueWithChange = event => {
    event.preventDefault();
    setDisplayInputValue(tempInputValue);
  };

  /**
   * 
   * @param {Event} event 
   */
  const handleInputTextChange = event => {
    console.log(event.target.value);
    setTempInputValue(event.target.value);
  };

  /**
   * 
   * @param {Event} event 
   */
  const handleSubmitInputDefaultValue = event => {
    event.preventDefault();
    
    const textValue = formWithInputDefaultValue.current.inputDefaultValue.value;
    setDisplayInputValue(textValue);
  };

  return (
    <div>
      <fieldset>
        <legend>input with value attr without onChange</legend>
        <form 
          onSubmit={handleSubmitInputValue} 
          ref={formWithInputValueWithoutChange}
        >
          <input type="text" value={'hi!'} name="inputValueNoChange" />
          <button type="submit">제출</button>
        </form>
      </fieldset>

      <fieldset>
        <legend>input with value attr with onChange</legend>
        <form onSubmit={handleSubmitInputValueWithChange}>
          <input 
            type="text" 
            value="hi2" 
            onChange={handleInputTextChange} 
          />
          <button type="submit">제출</button>
        </form>
      </fieldset>

      <fieldset>
        <legend>input with defaultValue attr</legend>
        <form 
          onSubmit={handleSubmitInputDefaultValue}
          ref={formWithInputDefaultValue}
        >
          <input 
            type="text" 
            name="inputDefaultValue"
            defaultValue={'hello!'} 
          />
          <button type="submit">제출</button>
        </form>
      </fieldset>

      <div className="box" style={{marginTop: '1em', padding: '1em'}}>
        <p>{displayInputValue}</p>
      </div>
    </div>
  );
};

export default InputValueEx;
