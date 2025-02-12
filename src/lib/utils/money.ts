export const numberToShorthand = (num: number | string) => {
  const number = Number(num);

  if (number >= 1e9) {
    const result = number / 1e9;
    return result % 1 === 0 ? result + 'B' : result.toFixed(1) + 'B';
  } else if (number >= 1e6) {
    const result = number / 1e6;
    return result % 1 === 0 ? result + 'M' : result.toFixed(1) + 'M';
  } else if (number >= 1e3) {
    const result = number / 1e3;
    return result % 1 === 0 ? result + 'K' : result.toFixed(1) + 'K';
  } else {
    return number.toString();
  }
}

export const formatMoney = (num: string | number, precision: number = 8) => {
  const amount = roundNumber(+num, precision);
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 8
  }).format(amount).replace(/(\.\d*[1-9])0+$|\.0*$/, '$1');
}

export const roundNumber = (num: number, precision: number = 8) => {
  const factor = Math.pow(10, precision);
  num = Math.round(num * factor) / factor;

  // remove zeros decimal
  return +num.toFixed(precision);
}

export function formatNumber(number: number): string {
  if (number >= 1000000) {
    return `${(number / 1000000).toFixed(1)}M`;
  } else if (number >= 1000) {
    return `${(number / 1000).toFixed(1)}K`;
  } else {
    return number.toString();
  }
}
