import './animateInput.css';

const AnimateInput = () => {
  return (
    <div className="animate-label">
      <input type="text" id="password" required />
      <label htmlFor="password"> Password </label>
      <line></line>
    </div>
  );
};

export default AnimateInput;
