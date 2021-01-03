
const humanReadableDate = (date) => {
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  return `${ day } ${ month }, ${ year }`;
}

export {
  humanReadableDate
}
