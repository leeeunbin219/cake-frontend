import css from "styled-jsx/css";
import Image from "next/image";
import Pinktable from "public/images/Pinktable.png";
import cake1 from "public/images/cakes/1.png";
import cake2 from "public/images/cakes/2.png";
import cake3 from "public/images/cakes/3.png";
import cake4 from "public/images/cakes/4.png";
import cake5 from "public/images/cakes/5.png";
import cake6 from "public/images/cakes/6.png";
import cake7 from "public/images/cakes/7.png";
import cake8 from "public/images/cakes/8.png";
import cake9 from "public/images/cakes/9.png";
import cake10 from "public/images/cakes/10.png";
import cake11 from "public/images/cakes/11.png";
import cake12 from "public/images/cakes/12.png";

export default function Cakechoice() {
  return (
    <div>
      <Image src={Pinktable} width={500} height={350} />
      <div className="cake1">
        <Image src={cake1} width={100} height={100} />
      </div>
      <div className="cake2">
        <Image src={cake2} width={100} height={100} />
      </div>
      <div className="cake3">
        <Image src={cake3} width={100} height={100} />
      </div>
      <div className="cake4">
        <Image src={cake4} width={100} height={100} />
      </div>
      <div className="cake5">
        <Image src={cake5} width={100} height={100} />
      </div>
      <div className="cake6">
        <Image src={cake6} width={100} height={100} />
      </div>
      <div className="cake7">
        <Image src={cake7} width={100} height={100} />
      </div>
      <div className="cake8">
        <Image src={cake8} width={100} height={100} />
      </div>
      <div className="cake9">
        <Image src={cake9} width={100} height={100} />
      </div>
      <div className="cake10">
        <Image src={cake10} width={100} height={100} />
      </div>
      <div className="cake11">
        <Image src={cake11} width={100} height={100} />
      </div>
      <div className="cake12">
        <Image src={cake12} width={100} height={100} />
      </div>
      <style jsx>{cakechoice}</style>
    </div>
  );
}

const cakechoice = css`
  .cake1 {
    position: absolute;
    right: 30px;
    top: -65px;
  }
  .cake2 {
    position: absolute;
    right: 140px;
    top: -65px;
  }
  .cake3 {
    position: absolute;
    right: 250px;
    top: -65px;
  }
  .cake4 {
    position: absolute;
    right: 370px;
    top: -65px;
  }
  .cake5 {
    position: absolute;
    right: 30px;
    top: 70px;
  }
  .cake6 {
    position: absolute;
    right: 140px;
    top: 70px;
  }
  .cake7 {
    position: absolute;
    right: 250px;
    top: 70px;
  }
  .cake8 {
    position: absolute;
    right: 370px;
    top: 70px;
  }
  .cake9 {
    position: absolute;
    right: 30px;
    top: 210px;
  }
  .cake10 {
    position: absolute;
    right: 140px;
    top: 210px;
  }
  .cake11 {
    position: absolute;
    right: 250px;
    top: 210px;
  }
  .cake12 {
    position: absolute;
    right: 370px;
    top: 210px;
  }
`;
