import Application from './application'

describe(Application.name, () => {
  it('Must return 0', () => {
    const app = new Application()
    expect(app.run()).toBe(0)
  })
})
