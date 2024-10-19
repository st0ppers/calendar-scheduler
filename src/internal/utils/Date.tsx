const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export const isCurrentMonth = (date: Date, monthLongName: string): boolean => {
    return monthNames[date.getMonth()] === monthLongName;
};