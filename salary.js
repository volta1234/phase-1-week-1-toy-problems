function grossIncome(basicSalary, ...allowances){
    let sum = basicSalary
    for(let allowance of allowances){
        sum += allowance
    }
 return sum
}

function NHIF(grossSalary){
    if (grossSalary < 6000){
        return 150
    }
    else if(grossSalary < 8000){
        return 300
    }
    else if(grossSalary < 12000){
        return 400
    }
    else if(grossSalary < 15000){
        return 500
    }
    else if(grossSalary < 20000){
        return 600
    }
    else if(grossSalary < 25000){
        return 750
    }
    else if(grossSalary < 30000){
        return 850
    }
    else if(grossSalary < 35000){
        return 900
    }
    else if(grossSalary < 40000){
        return 950
    }
    else if(grossSalary < 45000){
        return 1000
    }
    else if(grossSalary < 50000){
        return 1100
    }
    else if(grossSalary < 60000){
        return 1200
    }
    else if(grossSalary < 70000){
        return 1300
    }
    else if(grossSalary < 80000){
        return 1400
    }
    else if(grossSalary < 90000){
        return 1500
    }
    else if(grossSalary < 100000){
        return 1600
    }
    else if(grossSalary >= 100000){
        return 1700
    }

}

function NSSF(pensionableSalary){
    return pensionableSalary * 0.06
}


function taxablePay(grossIncome, ...deductions){
    for(let deduction of deductions){
        grossIncome -=deduction
    }
        return grossIncome
}

function PAYE(taxableSalary){
    if(taxableSalary <= 24000){
        return taxableSalary * 0.1
    }
    else if(taxableSalary <= 32333){
        return taxableSalary * 0.25
    }
    else if(taxableSalary > 32333){
        return taxableSalary * 0.3
    }

}

function netPay(taxableSalary, paye){
    return taxableSalary - paye

}

function handleSalary(event){
    let val= parseInt(document.getElementById("basic").value)
    let basicsalary= Boolean(val)? val : 0
    let allowances = Array.from(document.getElementsByClassName("extraincome")).map(function(element){
        return Boolean(element.value) ? parseInt(element.value) : 0
    })
    let gross = grossIncome(basicsalary, ...allowances)
    let nhifcut = NHIF(gross)
    let nssfcut = NSSF(gross)
    let taxableincome = taxablePay(gross, nhifcut, nssfcut)
    let payee = PAYE(taxableincome)
    let net = netPay(taxableincome, payee)
    document.getElementById("nhif").textContent = nhifcut
    document.getElementById("nssf").textContent = nssfcut
    document.getElementById("paye").textContent = payee
    document.getElementById("TaxablePay").textContent = taxableincome
    document.getElementById("NetPay").textContent = net
}