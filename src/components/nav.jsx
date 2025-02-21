import Logo from "./logo";

export default function Nav() {
  return (
    <>
      <div className="whole">
        <Logo />
        <div className="general">
          <div className="image1">
            <nav>
              <ul>
                <li>
                  <a href="">home</a>
                </li>
                <li>
                  <a href="">series</a>
                </li>
                <li>
                  <a href="">movies</a>
                </li>
                <li>
                  <a href="">Trending</a>
                </li>
                <li>
                  <a href="">categories</a>
                </li>
              </ul>
            </nav>
          </div>
          
        </div>
        <div className="class2">
          <input type="text" id="name" placeholder="search movie" />
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
       
          </svg>
      
        </div>

       <img src="/assets/images/profile.png" alt="" />
      </div>
    </>
  );
}
