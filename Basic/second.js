const accountId=14343
let aacountEmail="satyamtri@gmail.com"
var accountPassword="1234"
accountCity="Bengaluru"
let accountState;
// if we not define any variable then the output displays undefined.
// accountId=2 --> if we execute this line in the code then code don't allows because we cannot change in const variable.
accountEmail="chchs@23.com"
accountPassword="1212121212"
/*prefer not to use var
because of issue in block scope and functional scope*/
accountCity="Jaipur"
console.log(accountId)
console.table([accountId,accountPassword,accountState,accountCity,accountEmail])