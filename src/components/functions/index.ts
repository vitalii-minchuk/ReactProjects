import axios from "axios";

interface userData {
    id: number
    email: string
    name: string
}

export function validateValue(value: number) {
    if(typeof value !== 'number' || isNaN(value)) return false;
    if(value >= 0 && 100 >= value) return true;

    return false;
}

export function add(firstNumber: number = 0, secondNumber: number = 0) {
    return firstNumber + secondNumber;
}

export function mapArrayToString(arr: any) {
    return arr
        .filter((item: any) => {
            if(typeof item === 'string') return item;
            return Number.isInteger(item);
        })
        .map(String);
}

export function square(number: number) {
    if(number === 1) return 1;
    return Math.pow(number, 2);
}

export function delay(callback: () => void, ms:number) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(callback())
        }, ms);
    });
}

export const getUserData = async () => {
    try {
        const { data } = await axios.get<userData[]>('https://jsonplaceholder.typicode.com/users');
        const usersIds = data.map(user => user.id)
        return mapArrayToString(usersIds)
    } catch (error) {
        console.log(error)
    }
}