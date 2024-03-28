export default function Validation(values) {
  const errors = {}

  const email_pattern =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const password_pattern =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-z0-9]{8,}$/;
  
  if(values.name === ""){
    errors.name = "Name is required.";
  }
  
  if(values.email === ""){
    errors.email = "e-mail is required";
}
else if(!email_pattern.test(values.email)){
    errors.email = "E-mail did not correct"
}
    if(values.password ===""){
        errors.password = "Password is required";
    } else if(!password_pattern.test(values.password)) {
        errors.password = "Password did not match"
    }
    if(values.username === ""){
        errors.username = "username is required";
    }
    if(values.Nidanumber === ""){
        errors.Nidanumber = "Nidanumber is required";
    }
    
    return errors;
}
