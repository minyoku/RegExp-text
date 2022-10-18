const str = `
010-1234-5678
mmmfox@co.kr
the lock the The dog
abbcccdddd
d
http://localhost:
`

console.log(
  str.match(/(?<=@).{1,}/g)
)