import React from 'react'
import {fireEvent, render, screen, waitFor} from '@testing-library/react-native'

import App from '@App'
import {Loader, ErrorBox, Row} from '@Components'

test('render Loader component', () => {
  const {getByTestId} = render(<Loader />)

  const element = getByTestId('loader')

  expect(element).toBeTruthy()
})

test('render ErrorBox component', () => {
  const {getByTestId} = render(<ErrorBox />)

  const element = getByTestId('errorBox')

  expect(element).toBeTruthy()
})

test('render Row component', () => {
  const {getByTestId} = render(<Row title="test" value="test" />)

  const element = getByTestId('row')

  expect(element).toBeTruthy()
})

test('renders Pokemon List Screen', async () => {
  render(<App />)

  waitFor(() => {
    const element = screen.getByText('bulbasaur')

    expect(element).toBeTruthy()
  })
})

test('renders Pokemon Detail Screen', async () => {
  render(<App />)

  await waitFor(() => {
    // Find the button that triggers navigation
    const buttonElement = screen.getByTestId('bulbasaur-touch')

    // Fire a press event on the button
    fireEvent.press(buttonElement)
  })

  await waitFor(() => {
    const element = screen.getByText('bulbasaur')

    expect(element).toBeTruthy()
  })
})
