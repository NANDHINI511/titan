import React from 'react'

const Accordion = () => {
  return (
    <>
      <div class="col-lg-2 mysidebar ">
          <h6 className="sideheader mt-4 ms-3">Home &nbsp;&nbsp; |&nbsp; &nbsp; Smart watches </h6>

              <div class="dropdown-sort ms-4">
                <a href="" class="btn   drpbtn  " type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" >SORT BY:&nbsp;Relevance</a>
                  
                    <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                      <li><a class="dropdown-item active" href="#">Relevance</a></li>
                      <li><a class="dropdown-item" href="#">Best Sellers</a></li>
                      <li><a class="dropdown-item" href="#">Popularity</a></li>
                      <li><hr class="dropdown-divider"/></li>
                      <li><a class="dropdown-item" href="#">New Arrival</a></li>
                    </ul>
              </div>
          <div className="filtrheader mt-4 ms-3">
          <span ><i class='bx bx-filter'></i>Filter By <button className="clrbtn">Clear All</button></span>
          </div>
          {/* ----my accord----- */}
          <div class="accordion-item mt-3 mb-2">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Price
            </button>
          </h2>
          </div>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <div class="mb-3">
                <label for="priceRange" class="form-label">Select Price Range</label>
                <input type="range" class="form-range" min="0" max="10000" step="100" id="priceRange"/>
              </div>
              <div class="d-flex gap-2">
                <div class="flex-fill">
                  <label for="minPrice" class="form-label">Min</label>
                  <input type="number" class="form-control" id="minPrice" placeholder="0"/>
                </div>
                <div class="flex-fill mb-2">
                  <label for="maxPrice" class="form-label">Max</label>
                  <input type="number" class="form-control" id="maxPrice" placeholder="10000"/>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item mb-2">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Color
            </button>
          </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Black" id="colorBlack"/>
                  <label class="form-check-label" for="colorBlack">Black</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="White" id="colorWhite"/>
                  <label class="form-check-label" for="colorWhite">White</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Blue" id="colorBlue"/>
                  <label class="form-check-label" for="colorBlue">Blue</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Red" id="colorRed"/>
                  <label class="form-check-label" for="colorRed">Red</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Green" id="colorGreen"/>
                  <label class="form-check-label" for="colorGreen">Green</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Silver" id="colorSilver"/>
                  <label class="form-check-label" for="colorSilver">Silver</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Gold" id="colorGold"/>
                  <label class="form-check-label" for="colorGold">Gold</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Brown" id="colorBrown"/>
                  <label class="form-check-label" for="colorBrown">Brown</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Grey" id="colorGrey"/>
                  <label class="form-check-label" for="colorGrey">Grey</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Rose Gold" id="colorRoseGold"/>
                  <label class="form-check-label" for="colorRoseGold">Rose Gold</label>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item mb-2">
            <h2 class="accordion-header" id="flush-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Material
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Leather" id="materialLeather"/>
                  <label class="form-check-label" for="materialLeather">Leather</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Nylon" id="materialNylon"/>
                  <label class="form-check-label" for="materialNylon">Nylon</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Metal" id="materialMetal"/>
                  <label class="form-check-label" for="materialMetal">Metal</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Steel" id="materialSteel"/>
                  <label class="form-check-label" for="materialSteel">Steel</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Ceramic" id="materialCeramic"/>
                  <label class="form-check-label" for="materialCeramic">Ceramic</label>
                </div>

                <div id="extraMaterials" class="extra-materials">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Rubber" id="materialRubber"/>
                    <label class="form-check-label" for="materialRubber">Rubber</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Plastic" id="materialPlastic"/>
                    <label class="form-check-label" for="materialPlastic">Plastic</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Silicone" id="materialSilicone"/>
                    <label class="form-check-label" for="materialSilicone">Silicone</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Fabric" id="materialFabric"/>
                    <label class="form-check-label" for="materialFabric">Fabric</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Titanium" id="materialTitanium"/>
                    <label class="form-check-label" for="materialTitanium">Titanium</label>
                  </div>
                </div>

                <span class="see-more" onclick="toggleMaterials()">See more</span>
              </div>
            </div>
          </div>
          {/* ------ */}
          <div class="accordion-item mb-2">
            <h2 class="accordion-header" id="flush-headingfour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                Discounts
              </button>
            </h2>
            <div id="flush-collapsefour" class="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Leather" id="materialLeather"/>
                  <label class="form-check-label" for="materialLeather">Leather</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Nylon" id="materialNylon"/>
                  <label class="form-check-label" for="materialNylon">Nylon</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Metal" id="materialMetal"/>
                  <label class="form-check-label" for="materialMetal">Metal</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Steel" id="materialSteel"/>
                  <label class="form-check-label" for="materialSteel">Steel</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Ceramic" id="materialCeramic"/>
                  <label class="form-check-label" for="materialCeramic">Ceramic</label>
                </div>

                <div id="extraMaterials" class="extra-materials">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Rubber" id="materialRubber"/>
                    <label class="form-check-label" for="materialRubber">Rubber</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Plastic" id="materialPlastic"/>
                    <label class="form-check-label" for="materialPlastic">Plastic</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Silicone" id="materialSilicone"/>
                    <label class="form-check-label" for="materialSilicone">Silicone</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Fabric" id="materialFabric"/>
                    <label class="form-check-label" for="materialFabric">Fabric</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Titanium" id="materialTitanium"/>
                    <label class="form-check-label" for="materialTitanium">Titanium</label>
                  </div>
                </div>

                <span class="see-more" onclick="toggleMaterials()">See more</span>
              </div>
            </div>
          </div>
          <div class="accordion-item mb-2">
            <h2 class="accordion-header" id="flush-headingfive">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapsefive">
                Collection
              </button>
            </h2>
            <div id="flush-collapsefive" class="accordion-collapse collapse" aria-labelledby="flush-headingfive" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Leather" id="materialLeather"/>
                  <label class="form-check-label" for="materialLeather">Leather</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Nylon" id="materialNylon"/>
                  <label class="form-check-label" for="materialNylon">Nylon</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Metal" id="materialMetal"/>
                  <label class="form-check-label" for="materialMetal">Metal</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Steel" id="materialSteel"/>
                  <label class="form-check-label" for="materialSteel">Steel</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Ceramic" id="materialCeramic"/>
                  <label class="form-check-label" for="materialCeramic">Ceramic</label>
                </div>

                <div id="extraMaterials" class="extra-materials">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Rubber" id="materialRubber"/>
                    <label class="form-check-label" for="materialRubber">Rubber</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Plastic" id="materialPlastic"/>
                    <label class="form-check-label" for="materialPlastic">Plastic</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Silicone" id="materialSilicone"/>
                    <label class="form-check-label" for="materialSilicone">Silicone</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Fabric" id="materialFabric"/>
                    <label class="form-check-label" for="materialFabric">Fabric</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="Titanium" id="materialTitanium"/>
                    <label class="form-check-label" for="materialTitanium">Titanium</label>
                  </div>
                </div>

                <span class="see-more" onclick="toggleMaterials()">See more</span>
              </div>
            </div>
          </div>

          

          {/* -----end----- */}
      </div>

         
    </>
  )
}

export default Accordion