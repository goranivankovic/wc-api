import React from 'react'
import homeStyle from './../styles/Home/Home.module.css'

import Link from 'next/link';
import Nav from '../components/Nav'

function Home() {
  return (

    
    <div>

   <Nav />

   


 <div className={homeStyle.main} id="home">


        <div className={homeStyle.main_firstDiv}>

        </div>

<div className={homeStyle.main_secondDiv}>

    
 <svg 
 id='cloud'
  width="100%" height="100%" 
  viewBox="0 0 1254 276" fill="none" xmlns="http://www.w3.org/2000/svg"

  className={homeStyle.clouds}

  >
<g >
<path  className={homeStyle.cloud1}  d="M217.326 82.9352L217.267 83.0971L217.436 83.133C232.717 86.3932 244.24 100.681 244.24 117.799C244.24 137.351 229.234 153.183 210.736 153.183H113.982C93.1701 153.183 76.2714 135.352 76.2714 113.357C76.2714 95.9836 86.8037 81.2166 101.466 75.7702L101.568 75.7325L101.564 75.6244C101.538 74.8744 101.512 74.1274 101.512 73.3809C101.512 48.9151 120.277 29.113 143.429 29.113C158.96 29.113 172.505 38.0175 179.764 51.2994L179.845 51.4473L179.982 51.3499C183.955 48.5352 188.762 46.8801 193.909 46.8801C207.754 46.8801 219 58.7425 219 73.3809C219 76.75 218.398 79.9807 217.326 82.9352Z" fill="white" stroke="black" strokeWidth="0.3"/>
<path className={homeStyle.cloud4} d="M587.921 116.466L587.841 116.643L588.033 116.676C612.475 120.84 630.856 139.078 630.856 160.878C630.856 185.777 606.916 205.998 577.321 205.998H422.975C389.689 205.998 362.728 183.231 362.728 155.22C362.728 133.091 379.529 114.253 402.969 107.3L403.081 107.266L403.076 107.149C403.034 106.194 402.992 105.242 402.992 104.291C402.992 73.1323 432.931 47.8537 469.949 47.8537C494.777 47.8537 516.412 59.2217 527.999 76.1528L528.077 76.2665L528.197 76.1986C534.549 72.6042 542.241 70.4886 550.478 70.4886C572.649 70.4886 590.592 85.6523 590.592 104.291C590.592 108.583 589.633 112.7 587.921 116.466Z" fill="white" stroke="black" strokeWidth="0.3"/>
<g className={homeStyle.cloud5}>
<path d="M1039.78 57.3616C1040.86 54.676 1041.46 51.7394 1041.46 48.6773C1041.46 35.3747 1030.16 24.582 1016.22 24.582C1011.04 24.582 1006.2 26.088 1002.21 28.6481C994.924 16.6005 981.331 8.51852 965.74 8.51852C942.498 8.51852 923.673 26.4896 923.673 48.6773C923.673 49.3549 923.699 50.0326 923.726 50.7103C909.002 55.6548 898.433 69.0578 898.433 84.8201C898.433 104.774 915.391 120.963 936.293 120.963H1033.05C1051.64 120.963 1066.7 106.581 1066.7 88.836C1066.7 73.2996 1055.13 60.3233 1039.78 57.3616Z" fill="white"/>
<path d="M1039.78 57.3616C1040.86 54.676 1041.46 51.7394 1041.46 48.6773C1041.46 35.3747 1030.16 24.582 1016.22 24.582C1011.04 24.582 1006.2 26.088 1002.21 28.6481C994.924 16.6005 981.331 8.51852 965.74 8.51852C942.498 8.51852 923.673 26.4896 923.673 48.6773C923.673 49.3549 923.699 50.0326 923.726 50.7103C909.002 55.6548 898.433 69.0578 898.433 84.8201C898.433 104.774 915.391 120.963 936.293 120.963H1033.05C1051.64 120.963 1066.7 106.581 1066.7 88.836C1066.7 73.2996 1055.13 60.3233 1039.78 57.3616Z" stroke="black"/>
</g>
<path className={homeStyle.cloud6} d="M1131.1 116.854L1131.04 117.017L1131.21 117.053C1148.6 120.717 1161.7 136.776 1161.7 156.011C1161.7 177.981 1144.64 195.776 1123.59 195.776H1013.59C989.917 195.776 970.698 175.736 970.698 151.021C970.698 131.499 982.676 114.904 999.355 108.783L999.457 108.746L999.453 108.637C999.423 107.795 999.394 106.955 999.394 106.116C999.394 78.6267 1020.73 56.3722 1047.07 56.3722C1064.74 56.3722 1080.14 66.3798 1088.4 81.3043L1088.48 81.4502L1088.62 81.3546C1093.13 78.1906 1098.61 76.3299 1104.46 76.3299C1120.22 76.3299 1133.01 89.6657 1133.01 106.116C1133.01 109.903 1132.32 113.534 1131.1 116.854Z" fill="white" stroke="black" strokeWidth="0.3"/>
<g >
<path   d="M345.671 127.378C346.749 123.513 347.354 119.286 347.354 114.878C347.354 95.7306 336.049 80.1958 322.114 80.1958C316.934 80.1958 312.097 82.3634 308.1 86.0484C300.817 68.7072 287.224 57.0741 271.633 57.0741C248.391 57.0741 229.566 82.9415 229.566 114.878C229.566 115.854 229.592 116.829 229.619 117.805C214.895 124.922 204.326 144.214 204.326 166.902C204.326 195.624 221.284 218.926 242.186 218.926H338.941C357.529 218.926 372.594 198.225 372.594 172.683C372.594 150.32 361.026 131.642 345.671 127.378Z" fill="white"/>
<path d="M345.671 127.378C346.749 123.513 347.354 119.286 347.354 114.878C347.354 95.7306 336.049 80.1958 322.114 80.1958C316.934 80.1958 312.097 82.3634 308.1 86.0484C300.817 68.7072 287.224 57.0741 271.633 57.0741C248.391 57.0741 229.566 82.9415 229.566 114.878C229.566 115.854 229.592 116.829 229.619 117.805C214.895 124.922 204.326 144.214 204.326 166.902C204.326 195.624 221.284 218.926 242.186 218.926H338.941C357.529 218.926 372.594 198.225 372.594 172.683C372.594 150.32 361.026 131.642 345.671 127.378Z" stroke="black"/>
</g>
<path className={homeStyle.cloud3} d="M467.484 180.782L467.431 180.939L467.592 180.976C484.147 184.794 496.642 201.534 496.642 221.603C496.642 244.528 480.371 263.072 460.334 263.072H355.517C332.974 263.072 314.652 242.187 314.652 216.401C314.652 196.035 326.071 178.732 341.958 172.352L342.055 172.313L342.052 172.208C342.024 171.33 341.995 170.454 341.995 169.579C341.995 140.9 362.34 117.706 387.418 117.706C404.242 117.706 418.921 128.134 426.79 143.7L426.871 143.862L427.015 143.752C431.32 140.453 436.53 138.515 442.105 138.515C457.1 138.515 469.299 152.41 469.299 169.579C469.299 173.53 468.646 177.318 467.484 180.782Z" fill="white" stroke="#8225C1" strokeWidth="0.3"/>
</g>
</svg>


</div>
 


                       
                               <div className={homeStyle.main_threeDiv}>


                               <div className={homeStyle.main_threeDiv_text} id="textDiv">

                              <div className={homeStyle.main_threeDiv_text_headline}>FOOTBALL</div>
                              <div>Football | Stadium | Audience | Date </div>
                              <div>Quater-Finals | Semi-Finals | Finals</div>
                              <div>Football history |  World cups 1930 - 2018</div>

                              <button><Link href="/documentation" style={{textDecoration:"none"}}> DOCUMENTATION</Link></button>

                               </div>
                               




           

                               </div>


     
                               <div className={homeStyle.main_fourDiv}></div>


</div>


    </div>


  )
}

export default Home