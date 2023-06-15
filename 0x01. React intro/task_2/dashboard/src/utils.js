export const getFullYear = () => new Date().getFullYear()

export const getFooterCopy = (isIndex) =>
  isIndex ? 'Phantware School' : 'Phantware School main dashboard'

export const getLatestNotification = () => {
  return '<strong>Urgent requirement</strong> - complete by EOD'
}
