const power = (base, exponent) => 
{
    const argsBigIntegerCheck = typeof(base) == 'bigint' && typeof(exponent) == 'bigint';
    if (argsBigIntegerCheck) {return powerBigInteger(base, exponent);}
    else {
        let argsIntegerCheck = Number.isInteger(base) && Number.isInteger(exponent);
        assert(argsIntegerCheck, "Both arguments must be integers or both must be big integers!");
        return powerNormalInteger(base, exponent);
    }
};

function assert(condition, message) {
if (!condition) throw new Error(message || "Assertion failed")
}

function powerNormalInteger(base, exponent) {
    if (exponent === 0) 
    {
        return 1;
    }
    else if (exponent % 2 === 1) 
    {
        return base * power(base, exponent - 1);
    }
    else 
    {
        let halfPower = power(base, exponent / 2);
        return halfPower * halfPower;
    }
}

function powerBigInteger(base, exponent) {
    if (exponent === BigInt(0)) 
    {
        return BigInt(1);
    }
    else if (exponent % BigInt(2) === BigInt(1)) 
    {
        return base * power(base, exponent - BigInt(1));
    }
    else 
    {
        let halfPower = power(base, exponent / BigInt(2));
        return halfPower * halfPower;
    }
}