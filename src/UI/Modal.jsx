const Modal = ({ shouldShow, onRequestClose, children }) => {
  return shouldShow ? (
    <>
      <div
        className="justify-center items-center  flex bg-gray-200 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={onRequestClose}
      >
        <div
          className="relative w-7/12 mx-auto my-5"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {/*content*/}
          <div className="border-0 bg-gray-100 h-auto overflow-y-auto rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between border-b border-solid border-blueGray-200 rounded-t">
              
              <button
                onClick={onRequestClose}
                className="p-1 ml-auto bg-red-500 border-0 rounded-lg text-danger float-right text-sm leading-none font-semibold outline-none focus:outline-none"
              >
                <span className="h-2 w-2 outline-none focus:outline-none">
                  X
                </span>
              </button>
            </div>
            {/*body*/}
            
             {children}
            
            </div>
            {/*footer*/}
          </div>
        </div>
      
    </>
  ) : null;
};

export default Modal;
