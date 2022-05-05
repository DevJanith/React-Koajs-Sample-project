import { getCurrentDate } from "../utility/date.js";
import { v4 as uuidv4 } from 'uuid';


let customerData = [
    {
        "id": "1",
        "name": "Jerry",
        "contactNo": "+94768523525",
        "address": "No.146, Rampart Road, Rthdal Kotte, Kotte",
        "email": "janithagamage1.ed@gmail.com",
        "createdDate": "2021/05/05",
        "updatedDate": "",
        "states": 1
    }
]


export const read = async function read(ctx) {
    try {
        ctx.body = customerData;
    } catch (error) {
        console.log(error)
    }

}

export const create = async function create(ctx) {
    const customer = ctx.request.body;
    customer.id = uuidv4();
    customer.createdDate = getCurrentDate();
    customer.states = 1;
    try {
        customerData.push(customer);
        ctx.body = "Customer Created Succesfully";
    } catch (error) {
        console.log(error)
    }
}

export const update = async function update(ctx) {
    let customer = ctx.request.body;
    const index = customerData.findIndex((e) => e.id === customer.id);
    console.log(index)
    let message;

    try {
        if (index === -1) {
            customer.id = uuidv4();
            customer.createdDate = getCurrentDate();
            customer.states = 1;

            customerData.push(customer)
            message = "Data Create succefully"
        } else {
            customer.updatedDate = getCurrentDate();
            customer.states = 2;
            customerData[index] = customer;
            message = "Data Updated succefully"
        }
        ctx.body = message;
    } catch (error) {
        console.log(error)
    }

}

export const deleteData = async function deleteData(ctx) {
    let customer = ctx.request.body;
    const index = data.findIndex((e) => e.id === customer.id);
    let message;

    if (index === -1) {
        message = "Data Not Found"
    } else {
        delete customerData[index];
        message = "Data Deleted succefully"
    }
    ctx.body = message;
}

