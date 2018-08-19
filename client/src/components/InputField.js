import React from 'react';

import { InputFieldColumn, ErrorMessage } from '../styles/Form';

export default ({ name, id, type, value, onChange, error }) => (
  <div className="row">
    <InputFieldColumn>
      <input id={id} type={type} value={value} onChange={onChange} />
      <label htmlFor={id}>{name}</label>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputFieldColumn>
  </div>
);
