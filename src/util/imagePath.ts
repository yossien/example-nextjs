export const imagePath = (path: string): string => {
  return process.env.NODE_ENV !== 'production'
    ? `${process.env.devImageRoot}/${path}`
    : path
}
