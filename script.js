

//Array of Claims and Filtering

let claims = [
    
{
    id:1,
    category:"Hardware",
    status:"Pending",
    customer:{
        name:"John",
        email:"john@gmail.com"
    },
    productCode:"A001",
    description:"Screen fault"
},

{
    id:2,
    category:"Software",
    status:"Resolved",
    customer:{
        name:"Mary",
        email:"mary@gmail.com"
    },
    productCode:"A002",
    description:"Activation issue"
},

{
    id:3,
    category:"Accessories",
    status:"Pending",
    customer:{
        name:"David",
        email:"david@gmail.com"
    },
    productCode:"A003",
    description:"Keyboard fault"
},

{
    id:4,
    category:"Hardware",
    status:"Resolved",
    customer:{
        name:"Anna",
        email:"anna@gmail.com"
    },
    productCode:"A004",
    description:"Battery issue"
}];


``

//display function

function displayClaims(data){

    const claimList =
        document.getElementById("claimList");

    claimList.innerHTML = "";

    data.forEach(claim => {

        claimList.innerHTML += `
        <div class="claim-card">
            <h4>${claim.customer.name}</h4>
            <p>${claim.category}</p>
            <p>${claim.status}</p>
        </div>
        `;
    });
}

//filter

document
.getElementById("filter")
.addEventListener("change", function(){

    const value = this.value;

    if(value === "All"){
        displayClaims(claims);
        return;
    }

    const filteredClaims =
        claims.filter(claim =>
            claim.category === value ||
            claim.status === value
        );

    displayClaims(filteredClaims);
});

//Validation and Safe Form Processing

function validateEmail(email){

    return email.includes("@")
        && email.includes(".");
}


//Form Submission

const form =
document.getElementById("claimForm");

form.addEventListener("submit",function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const productCode =
    document.getElementById("productCode").value.trim();

    const category =
    document.getElementById("category").value;

    const description =
    document.getElementById("description").value.trim();

    const message =
    document.getElementById("message");

    if(
        !name ||
        !email ||
        !productCode ||
        !category ||
        !description
    ){
        message.textContent =
        "All fields are required";
        return;
    }

    if(!validateEmail(email)){
        message.textContent =
        "Invalid email address";
        return;
    }

    message.textContent =
    "Validation successful";
});

//try...catch...finally

try{

    if(description.length < 10){

        throw new Error(
            "Description must be at least 10 characters"
        );
    }

    const newClaim = {

        id: Date.now(),

        category,

        status:"Pending",

        customer:{
            name,
            email
        },

        productCode,

        description
    };

    claims.push(newClaim);

    displayClaims(claims);

    message.textContent =
    "Claim added successfully";

}
catch(error){

    message.textContent =
    error.message;

}
finally{

    console.log("Processing complete");

}

//Status Update, Testing and Debugging
//Add Button To Each Claim

//Update display function:

function displayClaims(data){

    const claimList =
    document.getElementById("claimList");

    claimList.innerHTML = "";

    data.forEach(claim=>{

        const div =
        document.createElement("div");

        div.classList.add("claim-card");

        div.innerHTML = `
        <h4>${claim.customer.name}</h4>
        <p>${claim.category}</p>
        <p>Status: ${claim.status}</p>
        <button onclick="resolveClaim(${claim.id})">
            Resolve
        </button>
        `;

        claimList.appendChild(div);

        console.log(

        )
    });
}

//Change Status

function resolveClaim(id){

    const selectedClaim =
    claims.find(claim => claim.id === id);

    if(selectedClaim){

        selectedClaim.status =
        "Resolved";

        displayClaims(claims);

        console.log(selectedClaim);
    }
}

//Testing Evidence (Include in Report)
//Test 1 Valid Claim

//Debugging Notes
console.log(claims);
//console.log(newClaim);

debugger;