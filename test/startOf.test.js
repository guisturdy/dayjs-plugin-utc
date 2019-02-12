import dayjs from 'dayjs'
import utcPlugin from '../src'

dayjs.extend(utcPlugin)

test('start of / end of', () => {
  const a = dayjs.utc('2019-01-03T21:30:00.000Z')

  expect(a.clone().startOf('day').toISOString()).toBe('2019-01-03T00:00:00.000Z')
  expect(a.clone().endOf('day').toISOString()).toBe('2019-01-03T23:59:59.999Z')
})
