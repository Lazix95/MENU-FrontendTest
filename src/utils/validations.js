
// This function 'code' from Currency form input.
export const validateCode = (code, currencies = []) => {
  let $return = {
    message: '',
    status: null
  }
  if (typeof code !== 'string' || !currencies) return $return
  const isUnique = !currencies.some(el => el.iso.toLowerCase() == code.toLowerCase())
  switch (code.length) {
    case (0):
      $return.status = false
      $return.message = 'Required'
      break
    case (3):
      if (!isUnique) {
        $return.status = false
        $return.message = 'Already exists'
      } else {
        $return.status = true
      }
      break
    default:
      $return.status = false
      $return.message = 'Currency code shuld have exactly THREE characters'
  }
  return $return
}

// This function valdates 'symbol' from Currency form input.
export const validateSymbol = (symbol) => {
  let $return = {
    message: '',
    status: null
  }

  if (typeof symbol !== 'string') return $return

  switch (symbol.length) {
    case (0):
      $return.status = false
      $return.message = 'Required'
      break
    default:
      $return.status = true
  }

  return $return
}