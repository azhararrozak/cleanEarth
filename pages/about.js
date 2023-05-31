import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";

const about = () => {
  return (
    <section class="section">
    <div class="container">
		
		<div class="section_header">
			<h2 class="title section_title">Our Team</h2>
			
		<span class="section_hint">Kami adalah tim capstone Cleanearth</span> </div>
        <div class="row">
			<div class="section_content teamy-team">
				<div class="col-md-3">
					<div class="teamy teamy_style1 teamy_mask-circle">
						<div class="teamy_layout">
							<div class="teamy_preview"> 
              <img src="/empty-cart.jpg" className="teamy_avatar" width={600}/>
              </div>
							<div class="teamy_back">
								<main class="teamy_back-inner"> <a href="https://github.com" class="social"> <FaGithub/></a> <a href="https://linkedin.com" class="social"> <FaLinkedin/></a> </main>
							</div>
						</div>
						<div class="teamy_content">
							<h3 class="teamy_name">Azhar</h3>
						<span class="teamy_post">Web Developer</span> </div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="teamy teamy_style1 teamy_mask-circle">
						<div class="teamy_layout">
							<div class="teamy_preview"> 
              <img src="/azhar.jpg" className="teamy_avatar" width={600}/>
               </div>
							<div class="teamy_back">
							<main class="teamy_back-inner"> <a href="https://github.com/azhararrozak" class="social"> <FaGithub/></a> <a href="https://www.linkedin.com/in/azharrozak/" class="social"> <FaLinkedin/></a> </main>
							</div>
						</div>
						<div class="teamy_content">
							<h3 class="teamy_name">Uzdha</h3>
						<span class="teamy_post">Web Developer</span> </div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="teamy teamy_style1 teamy_mask-circle">
						<div class="teamy_layout">
							<div class="teamy_preview"> 
              <img src="/empty-cart.jpg" className="teamy_avatar" width={600}/>
                 </div>
							<div class="teamy_back">
							<main class="teamy_back-inner"> <a href="https://github.com/sarahlarasati" class="social"> <FaGithub/></a> <a href="https://www.linkedin.com/in/sarah-larasati-b27821232/" class="social"> <FaLinkedin/></a> </main>
							</div>
						</div>
						<div class="teamy_content">
							<h3 class="teamy_name">Sarah</h3>
						<span class="teamy_post">Web Developer</span> </div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="teamy teamy_style1 teamy_mask-circle">
						<div class="teamy_layout">
							<div class="teamy_preview"> 
              <img src="/rachel.jpg" className="teamy_avatar" width={600}/>
                 </div>
							<div class="teamy_back">
							<main class="teamy_back-inner"> <a href="https://github.com/RachelPutriPaskah14" class="social"> <FaGithub/></a> <a href="https://www.linkedin.com/in/rachel-putri-paskah-9a0198224/" class="social"> <FaLinkedin/></a> </main>
							</div>
						</div>
						<div class="teamy_content">
							<h3 class="teamy_name">Rachel</h3>
						<span class="teamy_post">Web Developer</span> </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
  )
}

export default about
