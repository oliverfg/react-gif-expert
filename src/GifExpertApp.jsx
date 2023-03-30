import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export default function GifExpertApp() {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (value) => {
    if (categories.includes(value)) return;
    setCategories([value, ...categories]);
  };

  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory 
          onNewCategory = {onAddCategory}
        />
        <ol>
          { 
            categories.map( category => 
              <GifGrid key={category} category={category}/>
            ) 
          }
        </ol>
    </>
  );
}
