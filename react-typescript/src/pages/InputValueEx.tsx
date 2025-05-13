import { useRef, useState } from "react";

/**
 * `<input>` 태그의 속성 value, defaultValue 및 onChange 확인용
 * 
 * @returns 
 */
const InputValueEx = () => {

  const formWithInputValueWithoutChange = useRef<HTMLFormElement>(null!);
  const formWithInputDefaultValue = useRef<HTMLFormElement>(null!);
  const [ displayInputValue, setDisplayInputValue ] = useState<string>('');
  const [ tempInputValue, setTempInputValue ] = useState<string>('');

  const handleSubmitInputValue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const textValue: string = formWithInputValueWithoutChange
      .current['inputValueNoChange'].value;
    setDisplayInputValue(textValue);
  };

  const handleSubmitInputValueWithChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDisplayInputValue(tempInputValue);
  };

  const handleInputTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setTempInputValue(event.target.value);
  };

  const handleSubmitInputDefaultValue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const textValue: string = formWithInputDefaultValue.current.inputDefaultValue.value;
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
