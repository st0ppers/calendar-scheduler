export const isCurrentMonth = (date: Date): boolean => {
    return date.getMonth() === new Date().getMonth();
};