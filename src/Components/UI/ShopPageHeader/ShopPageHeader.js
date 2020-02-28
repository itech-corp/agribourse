import React from "react";
import './ShopPageHeader.css';


let priceFilter = 0;
function filterHandler(event){
	priceFilter = event.target.value*10;
	console.log(priceFilter);
}
export default function ShopHeader(props) {

    return(

<div class="card card-filter">
	<article class="card-group-item">
		<header class="card-header">
			<a class="" aria-expanded="true" href="#" data-toggle="collapse" data-target="#collapse22">
				<i class="icon-action fa fa-chevron-down"></i>
				<h6 class="title">Par Categorie</h6>
			</a>
		</header>
		<div class="filter-content collapse show" id="collapse22">
			<div class="card-body">
				<form class="pb-3">
				<div class="input-group">
				  <input class="form-control" placeholder="Search" type="text"/>
				  <div class="input-group-append">
				    <button class="btn btn-primary" type="button"><i class="fa fa-search"></i></button>
				  </div>
				</div>
				</form>

				<ul class="list-unstyled list-lg">
					<li><a href="#" onClick={()=>props.filter("total")} >Total<span class="float-right badge badge-light round">47</span> </a></li>
					<li><a href="#" onClick={()=>props.filter("sorgho")}>Sorgho  <span class="float-right badge badge-light round">3</span>  </a></li>
					<li><a href="#" onClick={()=>props.filter("Haricot")}>Haricot rouge <span class="float-right badge badge-light round">32</span>  </a></li>
					<li><a href="#" onClick={()=>props.filter("total")}>Riz <span class="float-right badge badge-light round">12</span>  </a></li>
				</ul>  
			</div> 
		</div> 
	</article> 
	<article class="card-group-item">
		<header class="card-header">
			<a href="#" data-toggle="collapse" data-target="#collapse33">
				<i class="icon-action fa fa-chevron-down"></i>
				<h6 class="title">Par Prix  </h6>
			</a>
		</header>
		<div class="filter-content collapse show" id="collapse33">
			<div class="card-body">
				<input type="range" class="custom-range" min="0" max="100" name="" onChange={filterHandler}/>
				<div class="form-row">
				<div class="form-group col-md-6">
				  <label>Min</label>
				  <input class="form-control" placeholder="0Fcfa" type="number"/>
				</div>
				<div class="form-group text-right col-md-6">
				  <label>Max</label>
				  <input class="form-control" placeholder="1,0000Fcfa"  type="number"/>
				</div>
				</div> 
				<button class="btn btn-block btn-outline-primary" onClick={()=>props.filter(priceFilter)}>Apply</button>
			</div>
		</div>
	</article> 
	<article class="card-group-item">
		<header class="card-header">
			<a href="#" data-toggle="collapse" data-target="#collapse44">
				<i class="icon-action fa fa-chevron-down"></i>
				<h6 class="title">By Feature </h6>
			</a>
		</header>
		<div class="filter-content collapse show" id="collapse44">
			<div class="card-body">
			<form>
				<label class="form-check">
				  <input class="form-check-input" value="" type="checkbox"/>
				  <span class="form-check-label">
				  	<span class="float-right badge badge-light round">5</span>
				    Samsung
				  </span>
				</label>  
				<label class="form-check">
				  <input class="form-check-input" value="" type="checkbox"/>
				  <span class="form-check-label">
				  	<span class="float-right badge badge-light round">13</span>
				    Mersedes Benz
				  </span>
				</label> 
				<label class="form-check">
				  <input class="form-check-input" value="" type="checkbox"/>
				  <span class="form-check-label">
				  	<span class="float-right badge badge-light round">12</span>
				    Nissan Altima
				  </span>
				</label>  
				<label class="form-check">
				  <input class="form-check-input" value="" type="checkbox"/>
				  <span class="form-check-label">
				  	<span class="float-right badge badge-light round">32</span>
				    Another Brand
				  </span>
				</label> 
			</form>
			</div> 
		</div> 
	</article> 
</div>

    )
}