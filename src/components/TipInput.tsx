import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes } from '../store/actions';
import { selectBill, selectPercentage, selectSplit } from '../store/selectors';

export const TipInput = () => {
  const bill = useSelector(selectBill);
  const percentage = useSelector(selectPercentage);
  const split = useSelector(selectSplit);

  const dispatch = useDispatch();

  return (
    <div className='TipInput border rounded-lg mb-2 w-full p-4 uppercase
    shadow-lg bg-gray-700'>
      <div>
        <div className='text-purple-500'>Bill</div>
        <input
          className='w-full bg-gray-700 text-white text-2xl'
          value={bill}
          onChange={e =>
            dispatch({
              type: ActionTypes.BillChange,
              payload: e.target.value
            })
          }
        />
      </div>

      <div>
        <div className='text-purple-500'>Tip %</div>
        <input
          className='w-full bg-gray-700 text-white text-2xl'
          value={percentage}
          onChange={e =>
            dispatch({
              type: ActionTypes.PercentageChange,
              payload: e.target.value
            })
          }
        />
      </div>

      <div>
        <div className='text-center text-white'>Split</div>
        <div className='flex justify-between items-center'>
          <button
            className='w-1/3 bg-purple-500 text-gray-800 text-2xl rounded'
            onClick={() => dispatch({ type:
            ActionTypes.SplitIncrement})}>
              +
          </button>
          <div className='text-purple-500'>{split}</div>
          <button
            className='w-1/3 bg-purple-500 text-gray-800 text-2xl rounded'
            onClick={() => dispatch({ type:
            ActionTypes.SplitDecrement})}>
              -
          </button>
        </div>
      </div>
    </div>
  );
}
