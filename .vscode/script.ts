function run(value: any): void {
  if (typeof value === 'string')
    console.log(value.toUpperCase());
}

run('Alex')