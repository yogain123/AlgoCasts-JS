function hashPass(email: string) {
  let chunk = email.substring(0, email.length - 3);
  let hashed = email.replace(
    chunk,
    chunk
      .split("")
      .map(i => "*")
      .join("")
  );
  return hashed;
}

console.log(hashPass("yogendrasaxena56@gmail.com")); // ***********************com
