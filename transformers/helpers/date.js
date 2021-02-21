const getFullYear = (year) => {
    const _year = Number(year);
    if (_year.toString().length === 4) return _year;
    if (_year >= 70) return 1900 + _year;
    return 2000 + _year;
}

const getDateObject = (day, month, year) => {
    const date = new Date();
    date.setDate(day);
    date.setMonth(Number(month) - 1);
    date.setYear(getFullYear(year));
    return date;
}

module.exports = {
    getDateObject
};