export function formatValue(value: number): string {
  return `R$ ${value
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}`;
}
