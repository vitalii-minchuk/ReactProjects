export const validateValue = (value: number) => {
    if(typeof(value) !== 'number' && !isNaN(value)) return false;
    if(value > 0 && 100 > value) return true;

    return false;
}