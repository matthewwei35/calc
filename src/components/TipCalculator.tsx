import * as React from 'react';
import { useDispatch } from 'react-redux';
import { ActionTypes } from '../store/actions';
import { TipInput } from './TipInput';
import { TipResult } from './TipResult';

export const TipCalculator = () => {
  const dispatch = useDispatch();

  return (
    <div className='TipCalculator p-2 mt-0 md:mt-8 lg:mt16 w-full md:w-4/5
    lg:w-1/2 m-auto'>
      <TipInput />
      <button className='text-center text-3xl border rounded-lg bg-gray-700
      w-full text-white uppercase shadow-lg' onClick={() => dispatch({
        type: ActionTypes.Reset})}>RESET</button>
      <TipResult />
    </div>
  )
};
