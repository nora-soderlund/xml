import XMLHelper from "./XMLHelper.js";

export default class XML {
    static parse(object) {
        
    };

    static stringify(document) {
        let lines = [];

        document.forEach((element) => {
            lines = lines.concat(XMLHelper.stringify(element));
        });

        return lines.join('');
    };
};
