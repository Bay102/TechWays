export const Accordian = () => {
  return (
    <>
      <div className='join join-vertical w-full'>
        <div className='collapse collapse-arrow join-item border border-base-300'>
          <input type='radio' name='my-accordion-4' defaultChecked />
          <div className='collapse-title text-xl font-medium'>Interests</div>
          <div className='collapse-content'>
            <p>hello</p>
          </div>
        </div>
        <div className='collapse collapse-arrow join-item border border-base-300'>
          <input type='radio' name='my-accordion-4' />
          <div className='collapse-title text-xl font-medium'>Educational</div>
          <div className='collapse-content'>
            <p>hello</p>
          </div>
        </div>
        <div className='collapse collapse-arrow join-item border border-base-300'>
          <input type='radio' name='my-accordion-4' />
          <div className='collapse-title text-xl font-medium'>Professional</div>
          <div className='collapse-content'>
            <p>hello</p>
          </div>
        </div>
      </div>
    </>
  );
};
