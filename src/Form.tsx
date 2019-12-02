import React, { useState } from 'react';

type FormElem = React.FormEvent<HTMLFormElement>;

export const Form: React.FC<{ onSubmit: (value: string) => void }> = ({
  onSubmit,
}) => {
  const [value, setValue] = useState<string>('');

  const handleChange: React.ReactEventHandler = (
    ev: React.ChangeEvent<HTMLInputElement>
  ) => setValue(ev.target.value);

  const handleSubmit = (ev: FormElem): void => {
    ev.preventDefault();
    setValue('');
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} required value={value} />
      <input type="submit" />
    </form>
  );
};
