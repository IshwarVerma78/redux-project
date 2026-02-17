import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTabs } from '../redux/features/searchSlice';

const Tabs = () => {
    const tabs = ['photos', 'videos']
    const dispatch = useDispatch();
    const activeTab = useSelector((state)=>state.search.activeTab)

  return (
    <div className='flex gap-10 p-10'>
        {
           tabs.map((element) => {
                return (
                    <button
                    key={element}
                    className={`${(activeTab==element ? 'bg-blue-700': 'bg-gray-500')} transition cursor-pointer active:scale-95 px-5 py-2 rouded uppercase`}
                    onClick={() => dispatch(setActiveTabs(element))}
                    >
                    {element}
                    </button>
                );
            })

        }
    </div>
  )
}

export default Tabs
