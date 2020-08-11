function solution() {
    if (document.getElementById("type_person").checked) {
        // if the person option is clicked
        let first = document.getElementById("first_name").value;
        let last = document.getElementById("last_name").value;
        //console.log(first.length);
        //console.log(last.length);
        // validate that first and last name is not empty
        if ((first.length==0) || (last.length==0)) {
            return false;
        }
        let email = document.getElementById("email").value;
        //console.log(email);
        // validate email
        if (email.length<3) {
            return false;
        }
        let regexp = /^[\d\w.]{1,64}@[\d\w.]{1,64}$/
        if (!(regexp.test(email))) {
            return false;
        }
        return true;
    } else {
        // if the company options is clicked
        let company = document.getElementById("company_name").value;
        //console.log(company);
        // validate that the company name is not empty
        if (company.length==0) {
            return false;
        }
        let phone = document.getElementById("phone").value;
        //console.log(phone);
        // validate the phone number
        let digit = 0
        for (var i = 0; i < phone.length; i++) {
            if (/[\d]/.test(phone.charAt(i))) {
                digit = digit+1;
            } else if (/[- ]/.test(phone.charAt(i))) {

            } else {
                return false;
            }
        }
        if (digit<6) {
            return false;
        }
        return true;
    }
}
document.getElementById("result").innerText = solution();
