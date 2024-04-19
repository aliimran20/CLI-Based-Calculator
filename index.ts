#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

let magenta = chalk.magenta
let results: number

let firstnumber = await inquirer.prompt({

    name: 'n1',
    type: 'number',
    message: chalk.yellow('\nPLEASE ENTER FIRST NUMBER:'),
    prefix: ''

})

let secondnumber = await inquirer.prompt({

    name: 'n2',
    type: 'number',
    message: chalk.yellow('\nPLEASE ENTER SECOND NUMBER'),
    prefix: ''

})

let operation = await inquirer.prompt({

    name: 'operator',
    type: 'list',
    message: chalk.magenta('\nSELECT AN OPERATOR: '),
    choices: [

        {name: magenta('ADDITION'), value: 'ADDITION'},
        {name: magenta('SUBTRACTION'), value: 'SUBTRACTION'},
        {name: magenta('MULTIPLICATION'), value: 'MULTIPLICATION'},
        {name: magenta('DIVISION'), value: 'DIVISION'}

    ],
    prefix: ''

})

switch (operation.operator)

{
    
    case 'ADDITION':
        console.log (chalk.magenta(`\nTHE ANSWER IS: ${results = firstnumber.n1 + secondnumber.n2}`))
        break;

        case 'SUBTRACTION':
            console.log (chalk.magenta(`\nTHE ANSWER IS: ${results = firstnumber.n1 - secondnumber.n2}`))
            break;

            case 'MULTIPLICATION':
                console.log (chalk.magenta(`\nTHE ANSWER IS: ${results = firstnumber.n1 * secondnumber.n2}`))
                break;

                case 'DIVISION':
                    console.log (chalk.magenta(`\nTHE ANSWER IS: ${results = firstnumber.n1 / secondnumber.n2}`))
                    break;

                    default:
                        console.log('Please Select a Valid Operator')

}
