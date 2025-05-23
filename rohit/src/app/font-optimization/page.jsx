import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
});

const FontOptimization = () => {
  return (
    <div>
      {/* <h1 style={{ fontFamily: "Poppins", fontWeight: 300 }}>
        This component is for font optimization
      </h1> */}
      <h1 className={poppins.className}>
        This component is for font optimization
      </h1>
    </div>
  );
};

export default FontOptimization;
