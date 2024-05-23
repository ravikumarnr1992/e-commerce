const Button = ({ children, type, disabled, onClick }) => {
  return (
    <div className="mb-1 pb-1 pt-1 text-center">
      <button
        type={type}
        className="mb-3 inline-block w-full rounded px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
        style={{
          background:
            "linear-gradient(to right, rgb(78 158 169), #20666e, rgb(22 127 160), rgb(50 181 200))",
        }}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
