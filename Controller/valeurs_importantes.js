



last_net_worth = 1500;
income = 450;
expenses = 125;
savingsRate = 4300;

function get_my_value(val){
    switch (val){ 
    case "patrimoine_net":
        return last_net_worth;
    case "revenus":
        return income;
    case "depenses":
        return expenses
    case "taux_epargne":
        return savingsRate;
    default :
        console.log('ERROR');
    }

    
}