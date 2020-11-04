import React from 'react';
import '../css/Footer.css';

function Footer() {
    return(
        <div className="Footer-full">            
            <footer class="page-footer font-small stylish-color-dark pt-4">        
                <div class="footer-container">        
                <div class="col-md-3 w3_footer_grid">
					<h3>Contact</h3>
					
					<ul class="address">
						<li><i class="glyphicon glyphicon-map-marker" aria-hidden="true"></i>371 Nguyen Kiem, ward 3, Go Vap district <span>HCM city.</span></li>
						<li><i class="glyphicon glyphicon-envelope" aria-hidden="true"></i><a href="mailto:1751010045huy@ou.edu.vn">1751010045huy@ou.edu.vn</a></li>
						<li><i class="glyphicon glyphicon-earphone" aria-hidden="true"></i>0812678152</li>
					</ul>
				</div>
				<div class="col-md-3 w3_footer_grid">
					<h3>Information</h3>
					<ul class="info"> 
						<li><i class="fa fa-arrow-right" aria-hidden="true"></i><a href="#">About Us</a></li>
						<li><i class="fa fa-arrow-right" aria-hidden="true"></i><a href="#">Contact Us</a></li>
						<li><i class="fa fa-arrow-right" aria-hidden="true"></i><a href="#">Short Codes</a></li>
						<li><i class="fa fa-arrow-right" aria-hidden="true"></i><a href="#">FAQ's</a></li>
						<li><i class="fa fa-arrow-right" aria-hidden="true"></i><a href="#">Special Products</a></li>
					</ul>
				</div>
				<div class="col-md-3 w3_footer_grid">
					<h3>Category</h3>
					<ul class="info"> 
						<li><i class="fa fa-arrow-right" aria-hidden="true"></i><a href="#">Groceries</a></li>
						<li><i class="fa fa-arrow-right" aria-hidden="true"></i><a href="#">Household</a></li>
						<li><i class="fa fa-arrow-right" aria-hidden="true"></i><a href="#">Personal Care</a></li>
						<li><i class="fa fa-arrow-right" aria-hidden="true"></i><a href="#">Packaged Foods</a></li>
						<li><i class="fa fa-arrow-right" aria-hidden="true"></i><a href="#">Beverages</a></li>
					</ul>
				</div>
                </div>
            </footer>
        </div>
    )    
}
export default Footer

