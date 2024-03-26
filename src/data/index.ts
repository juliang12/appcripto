interface Currency {
    code: string
    name: string
}

export const currencies: Currency[] = [
    {code: 'USD', name: 'Dolar de Estados Unidos'},
    {code: 'ARG', name: 'Peso Argentino'},
    {code: 'EUR', name: 'Euro'},
    {code: 'GBP', name: 'Libra Esterlina'},
]