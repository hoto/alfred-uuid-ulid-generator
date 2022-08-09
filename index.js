import alfy from 'alfy'
import {v4 as uuidv4} from 'uuid'
import {ulid as nextUlid} from 'ulid'

const uuid = uuidv4()
const ulid = nextUlid()
const output = []

const uuidItem = {
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
}

const ulidItem = {
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
}

alfy.input === 'uuid' ?
    output.push(uuidItem, ulidItem) :
    output.push(ulidItem, uuidItem)

alfy.output(output)