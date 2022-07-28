import { replace } from 'lodash';
import numeral from 'numeral';

// ----------------------------------------------------------------------

export function fCurrency(target: number) {
  return numeral(target).format(Number.isInteger(target) ? '$0,0' : '$0,0.00');
}

export function fPercent(target: number) {
  return numeral(target / 100).format('0.0%');
}

export function fNumber(target: string) {
  return numeral(target).format();
}

export function fShortenNumber(target: number) {
  return replace(numeral(target).format('0.00a'), '.00', '');
}

export function fData(target: number) {
  return numeral(target).format('0.0 b');
}
