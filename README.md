# Alfred UUID & ULID generator workflow

Alfred workflow to generate random UUIDs & ULIDs.

* [UUID](https://github.com/ulid/javascript) - Universally Unique IDentifier (e.g. `01827074-6E45-DF55-2C28-533EC18EAD07`)
* [ULID](https://github.com/uuidjs/uuid) - Universally unique Lexicographically sortable IDentifier (e.g. `01G9R78VJ5VXAJRA2K7V0RXB87`)

### Install

    npm install --global @hoto/alfred-uuid-ulid-generator

### What is ULID

    ULID:              01G9R78VJ5VXAJRA2K7V0RXB87
    ULID as UUID v4:   01827074-6E45-DF55-2C28-533EC18EAD07
    ULID as timestamp: 2022-08-06T00:00:54.853Z

Benefits of ULIDs:
* Lexicographically sortable
* 26 character string vs 36 characters for UUID
* 128-bit compatibility with UUID


ULID is made up of two base32 encoded numbers, a UNIX timestamp followed by a random number:

    01G9R78VJ5      VXAJRA2K7V0RXB87

    |----------|    |----------------|
    Timestamp          Randomness
    48bits             80bits

### Develop

Create symlink for rapid workflow testing:

    npm install -g

<a href="https://www.flaticon.com/free-icons/fingerprint" title="fingerprint icons">Fingerprint icons created by HAJICON - Flaticon</a>