import alfy from 'alfy'
import {v4 as uuidv4} from 'uuid'
import {ulid as nextUlid} from 'ulid'

const uuid = uuidv4()
const ulid = nextUlid()
const partyId = `PAR~${uuidv4()}`

const output = []

const partyIdItem = {
    title: partyId,
    subtitle: 'Party ID',
    arg: partyId,
    text: {
        copy: partyId,
        largetype: partyId,
    },
    variables: {
        action: 'copy',
    },
}
const uuidItem = {
    title:uuid,
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

switch(alfy.input){
    case 'uuid':
        output.push(uuidItem)
        break
    case 'ulid':
        output.push(ulidItem)
        break
    case 'party':
        output.push(partyIdItem)
        break
    default:
        output.push(partyIdItem, uuidItem, ulidItem)
}

alfy.output(output)