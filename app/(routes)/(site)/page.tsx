import { getCategories } from "@/actions/getCategories";
import { getSlider } from "@/actions/getSlider";
import Categories from "@/components/Categories";
import Slider from "@/components/Slider";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Home() {

  const sliderlist = await getSlider();
  const categoriesList = await getCategories();
  return (
 
    <div className="px-3">
      <Slider sliderList={sliderlist}/>
      <Categories categoryList={categoriesList}/>
    </div>
  );
}
