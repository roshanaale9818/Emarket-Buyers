export const isNotEmpty = (value) => value.trim() !== '';
export const isNotLessThanSix = (value)=> value.trim() !== '' && value.trim().length > 6;
export const isEmail = (value) => value.includes('@');


