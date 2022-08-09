import alfy from 'alfy'
import {v4 as uuidv4} from 'uuid'
import {ulid} from 'ulid'

const uuid = uuidv4()
const output = []

output.push(
    {
        title: uuidv4(),
        subtitle: 'UUID v4',
        arg: uuid,
        text: {
            copy: uuid,
            largetype: uuid,
        },
        variables: {
            action: 'copy',
        },
    },
    {
        title: ulid(),
        subtitle: 'ULID',
        arg: uuid,
        text: {
            copy: uuid,
            largetype: uuid,
        },
        variables: {
            action: 'copy',
        },
    },
)

alfy.output(output)