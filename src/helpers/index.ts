
export const dateTimeFormater = (date:Date) => {
    const formattedDates = new Intl.DateTimeFormat("en-gb", {year: 'numeric', month: 'numeric', day: 'numeric'}).format(date)
    return formattedDates.split('/').reverse().join('-')
}