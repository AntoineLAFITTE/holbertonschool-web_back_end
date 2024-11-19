/* eslint-disable */
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }


  let result = '';
  let separator = '';


  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {

      const suffix = value.substring(startString.length);


      result = result + separator + suffix;


      separator = '-';
    }
  }

  return result;
}
