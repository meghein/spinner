const spinner = () => {
  let delay = 0;
  const spinnerSymbol = ['|   ', '/   ', '-   ', '\\    ', '|   ','\n'];
  for (const symbol of spinnerSymbol) {
    delay += 100;
    setTimeout(() => {
      process.stdout.write(`\r${symbol}`);
    }, delay);
  }
};

spinner();
