// 100 => 100
// 1000 => 1k
// 10500 => 10.5k
// 100000 => 100k
// 1000000 => 1m
// 1200000 => 1.2m
// 10000000 => 10m

export const formatStats = (value: string): string => {
  const num = Number(value);
  if (num < 1000) {
    return value;
  }
  if (num >= 1000 && num < 100000) {
    return `${(num / 1000).toFixed(1)}k`;
  }
  if (num >= 100000 && num < 1000000) {
    return `${(num / 1000).toFixed(0)}k`;
  }
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}m`;
  }
  return value;
};
