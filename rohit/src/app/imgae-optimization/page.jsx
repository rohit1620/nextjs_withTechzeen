import Image from "next/image";
import Img from "/public/next.svg";

const ImageOptimiztion = () => {
  return (
    <div>
      <h1>Image Optimaization</h1>
      <Image src={Img} alt="This is nextjs image" />
    </div>
  );
};

export default ImageOptimiztion;
