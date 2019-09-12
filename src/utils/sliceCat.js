const sliceCat = text => {
  let result = text
  const target = [
    'নিত্যদিনের জাভাস্ক্রিপ্টঃ',
    'জাভাস্ক্রিপ্টঃ',
    'জাভাস্ক্রিপ্ট অ্যাডভান্সঃ',
    'জাভাস্ক্রিপ্ট ইএস ৬(ES6):',
    'জাভাস্ক্রিপ্ট ডম ম্যানিপুলেশনঃ',
    'নিত্যদিনের জাভাস্ক্রিপ্টঃ',
    'জাভাস্ক্রিপ্ট অ্যালগরিদম ও ডাটা স্ট্রাকচারঃ',
  ]
  const hasThisTitle = target.some(item => String(text).includes(item))
  if (hasThisTitle) {
    result = String(result).split(/[:|ঃ]/)[1]
  }
  return result
}

export { sliceCat }
