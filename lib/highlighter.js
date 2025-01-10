'use stict';

const fs = require('fs');
const Parser = require('@liqd-js/parser');

module.exports = class Highlighter
{
    #parser;

    constructor()
    {
        this.#parser = new Parser( __dirname + '/syntax/javascript.syntax' );
    }

    highlight( source, language )
    {
        console.log( source );

        return this.#parser.parse( source );
    }
}