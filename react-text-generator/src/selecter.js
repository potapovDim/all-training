import React from 'react'

export const Selecter = ({ handleChange, active }) => (<select onChange={(e) => handleChange(e.target.value)} >
  <option value="true">Yes</option>
  <option value="false">No</option>
</select>)