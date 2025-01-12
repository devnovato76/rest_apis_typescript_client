export function formatCurrency(amount: number){
    return new Intl.NumberFormat('eu-EU', {
        style: 'currency',
        currency: 'EUR',

    }).format(amount)
}

export function toBoolean(str: string){
    return str.toLocaleLowerCase() === 'true';
}