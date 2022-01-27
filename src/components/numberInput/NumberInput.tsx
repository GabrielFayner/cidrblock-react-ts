import React, { useState } from "react";
import {getValueForRange} from '../../lib/getValueForRange/getValueForRange'

import './style.css'

type NumberInputProps = {
  min: number;
  max: number;
  initialValue?: number;
  placeholder?: string;
}


export const NumberInput = ({ min, max, initialValue = min, placeholder }: NumberInputProps) => {
  const [value, setValue] = useState(getValueForRange(initialValue, min, max))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const number = Number.parseInt(e.target.value)
   if (!Number.isNaN(number)) {
     setValue(getValueForRange(number, min, max))
   }
  };

  return <input className="c-number-input" value={value} placeholder={placeholder} onChange={handleChange} />
}


// ? = ele deixa o tipo opcional.