import {useState} from 'react';

export function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function(text, name) {
      setValues({
        ...fields,
        [name]: text,
      });
    },
  ];
}
