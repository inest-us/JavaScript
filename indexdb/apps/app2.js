/* cookies vs local storage vs session storage */
localStorage.setItem("breakfast", "cereal");
console.log(localStorage.getItem("breakfast"));

sessionStorage.setItem("breakfast", "eggs");
sessionStorage.setItem("lunch", "cereal");
console.log(sessionStorage.getItem("lunch"));
sessionStorage.removeItem("breakfast");

document.cookie = "test=true";
document.cookie = "pass=true;expires=Fri, 31 Dec 9999 23:59:59 GMT";
document.cookie = "item=new;expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
console.log(document.cookie);

document.cookie = "item=;expires=Fri, 31 Dec 1980 23:59:59 GMT; path=/";
console.log(document.cookie);
