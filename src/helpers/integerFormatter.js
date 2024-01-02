const integerFormatter = new Intl.NumberFormat('en-us', {
    maximumFractionDigits: 0
});

export function formatOperand(operand){
    if(operand == null) return;
    
    const [integer, decimal] = operand.split('.');
    if(decimal == null) return integerFormatter.format(integer);

    return `${integerFormatter.format(integer)}.${decimal}`;
}