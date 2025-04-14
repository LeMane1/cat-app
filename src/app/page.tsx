import './main.sass'
import EnableCheckbox from "@/components/enable-checkbox";
import RefreshCheckbox from "@/components/refresh-checkbox";
import CatContainer from "@/components/cat-container";

export default function Home() {
  return (
    <main className='main'>
      <h1>Get Cat App</h1>
      
      <hr/>
      
      <section>
        <EnableCheckbox/>
        
        <RefreshCheckbox/>
        
        <CatContainer/>
      </section>
    </main>
  );
}
