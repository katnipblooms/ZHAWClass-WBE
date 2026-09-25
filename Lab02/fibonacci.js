const fibonacci = (n) =>
{
    const G = (1 + Math.sqrt(5)) / 2;
    return Math.round(Math.pow(G, n) / Math.sqrt(5))
}