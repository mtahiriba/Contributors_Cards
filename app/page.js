
import RenderCards from "@components/RenderCards"

export default function Home() {
  return (
    <div>
        <h1 className="font-bold mb-2">Top Contributos</h1>
        <hr className="border-1 mb-7 border-gray-400"/>
        <RenderCards/>
    </div>  
  )
}
