import humanFace from "./assets/human_face.jpg";
function Home(){
    return (
        <div className="main flex flex-col justify-center  grow ">
        <span className="flex items-center flex-row">
          <h1 className="relative font-bold text-5xl text-center bg-opacity-30">
            Hello✌️<br/> from Toby
          </h1>
          <picture>
            <img src={humanFace} className="w-80 rounded-full"></img>
          </picture>
        </span>
      </div>
    )
}

export default Home;
