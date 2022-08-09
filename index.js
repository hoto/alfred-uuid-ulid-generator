import alfy from 'alfy'
import {v4 as uuidv4} from 'uuid'
import {ulid as nextUlid} from 'ulid'

const uuid = uuidv4()
const ulid = nextUlid()
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
        title: ulid,
        subtitle: 'ULID',
        arg: ulid,
        text: {
            copy: ulid,
            largetype: ulid,
        },
        variables: {
            action: 'copy',
        },
    },
)

alfy.output(output)