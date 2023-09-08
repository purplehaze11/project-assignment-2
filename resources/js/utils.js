const countTotal = (price) => {
    return parseInt(price.split(".").join(""));
};

export default countTotal;
//const price = "2.122.000";
//const numPrice = parseInt(price.split(".").join(""));

//console.log(typeof numPrice);
