export const required = (value: string) => (value || typeof value === 'number' ? undefined : 'Required')
export const maxLength = (max: any) => (value: string) =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength15 = maxLength(15)
export const minLength = (min: any) => (value: string) =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)
export const minLength8 = minLength(8)
export const number = (value: string) =>
    value && isNaN(Number(value)) ? 'Must be a number' : undefined
export const minValue = (min: any) => (value: string) =>
    value && value < min ? `Must be at least ${min}` : undefined
export const minValue13 = minValue(13)
export const email = (value: string) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined;
