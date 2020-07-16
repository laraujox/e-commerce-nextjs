import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Main from '.'

describe('<Main />', () => {
  it('Should render Main heading', () => {
    render(<Main />)
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })
})
