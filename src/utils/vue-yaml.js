module.exports = source => {
  return ` const ret = JSON.stringify(${source})
  export default ret
  `
}
