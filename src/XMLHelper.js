export default class XMLHelper {
    static stringify(object) {
        let lines = [];

        lines.push('<');

        const tagName = object["#tagName"];

        lines.push(tagName);

        if(object.hasOwnProperty("#attributes")) {
            const attributes = Object.entries(object["#attributes"]).map(([key, value]) => `${key}="${value}"`);

            lines.push(' ' + attributes.join(' '));
        }
        
        if(object.hasOwnProperty("#value")) {
            lines.push('>');

            lines.push(object["#value"]);

            lines.push('</' + tagName + '>');
        }
        else
            lines.push('/>');

        const children = Object.keys(object).filter((key) => !key[0] == '#');

        children.forEach((key) => {
            lines = lines.concat(XML.stringify(object[key]));
        });

        return lines.join('');
    };
};
