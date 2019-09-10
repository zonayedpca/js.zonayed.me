const translation = {
  basic: 'জাভাস্ক্রিপ্ট ব্যাসিক',
  advance: 'জাভাস্ক্রিপ্ট অ্যাডভান্স',
  es6: 'জাভাস্ক্রিপ্ট ইএস৬',
  dom: 'জাভাস্ক্রিপ্ট ডম ম্যানিপুলেশন',
  daily: 'নিত্যদিনের জাভাস্ক্রিপ্ট',
  algods: 'জাভাস্ক্রিপ্ট অ্যালগরিদম ও ডাটা স্ট্রাকচার',
  soft: 'জাভাস্ক্রিপ্ট সফট স্কিল',
}

export const topicTranslation = topic => {
  const result = topic.replace('/', '')
  return translation[result]
}
