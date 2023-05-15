const observer = {
  next: (val: any) => console.log('nexr: ', val),
  error: (err: any) => console.log('error: ', err),
  complete: () => console.log('complete'),
};
