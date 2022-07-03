import moment from "moment";

export function getNow (format) {
    return moment().format(format);
}