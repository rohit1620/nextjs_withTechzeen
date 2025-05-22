import Image from "next/image";
import Img from "/public/next.svg";

const ImageOptimiztion = () => {
  return (
    <div>
      <h1>Image Optimaization</h1>
      <Image src={Img} alt="This is nextjs image" height={200} width={300} />
      <br />
      <img src={Img.src} alt="This is only image" height={400} width={500} />
      <Image
        src="https://media.istockphoto.com/id/1400072011/vector/om-religious-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=H5reYb2LP7W8w2DYYSn43FKJNZ-lgbPtV6UH9u5RQ18="
        width={300}
        height={300}
        alt="om image"
      />
    </div>
  );
};

export default ImageOptimiztion;
