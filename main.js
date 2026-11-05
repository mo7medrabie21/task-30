

// First Method (Then)


fetch("https://fakestoreapi.com/products")
.then(function (result) {
    return result.json();
})
.then(function (ali) {

    var mohamed = ali;
    var basket = "";

    for (var i = 0; i < mohamed.length; i++) {

        var cartoona = `
        <div class="col-md-4 text-center mb-4">

            <div class="card p-3 h-100">

                <img src="${mohamed[i].image}"
                class="w-100"
                style="height:250px; object-fit:contain">

                <h4>${mohamed[i].title}</h4>

                <h6>${mohamed[i].category}</h6>

                <h6>${mohamed[i].description.substring(0, 80)}</h6>

                <h6>${mohamed[i].rating.rate} of 5</h6>

                <h6>${mohamed[i].price}$</h6>

                <h6>${mohamed[i].id}</h6>

            </div>

        </div>
        `;

        basket = basket + cartoona;
    }

    document.querySelector(".test1").innerHTML = basket;

});



// Second Method (Async Await)


async function getApi() {

    var result = await fetch("https://fakestoreapi.com/products");

    var ali = await result.json();

    var mohamed = ali;

    var basket = "";

    for (var i = 0; i < mohamed.length; i++) {

        var cartoona = `
        <div class="col-md-4 text-center mb-4">

            <div class="card p-3 h-100">

                <img src="${mohamed[i].image}"
                class="w-100"
                style="height:250px; object-fit:contain">

                <h4>${mohamed[i].title}</h4>

                <h6>${mohamed[i].category}</h6>

                <h6>${mohamed[i].description.substring(0, 80)}</h6>

                <h6>${mohamed[i].rating.rate} of 5</h6>

                <h6>${mohamed[i].price}$</h6>

                <h6>${mohamed[i].id}</h6>

            </div>

        </div>
        `;

        basket = basket + cartoona;
    }

    document.querySelector(".test2").innerHTML = basket;

}

getApi();
