import { getSlider } from "@/actions/getSlider";
import Slider from "@/components/Slider";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Home() {

  const sliderlist = await getSlider();
  return (
 
    <div className="px-3">
      <Slider sliderList={sliderlist}/>
    </div>
  );
}
