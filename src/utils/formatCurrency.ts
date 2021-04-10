const formatCurrency = (current: string): string => {
    return Number(current).toLocaleString(
        'pt-br',
        {
            style: 'currency',
            currency: 'BRL'
        }
    )
};

export default formatCurrency;