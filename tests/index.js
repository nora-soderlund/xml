import XML from "./../src/exports.js";

console.log(XML.stringify([
    {
        "#tagName": "?xml",
        "#attributes": {
            "version": "1.0"
        }
    },

    {
        "#tagName": "hello",
        "#attributes": {
            "lorem": "ipsum",
            "woah": "cool"
        },
        "#value": "world"
    }
]));

