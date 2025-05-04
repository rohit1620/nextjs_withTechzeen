import rohit from "../rohit.module.css";
import kishan from "../kishan.module.css";

const CssModule = () => {
  return (
    <div>
      <h1 className={rohit.main}>can you apply module csss?</h1>
      <h1 className={kishan.main}>How are you kishan?</h1>
    </div>
  );
};

export default CssModule;
